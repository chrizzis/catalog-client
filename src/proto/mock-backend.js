import axios from 'axios'
import { Role } from "@/helpers";

const mocks = {}

export function addMock(url, responseData, requestBody) {
  console.log(`addMock: ${url}, with body: ${JSON.stringify(requestBody)}, will respond: ${JSON.stringify(responseData)}`)
  const mockParams = {
    requestBody,
    responseData
  }
  let urlMock = mocks[url];
  if (urlMock) {
    urlMock.push(mockParams)
  } else {
    mocks[url] = [mockParams]
  }
}

const isApiCallMocked = (url, data) => {
  const urlMock = mocks[url]
  if (!urlMock) {
    return false
  }
  return urlMock.some(mockCall => {
    return JSON.stringify(data) === JSON.stringify(mockCall.requestBody)
  })
}

const getApiCallMock = (url, data) => {
  const urlMock = mocks[url]
  if (!urlMock) {
    return null
  }
  let mockResponse = null;
  urlMock.forEach(mockCall => {
    if (JSON.stringify(data) === JSON.stringify(mockCall.requestBody)) {
      mockResponse = mockCall.responseData
    }
  })
  return mockResponse
}

const getMockError = config => {
  const mockData = getApiCallMock(config.url, config.data)
  const mockError = new Error()
  mockError.mockData = mockData
  mockError.config = config
  return Promise.reject(mockError)
}

const isMockError = error => Boolean(error.mockData)

const getMockResponse = mockError => {
  const { mockData, config } = mockError
  // Handle mocked error (any non-2xx status code)
  if (mockData.status && String(mockData.status)[0] !== '2') {
    const err = new Error(mockData.message || 'mock error')
    err.code = mockData.status
    return Promise.reject(err)
  }
  return Promise.resolve({
    data: mockData,
    status: 200,
    statusText: 'OK',
    headers: {},
    config,
    isMock: true
  })
}

// Add a request interceptor
axios.interceptors.request.use(config => {
  if (isApiCallMocked(config.url, config.data)) {
    console.log(`axios mock found for ${config.url} with data: ${JSON.stringify(config.data)}`)
    return getMockError(config)
  }
  return config
}, error => Promise.reject(error))

// Add a response interceptor
axios.interceptors.response.use(response => response, error => {
  if (isMockError(error)) {
    console.log(`axios mocking response: ${JSON.stringify(error.mockData)}`)
    return getMockResponse(error)
  }
  return Promise.reject(error)
})

export const addMockAxiosEndpoints = () => {
  console.log(`addMockAxiosEndpoints: adding mock endpoints`)
  addMock(`${process.env.VUE_APP_API_URL}/auth/login`,
    {
      user: { role: Role.User, firstname: 'mock' },
      token: 'jwt-token'
    },
    { username: 'mock', password: 'mock' });
  addMock(`${process.env.VUE_APP_API_URL}/auth/login`,
    { status: 404, message: 'whoops' },
    { username: 'no', password: 'no' });
}
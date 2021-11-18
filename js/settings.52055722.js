(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["settings"],{"210b":function(e,n,t){},"26d3":function(e,n,t){"use strict";t.r(n);var a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("v-expansion-panels",{attrs:{accordion:""}},[t("v-expansion-panel",[t("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",[e._v(" mdi-cog ")])]},proxy:!0}])},[e._v(" Settings ")]),t("v-expansion-panel-content",[t("ul",[t("li",[e._v("sort order: "+e._s(e.sortOrder))]),t("li",[e._v("search keys: "+e._s(e.searchKeys))]),t("li",[e._v("show metadata: "+e._s(e.showMetadata))])]),t("v-btn",{on:{click:e.resetSettings}},[e._v("reset settings")])],1)],1),t("v-expansion-panel",[t("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",[e._v(" mdi-palette ")])]},proxy:!0}])},[e._v(" Theme ")]),t("v-expansion-panel-content",[t("v-checkbox",{staticClass:"pt-3",attrs:{"off-icon":"mdi-theme-light-dark","on-icon":"mdi-theme-light-dark"},model:{value:e.$vuetify.theme.dark,callback:function(n){e.$set(e.$vuetify.theme,"dark",n)},expression:"$vuetify.theme.dark"}}),e._v(" themes to choose from and a reset button ")],1)],1),t("v-expansion-panel",[t("v-expansion-panel-header",{scopedSlots:e._u([{key:"actions",fn:function(){return[t("v-icon",[e._v(" mdi-information-outline ")])]},proxy:!0}])},[e._v(" Catalog ")]),t("v-expansion-panel-content",[t("v-btn",{on:{click:function(n){return n.stopPropagation(),e.copyToClipboard.apply(null,arguments)}}},[e._v("copy to clipboard")]),t("input",{attrs:{type:"hidden",id:"raw-export-data"},domProps:{value:e.getExportData}})],1)],1)],1)],1)},s=[],i=t("f3f3"),o=t("2f62"),r={components:{},data:function(){return{}},props:{},mounted:function(){},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["getPrefs","getExportData"])),{},{sortOrder:function(){return console.log("settings:sortOrder"),this.getPrefs.sortOrder?"123":"abc"},searchKeys:function(){return this.getPrefs.searchKeys},showMetadata:function(){return this.getPrefs.showMetadata?"yes":"no"}}),watch:{},methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])(["resetPrefs"])),{},{resetSettings:function(){this.resetPrefs()},copyToClipboard:function(){var e=document.querySelector("#raw-export-data");e.setAttribute("type","text"),e.select();try{var n=document.execCommand("copy"),t=n?"successful":"unsuccessful";alert("raw catalog was copied "+t)}catch(a){alert("Oops, unable to copy")}e.setAttribute("type","hidden"),window.getSelection().removeAllRanges()}})},c=r,l=t("2877"),p=t("6544"),d=t.n(p),u=t("8336"),h=t("ac7c"),v=t("a523"),x=t("4e82"),f=t("3206"),b=t("80d2"),m=t("58df"),g=Object(m["a"])(Object(x["a"])("expansionPanels","v-expansion-panel","v-expansion-panels"),Object(f["b"])("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return Object(i["a"])({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},Object(b["n"])(this))}}),y=t("0789"),O=t("9d65"),w=t("a9ad"),k=Object(m["a"])(O["a"],w["a"],Object(f["a"])("expansionPanel","v-expansion-panel-content","v-expansion-panel")),P=k.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,n){var t=this;e&&(this.isBooted=!0),null==n?this.isActive=e:this.$nextTick((function(){return t.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var n=this;return e(y["a"],this.showLazyContent((function(){return[e("div",n.setBackgroundColor(n.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:n.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},Object(b["n"])(n))])]})))}}),j=t("9d26"),_=t("5607"),A=Object(m["a"])(w["a"],Object(f["a"])("expansionPanel","v-expansion-panel-header","v-expansion-panel")),C=A.extend().extend({name:"v-expansion-panel-header",directives:{ripple:_["a"]},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=Object(b["n"])(this,"actions")||[this.$createElement(j["a"],this.expandIcon)];return this.$createElement(y["c"],[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var n=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:Object(i["a"])(Object(i["a"])({},this.$listeners),{},{click:this.onClick,mousedown:function(){return n.hasMousedown=!0},mouseup:function(){return n.hasMousedown=!1}})}),[Object(b["n"])(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}}),B=(t("0481"),t("210b"),t("604c")),$=t("d9bd"),I=B["a"].extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({},B["a"].options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&Object($["a"])("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&Object($["a"])(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,n){var t=this.getValue(e,n),a=this.getValue(e,n+1);e.isActive=this.toggleMethod(t),e.nextIsActive=this.toggleMethod(a)}}}),D=t("132d"),E=Object(l["a"])(c,a,s,!1,null,null,null);n["default"]=E.exports;d()(E,{VBtn:u["a"],VCheckbox:h["a"],VContainer:v["a"],VExpansionPanel:g,VExpansionPanelContent:P,VExpansionPanelHeader:C,VExpansionPanels:I,VIcon:D["a"]})}}]);
//# sourceMappingURL=settings.52055722.js.map
import{d as i,o as a,e as s,j as e,t,q as m,F as c,v as p}from"./vue.esm-bundler-BlwabLn1.js";import{_ as f}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _={class:"tokens-grid"},k={key:0},g={key:0},u=i({__name:"TokensGrid",props:{tokens:{},hasRemValue:{type:Boolean},column1Name:{default:"Name"},column2Name:{default:"Value"}},setup(h){return(n,N)=>(a(),s("table",_,[e("thead",null,[e("tr",null,[e("th",null,t(n.column1Name),1),e("th",null,t(n.column2Name),1),n.hasRemValue?(a(),s("th",k,"Pixels")):m("",!0)])]),e("tbody",null,[(a(!0),s(c,null,p(Object.entries(n.tokens),([r,o],d)=>{var l;return a(),s("tr",{key:r+d},[e("td",null,t(r),1),e("td",null,t(o),1),n.hasRemValue?(a(),s("td",g,t(Number((l=String(o))==null?void 0:l.replace("rem",""))*16)+"px ",1)):m("",!0)])}),128))])]))}}),b=f(u,[["__scopeId","data-v-4687e481"]]);u.__docgenInfo={exportName:"default",displayName:"TokensGrid",description:"",tags:{},props:[{name:"tokens",required:!0,type:{name:"Record",elements:[{name:"string"},{name:"union",elements:[{name:"string"},{name:"number"}]}]}},{name:"hasRemValue",required:!1,type:{name:"boolean"}},{name:"column1Name",required:!1,type:{name:"string"},defaultValue:{func:!1,value:'"Name"'}},{name:"column2Name",required:!0,type:{name:"string"},defaultValue:{func:!1,value:'"Value"'}}],sourceFiles:["/home/runner/work/design-system-02/design-system-02/packages/vue/src/docs/components/TokensGrid.vue"]};export{b as T};

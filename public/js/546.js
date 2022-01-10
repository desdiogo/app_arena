"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[546],{3744:(e,t)=>{t.Z=(e,t)=>{const o=e.__vccOpts||e;for(const[e,n]of t)o[e]=n;return o}},3206:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r={class:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"},s={class:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"};const l={},a=(0,o(3744).Z)(l,[["render",function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("div",r,[(0,n.createElementVNode)("div",null,[(0,n.renderSlot)(e.$slots,"logo")]),(0,n.createElementVNode)("div",s,[(0,n.renderSlot)(e.$slots,"default")])])}]])},9450:(e,t,o)=>{o.d(t,{Z:()=>a});var n=o(821),r=(0,n.createElementVNode)("svg",{class:"w-16 h-16",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,n.createElementVNode)("path",{d:"M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z",fill:"#6875F5"}),(0,n.createElementVNode)("path",{d:"M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z",fill:"#6875F5"})],-1);var s=o(9038);const l=(0,n.defineComponent)({components:{Link:s.rU}});const a=(0,o(3744).Z)(l,[["render",function(e,t,o,s,l,a){var c=(0,n.resolveComponent)("Link");return(0,n.openBlock)(),(0,n.createBlock)(c,{href:"/"},{default:(0,n.withCtx)((function(){return[r]})),_:1})}]])},7020:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["type"];const s=(0,n.defineComponent)({props:{type:{type:String,default:"submit"}}});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("button",{type:e.type,class:"inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},[(0,n.renderSlot)(e.$slots,"default")],8,r)}]])},7292:(e,t,o)=>{o.d(t,{Z:()=>l});var n=o(821),r=["value"];const s=(0,n.defineComponent)({props:["modelValue"],emits:["update:modelValue"],methods:{focus:function(){this.$refs.input.focus()}}});const l=(0,o(3744).Z)(s,[["render",function(e,t,o,s,l,a){return(0,n.openBlock)(),(0,n.createElementBlock)("input",{class:"border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm",value:e.modelValue,onInput:t[0]||(t[0]=function(t){return e.$emit("update:modelValue",t.target.value)}),ref:"input"},null,40,r)}]])},6138:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(821),r={class:"block font-medium text-sm text-gray-700"},s={key:0},l={key:1};const a=(0,n.defineComponent)({props:["value"]});const c=(0,o(3744).Z)(a,[["render",function(e,t,o,a,c,i){return(0,n.openBlock)(),(0,n.createElementBlock)("label",r,[e.value?((0,n.openBlock)(),(0,n.createElementBlock)("span",s,(0,n.toDisplayString)(e.value),1)):((0,n.openBlock)(),(0,n.createElementBlock)("span",l,[(0,n.renderSlot)(e.$slots,"default")]))])}]])},8535:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(821),r={key:0},s=(0,n.createElementVNode)("div",{class:"font-medium text-red-600"},"Whoops! Something went wrong.",-1),l={class:"mt-3 list-disc list-inside text-sm text-red-600"};const a=(0,n.defineComponent)({computed:{errors:function(){return this.$page.props.errors},hasErrors:function(){return Object.keys(this.errors).length>0}}});const c=(0,o(3744).Z)(a,[["render",function(e,t,o,a,c,i){return e.hasErrors?((0,n.openBlock)(),(0,n.createElementBlock)("div",r,[s,(0,n.createElementVNode)("ul",l,[((0,n.openBlock)(!0),(0,n.createElementBlock)(n.Fragment,null,(0,n.renderList)(e.errors,(function(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("li",{key:t},(0,n.toDisplayString)(e),1)})),128))])])):(0,n.createCommentVNode)("",!0)}]])},5546:(e,t,o)=>{o.r(t),o.d(t,{default:()=>v});var n=o(821),r=(0,n.createElementVNode)("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),s={class:"flex justify-end mt-4"},l=(0,n.createTextVNode)(" Confirm ");var a=o(9038),c=o(3206),i=o(9450),d=o(7020),u=o(7292),m=o(6138),p=o(8535);const f=(0,n.defineComponent)({components:{Head:a.Fb,JetAuthenticationCard:c.Z,JetAuthenticationCardLogo:i.Z,JetButton:d.Z,JetInput:u.Z,JetLabel:m.Z,JetValidationErrors:p.Z},data:function(){return{form:this.$inertia.form({password:""})}},methods:{submit:function(){var e=this;this.form.post(this.route("password.confirm"),{onFinish:function(){return e.form.reset()}})}}});const v=(0,o(3744).Z)(f,[["render",function(e,t,o,a,c,i){var d=(0,n.resolveComponent)("Head"),u=(0,n.resolveComponent)("jet-authentication-card-logo"),m=(0,n.resolveComponent)("jet-validation-errors"),p=(0,n.resolveComponent)("jet-label"),f=(0,n.resolveComponent)("jet-input"),v=(0,n.resolveComponent)("jet-button"),g=(0,n.resolveComponent)("jet-authentication-card");return(0,n.openBlock)(),(0,n.createElementBlock)(n.Fragment,null,[(0,n.createVNode)(d,{title:"Secure Area"}),(0,n.createVNode)(g,null,{logo:(0,n.withCtx)((function(){return[(0,n.createVNode)(u)]})),default:(0,n.withCtx)((function(){return[r,(0,n.createVNode)(m,{class:"mb-4"}),(0,n.createElementVNode)("form",{onSubmit:t[1]||(t[1]=(0,n.withModifiers)((function(){return e.submit&&e.submit.apply(e,arguments)}),["prevent"]))},[(0,n.createElementVNode)("div",null,[(0,n.createVNode)(p,{for:"password",value:"Password"}),(0,n.createVNode)(f,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.form.password=t}),required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"])]),(0,n.createElementVNode)("div",s,[(0,n.createVNode)(v,{class:(0,n.normalizeClass)(["ml-4",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:(0,n.withCtx)((function(){return[l]})),_:1},8,["class","disabled"])])],32)]})),_:1})],64)}]])}}]);
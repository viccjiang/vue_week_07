import{M as g}from"./modal-0c177450.js";import{_ as f,o as d,b as a,d as o,f as M,t as r,K as c,L as m,M as k,r as b,F as x,D as P,e as C,h as D}from"./index-bc2a4ac7.js";import{P as A}from"./PaginationComponent-289334bb.js";import"./base-component-33b2387b.js";import"./component-functions-583322e1.js";const V={props:{coupon:{type:Object,default(){return{}}}},data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new g(this.$refs.delCouponModal)}},N={id:"delOrderModal",ref:"delCouponModal",class:"modal fade",tabindex:"-1","aria-labelledby":"delOrderModalLabel","aria-hidden":"true"},T={class:"modal-dialog"},E={class:"modal-content border-0"},U=o("div",{class:"modal-header bg-danger text-white"},[o("h5",{id:"delOrderModalLabel",class:"modal-title"},[o("span",null,"刪除訂單")]),o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),L={class:"modal-body"},O={class:"text-danger"},B={class:"modal-footer"},I=o("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function R(n,e,l,u,t,i){return d(),a("div",N,[o("div",T,[o("div",E,[U,o("div",L,[M(" 是否刪除 "),o("strong",O,r(l.coupon.title),1),M(" 優惠券(刪除後將無法恢復)。 ")]),o("div",B,[I,o("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=s=>n.$emit("delCoupon"))}," 確認刪除 ")])])])],512)}const S=f(V,[["render",R]]),j={props:{coupon:{type:Object,default(){return{}}},isNew:{type:Boolean,default:!1}},data(){return{modal:"",tempCoupon:{},due_date:""}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new g(this.$refs.modal)},watch:{coupon(){this.tempCoupon=this.coupon;const n=new Date(this.tempCoupon.due_date*1e3).toISOString().split("T");[this.due_date]=n},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}}},F={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},H={class:"modal-dialog",role:"document"},q={class:"modal-content"},K={class:"modal-header"},z={class:"modal-title",id:"exampleModalLabel"},G={key:0},J={key:1},Q=o("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),W={class:"modal-body"},X={class:"mb-3"},Y=o("label",{for:"title"},"標題",-1),Z={class:"mb-3"},oo=o("label",{for:"coupon_code"},"優惠碼",-1),eo={class:"mb-3"},to=o("label",{for:"due_date"},"到期日",-1),no={class:"mb-3"},so=o("label",{for:"price"},"折扣百分比",-1),lo={class:"mb-3"},ao={class:"form-check"},io=o("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),po={class:"modal-footer"},uo=o("button",{type:"button",class:"btn btn-outline-primary","data-bs-dismiss":"modal"},"關閉",-1);function co(n,e,l,u,t,i){return d(),a("div",F,[o("div",H,[o("div",q,[o("div",K,[o("h5",z,[l.isNew?(d(),a("span",G,"新增優惠卷")):(d(),a("span",J,"編輯優惠卷"))]),Q]),o("div",W,[o("div",X,[Y,c(o("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=s=>t.tempCoupon.title=s),placeholder:"請輸入標題"},null,512),[[m,t.tempCoupon.title]])]),o("div",Z,[oo,c(o("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=s=>t.tempCoupon.code=s),placeholder:"請輸入優惠碼"},null,512),[[m,t.tempCoupon.code]])]),o("div",eo,[to,c(o("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=s=>t.due_date=s)},null,512),[[m,t.due_date]])]),o("div",no,[so,c(o("input",{type:"number",class:"form-control",id:"price",min:"0","onUpdate:modelValue":e[3]||(e[3]=s=>t.tempCoupon.percent=s),placeholder:"請輸入折扣百分比"},null,512),[[m,t.tempCoupon.percent,void 0,{number:!0}]])]),o("div",lo,[o("div",ao,[c(o("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=s=>t.tempCoupon.is_enabled=s),id:"is_enabled"},null,512),[[k,t.tempCoupon.is_enabled]]),io])])]),o("div",po,[uo,o("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=s=>n.$emit("update-coupon",t.tempCoupon))},r(l.isNew?"新增優惠卷":"更新優惠券"),1)])])])],512)}const ro=f(j,[["render",co]]),{VITE_APP_URL:_,VITE_APP_PATH:h}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},mo={data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isNew:!1,pagination:{}}},components:{AdminCouponModal:ro,AdminCouponDelModal:S,Pagination:A},methods:{getCoupons(){this.$http(`${_}api/${h}/admin/coupons`).then(n=>{const{coupons:e,pagination:l}=n.data;this.coupons=e,this.pagination=l})},openCouponModal(n,e){this.isNew=n,console.log(n),this.isNew?(this.tempCoupon={due_date:new Date().getTime()/1e3},console.log(this.tempCoupon)):(this.tempCoupon={...e},console.log(this.tempCoupon)),this.$refs.couponModal.showModal()},updateCoupon(n){let e=`${_}api/${h}/admin/coupon`,l="post",u=n;console.log(n),this.isNew||(e=`${_}api/${h}/admin/coupon/${this.tempCoupon.id}`,l="put",u=this.tempCoupon,console.log(u)),this.$http[l](e,{data:u}).then(t=>{t.data.success?(console.log(t),this.getCoupons(),this.$refs.couponModal.hideModal()):console.log("資料不完整")}).catch(t=>{console.dir(t.response)})},openCouponDelModal(n){this.tempCoupon={...n},this.$refs.delCouponModal.showModal()},delCoupon(){this.$http.delete(`${_}api/${h}/admin/coupon/${this.tempCoupon.id}`).then(n=>{console.log(n),this.$refs.delCouponModal.hideModal(),this.getCoupons()})}},mounted(){this.getCoupons()}},_o={class:"text-end mt-4"},ho={class:"table mt-4"},bo=o("thead",null,[o("tr",null,[o("th",null,"名稱"),o("th",null,"折扣百分比"),o("th",null,"到期日"),o("th",null,"是否啟用"),o("th",null,"編輯")])],-1),Co={key:0,class:"text-success"},fo={key:1,class:"text-muted"},Mo=["onClick"],go=o("i",{class:"bi bi-pencil-square"},null,-1),$o=[go],vo=["onClick"],yo=o("i",{class:"bi bi-trash3-fill"},null,-1),wo=[yo];function ko(n,e,l,u,t,i){const s=b("Pagination"),$=b("AdminCouponModal"),v=b("AdminCouponDelModal");return d(),a("div",null,[o("div",_o,[o("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=p=>i.openCouponModal(!0))}," 建立新的優惠券 ")]),o("table",ho,[bo,o("tbody",null,[(d(!0),a(x,null,P(t.coupons,(p,y)=>(d(),a("tr",{key:y},[o("td",null,r(p.title),1),o("td",null,r(p.percent)+"%",1),o("td",null,r(p.due_date),1),o("td",null,[p.is_enabled===1?(d(),a("span",Co,"啟用")):p.is_enabled===0?(d(),a("span",fo,"未啟用")):D("",!0)]),o("td",null,[o("button",{class:"btn btn-outline-primary btn-sm me-1 mb-1",onClick:w=>i.openCouponModal(!1,p)},$o,8,Mo),o("button",{class:"btn btn-outline-danger btn-sm me-1 mb-1",onClick:w=>i.openCouponDelModal(p)},wo,8,vo)])]))),128))])]),C(s,{pages:t.pagination,onEmitPages:i.getCoupons},null,8,["pages","onEmitPages"]),C($,{ref:"couponModal",coupon:t.tempCoupon,"is-new":t.isNew,onUpdateCoupon:i.updateCoupon},null,8,["coupon","is-new","onUpdateCoupon"]),C(v,{ref:"delCouponModal",coupon:t.tempCoupon,onDelCoupon:i.delCoupon},null,8,["coupon","onDelCoupon"])])}const No=f(mo,[["render",ko]]);export{No as default};

import{U as v}from"./UserCartStepComponent-164a11f2.js";import{_ as x,r as c,o as g,b as w,e as o,d as e,w as f,F as V,j as y,E as n,G as T,J as U}from"./index-72e555f3.js";const{VITE_APP_URL:p,VITE_APP_PATH:u}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},j={data(){return{form:{user:{name:"",email:"",tel:"",address:"",shipping:""},message:""},orders:[]}},components:{UserCartStepComponent:v},methods:{getCarts(){this.$http.get(`${p}v2/api/${u}/cart`).then(a=>{console.log("購物車:",a.data),this.cart=a.data.data})},getOrders(){const a=`${p}api/${u}/orders`;this.$http.get(a).then(s=>{console.log(s.data.orders),this.orders=s.data.orders})},createOrder(){const a=`${p}api/${u}/order`,s=this.form;this.$http.post(a,{data:s}).then(d=>{console.log(d),d.data.success&&(this.$router.push(`/order_payment/${d.data.orderId}`),this.$refs.form.resetForm()),this.getCarts()}).catch(d=>{alert(d.data.message)})}},mounted(){this.getCarts()}},C={class:"bg-light pt-5 pb-7"},E={class:"container"},P={class:"row justify-content-center flex-column flex-md-row"},k=y('<div class="col-md-5 sticky-lg-top position-lg-sticky h-50"><div class="border p-4 mb-4"><h4 class="mb-4">訂單明細</h4><div class="d-flex"><img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1916&amp;q=80" alt="" class="me-2" style="width:48px;height:48px;object-fit:cover;"><div class="w-100"><div class="d-flex justify-content-between fw-bold"><p class="mb-0">Lorem ipsum</p><p class="mb-0">x10</p></div><div class="d-flex justify-content-between"><p class="text-muted mb-0"><small>NT$12,000</small></p><p class="mb-0">NT$12,000</p></div></div></div><div class="d-flex mt-2"><img src="https://images.unsplash.com/photo-1502743780242-f10d2ce370f3?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1916&amp;q=80" alt="" class="me-2" style="width:48px;height:48px;object-fit:cover;"><div class="w-100"><div class="d-flex justify-content-between fw-bold"><p class="mb-0">Lorem ipsum</p><p class="mb-0">x10</p></div><div class="d-flex justify-content-between"><p class="text-muted mb-0"><small>NT$12,000</small></p><p class="mb-0">NT$12,000</p></div></div></div><table class="table mt-4 border-top border-bottom text-muted"><tbody><tr><th scope="row" class="border-0 px-0 pt-4 font-weight-normal">Subtotal</th><td class="text-end border-0 px-0 pt-4">NT$24,000</td></tr><tr><th scope="row" class="border-0 px-0 pt-0 pb-4 font-weight-normal">Payment</th><td class="text-end border-0 px-0 pt-0 pb-4">ApplePay</td></tr></tbody></table><div class="d-flex justify-content-between mt-4"><p class="mb-0 h4 fw-bold">Total</p><p class="mb-0 h4 fw-bold">NT$24,000</p></div></div></div>',1),A={class:"col-md-7"},N={class:"row justify-content-center p-4"},$=e("h4",{class:"mb-4"},"填寫訂購資訊",-1),S={class:"mb-3 mt-2"},q=e("label",{for:"email",class:"form-label"},"Email",-1),F={class:"mb-3"},O=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),B={class:"mb-3"},D=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),M={class:"mb-3"},I=e("label",{for:"address",class:"form-label"},"收件人地址",-1),L={class:"mb-3"},H=e("label",{for:"address",class:"form-label"},"交易方式",-1),R=e("option",{value:""},"請選擇交易方式",-1),J=e("option",{value:"ATM"},"ATM",-1),Q=e("option",{value:"匯款"},"匯款",-1),W=e("option",{value:"信用卡"},"信用卡",-1),z={class:"mb-3"},G=e("label",{for:"message",class:"form-label"},"留言",-1),K=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-danger"},"送出訂單")],-1);function X(a,s,d,Y,t,b){const h=c("UserCartStepComponent"),i=c("FieldView"),r=c("error-message"),_=c("FormView");return g(),w(V,null,[o(h),e("div",null,[e("div",C,[e("div",E,[e("div",P,[k,e("div",A,[e("div",N,[$,o(_,{ref:"form",class:"border",onSubmit:b.createOrder},{default:f(({errors:m})=>[e("div",S,[q,o(i,{id:"email",name:"email",type:"email",class:n(["form-control",{"is-invalid":m.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:t.form.user.email,"onUpdate:modelValue":s[0]||(s[0]=l=>t.form.user.email=l)},null,8,["class","modelValue"]),o(r,{name:"email",class:"invalid-feedback"})]),e("div",F,[O,o(i,{id:"name",name:"姓名",type:"text",class:n(["form-control",{"is-invalid":m.姓名}]),rules:"required",modelValue:t.form.user.name,"onUpdate:modelValue":s[1]||(s[1]=l=>t.form.user.name=l),placeholder:"請輸入姓名"},null,8,["class","modelValue"]),o(r,{name:"姓名",class:"invalid-feedback"})]),e("div",B,[D,o(i,{id:"tel",name:"電話",type:"text",class:n(["form-control",{"is-invalid":m.電話}]),rules:"required|min:8|max:10",modelValue:t.form.user.tel,"onUpdate:modelValue":s[2]||(s[2]=l=>t.form.user.tel=l),placeholder:"請輸入電話"},null,8,["class","modelValue"]),o(r,{name:"電話",class:"invalid-feedback"})]),e("div",M,[I,o(i,{id:"address",name:"地址",type:"text",class:n(["form-control",{"is-invalid":m.地址}]),rules:"required",modelValue:t.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=l=>t.form.user.address=l),placeholder:"請輸入地址"},null,8,["class","modelValue"]),o(r,{name:"地址",class:"invalid-feedback"})]),e("div",L,[H,o(i,{id:"name",name:"交易方式",class:n(["form-select",{"is-invalid":m.交易方式}]),placeholder:"請輸入交易方式",rules:"required",modelValue:t.form.user.shipping,"onUpdate:modelValue":s[4]||(s[4]=l=>t.form.user.shipping=l),as:"select"},{default:f(()=>[R,J,Q,W]),_:2},1032,["class","modelValue"]),o(r,{name:"交易方式",class:"invalid-feedback"})]),e("div",z,[G,T(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"10","onUpdate:modelValue":s[5]||(s[5]=l=>t.form.user.message=l)},null,512),[[U,t.form.user.message]])]),K]),_:1},8,["onSubmit"])])])])])])])],64)}const se=x(j,[["render",X]]);export{se as default};

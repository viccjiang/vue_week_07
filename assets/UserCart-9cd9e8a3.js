import{c as _}from"./UserCartStore-bae5cd12.js";import{_ as k,m as y,a as I,r as p,o as a,b as n,e as h,d as t,h as c,F as r,D as m,t as d,w as g,I as P,g as C,G as x,H as U,f as v,p as A,i as D}from"./index-72e555f3.js";import{U as S}from"./UserCartStepComponent-164a11f2.js";const{VITE_APP_URL:V,VITE_APP_PATH:$}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},w={data(){return{products:[]}},components:{UserCartStepComponent:S},methods:{getProducts(){this.$http.get(`${V}api/${$}/products/all`).then(e=>{console.log("產品列表:",e.data.products),this.products=e.data.products})},getProduct(e){this.$router.push(`/product/${e}`)},...y(_,["addToCart","getCarts","updateCartItem","deleteItem","deleteAllItem","createOrder","getOrders"])},computed:{...I(_,["cartData","cartsLength"])},mounted(){this.getProducts(),this.getCarts()}},l=e=>(A("data-v-1ad6bd3c"),e=e(),D(),e),E={key:0,class:"container"},L={class:"text-start"},T={class:"table align-middle"},B=l(()=>t("thead",null,[t("tr",null,[t("th"),t("th",null,"品名"),t("th",{style:{width:"100px"}},"數量/單位"),t("th",{class:"text-end"},"單價"),t("th")])],-1)),N=["onClick"],O=["src"],R={class:"input-group input-group-sm"},j=["onUpdate:modelValue","onChange"],H=["value"],M={class:"text-end"},q={class:"text-end"},F=["onClick"],G=l(()=>t("i",{class:"bi bi-trash3 text-danger"},null,-1)),z=[G],J=l(()=>t("td",{colspan:"3",class:"text-end"},"總計",-1)),K={class:"text-end"},Q=l(()=>t("td",null,null,-1)),W=l(()=>t("td",{colspan:"3",class:"text-end text-success"},"折扣價",-1)),X={class:"text-end text-success"},Y=l(()=>t("td",null,null,-1)),Z={class:"container"},tt={class:"row"},et={class:"d-flex justify-content-between"};function st(e,u,ot,at,nt,f){const b=p("UserCartStepComponent"),i=p("router-link");return a(),n(r,null,[h(b),e.cartsLength>0?(a(),n("div",E,[t("div",L,[e.cartsLength>0?(a(),n("button",{key:0,class:"btn btn-outline-danger",type:"button",onClick:u[0]||(u[0]=(...s)=>e.deleteAllItem&&e.deleteAllItem(...s))},"清空購物車")):c("",!0)]),t("table",T,[B,t("tbody",null,[e.cartData.carts?(a(!0),n(r,{key:0},m(e.cartData.carts,s=>(a(),n("tr",{key:s.id},[t("td",null,[t("a",{href:"#",onClick:C(o=>f.getProduct(s.product.id),["prevent"])},[t("img",{src:s.product.imageUrl,alt:"",class:"object-fit d-none d-md-block rounded-4",style:{width:"100px",height:"100px"}},null,8,O)],8,N)]),t("td",null,d(s.product.title)+" ",1),t("td",null,[t("div",R,[x(t("select",{name:"",id:"",class:"form-select","onUpdate:modelValue":o=>s.qty=o,onChange:o=>e.updateCartItem(s)},[(a(),n(r,null,m(20,o=>t("option",{value:o,key:o+"1234578"},d(o),9,H)),64))],40,j),[[U,s.qty]])]),t("p",null,d(s.product.unit),1)]),t("td",M,d(s.total),1),t("td",q,[t("a",{href:"",onClick:C(o=>e.deleteItem(s.id),["prevent"])},z,8,F)])]))),128)):c("",!0)]),t("tfoot",null,[t("tr",null,[J,t("td",K,d(e.cartData.total),1),Q]),t("tr",null,[W,t("td",X,d(e.cartData.final_total),1),Y])])])])):c("",!0),t("div",Z,[t("div",tt,[t("div",et,[h(i,{to:"/products",class:"btn btn-outline-primary px-5"},{default:g(()=>[v("繼續選購")]),_:1}),e.cartsLength>0?(a(),P(i,{key:0,to:"/checkout",class:"btn btn-danger px-5"},{default:g(()=>[v("下一步 ")]),_:1})):c("",!0)])])])],64)}const rt=k(w,[["render",st],["__scopeId","data-v-1ad6bd3c"]]);export{rt as default};
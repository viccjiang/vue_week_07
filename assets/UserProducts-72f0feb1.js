import{c as p}from"./UserCartStore-1324c930.js";import{_ as f,m as x,a as y,r as m,o as e,b as o,d as a,F as u,D as P,e as v,j as _,t as d,f as i,w as k,h as w,p as E,i as j}from"./index-bc2a4ac7.js";import{P as T}from"./PaginationComponent-289334bb.js";const{VITE_APP_URL:I,VITE_APP_PATH:B}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},C={components:{PaginationComponent:T},data(){return{products:[],product:{},pagination:{},status:{loadingItem:""}}},methods:{getProducts(s=1){this.$http.get(`${I}api/${B}/products?page=${s}`).then(c=>{window.scrollTo(0,0);const{products:r,pagination:l}=c.data;this.products=r,this.pagination=l,console.log(this.products,this.pagination)})},...x(p,["getCarts","addToCart"])},computed:{...y(p,["cartData","cartsLength"])},mounted(){this.getProducts()}},N=s=>(E("data-v-8672a721"),s=s(),j(),s),S=_('<div class="container-fluid g-0" data-v-8672a721><div class="card border-0 rounded-0 bg-dark text-white mb-5" data-v-8672a721><div class="filters" style="height:200px;background-image:url(https://storage.googleapis.com/vue-course-api.appspot.com/jiangs2023/1677550181847.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&amp;Expires=1742169600&amp;Signature=qQpOKJlmAipjojZQ7imN6J6MiWWuxRYaXwXr6MdPijbdIRTjWFssPopTl5JN%2FjlUul1ccEWNcVdj2qhABmca1qXPqK9FnT1jz92lk4l7rOonpF8%2F7lVw8i%2BDI3KhGnoYIBBfmyQyRsPKI%2B8mHHakw9uegGVuY%2BXfxGLcBuYGsxhNU9UTy1fj4%2Fc07ANvqKpCrE66j9O2KJE%2B5VlGoCK8pKmBlmMjyLUXNSmESrPdR9696BuSHjvmYXdBWtAC6ODZLqXHs7P7vskYx3e23oggxpMBveQQCm8u3tqgCu6kjOE7EYtYucOEmah6Nsbuw6pUMfIhrj5xbebroqyayFKz8g%3D%3D);background-size:cover;background-position:center center;background-attachment:fixed;" data-v-8672a721></div><div class="card-img-overlay d-flex flex-column justify-content-center align-item-center" data-v-8672a721><h1 class="fs-3 card-title text-center fw-bold" data-v-8672a721><p class="fs-m fw-bold mb-2" data-v-8672a721>所有甜點</p><p class="logoText fs-sm p-0 m-0" data-v-8672a721>SOME SWEET <span class="fs-xs fw-lighter" data-v-8672a721>/am</span></p></h1></div></div></div>',1),V={class:"container mt-md-5 mt-3 mb-7"},A={class:"row"},O=_('<div class="col-md-3" data-v-8672a721><div class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3" id="accordionExample" data-v-8672a721><div class="card border-0" data-v-8672a721><div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-start-0 border-end-0 rounded-0" id="headingOne" data-bs-toggle="collapse" data-bs-target="#collapseOne" data-v-8672a721><div class="d-flex justify-content-between align-items-center pe-1" data-v-8672a721><h4 class="mb-0" data-v-8672a721> 產品類別 </h4><i class="bi bi-chevron-down" data-v-8672a721></i></div></div><div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample" data-v-8672a721><div class="card-body py-0" data-v-8672a721><ul class="list-unstyled" data-v-8672a721><li data-v-8672a721><a href="#" class="py-2 d-block text-muted" data-v-8672a721>法式經典</a></li><li data-v-8672a721><a href="#" class="py-2 d-block text-muted" data-v-8672a721>常溫點心</a></li><li data-v-8672a721><a href="#" class="py-2 d-block text-muted" data-v-8672a721>發酵麵包</a></li><li data-v-8672a721><a href="#" class="py-2 d-block text-muted" data-v-8672a721>派皮系列</a></li><li data-v-8672a721><a href="#" class="py-2 d-block text-muted" data-v-8672a721>巧克力糖</a></li></ul></div></div></div></div></div>',1),D={class:"col-md-9"},U={class:"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4"},F={class:"product card h-100 p-5 rounded-4 products-img"},K=["src","alt"],q={class:"card-body d-flex flex-column"},L={class:"fs-6 fw-bold card-title mb-6"},R={class:"d-flex mt-auto"},Y={class:"text-muted fs-xs me-auto"},$={class:"card-text mb-0"},M=N(()=>a("span",{class:"fs-xs d-flex align-items-end ms-1"},"NTD",-1)),X={class:"text-center border-0"},G=["disabled","onClick"],H={key:0,class:"spinner-border text-light spinner-border-sm",role:"status"};function W(s,c,r,l,n,g){const h=m("router-link"),b=m("PaginationComponent");return e(),o(u,null,[S,a("div",V,[a("div",A,[O,a("div",D,[a("div",U,[(e(!0),o(u,null,P(n.products,t=>(e(),o("div",{class:"col-md-4",key:t.id},[a("div",F,[a("img",{src:t.imageUrl,class:"card-img-top object-fit rounded-4",alt:t.title},null,8,K),a("div",q,[a("h5",L,d(t.title),1),a("div",R,[a("span",Y,[a("del",null,"NT$"+d(t.origin_price),1)]),a("p",$,"$"+d(t.price),1),i(),M]),a("small",X,[v(h,{class:"text-dark d-block",to:`/product/${t.id}`},{default:k(()=>[i("查 看 細 節")]),_:2},1032,["to"])])]),a("button",{type:"buttom",class:"btn btn-primary mt-5",disabled:this.status.loadingItem===t.id,onClick:()=>s.addToCart(t.id)},[this.status.loadingItem===t.id?(e(),o("div",H)):w("",!0),i(" 加入購物車 ")],8,G)])]))),128))]),v(b,{class:"mt-5 mb-5 float-end",pages:n.pagination,onEmitPages:g.getProducts},null,8,["pages","onEmitPages"])])])])],64)}const Z=f(C,[["render",W],["__scopeId","data-v-8672a721"]]);export{Z as default};

import{p as yt}from"./PaginationComponent-22b4ee46.js";import{a as G,e as wt,r as W,c as I,d as Y,b as lt,f as Tt}from"./selector-engine-8f1af728.js";import{_ as Q,o as P,c as y,a as t,B as k,D as C,F as at,t as rt,E as Dt,d as et,u as U,r as q,b as j,v as kt}from"./index-54c08924.js";var z={},Ct={get exports(){return z},set exports(i){z=i}},B={},Nt={get exports(){return B},set exports(i){B=i}};/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var st;function Mt(){return st||(st=1,function(i,e){(function(n,l){i.exports=l(G(),wt(),W())})(I,function(n,l,s){const u=E=>E&&typeof E=="object"&&"default"in E?E:{default:E},o=u(n),p=u(l),_=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",m=".sticky-top",f="padding-right",c="margin-right";class w{constructor(){this._element=document.body}getWidth(){const h=document.documentElement.clientWidth;return Math.abs(window.innerWidth-h)}hide(){const h=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,f,r=>r+h),this._setElementAttributes(_,f,r=>r+h),this._setElementAttributes(m,c,r=>r-h)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,f),this._resetElementAttributes(_,f),this._resetElementAttributes(m,c)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(h,r,a){const A=this.getWidth(),N=g=>{if(g!==this._element&&window.innerWidth>g.clientWidth+A)return;this._saveInitialAttribute(g,r);const D=window.getComputedStyle(g).getPropertyValue(r);g.style.setProperty(r,`${a(Number.parseFloat(D))}px`)};this._applyManipulationCallback(h,N)}_saveInitialAttribute(h,r){const a=h.style.getPropertyValue(r);a&&p.default.setDataAttribute(h,r,a)}_resetElementAttributes(h,r){const a=A=>{const N=p.default.getDataAttribute(A,r);if(N===null){A.style.removeProperty(r);return}p.default.removeDataAttribute(A,r),A.style.setProperty(r,N)};this._applyManipulationCallback(h,a)}_applyManipulationCallback(h,r){if(s.isElement(h)){r(h);return}for(const a of o.default.find(h,this._element))r(a)}}return w})}(Nt)),B}var F={},St={get exports(){return F},set exports(i){F=i}};/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var ot;function Vt(){return ot||(ot=1,function(i,e){(function(n,l){i.exports=l(Y(),W(),lt())})(I,function(n,l,s){const u=r=>r&&typeof r=="object"&&"default"in r?r:{default:r},o=u(n),p=u(s),_="backdrop",m="fade",f="show",c=`mousedown.bs.${_}`,w={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},E={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class h extends p.default{constructor(a){super(),this._config=this._getConfig(a),this._isAppended=!1,this._element=null}static get Default(){return w}static get DefaultType(){return E}static get NAME(){return _}show(a){if(!this._config.isVisible){l.execute(a);return}this._append();const A=this._getElement();this._config.isAnimated&&l.reflow(A),A.classList.add(f),this._emulateAnimation(()=>{l.execute(a)})}hide(a){if(!this._config.isVisible){l.execute(a);return}this._getElement().classList.remove(f),this._emulateAnimation(()=>{this.dispose(),l.execute(a)})}dispose(){this._isAppended&&(o.default.off(this._element,c),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const a=document.createElement("div");a.className=this._config.className,this._config.isAnimated&&a.classList.add(m),this._element=a}return this._element}_configAfterMerge(a){return a.rootElement=l.getElement(a.rootElement),a}_append(){if(this._isAppended)return;const a=this._getElement();this._config.rootElement.append(a),o.default.on(a,c,()=>{l.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(a){l.executeAfterTransition(a,this._getElement(),this._config.isAnimated)}}return h})}(St)),F}var H={},Lt={get exports(){return H},set exports(i){H=i}};/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var it;function Ut(){return it||(it=1,function(i,e){(function(n,l){i.exports=l(Y(),G(),lt())})(I,function(n,l,s){const u=D=>D&&typeof D=="object"&&"default"in D?D:{default:D},o=u(n),p=u(l),_=u(s),m="focustrap",c=".bs.focustrap",w=`focusin${c}`,E=`keydown.tab${c}`,h="Tab",r="forward",a="backward",A={autofocus:!0,trapElement:null},N={autofocus:"boolean",trapElement:"element"};class g extends _.default{constructor(v){super(),this._config=this._getConfig(v),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return A}static get DefaultType(){return N}static get NAME(){return m}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),o.default.off(document,c),o.default.on(document,w,v=>this._handleFocusin(v)),o.default.on(document,E,v=>this._handleKeydown(v)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,o.default.off(document,c))}_handleFocusin(v){const{trapElement:V}=this._config;if(v.target===document||v.target===V||V.contains(v.target))return;const L=p.default.focusableChildren(V);L.length===0?V.focus():this._lastTabNavDirection===a?L[L.length-1].focus():L[0].focus()}_handleKeydown(v){v.key===h&&(this._lastTabNavDirection=v.shiftKey?a:r)}}return g})}(Lt)),H}var x={},$t={get exports(){return x},set exports(i){x=i}};/*!
  * Bootstrap component-functions.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */var nt;function xt(){return nt||(nt=1,function(i,e){(function(n,l){l(e,Y(),W())})(I,function(n,l,s){const o=(_=>_&&typeof _=="object"&&"default"in _?_:{default:_})(l),p=(_,m="hide")=>{const f=`click.dismiss${_.EVENT_KEY}`,c=_.NAME;o.default.on(document,f,`[data-bs-dismiss="${c}"]`,function(w){if(["A","AREA"].includes(this.tagName)&&w.preventDefault(),s.isDisabled(this))return;const E=s.getElementFromSelector(this)||this.closest(`.${c}`);_.getOrCreateInstance(E)[m]()})};n.enableDismissTrigger=p,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})}($t,x)),x}/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(i,e){(function(n,l){i.exports=l(W(),Y(),G(),Mt(),Tt(),Vt(),Ut(),xt())})(I,function(n,l,s,u,o,p,_,m){const f=S=>S&&typeof S=="object"&&"default"in S?S:{default:S},c=f(l),w=f(s),E=f(u),h=f(o),r=f(p),a=f(_),A="modal",g=".bs.modal",D=".data-api",v="Escape",V=`hide${g}`,L=`hidePrevented${g}`,J=`hidden${g}`,X=`show${g}`,ct=`shown${g}`,ut=`resize${g}`,_t=`click.dismiss${g}`,ht=`mousedown.dismiss${g}`,mt=`keydown.dismiss${g}`,pt=`click${g}${D}`,Z="modal-open",ft="fade",tt="show",K="modal-static",gt=".modal.show",bt=".modal-dialog",Et=".modal-body",vt='[data-bs-toggle="modal"]',At={backdrop:!0,focus:!0,keyboard:!0},Pt={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class M extends h.default{constructor(d,b){super(d,b),this._dialog=w.default.findOne(bt,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new E.default,this._addEventListeners()}static get Default(){return At}static get DefaultType(){return Pt}static get NAME(){return A}toggle(d){return this._isShown?this.hide():this.show(d)}show(d){this._isShown||this._isTransitioning||c.default.trigger(this._element,X,{relatedTarget:d}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(Z),this._adjustDialog(),this._backdrop.show(()=>this._showElement(d)))}hide(){!this._isShown||this._isTransitioning||c.default.trigger(this._element,V).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(tt),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const d of[window,this._dialog])c.default.off(d,g);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new r.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new a.default({trapElement:this._element})}_showElement(d){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const b=w.default.findOne(Et,this._dialog);b&&(b.scrollTop=0),n.reflow(this._element),this._element.classList.add(tt);const T=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,c.default.trigger(this._element,ct,{relatedTarget:d})};this._queueCallback(T,this._dialog,this._isAnimated())}_addEventListeners(){c.default.on(this._element,mt,d=>{if(d.key===v){if(this._config.keyboard){d.preventDefault(),this.hide();return}this._triggerBackdropTransition()}}),c.default.on(window,ut,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),c.default.on(this._element,ht,d=>{c.default.one(this._element,_t,b=>{if(!(this._element!==d.target||this._element!==b.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(Z),this._resetAdjustments(),this._scrollBar.reset(),c.default.trigger(this._element,J)})}_isAnimated(){return this._element.classList.contains(ft)}_triggerBackdropTransition(){if(c.default.trigger(this._element,L).defaultPrevented)return;const b=this._element.scrollHeight>document.documentElement.clientHeight,T=this._element.style.overflowY;T==="hidden"||this._element.classList.contains(K)||(b||(this._element.style.overflowY="hidden"),this._element.classList.add(K),this._queueCallback(()=>{this._element.classList.remove(K),this._queueCallback(()=>{this._element.style.overflowY=T},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const d=this._element.scrollHeight>document.documentElement.clientHeight,b=this._scrollBar.getWidth(),T=b>0;if(T&&!d){const $=n.isRTL()?"paddingLeft":"paddingRight";this._element.style[$]=`${b}px`}if(!T&&d){const $=n.isRTL()?"paddingRight":"paddingLeft";this._element.style[$]=`${b}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(d,b){return this.each(function(){const T=M.getOrCreateInstance(this,d);if(typeof d=="string"){if(typeof T[d]>"u")throw new TypeError(`No method named "${d}"`);T[d](b)}})}}return c.default.on(document,pt,vt,function(S){const d=n.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&S.preventDefault(),c.default.one(d,X,$=>{$.defaultPrevented||c.default.one(d,J,()=>{n.isVisible(this)&&this.focus()})});const b=w.default.findOne(gt);b&&M.getInstance(b).hide(),M.getOrCreateInstance(d).toggle(this)}),m.enableDismissTrigger(M),n.defineJQueryPlugin(M),M})})(Ct);const dt=z,{VITE_APP_URL:It,VITE_APP_PATH:Ot}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},Rt={props:["product","isNew"],data(){return{status:{},modal:{},tempProduct:{imagesUrl:[]}}},watch:{product(){this.tempProduct=this.product,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[]),this.tempProduct.imageUrl||(this.tempProduct.imageUrl="")}},methods:{uploadFile(){const i=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",i);const n=`${It}api/${Ot}/admin/upload`;this.$http.post(n,e,{headers:{"Content-Type":"multipart/form-data"}}).then(l=>{l.data.success?(this.tempProduct.imageUrl=l.data.imageUrl,this.$refs.fileInput.value="",console.log(l.data.imageUrl)):this.$refs.fileInput.value=""}).catch(l=>{console.dir(l.data.message)})},showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new dt(this.$refs.modal)}},Bt={id:"productModal",ref:"modal",class:"modal fade",tabindex:"-1","aria-labelledby":"productModalLabel","aria-hidden":"true"},Ft={class:"modal-dialog modal-xl"},Ht={class:"modal-content border-0"},Wt={class:"modal-header bg-dark text-white"},Yt={id:"productModalLabel",class:"modal-title"},Kt={key:0},qt={key:1},jt=t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),zt={class:"modal-body"},Gt={class:"row mb-3"},Qt={class:"col-sm-4"},Jt={class:"form-group mb-3"},Xt=t("label",{for:"imageUrl",class:"form-label"},"主要圖片",-1),Zt=["src"],te={class:"mb-3"},ee=t("label",{for:"customFile",class:"form-label"},"或上傳圖片 ",-1),se={key:0},oe={class:"form-group"},ie=["for"],ne=["id","onUpdate:modelValue"],le=["src"],ae={key:0},re={key:1},de={key:1},ce={class:"col-sm-8"},ue={class:"form-group mb-3"},_e=t("label",{for:"title",class:"form-label"},"標題",-1),he={class:"row mb-3"},me={class:"form-group col-md-6"},pe=t("label",{for:"category",class:"form-label"},"分類",-1),fe={class:"form-group col-md-6"},ge=t("label",{for:"price",class:"form-label"},"單位",-1),be={class:"row mb-3"},Ee={class:"form-group col-md-6"},ve=t("label",{for:"origin_price",class:"form-label"},"原價",-1),Ae={class:"form-group col-md-6"},Pe=t("label",{for:"price",class:"form-label"},"售價",-1),ye=t("hr",null,null,-1),we={class:"form-group mb-3"},Te=t("label",{for:"description",class:"form-label"},"產品描述",-1),De={class:"form-group mb-3"},ke=t("label",{for:"content",class:"form-label"},"說明內容",-1),Ce={class:"form-group mb-3"},Ne={class:"form-check"},Me=t("label",{class:"form-check-label",for:"is_enabled"},"是否啟用",-1),Se={class:"modal-footer"},Ve=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Le(i,e,n,l,s,u){return P(),y("div",Bt,[t("div",Ft,[t("div",Ht,[t("div",Wt,[t("h5",Yt,[n.isNew?(P(),y("span",Kt,"新增產品")):(P(),y("span",qt,"編輯產品"))]),jt]),t("div",zt,[t("div",Gt,[t("div",Qt,[t("div",Jt,[Xt,k(t("input",{"onUpdate:modelValue":e[0]||(e[0]=o=>s.tempProduct.imageUrl=o),type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,512),[[C,s.tempProduct.imageUrl]]),t("img",{class:"img-fluid",src:s.tempProduct.imageUrl},null,8,Zt)]),t("div",te,[ee,t("input",{type:"file",id:"customFile",class:"form-control",ref:"fileInput",onChange:e[1]||(e[1]=(...o)=>u.uploadFile&&u.uploadFile(...o))},null,544)]),Array.isArray(s.tempProduct.imagesUrl)?(P(),y("div",se,[(P(!0),y(at,null,rt(n.product.imagesUrl,(o,p)=>(P(),y("div",{class:"mb-1",key:p},[t("div",oe,[t("label",{for:s.tempProduct.imagesUrl[p],class:"form-label"},"圖片網址",8,ie),k(t("input",{id:s.tempProduct.imagesUrl[p],"onUpdate:modelValue":_=>s.tempProduct.imagesUrl[p]=_,type:"text",class:"form-control",placeholder:"請輸入圖片連結"},null,8,ne),[[C,s.tempProduct.imagesUrl[p]]])]),t("img",{class:"img-fluid",src:o},null,8,le)]))),128)),!n.product.imagesUrl.length||n.product.imagesUrl[n.product.imagesUrl.length-1]?(P(),y("div",ae,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[2]||(e[2]=o=>s.tempProduct.imagesUrl.push(""))}," 新增圖片 ")])):(P(),y("div",re,[t("button",{class:"btn btn-outline-danger btn-sm d-block w-100",onClick:e[3]||(e[3]=o=>s.tempProduct.imagesUrl.pop())}," 刪除圖片 ")]))])):(P(),y("div",de,[t("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=o=>i.$emit("createImages"))}," 新增圖片 ")]))]),t("div",ce,[t("div",ue,[_e,k(t("input",{id:"title","onUpdate:modelValue":e[5]||(e[5]=o=>s.tempProduct.title=o),type:"text",class:"form-control",placeholder:"請輸入標題"},null,512),[[C,s.tempProduct.title]])]),t("div",he,[t("div",me,[pe,k(t("input",{id:"category","onUpdate:modelValue":e[6]||(e[6]=o=>s.tempProduct.category=o),type:"text",class:"form-control",placeholder:"請輸入分類"},null,512),[[C,s.tempProduct.category]])]),t("div",fe,[ge,k(t("input",{id:"unit","onUpdate:modelValue":e[7]||(e[7]=o=>s.tempProduct.unit=o),type:"text",class:"form-control",placeholder:"請輸入單位"},null,512),[[C,s.tempProduct.unit]])])]),t("div",be,[t("div",Ee,[ve,k(t("input",{id:"origin_price","onUpdate:modelValue":e[8]||(e[8]=o=>s.tempProduct.origin_price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入原價"},null,512),[[C,s.tempProduct.origin_price,void 0,{number:!0}]])]),t("div",Ae,[Pe,k(t("input",{id:"price","onUpdate:modelValue":e[9]||(e[9]=o=>s.tempProduct.price=o),type:"number",min:"0",class:"form-control",placeholder:"請輸入售價"},null,512),[[C,s.tempProduct.price,void 0,{number:!0}]])])]),ye,t("div",we,[Te,k(t("textarea",{id:"description","onUpdate:modelValue":e[10]||(e[10]=o=>s.tempProduct.description=o),type:"text",class:"form-control",placeholder:"請輸入產品描述"},`\r
                  `,512),[[C,s.tempProduct.description]])]),t("div",De,[ke,k(t("textarea",{id:"description","onUpdate:modelValue":e[11]||(e[11]=o=>s.tempProduct.content=o),type:"text",class:"form-control",placeholder:"請輸入說明內容"},`\r
                  `,512),[[C,s.tempProduct.content]])]),t("div",Ce,[t("div",Ne,[k(t("input",{id:"is_enabled","onUpdate:modelValue":e[12]||(e[12]=o=>s.tempProduct.is_enabled=o),class:"form-check-input",type:"checkbox","true-value":1,"false-value":0},null,512),[[Dt,s.tempProduct.is_enabled]]),Me])])])])]),t("div",Se,[Ve,t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=o=>i.$emit("updateProduct"))}," 確認 ")])])])],512)}const Ue=Q(Rt,[["render",Le]]),$e={props:["product"],data(){return{modal:{}}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new dt(this.$refs.delmodal)}},xe={id:"delProductModal",ref:"delmodal",class:"modal fade",tabindex:"-1","aria-labelledby":"delProductModalLabel","aria-hidden":"true"},Ie={class:"modal-dialog"},Oe={class:"modal-content border-0"},Re=t("div",{class:"modal-header bg-danger text-white"},[t("h5",{id:"delProductModalLabel",class:"modal-title"},[t("span",null,"刪除產品")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Be={class:"modal-body"},Fe={class:"text-danger"},He={class:"modal-footer"},We=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function Ye(i,e,n,l,s,u){return P(),y("div",xe,[t("div",Ie,[t("div",Oe,[Re,t("div",Be,[et(" 是否刪除 "),t("strong",Fe,U(n.product.title),1),et(" 商品(刪除後將無法恢復)。 ")]),t("div",He,[We,t("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=o=>i.$emit("delProduct"))}," 確認刪除 ")])])])],512)}const Ke=Q($e,[["render",Ye]]),{VITE_APP_URL:O,VITE_APP_PATH:R}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},qe={components:{pagination:yt,productmodal:Ue,delproductmodal:Ke},data(){return{products:[],tempProduct:{imagesUrl:[]},pagination:{},isNew:!1}},mounted(){this.getData()},methods:{getData(i=1){const e=`${O}api/${R}/admin/products?page=${i}`;this.$http.get(e).then(n=>{console.log(n);const{products:l,pagination:s}=n.data;this.products=l,this.pagination=s,console.log(this.products,this.pagination)}).catch(()=>{this.$router.push("/login")})},openModal(i,e){i==="new"?(this.tempProduct={imagesUrl:[]},this.isNew=!0,this.$refs.productModal.showModal()):i==="edit"?(this.tempProduct={...e},this.isNew=!1,this.$refs.productModal.showModal()):i==="delete"&&(this.tempProduct={...e},this.$refs.delProductModal.showModal())},updateProduct(){let i=`${O}api/${R}/admin/product`,e="post";this.isNew||(i=`${O}api/${R}/admin/product/${this.tempProduct.id}`,e="put"),this.$http[e](i,{data:this.tempProduct}).then(n=>{alert(n.data.message),this.getData(),this.$refs.productModal.hideModal()}).catch(n=>{console.dir(n)})},delProduct(){this.$http.delete(`${O}api/${R}/admin/product/${this.tempProduct.id}`).then(i=>{this.getData(),this.$refs.delProductModal.hideModal()}).catch(i=>{alert(i.data.message)})},createImages(){this.tempProduct.imagesUrl=[],this.tempProduct.imagesUrl.push("")}}},je=t("p",null,"後台產品頁面",-1),ze={class:"container"},Ge={class:"text-end mt-4"},Qe={class:"table mt-4"},Je=t("thead",null,[t("tr",null,[t("th",{width:"120"}," 分類 "),t("th",null,"產品名稱"),t("th",{width:"120"}," 原價 "),t("th",{width:"120"}," 售價 "),t("th",{width:"100"}," 是否啟用 "),t("th",{width:"120"}," 編輯 ")])],-1),Xe={class:"text-end"},Ze={class:"text-end"},ts={class:"btn-group"},es=["onClick"],ss=["onClick"];function os(i,e,n,l,s,u){const o=q("pagination"),p=q("productmodal"),_=q("delproductmodal");return P(),y("div",null,[je,t("div",ze,[t("div",Ge,[t("button",{class:"btn btn-primary",onClick:e[0]||(e[0]=m=>u.openModal("new"))}," 建立新的產品 ")]),t("table",Qe,[Je,t("tbody",null,[(P(!0),y(at,null,rt(s.products,m=>(P(),y("tr",{key:m.id},[t("td",null,U(m.category),1),t("td",null,U(m.title),1),t("td",Xe,U(m.origin_price),1),t("td",Ze,U(m.price),1),t("td",null,[t("span",{class:kt({"text-success":m.is_enabled})},U(m.is_enabled?"啟用":"未啟用"),3)]),t("td",null,[t("div",ts,[t("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:f=>u.openModal("edit",m)}," 編輯 ",8,es),t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:f=>u.openModal("delete",m)}," 刪除 ",8,ss)])])]))),128))])]),j(o,{pages:s.pagination,onEmitPages:u.getData},null,8,["pages","onEmitPages"])]),j(p,{ref:"productModal",product:s.tempProduct,"is-new":s.isNew,onUpdateProduct:u.updateProduct,onCreateImages:u.createImages},null,8,["product","is-new","onUpdateProduct","onCreateImages"]),j(_,{ref:"delProductModal",product:s.tempProduct,onDelProduct:u.delProduct},null,8,["product","onDelProduct"])])}const as=Q(qe,[["render",os]]);export{as as default};

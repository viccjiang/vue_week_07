import{k as n,l as e}from"./index-764b8113.js";const{VITE_APP_URL:s,VITE_APP_PATH:o}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/",VITE_APP_PATH:"jiangs2023",BASE_URL:"/vue_week_07/",MODE:"production",DEV:!1,PROD:!0},d=n("cart",{state:()=>({cartData:{},cartsLength:0,status:{loadingItem:""},orders:[]}),actions:{getCarts(){e.get(`${s}api/${o}/cart`).then(t=>{this.cartData=t.data.data,this.cartsLength=this.cartData.carts.length,console.log(this.cartData,this.cartsLength)})},addToCart(t,a=1){const r={product_id:t,qty:a};console.log(t,a),e.post(`${s}api/${o}/cart`,{data:r}).then(c=>{console.log("加入購物車",c.data),this.getCarts()})},updateCartItem(t){const a={product_id:t.product.id,qty:t.qty};e.put(`${s}api/${o}/cart/${t.id}`,{data:a}).then(r=>{console.log("更新購物車",r.data),this.getCarts()})},deleteItem(t){e.delete(`${s}api/${o}/cart/${t}`).then(a=>{console.log(a),this.getCarts()})},deleteAllItem(){e.delete(`${s}api/${o}/carts`).then(t=>{console.log(t),this.getCarts()})}}});export{d as c};
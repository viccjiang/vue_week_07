<template>
  <nav class="navbar navbar-expand-lg d-flex flex-wrap justify-content-center align-items-center">
    <!-- logo -->
    <div class="custom-class container-fluid d-flex flex-row flex-lg-column justify-content-center align-items-center">
      <RouterLink to="/">
        <a class="d-flex navbar-brand " href="#">
          <img src="../assets/Vector.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top me-3">
          <div>
            <p class="fs-sm ">清晨一點甜</p>
            <p class="fs-sm ">SomeSweet</p>
          </div>
        </a>
      </RouterLink>
    </div>
    <!-- collapse -->
    <div class="container navbarCollapse  d-flex flex-lg-row">
      <!-- 漢堡選單按鈕 -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <div class="d-flex justify-content-center align-items-center ">
          <!-- 選單列表 -->
          <ul class="navbar-nav mb-2 mb-lg-0 text-center ">
            <li class="nav-item ">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <RouterLink class="nav-link " to="/home">首頁 </RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <RouterLink class="nav-link" to="/about">關於我們</RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
              <RouterLink class="nav-link" to="/products">產品列表</RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <RouterLink class="nav-link" to="/cart">購物車</RouterLink>
            </li>
            <li class="nav-item">
              <!-- <a class="nav-link" href="#">Link</a> -->
              <RouterLink class="nav-link" to="/login">登入</RouterLink>
            </li>

          </ul>
        </div>

      </div>
    </div>

  </nav>
  <!-- icon -->
  <nav class="nav-icon">
    <div class="navbar-nav d-flex justify-content-center align-items-center">
      <!-- <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
      <ul class="nav-icon-list d-inline-flex mb-2 mb-lg-0 text-center ">
        <li class="nav-item px-2">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <RouterLink class="nav-link " to="/"><i class="bi bi-search"></i> </RouterLink>
        </li>
        <li class="nav-item px-2">
          <!-- <a class="nav-link" href="#">Link</a> -->
          <RouterLink class="nav-link" to="/favorite"><i class="bi bi-heart"></i></RouterLink>
        </li>
        <li class="nav-icon-cart nav-item px-2">
          <!-- <a class="nav-link active" aria-current="page" href="#">Home</a> -->
          <RouterLink class="nav-link" to="/cart"><i class="bi bi-cart2"></i></RouterLink>
        </li>
        <li class="nav-item px-2">
          <!-- <a class="nav-link" href="#">Link</a> -->
          <RouterLink class="nav-link" to="/login"><i class="bi bi-person-circle"></i></RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
@media (max-width: 575.98px) {

}

@media (max-width: 767.98px) {

  .custom-class {
    position: relative;
  }

  .navbarCollapse .navbar-toggler {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}

@media (max-width: 991.98px) {
  .custom-class {
    position: relative;
  }

  .navbarCollapse .navbar-toggler {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>

<script setup>
// import { getCategoryAPI } from "@/apis/layout";
// import { onMounted } from "vue";

// const getCategory = async () => {
//   const res = await getCategoryAPI();
//   console.log(res);
// };

// onMounted(() => {
//   getCategory();
// });
</script>

<template>
  <header class="app-header">
    <div class="container">
      <!-- Logo -->
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>

      <!-- 导航 -->
      <ul class="app-header-nav">
        <li class="home">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <!-- </li class="home" v-for="item in categoryList">
          <RouterLink to="/">{{ item.name }}</RouterLink>
        </li>   -->
        <li>
          <RouterLink to="/">居家</RouterLink>
        </li>
        <li>
          <RouterLink to="/">美食</RouterLink>
        </li>
        <li>
          <RouterLink to="/">服饰</RouterLink>
        </li>
      </ul>

      <!-- 搜索框 -->
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜" />
      </div>

      <!-- 购物车 -->
      <div class="cart">
        <!-- <RouterLink class="curr" to="/cart"> -->
        <i class="iconfont icon-cart"></i>
        <em>2</em>
        <!-- </RouterLink> -->
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.app-header {
  overflow: hidden; /* 清除内部浮动 */
}
.app-header {
  background: #fff;
  border-bottom: 1px solid #eee;
  font-size: 14px;
  color: #333;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 150px;
    // width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
  }

  /* logo */
  .logo {
    width: 200px;
    a {
      display: block;
      height: 60px;
      width: 100%;
      text-indent: -9999px;
      background: url("@/assets/images/logo.png") no-repeat center center /
        contain;
    }
  }

  /* 导航 */
  .app-header-nav {
    display: flex;
    gap: 30px;
    flex: 1;
    margin-left: 40px;

    li {
      a {
        color: #333;
        font-size: 16px;
        padding: 5px 0;
        transition: color 0.2s ease;

        &:hover {
          color: $xtxColor; // 用你的主题绿色
        }
      }
    }
  }

  /* 搜索框 */
  .search {
    width: 220px;
    height: 36px;
    position: relative;
    border: 1px solid #e5e5e5;
    border-radius: 18px;
    padding: 0 10px;
    display: flex;
    align-items: center;

    .icon-search {
      font-size: 18px;
      color: #999;
    }

    input {
      flex: 1;
      border: none;
      outline: none;
      padding-left: 8px;
      font-size: 14px;
      color: #666;

      &::placeholder {
        color: #aaa;
      }
    }
  }

  /* 购物车 */
  .cart {
    margin-left: 20px;

    .curr {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 36px;
      width: 36px;
      border-radius: 50%;
      background: #f8f8f8;

      .icon-cart {
        font-size: 22px;
        color: #666;
      }

      em {
        position: absolute;
        top: -4px;
        right: -4px;
        padding: 2px 6px;
        font-size: 12px;
        background: $helpColor; // 红色
        color: #fff;
        border-radius: 10px;
        font-style: normal;
        font-family: Arial;
      }
    }
  }
}
</style>

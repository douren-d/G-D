<template>
  <div class="home_container">
    <!-- 页头 -->
    <header class="header">
      <top-menu></top-menu>
    </header>

    <!-- 内容主题 -->
    <section class="section">
      <!-- 主页 -->
      <section class="main">
        <!-- 登录模块 -->
        <div class="login">
          <Login></Login>
        </div>
      </section>
      <!-- 主页 -->
    </section>
    <!-- 内容主题 -->
  </div>
</template>

<script>
import Login from "../views/Login";
import topMenu from "../components/Header";
export default {
  name: "home",
  components: {
    topMenu,
    Login
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
$home_width: 1920px;
$home_height: 1259px;
$header_height: 44px;
input,
button {
  outline: none;
}
.home_container {
  width: 100%;
  height: $home_height;
  min-height: 640px;
  overflow: hidden;
}
.header {
  width: 100%;
  height: 44px;
}
.section {
  position: relative;
  width: 100%;
  height: calc(100% - 44px);

  .main {
    position: relative;
    width: 100%;
    height: 100%;
    background: url("~@/assets/images/home/bg-day1.png") no-repeat;
    background-size: 100% 100%;

    .login {
      position: absolute !important;
      top: 50% !important;
      left: 50%;
      width: 845px;
      height: 180px;
      transform: translate(-50%, -70%) !important;
    }
  }
}
</style>

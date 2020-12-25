<template>
  <div class="login" id="login" v-show="visible">
    <!-- 主标题 -->
    <article id="title" class="title" v-if="noLogin">
      <h1>惠州学院网上办事服务大厅</h1>
      <h4>Welcom To HUIZHOU University</h4>
      <button v-if="!isLogin" @click="loginFormVisible">
        登录 Login
      </button>
      <span v-if="isLogin">欢迎您，豆仁</span>
    </article>
    <!-- 登录表单 -->
    <div id="login-model" class="login-model" v-if="!noLogin">
      <h4>账号登陆</h4>
      <form class="login-form">
        <label>用户名</label>
        <input v-model="loginInfo.username" /> <br />
        <label>密码</label>
        <input v-model="loginInfo.password" /> <br />
        <el-checkbox label="记住密码" name="remembered"></el-checkbox>
        <button @click="login">登录</button>
        <span @click="forgot">?忘记密码</span>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginInfo: {},
      visible: true,
      isLogin: false,
      noLogin: true
    };
  },
  computed: {
    listenVisible() {
      return this.$store.state.visible;
    }
  },
  methods: {
    loginFormVisible() {
      const login = document.getElementById("login");
      login.style.height = "250px";
      login.style.width = "400px";
      this.noLogin = false;
    },
    login() {
      //登陆成功
      this.isLogin = true;
      this.noLogin = true;
      this.visible = false;
      const login = document.getElementById("login");
      login.style.height = "180px";
      login.style.width = "845px";
      this.visible = true;
    },
    forgot() {}
  },
  created() {},
  watch: {
    listenVisible(newVal) {
      this.visible = newVal;
    }
  }
};
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  width: 100%;
  transition: all 0.4s;
}
.title {
  height: 100%;
  width: 100%;

  h1 {
    color: #fff;
    padding: 10px 0;
    font-size: 32px;
    letter-spacing: 20px;
    text-align: center;
  }
  h4 {
    margin-bottom: 40px;
    color: #fff;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 20px;
    text-align: center;
  }
  button {
    height: 40px;
    width: 240px;
    margin-left: 50%;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    transform: translateX(-50%);
    background-color: rgba($color: #000, $alpha: 0.3);
  }
  button:hover {
    cursor: pointer;
    background-color: rgba($color: skyblue, $alpha: 0.7);
  }
}
.login-model {
  height: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
  overflow: hidden;
  background-color: rgba(#000, 0.3);
  h4 {
    margin-top: 10px;
  }
  .login-form {
    width: 280px;
    height: 100%;
    margin: 10px auto 0;
    text-align: left;

    label {
      display: inline-block;
      width: 50px;
      text-align: right;
    }
    input {
      height: 24px;
      font-size: 16px;
      line-height: 24px;
      margin: 0 0 20px 5px;
      background-color: rgba(#e4e4e4, 0.2);
    }
    .el-checkbox {
      width: 80px;
      font-size: 14px;
      text-align: left;
    }
    button {
      display: block;
      width: 80%;
      height: 30px;
      margin: 15px auto;
      color: #fff;
      background-color: skyblue;
    }
    button:hover {
      cursor: pointer;
    }
    span {
      font-size: 14px;
    }
    span:hover {
      cursor: pointer;
    }
  }
}
</style>

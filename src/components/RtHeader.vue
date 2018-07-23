<template>
  <div class="rt-header">
    <div class="title" v-on:click="routerToIndex">
      <img src="static/images/white_logo.png" class="title-img">
      <span class="title-name">丨</span>
      <span class="title-name">锐泰应用开发平台</span>
    </div>
    <div class="logining">
      <div v-if="isLogin" class="islogin">
        <span class="username">用户名</span>
        <span>丨</span>
        <span class="quit">退出</span>
      </div>
      <div v-if="!isLogin" class="isnotlogin">
        <span class="regsiter" v-on:click="accountRegsiter">注册</span>
        <span>丨</span>
        <span class="login" v-on:click="AccountLogin">登录</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "RtHeader",
  data() {
    return {
      isLogin: false
    };
  },
  methods: {
    routerToIndex() {
      this.$router.push({ name: "index" });
    },
    accountRegsiter() {
      //注册
      this.$router.push({ name: "accountRegsiter", params: { id: "1" } });
      this.$store.state.app.showHeader = false;
    },
    AccountLogin() {
      //TODO
      $("#appModal").modal();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rt-header {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  padding: 0 20px;
  color: #ffffff;
  background-color: #337ab7;
}
.title {
  float: left;
  height: 100%;
  user-select: none;
}
.title-img {
  display: inline-block;
  height: 24px;
  cursor: pointer;
}
.title-name {
  font-size: 18px;
  font-weight: 900;
  line-height: 50px;
  display: inline-block;
  height: 100%;
  cursor: pointer;
  vertical-align: middle;
}
.logining {
  line-height: 50px;
  float: right;
  user-select: none;
  height: 100%;
}

.logining .regsiter,
.logining .login,
.logining .username,
.logining .quit {
  cursor: pointer;
}
</style>

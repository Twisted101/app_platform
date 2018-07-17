<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" class="form-control" value="测试bootstrasp样式">
    <span class="glyphicon glyphicon-text-size" aria-hidden="true"></span>
    <div></div>
  </div>
</template>

<script>
$(function(){
  console.log('123')
})
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "路由页面"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

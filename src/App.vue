<template>
  <div id="app">
    <div class="title">微清单</div>
    <div class="g-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  background-color: #F8F8F8;
  margin: 0;
}

.title {
  height: 45px;
  line-height: 45px;
  background-color: #0EBF5A;
  color: white;font-size: 20px;
  text-indent: 50px;
  position: fixed;
  z-index: 100;
  top: 0;
  width: 100%;
}
.g-content {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-top: 45px;
}
</style>

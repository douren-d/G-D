<template>
  <div class="layout">
    <header class="header">
      <top></top>
    </header>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import top from "@/components/Header";
export default {
  name: "layout",
  components: {
    top
  },
  created() {
    console.log(this.$router.options);
  }
};
</script>

<style lang="scss" scoped>
.layout {
  height: 1080px;
  width: 100%;
  .header {
    width: 100%;
    height: 48px;
  }
  .container {
    width: 100%;
    height: calc(100% - 48px);
    background-color: #e4e4e4;
  }
}
</style>

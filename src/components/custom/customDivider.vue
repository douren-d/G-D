<template>
  <div class="custom-container">
    <el-input v-model="text"></el-input>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  name: "customDivider",
  data() {
    return {
      text: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-container {
  height: 100%;
  width: 100%;
}
</style>

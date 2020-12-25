<template>
  <div class="custom-container">
    <el-input v-model="resume.text" type="text" class="custom-input" />
  </div>
</template>

<script>
export default {
  name: "customText",
  data() {
    return {
      resume: {}
    };
  }
};
</script>

<style lang="scss" scoped>
.custom-container {
  height: 100%;
  width: 100%;
  .custom-input {
    display: block;
    height: 100%;
    width: 100%;
    font-size: 1.1em;
    line-height: 100%;
  }
}
</style>

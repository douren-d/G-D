<template>
  <div class="extension-container">
    <el-tabs type="border-card">
      <el-tab-pane label="教育经历">教育经历</el-tab-pane>
      <el-tab-pane label="学生活动">学生活动</el-tab-pane>
      <el-tab-pane label="校级及以上奖励">校级及以上奖励</el-tab-pane>
      <el-tab-pane label="语言能力">语言能力</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "extension"
};
</script>

<style lang="scss" scoped>
.extension-container {
  width: 100%;
  height: 100%;
  margin: 15px;
}
</style>

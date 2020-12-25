<template>
  <div class="resume-container">
    <aside class="aside" id="aside">
      <ul @click="select" id="tabs">
        <li :class="{ active: isActive }" data-index="onlineGeneration">
          在线编辑
        </li>
        <li :class="{ active: !isActive }" data-index="autoGeneration">
          自动生成
        </li>
      </ul>
    </aside>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "resume",
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    select(e) {
      const url = e.target.dataset.index;
      if (this.isActive == (url == "onlineGeneration")) {
        return;
      }
      this.isActive = !this.isActive;
      const tabs = document.getElementById("tabs");
      this.isOnline = !this.isOnline;
      tabs.style.top = this.isOnline ? "60%" : "50%";
      this.$router.push("/service/resume/" + url);
    }
  }
};
</script>

<style lang="scss" scoped>
.resume-container {
  display: flex;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  background-color: #fff;

  .aside {
    position: relative;
    height: 100%;
    width: 18%;
    border-right: 1px solid rgba(#e4e4e4, 0.5);

    ul {
      position: absolute;
      top: 65%;
      right: 0;
      transform: translateY(-50%);
      transition: top 0.3s !important;
      li {
        margin-bottom: 20px;
        height: 40px;
        line-height: 40px;
        text-align: right;
        padding: 10px;
        border-top: 1px solid #e4e4e4;
        border-bottom: 1px solid #e4e4e4;
      }
      li:hover {
        cursor: pointer;
        box-shadow: 3px 3px 5px rgba(#000, 0.3);
      }
    }
    .active {
      box-shadow: 0px 3px 5px rgba(#000, 0.3);
      background-color: #fff;
    }
  }
  .content {
    height: 100%;
    flex: 1;
  }
}
</style>

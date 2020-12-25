<template>
  <div class="user-container">
    <div class="side">
      <img src="#" alt="头像" />
      <p>豆仁</p>
      <ul @click="select">
        <li :class="{ active: isActive }" data-index="basic">基本信息</li>
        <li :class="{ active: !isActive }" data-index="extension">扩展信息</li>
      </ul>
    </div>
    <div class="table-info">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "userInfo",
  data() {
    return {
      isActive: true
    };
  },
  methods: {
    select(e) {
      const url = e.target.dataset.index;
      console.log(url);
      if (this.isActive == (url == "basic")) {
        return;
      }
      this.isActive = !this.isActive;
      console.log(this.isActive);
      this.$router.push("/service/userInfo/" + url);
    }
  },
  created() {
    console.log("userInfo.vue");
  }
};
</script>

<style lang="scss" scoped>
.user-container {
  display: flex;
  height: 100%;
  width: 70%;
  margin: 0 auto;
  background-color: #fff;

  .side {
    height: 100%;
    width: 18%;
    min-width: 200px;
    text-align: center;
    border-right: 1px solid rgba(#e4e4e4, 0.5);

    img {
      display: block;
      height: 130px;
      width: 100px;
      margin: 10px auto;
      background-color: sandybrown;
    }
    ul {
      width: 50%;
      margin-left: auto;
      text-align: left;
      li {
        padding: 10px;
      }
      li:hover {
        cursor: pointer;
        border: 1px solid #fff;
        box-shadow: 3px 3px 5px rgba(#000, 0.3);
      }
    }
    .active {
      box-shadow: 0px 3px 5px rgba(#000, 0.3);
      background-color: #fff;
    }
  }
  .table-info {
    flex: 1;
  }
}
</style>

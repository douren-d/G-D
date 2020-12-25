<template>
  <div class="resume-box">
    <div class="title">
      <h2 class="cn">个人简历</h2>
      <h2 class="en">Personal resume</h2>
    </div>
    <div class="box">
      <h2 class="tab">基本信息</h2>
      <div class="item">
        <div class="info">
          <div class="left">
            <tr>
              <td>姓名</td>
              <td>豆仁</td>
            </tr>
          </div>

          <div class="right">
            <tr>
              <td>姓名</td>
              <td>豆仁</td>
            </tr>
          </div>
        </div>
        <div class="avatar"><img src="#" alt="头像" /></div>
      </div>
    </div>
    <div class="box">
      <h2 class="tab">校园经历</h2>
      <div class="item">
        <div class="info"></div>
      </div>
    </div>
    <div class="box">
      <h2 class="tab">实习经历</h2>
      <div class="item">
        <div class="info"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "auto"
};
</script>

<style lang="scss" scoped>
.resume-box {
  height: 90%;
  width: 95%;
  margin: 25px auto 0px;
  background-color: #e4e4e4;

  .title {
    display: flex;
    height: 12%;
    overflow: hidden;
    background-color: salmon;
    .cn {
      height: 50%;
      font-size: 40px;
      margin: auto 10%;
    }
    .en {
      flex: 1;
      font-size: 20px;
      height: 50%;
      margin: auto 0;
      padding: 1% 10%;
      border-left: 2px solid #e4e4e4;
    }
  }
  .box {
    width: 100%;
    height: 25%;
    border: 1px solid black;

    .tab {
      height: 15%;
      font-size: 16px;
      padding-top: 5px;
      border-bottom: 1px solid black;
    }
    .item {
      display: flex;
      height: 80%;
      width: 100%;
      .info {
        flex: 5;
        display: flex;
        .left {
          width: 40%;
          margin: 0 auto;
        }
        .right {
          width: 40%;
          margin: 0 auto;
        }
        tr {
          display: flex;
          width: 100%;
          td:nth-child(2n + 1) {
            width: 40%;
            background-color: #fdf7f7;
          }
          td:nth-child(2n) {
            flex: 1;
            padding-left: 10px;
            border-right: 1px solid #e6eaee;
          }
        }
      }
      .avatar {
        flex: 1;
        position: relative;
        img {
          display: inline-block;
          position: absolute;
          top: 5%;
          left: 10%;
          height: 90%;
          width: 80%;
          background-color: sandybrown;
        }
      }
    }
  }
}
</style>

<template>
  <div class="table-container">
    <section class="personal">
      <h4>个人基本信息</h4>
      <div class="content">
        <table class="table">
          <tr>
            <td>登录名</td>
            <td>豆仁</td>
            <td>学号</td>
            <td>170708014131</td>
            <td>姓名</td>
            <td>林志聪</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="student">
      <h4>学籍信息</h4>
      <div class="content">
        <table class="table">
          <tr>
            <td>登录名</td>
            <td>豆仁</td>
            <td>学号</td>
            <td>170708014131</td>
            <td>姓名</td>
            <td>林志聪</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </table>
      </div>
    </section>

    <section class="teacher">
      <h4>管理教师</h4>
      <div class="content">
        <table class="table">
          <tr>
            <td>登录名</td>
            <td>豆仁</td>
            <td>学号</td>
            <td>170708014131</td>
            <td>姓名</td>
            <td>林志聪</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
          <tr>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
            <td>1</td>
            <td>2</td>
          </tr>
        </table>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "basic"
};
</script>

<style lang="scss" scoped>
.table-container {
  width: 95%;
  height: 100%;
  margin: 15px auto;
  border: 1px solid rgba(#fff, 0.5);

  section {
    margin-bottom: 40px;
  }
  h4 {
    font-size: 20px;
    line-height: 20px;
    margin: 8px 0;
    padding-left: 5px;
    border-left: 5px solid red;
  }
  .personal {
    height: 30%;
    width: 100%;
  }
  .content {
    height: calc(100% - 36px);
    margin: 5px 0;

    .table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;
      border: 1px solid #e6eaee;
      tr {
        display: flex;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        font-weight: 800;
        width: 100%;
        border: 1px solid #e6eaee;
        td:nth-child(2n + 1) {
          width: 12%;
          padding-left: 10px;
          border-right: 1px solid #e6eaee;
          background-color: #fdf7f7;
        }
        td:nth-child(2n) {
          width: 20%;
          padding-left: 10px;
          border-right: 1px solid #e6eaee;
        }
      }
    }
  }
}
</style>

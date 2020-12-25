<template>
  <div>
    <div class="header-box" id="header">
      <div class="left-side">
        <div class="logo">
          <img
            src="@/assets/images/home/logo-university-mini.png"
            alt="惠州学院"
          />
        </div>
        <span class="iconfont" :class="{ active: isActive }" @click="selected">
          &#xe646;
        </span>
        <span class="iconfont">&#xe62d;</span>
      </div>
      <div class="mid-side" id="min-side">
        <div class="search" @click="search" v-show="visible">
          <span>32个多类型服务</span>
        </div>
        <div class="search-serve" v-show="!visible">
          <div class="search-inner">
            <input type="search" placeholder="请输入服务" />
          </div>
          <button class="close-btn" @click="searchClosed">关闭搜索</button>
        </div>
      </div>

      <div class="right-side">
        <span class="login">登录</span>
      </div>

      <!-- 服务列表 start-->
      <section id="service" class="service-section" v-show="!visible">
        <aside class="recommended">
          <dl>
            <dt><h4 style="color:#fff">推荐服务</h4></dt>
            <dd><a href="#">教务系统</a></dd>
            <dd><a href="#">OA系统</a></dd>
            <dd><a href="#">阆苑在线学堂</a></dd>
            <dd><a href="#">成绩查询</a></dd>
            <dd><a href="#">教学资源网</a></dd>
            <dd><a href="#">困难补助</a></dd>
            <dd><a href="#">宿舍保修</a></dd>
            <dd><a href="#">勤工助学</a></dd>
            <dd><a href="#">采购管理</a></dd>
            <dd><a href="#">会议申请</a></dd>
          </dl>
        </aside>
        <article class="content">
          <div class="category">
            <dl>
              <dt><h4>服务类别</h4></dt>
              <dd>学生办事</dd>
              <dd>公共服务</dd>
              <dd>新闻公告</dd>
              <dd>网络服务</dd>
              <dd>教务教学</dd>
              <dd>生活服务</dd>
              <dd>公寓服务</dd>
              <dd>其他服务</dd>
              <dd>学生办事</dd>
              <dd>公共服务</dd>
              <dd>新闻公告</dd>
              <dd>网络服务</dd>
              <dd>教务教学</dd>
              <dd>生活服务</dd>
              <dd>公寓服务</dd>
              <dd>其他服务</dd>
            </dl>
          </div>

          <div class="items">
            <el-collapse v-model="activeNames" @change="handleChange">
              <el-collapse-item title="A-D(3)" name="1">
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>个人信息</span>
                  </div>
                  <div class="item-info" @click="redirect('userInfo')">
                    <h4>个人信息</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>个人信息</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>简历</span>
                  </div>
                  <div class="item-info" @click="redirect('resume')">
                    <h4>简历</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>简历</span>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="E-H(3)" name="2">
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="I-L(3)" name="3">
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="M-P(3)" name="4"></el-collapse-item>
              <el-collapse-item title="Q-T(3)" name="5">
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
              <el-collapse-item title="U-X(3)" name="6"></el-collapse-item>
              <el-collapse-item title="Y-Z(3)" name="7">
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
                <div class="item">
                  <div class="item-simple">
                    <img class="icon" src="#" alt="图标" />
                    <span>成绩查询</span>
                  </div>
                  <div class="item-info">
                    <h4>成绩查询</h4>
                    <div class="detail">
                      <img class="icon" src="#" alt="图标" />
                      <span>成绩查询</span>
                    </div>
                  </div>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </article>
      </section>
      <!-- 服务列表 end-->
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
  data() {
    return {
      activeNames: ["1", "2", "3", "4", "5", "6", "7"],
      visible: true,
      isActive: true
    };
  },
  methods: {
    search() {
      this.$store.commit("isInvisible");
      this.visible = this.$store.state.visible;
      const search = document.getElementById("min-side");
      const header = document.getElementById("header");
      header.style.backgroundColor = "#313b52";
      search.style.left = "315px";
    },
    searchClosed() {
      const search = document.getElementById("min-side");
      const header = document.getElementById("header");
      header.style.backgroundColor = "#d22e2e";
      search.style.left = "calc(50% - 100px)";
      this.$store.commit("isVisible");
      this.visible = this.$store.state.visible;
    },
    handleChange() {},
    redirect(name) {
      console.log(name);
      this.$router.push("/service/" + name);
    },
    selected() {
      if (!this.isActive) {
        this.isActive = true;
        this.$router.push("/home");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #d22e2e;
}
.left-side {
  display: flex;
  box-sizing: border-box;
  justify-content: space-around;
  width: 250px;
  height: 100%;
  .active {
    border-bottom: 2px solid#fec006;
    z-index: 1;
    box-shadow: 0px 1px 0px #fec006 inset;
  }
  .logo {
    height: 30px;
    width: 160px;
    margin: auto 0;
    img {
      height: 100%;
      width: 100%;
    }
  }
  span {
    display: block;
    height: 100%;
    width: 40px;
    text-align: center;
  }
  span:hover {
    cursor: pointer;
  }
  .iconfont {
    font-family: "iconfont";
    font-size: 20px;
    color: #eee;
    line-height: 44px;
  }
}
.mid-side {
  position: absolute;
  left: calc(50% - 100px);
  height: 100%;
  width: 300px;
  transition: left 0.4s !important;
}
.search {
  height: 30px;
  width: 200px;
  margin: 7px 0;
  background-color: #db5858;
  border-radius: 15px;
  text-align: center;
  span {
    color: #fff;
    font-size: 13px;
    line-height: 30px;
  }
  span::before {
    font-family: "iconfont";
    font-size: 16px;
    margin-right: 5px;
    font-weight: bold;
    content: "\e501";
  }
}
.search:hover {
  cursor: pointer;
}
.search-serve {
  display: flex;
  height: 30px;
  width: 100%;
  margin-top: 7px;
  font-size: 14px;
  .search-inner {
    position: relative;
    height: 100%;
    flex: 4;
    border-radius: 25px;
    background-color: #5b6575;
    input {
      display: block;
      height: 20px;
      width: 90%;
      color: #fff;
      margin: 5px auto;
      background-color: #5b6575;
      outline: none;
    }
    input::placeholder {
      color: #fff;
    }
  }
  .search-inner::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 50px;
    height: 100%;
    font-family: "iconfont";
    line-height: 30px;
    font-size: 18px;
    font-weight: bold;
    color: #fff;
    text-align: center;
    border-radius: 0 25px 25px 0;
    content: "\e501";
    background-color: skyblue;
  }
  .close-btn {
    flex: 1;
    height: 100%;
    margin-left: 5px;
    border: 1px solid #adb1ba;
    border-radius: 25px;
    font-size: 12px;
    color: #fff;
    background-color: transparent;
  }
  .close-btn:hover {
    cursor: pointer;
    background-color: skyblue;
  }
}
.right-side {
  height: 100%;
  width: 75px;
  margin-left: auto;
  span::before {
    font-family: "iconfont";
    content: "\e606";
    font-size: 17px;
    margin-right: 5px;
  }
  span {
    padding: 7px;
    line-height: 46px;
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 12px !important;
  }
}
@keyframes in {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0);
  }
}
.service-section {
  position: absolute;
  left: 0;
  top: 44px;
  display: flex;
  width: 100%;
  height: 1219px;
  z-index: 9;
  animation: in 0.5s;
  background-color: rgba(0, 0, 0, 0.5);
  .recommended {
    width: 255px;
    height: 100%;
    dl {
      margin: 0 15px;
      text-align: left;
      font-size: 14px;
      overflow: hidden;
      dt {
        margin: 25px 0;
      }
      dd {
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        a {
          display: block;
          padding: auto;
          text-decoration: none;
          text-indent: 15px;
          color: #fff;
        }
        a:hover {
          background-color: #3e4c6b;
        }
      }
    }
  }
  .content {
    flex: 1;
    height: 100%;
    margin-top: 25px;
    .category {
      height: 60px;
      font-size: 14px;
      color: #fff;
      dl dt {
        float: left;
        height: 20px;
        margin-right: 10px;
      }
      dl dd {
        float: left;
        height: 20px;
        line-height: 20px;
        padding: 0 5px;
        margin: 0 3px 4px;
        border: 1px solid #fff;
        border-radius: 20px;
      }
      dl dd:hover {
        background-color: skyblue;
        cursor: pointer;
      }
    }
    .items {
      height: calc(100% - 60px);
      .el-collapse-item {
        width: 100%;
        color: #fff;
        font-size: 15px;
        ::v-deep {
          .el-collapse-item__header {
            height: 25px;
            line-height: 25px;
            text-align: left;
            padding-left: 5px;
            outline: none;
            background-color: #242b3a;
          }
          .el-collapse-item__header:hover {
            cursor: pointer;
          }
          .el-collapse-item__content {
            display: flex;
            position: relative;
          }
        }
        .item {
          height: 70px;
          width: 200px;
          margin: 0 10px;
          transition: all 0.4s;
          .icon {
            display: inline-block;
            height: 50px;
            width: 50px;
            margin-left: 10px;
            vertical-align: middle;
            background-color: sandybrown;
          }
          .item-simple {
            width: 100%;
            height: 100%;
            span {
              padding-left: 10px;
              line-height: 70px;
            }
          }
          .item-info {
            display: none;
            height: 100%;
            width: 100%;
            color: #000;
            background-color: #fff;
          }
        }
        .item:hover {
          cursor: pointer;
          height: 100px;
          width: 220px;
          .item-simple {
            display: none;
          }
          .item-info {
            display: block;
          }
        }
      }
    }
  }
}
</style>

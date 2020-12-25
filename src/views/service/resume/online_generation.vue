<template>
  <div id="grid" class="onlin-container">
    <div class="online" @mousedown="mousedownEvent">
      <div data-index="diy-button" data-class="design">按钮</div>
      <div data-index="2">2</div>
      <div data-index="3">3</div>
    </div>
    <grid-layout
      :layout.sync="layout"
      :col-num="24"
      :row-height="10"
      :is-draggable="true"
      :is-resizable="true"
      :is-mirrored="false"
      :vertical-compact="true"
      :margin="[0, 0]"
      :use-css-transforms="true"
    >
      <grid-item
        v-for="item in layout"
        :x="item.x"
        :y="item.y"
        :w="item.w"
        :h="item.h"
        :i="item.i"
        :key="item.i"
        :class="item.className"
        @resize="resizeEvent"
        @move="moveEvent"
        @resized="resizedEvent"
        @moved="movedEvent"
      >
        <component :is="currentComponent" class="diy"></component>
      </grid-item>
    </grid-layout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from "vue-grid-layout";
import customText from "@/components/custom/customText.vue";
export default {
  name: "online",
  components: {
    GridLayout,
    GridItem,
    customText
  },
  data() {
    return {
      layout: [],
      mouseFlag: false,
      gridWidth: "",
      modelProperty: {},
      gridItemProperty: {}
    };
  },
  methods: {
    resizeEvent() {},
    moveEvent() {},
    resizedEvent(i, newH, newW, newHPx, newWPx) {
      console.log(
        "RESIZED i=" +
          i +
          ", H=" +
          newH +
          ", W=" +
          newW +
          ", H(px)=" +
          newHPx +
          ", W(px)=" +
          newWPx
      );
    },
    movedEvent() {},
    mousedownEvent(e) {
      this.mouseFlag = true;
      const parent = document.getElementById("grid");
      const model = document.createElement("input");
      this.modelProperty = {
        id: e.target.dataset.index,
        className: e.target.dataset.class
      };
      parent.appendChild(model);
      model.id = this.modelProperty.id;
      model.className = this.modelProperty.className;
    }
  },
  watch: {
    mouseFlag() {
      //如果新的块状元素属性为空
      if (Object.keys(this.modelProperty).length == 0) {
        return;
      }
      const model = document.getElementById(this.modelProperty.id);
      const aside = document.getElementById("aside");

      //监听鼠标移动，全局操作
      window.onmousemove = e => {
        if (!this.mouseFlag) {
          return;
        }
        model.style.left = e.clientX + "px";
        model.style.top = e.clientY + "px";
      };
      //鼠标松开操作，组件操作
      model.onmouseup = e => {
        const asideX = aside.offsetLeft + aside.offsetWidth;
        if (e.clientX >= asideX && e.clientY >= aside.offsetTop) {
          this.gridItemProperty = {
            x: 0,
            y: 2,
            w: 2,
            h: 2,
            i: this.modelProperty.id,
            className: this.modelProperty.className
          };
          this.layout.push(this.gridItemProperty);
        }
        this.mouseFlag = false;

        //清零
        model.remove();
        this.modelProperty = {};
      };
    }
  },
  computed: {
    currentComponent: function() {
      return "customText";
    }
  }
};
</script>

<style lang="scss" scope>
.onlin-container {
  height: 100%;
  position: relative;
  width: 100%;
  border: 1px solid black;
  background-image: -webkit-linear-gradient(top, transparent 19px, black 20px),
    -webkit-linear-gradient(left, transparent 19px, black 20px);
  background-size: 20px 20px;
  background-repeat: repeat;
}
.online {
  display: grid;
  position: absolute;
  top: 10%;
  left: -21%;
  height: 50%;
  width: 20%;
  grid-template-columns: repeat(3, 33.3%);
  grid-template-rows: repeat(3, 20%);

  div {
    border: 1px solid #fff;
    background-color: salmon;
  }
}
.diy {
  height: 100%;
  width: 100%;
}
</style>
<style>
.design {
  position: fixed;
  height: 50px;
  width: 50px;
  border: 1px solid #fff;
  background-color: salmon;
}
</style>

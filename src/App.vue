<template>
  <div id="app">
    <div class="li">
      <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <router-link to="/" class="logo"></router-link>
        <el-menu-item  @click="todo" style="float: right" index="4">关于我们</el-menu-item>
        <el-menu-item style="float: right" index="3">处理中心</el-menu-item>
        <el-menu-item style="float: right" index="2">订单管理</el-menu-item>
        <el-submenu style="float: right" index="1">
          <template slot="title">我的工作台</template>
          <el-menu-item @click="$router.push('/workbench/选项1')" index="1-1">选项1</el-menu-item>
          <el-menu-item @click="$router.push('/workbench/选项2')" index="1-2">选项2</el-menu-item>
          <el-menu-item @click="$router.push('/workbench/选项3')" index="1-3">选项3</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">选项4</template>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
            <el-menu-item index="1-4-2">选项2</el-menu-item>
            <el-menu-item index="1-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>

    </div>
    <router-view />
  </div>
</template>

<script>
import "element-ui/lib/theme-chalk/index.css";

export default {
  name: "app",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    todo() {
      this.$router.push({ path: "/about" });
    },
    optionClick() {
      console.log(this.$refs.option.$el);
    }
  }
};
</script>

<style lang="scss">
body,
h1,
input,
ul,
li {
  margin: 0;
  padding: 0;
}

#app {
  .logo {
    width: 60px;
    height: 60px;
    float: left;
    background: url("./assets/logo.png") no-repeat 0 0;
    background-size: contain;
  }
}
</style>

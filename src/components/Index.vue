<template>
  <div class="hello">
    <el-row>
      <el-col :span="4" class="index_left">
        <el-container>
          <Nav></Nav>
        </el-container>
      </el-col>
      <el-col :span="20" class="index_right">
        <el-container style="height:50px;">
          <Header></Header>
        </el-container>
        <el-container>
          <Bread></Bread>
        </el-container>
        <el-container class="index_main">
          <router-view/>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/common/header";
import Nav from "@/common/nav";
import Bread from '@/common/bread'
export default {
  name: "HelloWorld",
  components: {
    Header,
    Nav,
    Bread
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.index_left{
  position: fixed;
  min-height: 100vh;
}
.index_right{
  position: fixed;
  right: 0;
}
.index_main{
  padding: 10px 20px;
  box-sizing: border-box;
  max-height: 90vh;
  overflow: scroll;
}
</style>


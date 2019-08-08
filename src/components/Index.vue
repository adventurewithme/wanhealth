<template>
  <div class="hello">
    <el-row>
      <el-col :span="4">
        <el-container class>
          <Nav></Nav>
        </el-container>
      </el-col>
      <el-col :span="20">
        <el-container>
          <Header></Header>
        </el-container>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Header from "@/common/header";
import Nav from "@/common/nav";
export default {
  name: "HelloWorld",
  components: {
    Header,
    Nav
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
</style>

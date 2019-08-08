<template>
  <el-container>
    <el-header height="50px">
      <el-row>
        <el-col :span="12">
          <img :src="navshow" alt class="nav" />
        </el-col>
        <el-col :span="12"></el-col>
      </el-row>
    </el-header>
  </el-container>
</template>
<script>
import navshow from "@/assets/navshow.png";
export default {
  name: "headers",
  data() {
    return {
      navshow
    };
  }
};
</script>



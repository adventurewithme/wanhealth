<template>
  <!-- <el-container> -->
    <el-header height="50px" class="header nav">
      <el-row>
        <el-col :span="20">
          <img :src="navshow" alt class="nav" />
          <span>小碗健康管理系统平台端</span>
        </el-col>
        <el-col :span="4">
          <el-col :span="4">
            <img :src="big" alt class="nav" />
          </el-col>
          <el-col :span="14">
              欢迎：啊哈哈
          </el-col>
        <el-col :span="4">
            <img :src="exit" alt class="nav" title="退出"/>
          </el-col>
        </el-col>
      </el-row>
    </el-header>
  <!-- </el-container> -->
</template>
<script>
import navshow from "@/assets/navshow.png";
import big from "@/assets/header_big.png";
import exit from '@/assets/exit.png'
export default {
  name: "headers",
  data() {
    return {
      navshow,
      big,
      exit
    };
  }
};
</script>
 <style lang="scss" scoped>
.header {
  line-height: 50px;
  font-size: 14px;
  color: #666;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
    // position: fixed;
    top: 0;
    z-index: 999;
    background: #fff;
  .nav {
    width: 20px;
    height: 20px;
    float: left;
    margin: 15px 5px 0 0;
  }
}
</style>


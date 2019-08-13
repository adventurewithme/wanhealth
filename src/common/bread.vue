<template>
  <div class="breadf">
    <el-breadcrumb separator="/" class="bread">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>
        <a href="/">活动管理</a>
      </el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item> -->
    </el-breadcrumb>
    <div class="bredf_right">
      <i class="el-icon-refresh-left"></i>刷新
    </div>
  </div>
</template>
<script>
export default {
  name: "bread"
};
</script>

<style lang="scss" scoped>
.breadf{
  height: 30px;
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  -webkit-justify-content: space-between;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin: 10px 0 0 0;
  align-items: center;
  -webkit-align-items: center;
}
.bread {
  line-height: 30px;
  background: salmon;
  padding: 0 10px;
  box-sizing: border-box;
  flex:1;
  -webkit-flex:1;
  .el-breadcrumb__item{
    padding: 0 10px;
    box-sizing: border-box;
    border:1px solid #d8dce5;
    height: 26px;
    line-height: 26px;
  }
}
.bredf_right{
  width: 80px;
  flex-shrink: 0;
  -webkit-flex-shrink: 0;
  background: #42D885;
  text-align: center;
  line-height: 30px;
  font-size: 14px;
  border-radius: 5px;
  color: #fff;
}
</style>

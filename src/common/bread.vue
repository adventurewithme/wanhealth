<template>
  <el-breadcrumb separator="/" class="bread">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>
      <a href="/">活动管理</a>
    </el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
  </el-breadcrumb>
</template>
<style lang="scss" scoped>
.bread{
    line-height: 30px;
    background: salmon;
    padding: 0 10px;
    box-sizing: border-box;
}
</style>

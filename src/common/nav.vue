<template>
  <el-aside width="100%" class="nav">
    <div class="nav_logo">
      <img :src="logo" />
    </div>
    <!-- <el-menu :default-openeds="['1', '3']"> -->
    <el-menu :default-active="$route-path">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-message"></i>商品管理
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="1-1" route="{path:'/brand'}">品牌管理</el-menu-item>
          <el-menu-item index="1-2">规格管理</el-menu-item>
          <el-menu-item index="1-3">类型管理</el-menu-item>
          <el-menu-item index="1-4">分类管理</el-menu-item>
          <el-menu-item index="1-5">待审核品牌</el-menu-item>
          <el-menu-item index="1-6">商家分类申请</el-menu-item>
          <el-menu-item index="1-7">待售商品</el-menu-item>
          <el-menu-item index="1-8">在售商品</el-menu-item>
          <el-menu-item index="1-2">已删除商品</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项4-1</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>交易管理
        </template>
        <el-menu-item-group>
          <!-- <template slot="title">分组一</template> -->
          <el-menu-item index="2-1">全部订单</el-menu-item>
          <el-menu-item index="2-2">未付款订单</el-menu-item>
          <el-menu-item index="2-3">待确认订单</el-menu-item>
          <el-menu-item index="2-4">待发货订单</el-menu-item>
          <el-menu-item index="2-5">已发货订单</el-menu-item>
          <el-menu-item index="2-6">已完成订单</el-menu-item>
          <el-menu-item index="2-7">已取消订单</el-menu-item>
          <el-menu-item index="2-8">退款管理</el-menu-item>
          <el-menu-item index="2-9">退货管理</el-menu-item>
          <el-menu-item index="2-10">换货管理</el-menu-item>
        </el-menu-item-group>
        <!-- <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项4-1</el-menu-item>
        </el-submenu>-->
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-setting"></i>会员管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">会员管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-setting"></i>商家管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">商家申请</el-menu-item>
          <el-menu-item index="4-2">商家管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-setting"></i>移动端管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">app轮播图</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <i class="el-icon-setting"></i>运营管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="6-1">物流公司</el-menu-item>
          <el-menu-item index="6-2">配置管理</el-menu-item>
          <el-menu-item index="6-3">系统公告</el-menu-item>
          <el-menu-item index="6-4">结算中心</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="7">
        <template slot="title">
          <i class="el-icon-setting"></i>统计结算
        </template>
        <el-menu-item-group>
          <el-menu-item index="7-1">结算管理</el-menu-item>
          <el-menu-item index="7-2">每日订单统计</el-menu-item>
          <el-menu-item index="7-3">每日商品统计</el-menu-item>
          <el-menu-item index="7-4">订单概况</el-menu-item>
          <el-menu-item index="7-5">商品销售统计</el-menu-item>
          <el-menu-item index="7-6">订单销量统计</el-menu-item>
          <el-menu-item index="7-7">购买率统计</el-menu-item>
          <el-menu-item index="7-8">商品浏览量统计</el-menu-item>
          <el-menu-item index="7-9">退货率统计</el-menu-item>
          <el-menu-item index="7-10">人均消费统计</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="8">
        <template slot="title">
          <i class="el-icon-setting"></i>搜索管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="8-1">搜索词历史记录</el-menu-item>
          <el-menu-item index="8-2">索引初始化</el-menu-item>
          <el-menu-item index="8-3">关键词设置</el-menu-item>
          <el-menu-item index="8-4">敏感词过滤</el-menu-item>
          <el-menu-item index="8-5">模糊搜索词</el-menu-item>
          <el-menu-item index="8-6">敏感词</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="9">
        <template slot="title">
          <i class="el-icon-setting"></i>系统管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="9-1">数据字典</el-menu-item>
          <el-menu-item index="9-2">角色管理</el-menu-item>
          <el-menu-item index="9-3">资源管理</el-menu-item>
          <el-menu-item index="9-4">管理员管理</el-menu-item>
          <el-menu-item index="9-5">修改密码</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="10">
        <template slot="title">
          <i class="el-icon-setting"></i>热卖商品管理
        </template>
        <el-menu-item-group>
          <el-menu-item index="10-1">热卖商品管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
</template>
<script>
import logo from "@/assets/logo.png";
export default {
  name: "navs",
  data() {
    return {
      logo
    };
  }
};
</script>
<style lang="scss" scoped>
.nav {
  background: #263445;
  height: 100vh;
  .nav_logo{
    text-align: center;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 20px 0;
  }
  .el-menu {
    background-color: #263445;
    border-right: none;
  }
}
::-webkit-scrollbar {
  width: 4px;
  background-color: #304156;
}

/* 滚动槽 */
::-webkit-scrollbar-track {
  border-radius: 10px;
}

/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: #606a78;
}
</style>
<style lang="scss">
.nav {
  .el-submenu__title {
    color: #bfcbd9;
  }
}
</style>

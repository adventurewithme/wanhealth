<template>
  <div class="indexs">
    <el-row>
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>今日新增订单</span>
          </div>
          <div v-for="(i,index) in todaylist" :key="index" class="text item">{{ i.name+':'+i.num }}</div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>待处理事宜</span>
          </div>
          <div v-for="(i,index) in waitlist" :key="index" class="text item">{{ i.name+':'+i.num }}个</div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>本月订单概况更多</span>
            <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
          </div>
          <div id="monthorder" style="width:100%;height:300px"></div>
        </el-card>
      </el-col>
      <el-col :span="11">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>今日新增订单</span>
          </div>
          <div v-for="(i,index) in todaylist" :key="index" class="text item">{{ i.name+':'+i.num }}</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
var echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/pie");
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/component/legendScroll");
export default {
  name: "indexssss",
  data() {
    return {
      todaylist: [
        {
          name: "订单数",
          num: 0
        },
        {
          name: "订单总金额",
          num: 0
        },
        {
          name: "已支付金额",
          num: 0
        }
      ],
      waitlist: [
        {
          name: "新增商家申请",
          num: 0
        },
        {
          name: "待审核品牌",
          num: 0
        },
        {
          name: "待确认订单",
          num: 0
        }
      ],
      monthlist: {
        monthdata: [
          "未付款的订单",
          "待确认的订单",
          "待发货的订单",
          "已发货的订单",
          "已完成的订单",
          "取消的订单"
        ],
        time: "2018.01.01-2019.09.01",
        precent: [0, 10, 12, 15, 30, 1],
        total: 88
      }
    };
  },
  created() {
    this.$nextTick(function() {
      this.montheahcrt();
    });
  },
  methods: {
    montheahcrt() {
      var that = this;
      var monthseries = that.monthseries();
      var myechart = echarts.init(document.getElementById("monthorder"));
      myechart.setOption({
        title: {
          subtext: that.monthlist.time,
          x: "center"
        },
        tooltip: {formatter: "{a} <br/>{b} : {c} ({d}%)" },
        legend: {
          type: "scroll",
          orient: "vertical",
          left: 0,
          top: 0,
          bottom: 20,
          data: monthseries.legendData,
          selected: monthseries.selected
        },
        series: [
          {
            name: "",
            type: "pie",
            radius: "45%",
            center: ["70%", "50%"],
            data: monthseries.seriesData
          }
        ]
      });
    },
    monthseries() {
      var data = this.monthlist;
      var legendData = [];
      var seriesData = [];
      var selected = {};
      for (var i = 0; i < data.monthdata.length; i++) {
        seriesData.push({
          name: data.monthdata[i],
          value: data.precent[i]
        });
        legendData.push(data.monthdata[i]);
        selected[data.monthdata[i]] = true;
      }
      return {
        seriesData,
        selected,
        legendData
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.indexs {
  width: 100%;
  .el-col {
    margin: 10px 2%;
  }
}
</style>

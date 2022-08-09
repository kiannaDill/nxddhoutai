<template>
  <div class="main">
    <e-charts class="chart" :option="option" />
  </div>
</template>

<script>
export default {
  name: "DataView",
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            smooth: true,
          },
        ],
      },
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.main {
  width: 100vw;
  .chart {
    width: 100%;
    height: 400px;
  }
}
</style>
<template>
  <tr>
      <td :colspan="colspanValue">暂无数据！</td>
  </tr>
</template>
<script>
export default {
  props: ['colspanValue']
}
</script>

<style scoped>
td {
  text-align: center;
}
</style>


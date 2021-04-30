<template>
    <table>
      <tbody>
        <tr>
          <th>내용</th>
          <th>금액</th>
          <th>작성일시</th>
        </tr>
        <tr v-for="(arr, index) in dataArr" :key="index">
          <td>{{arr.content}}</td>
          <td>{{arr.price}}</td>
          <td>{{arr.date}}</td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
  props: {dataArr:Array}
}
</script>

<style>

</style>
<template>
  <div>
      <table>
          <tr>
              <th>내용</th>
              <th>금액</th>
          </tr>
          <tr v-for="(arr, index) in dataArr" :key='index'>
              <td>{{arr.content}}</td>
              <td>{{arr.price}}</td>
              <td><span>X</span></td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props: { modalId:String, dataArr:Array },
    data() {
        return {
            tableData: []
        }
    },
    methods: {

    }
}
</script>

<style>

</style>
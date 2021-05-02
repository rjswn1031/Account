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
              <td><span v-on:click="deleteFunction(modalId, arr.index)">X</span></td>
          </tr>
          <tr>
              <td>합계</td>
              <td>{{total}}</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    props: { modalId:String, dataArr:Array, deleteFunction:Function, total:Number },
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
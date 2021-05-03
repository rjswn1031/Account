<template>
    <div>
        <table>
            <colgroup>
                <col width="60%">
                <col width="35%">
                <col width="5%">
            </colgroup>
            <tr style="text-align: center; font-size: 1.1em">
                <th>내용</th>
                <th>금액</th>
                <th></th>
            </tr>
        </table>
        <div style="height: 15em; text-align: center; line-height: 15em" v-if="dataArr.length == 0">내역이 존재하지 않습니다</div>
        <div style="height: 15em; padding-top: 0.7em;" v-if="dataArr.length > 0">
            <table >
                <colgroup>
                <col width="60%">
                <col width="35%">
                <col width="5%">
            </colgroup>
                <tr v-for="(arr, index) in dataArr" :key='index'>
                    <td style="border: 1px solid gray;">{{arr.content}}</td>
                    <td style="border: 1px solid gray;">{{arr.price}}</td>
                    <td><span v-on:click="deleteFunction(modalId, arr.index)"><b-icon class="xIcon" icon="file-excel" style="color:red"></b-icon></span></td>
                </tr>
            </table>
        </div>
        <table>
            <colgroup>
                <col width="60%">
                <col width="35%">
                <col width="5%">
            </colgroup>
            <tr style="font-size: 1.1em">
                <td>합계</td>
                <td>{{total}}</td>
                <td></td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    props: { modalId:String, dataArr:Array, deleteFunction:Function, total:Number },
    data() {
        return {
            ths: ['금액', '내용'],
            tableData: []
        }
    },
    methods: {

    }
}
</script>

<style>
table {width: 100%;}
td {text-align: center;}
</style>
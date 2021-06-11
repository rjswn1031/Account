<template>
    <div class="infoTableContainer">
        <table class="infoTable">
            <colgroup>
                <col width="60%">
                <col width="35%">
                <col width="5%">
            </colgroup>
            <tr class="infoTableTitle">
                <th>내용</th>
                <th>금액</th>
                <th></th>
            </tr>
            <tr class="infoTableContent nonData" v-if="dataArr.length == 0">
                <td colspan="3" >내역이 존재하지 않습니다.</td>
            </tr>
            <tr class="infoTableContent onData" v-for="(arr, index) in dataArr" :key='index'>
                <td style="border: 1px solid gray;">{{arr.content}}</td>
                <td style="border: 1px solid gray;">{{arr.price}}</td>
                <td><span v-on:click="deleteFunction(modalId, arr.index)"><b-icon class="xIcon" icon="trash" style="color:red"></b-icon></span></td>
            </tr>
            <tr class="infoTableTotal" style="font-size: 1.1em">
                <td>합계</td>
                <td>{{total}}</td>
                <td></td>
            </tr>
        </table>
        <!-- <table>
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
        <div style="height: 12.5em; min-height: 12.5em; text-align: center; line-height: 12.5em" v-if="dataArr.length == 0">내역이 존재하지 않습니다</div>
        <div style="height: 12.5em; padding-top: 0.7em;" v-if="dataArr.length > 0">
            <table id="dataTable">
                <colgroup>
                <col width="60%">
                <col width="35%">
                <col width="5%">
            </colgroup>
                <tr v-for="(arr, index) in dataArr" :key='index'>
                    <td style="border: 1px solid gray;">{{arr.content}}</td>
                    <td style="border: 1px solid gray;">{{arr.price}}</td>
                    <td><span v-on:click="deleteFunction(modalId, arr.index)"><b-icon class="xIcon" icon="trash" style="color:red"></b-icon></span></td>
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
        </table> -->
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
.infoTable { width: 100%; height: 100%; }
.infoTableTitle { height: 10%; }
.infoTableContent { height: 80% }
.infoTableContent .nonData td { height: 80% }
.infoTableContent .onData td { height: auto; }
.infoTableTotal { height: 10%; }

/* .infoTable {border: 1px solid rgb(187, 187, 187); width: 100%; height: 18em; min-height: 18em; padding: 1em 1em 1em 1em; border-radius: 10px; margin-top: 0.7em; background-color: rgb(250, 250, 250); box-sizing: border-box; }
table {width: 100%;}
td {text-align: center;}
#dataTable {overflow: scroll;}
#dataTable::-webkit-scrollbar { display: none; }
.nonData {} */
</style>
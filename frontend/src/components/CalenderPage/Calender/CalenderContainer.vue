<template>
    <div id="cal">
    <div id="selectMonthCon">
        <b-icon class="arrowIcon" icon="caret-left-fill" v-on:click="onPreMon"></b-icon>
        <span id="showMonth">{{ select.substr(0,7) }}</span>
        <b-icon class="arrowIcon" icon="caret-right-fill" v-on:click="onPostMon"></b-icon> <br>
        <span id="dayText">날짜를 선택해주세요</span>
    </div>
    <Calender :incomeChk="incomeChk" :expendChk='expendChk' :getMonthData='getMonthData' :selectDay= "select" :onClickDay='onClickDay'></Calender>
    </div>
</template>

<script>
import Calender from "../Calender/Calender.vue";
//import Common from "../../../assets/common.js"
//var common = new Common;

export default {
    components: { Calender },
    props: ['onClickDay','select','onPreMon','onPostMon','getMonthData','incomeChk','expendChk'],
    data() {
        return {

        }
    },

    methods: {
        
    }
};
</script>
<style>
#cal { width: 100%; }
#selectMonthCon { text-align: center; margin: 0.8em 0 0.8em 0; }
#selectMonthCon span#dayText { color: #4fc08d; }
.arrowIcon { color: #4fc08d !important; font-size: 2.5em; cursor: pointer;}
#showMonth { font-size: 3.0em; margin: 0 0.8em 0 0.8em; font-weight: 600; }
</style>
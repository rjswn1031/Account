<template>
    <div id="cal">
    <div id="selectMonthCon">
        <b-icon class="arrowIcon" icon="caret-left-fill" v-on:click="fget_preMonth"></b-icon>
        <span id="showMonth">{{ select.substr(0,7) }}</span>
        <b-icon class="arrowIcon" icon="caret-right-fill" v-on:click="fget_postMonth"></b-icon>
    </div>
    <Calender :selectDay= "select" :onClickDay='onClickDay'></Calender>
    </div>
</template>

<script>
import Calender from "../Calender/Calender.vue";
import Common from "../../../assets/common.js"
var common = new Common;

export default {
    components: { Calender },
    props: ['onClickDay'],
    data() {
        return {
            select: common.fget_DateFormat(new Date, 'day'),//this.getDateFormat(new Date, 'day'),
        }
    },

    methods: {
        fget_preMonth(){
            var dateArr = this.select.split('-')
            var preDate = common.fget_DateFormat(new Date(dateArr[0], parseInt(dateArr[1])-2, 1), 'day');

            this.select = preDate;
        },
        fget_postMonth(){
            var dateArr = this.select.split('-')
            var preDate = common.fget_DateFormat(new Date(dateArr[0], parseInt(dateArr[1]), 1), 'day');

            this.select = preDate;
        }
    }
};
</script>
<style>
#cal { width: 100%; }
#selectMonthCon { text-align: center; margin: 0.8em 0 0.8em 0; }
.arrowIcon { color: #4fc08d !important; font-size: 2.5em; cursor: pointer;}
#showMonth { font-size: 3.0em; margin: 0 0.8em 0 0.8em; font-weight: 600; }
</style>
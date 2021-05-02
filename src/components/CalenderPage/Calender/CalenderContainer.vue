<template>
  <div id="cal">
        <input type="date" name="" id="" v-model='select'>
        <div>{{ select }}</div>
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
        
    }
};
</script>
<style>
#cal {width: 100%;}
</style>
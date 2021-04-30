import Vue from 'vue';
import Router from 'vue-router';

import Calender from './../components/CalenderPage/CalenderPage.vue'
import Analysis from './../components/AnalysisPage/AnalysisPage.vue'
import Month from './../components/AnalysisPage/MonthPage.vue'
import Year from './../components/AnalysisPage/YearPage.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    
    routes: [
        {
            path: "/",
            name: "Calender",
            component: Calender
        },
        {
            path: "/analysis",
            name: "Analysis",
            component: Analysis,
            children: [
                {
                    path: "month",
                    name: 'month',
                    component: Month
                },
                {
                    path: "year",
                    name: 'year',
                    component: Year
                }
            ]
        }
    ]
})
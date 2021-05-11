import Vue from 'vue';
import Router from 'vue-router';

import LoginPage from './../components/LoginPage.vue'
import MainPage from './../components/MainPage.vue'
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
            name: "LoginPage",
            component: LoginPage
        },
        {
            path: "/main",
            name: "MainPage",
            component: MainPage,
            children: [
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
        },
        
    ]
})
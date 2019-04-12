import Vue from 'vue';
import VueRouter from 'vue-router';

import JeJu from '../views/JeJu.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history', // url 경로 에 # 제거
    routes: [
        {
            path: '/',
            redirect: '/jeju'
        },
        {
            // Url address
            path:'/jeju',
            // component url 주소로 갔을 때 표시될 컴포넌트
            component: JeJu
        }
    ]
});

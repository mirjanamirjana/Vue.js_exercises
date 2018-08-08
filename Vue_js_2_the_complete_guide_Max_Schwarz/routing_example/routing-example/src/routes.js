import Home from './components/Home.vue';
import Header from './components/Header.vue';

//transferring import statements into another syntax
const User = resolve => {
    require.ensure(['./components/user/User.vue'], () => {
        resolve(require('./components/user/User.vue'));
    }, 'user');/* -webpack loads the component only when visiting
                the component
    -using a promise it resolves a route you really want to use
    -for optimising performance, webpack downloads only the needed
    extra boundles and loads them lazily */
};

const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    }, 'user');
};

const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    }, 'user');
};

const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    }, 'user');
};

export const routes = [
    {
        path: '', 
        name: 'home', 
        components: {
        default: Home,
        'header-top': Header
        }
    },
    {
        path: '/user', 
        components: {
        default: User,
        'header-bottom': Header
        }, 
            children: [
                 {
                    path: '', 
                    component: UserStart
                },
                {
                    path: ':id', 
                    component: UserDetail, 
                    beforeEnter: (to, from, next) => {
                    console.log('inside route setup');
                    next();
                    }
                },
                {
                    path: ':id/edit', 
                    component: UserEdit, 
                    name: 'userEdit'}
            ]
    },
    {
        path: '/redirect-me', 
        redirect: {
            name: 'home'
        }
    },
    {
        path: '*', 
        redirect: '/'
    }
];
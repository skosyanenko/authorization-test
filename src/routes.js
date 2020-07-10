import Form from './components/form';
import Success from './components/screens/Success';

export const routes = [{
        id: 'register',
        path: '/register',
        component: Form
    },
    {
        id: 'auth',
        path: '/auth',
        component: Form
    },
    {
        id: 'success',
        path: '/success',
        component: Success
    }
];
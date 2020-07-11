import Form from './components/form';
import Index from './components/Success';

export const routes = [
    {
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
        component: Index
    }
];
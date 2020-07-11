import Form from './components/form';
import SuccessScreen from "./components/success";

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
        component: SuccessScreen
    }
];
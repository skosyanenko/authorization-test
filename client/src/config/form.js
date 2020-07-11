import { authSchema, authFields } from './schemas/AuthSchema';
import { registrationSchema, registrationFields } from './schemas/RegistrationSchema';

export const formConfig = {
    auth: {
        schema: authSchema,
        fields: authFields,
        api: '/api/login',
        head: {
            title: 'Вход'
        },
        footer: {
            question: 'Нет аккаунта?',
            to: '/register',
            label: 'Зарегистрироваться'
        },
        button: 'Войти',
        success: 'Вы авторизованы',
        next: false
    },
    register: {
        schema: registrationSchema,
        fields: registrationFields,
        api: '/api/register',
        head: {
            title: 'Регистрация'
        },
        footer: {
            question: 'Есть аккаунт?',
            to: '/auth',
            label: 'Войти'
        },
        button: 'Зарегистрироваться',
        success: 'Вы зарегистрированы',
        next: '/auth'
    }
}
import { authSchema, authFields } from './schemas/AuthSchema';
import { registrationSchema, registrationFields } from './schemas/RegistrationSchema';

export const formConfig = {
    auth: {
        schema: authSchema,
        fields: authFields,
        head: {
            title: 'Вход'
        },
        footer: {
            question: 'Нет аккаунта?',
            to: '/register',
            label: 'Зарегистрироваться'
        },
        button: 'Войти',
        success: 'Вы авторизованы'
    },
    register: {
        schema: registrationSchema,
        fields: registrationFields,
        head: {
            title: 'Регистрация'
        },
        footer: {
            question: 'Есть аккаунт?',
            to: '/auth',
            label: 'Войти'
        },
        button: 'Зарегистрироваться',
        success: 'Вы зарегистрированы'
    }
}
import * as yup from "yup";

export const authSchema = yup.object().shape({
    login: yup.string()
        .required('Введите логин'),
    password: yup.string()
        .required('Введите пароль')
});

export const authFields = [{
        type: 'text',
        name: 'login',
        label: 'Email или номер телефона'
    },
    {
        type: 'password',
        name: 'password',
        label: 'Пароль'
    }
];
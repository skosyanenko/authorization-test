import * as yup from "yup";

export const authSchema = yup.object().shape({
    login: yup.string()
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Введен неверный формат телефона')
        .email('Введен неверный e-mail')
        .required('Такой логин не существует'),
    password: yup.string()
        .required('Введен неверный пароль')
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
import * as yup from "yup";

export const registrationSchema = yup.object().shape({
    name: yup.string()
        .required('Введите имя'),
    nickname: yup.string()
        .required('Введите никнейм'),
    email: yup.string()
        .email('Введен неверный e-mail')
        .required('Введите e-mail'),
    phone: yup.string()
        .required('Введите телефон'),
    password: yup.string()
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/, 'Пароль должен содержать цифры, спецсимволы, буквы латинского алфавита')
        .required('Введите пароль'),
    agreement: yup.string().required('Подтвердите согласие')
});

export const registrationFields = [{
        type: 'text',
        name: 'name',
        label: 'Имя'
    },
    {
        type: 'text',
        name: 'nickname',
        label: 'Никнейм'
    },
    {
        type: 'email',
        name: 'email',
        label: 'Email'
    },
    {
        type: 'phone',
        name: 'phone',
        label: 'Телефон'
    },
    {
        type: 'password',
        name: 'password',
        label: 'Пароль'
    },
    {
        type: 'checkbox',
        name: 'agreement',
        label: 'Я даю свое согласие на обработку персональных данных'
    }
];
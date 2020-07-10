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
        .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Введен неверный формат телефона')
        .required('Введите телефон'),
    password: yup.string()
        .min(8, 'Слишком короткий - минимум 8 символов.')
        .matches(/[a-zA-Z]/, 'Пароль должен содержать большие и маленькие буквы латинского алфавита')
        .matches(/[0-9]/, 'Пароль должен содержать цифры')
        .required('Введите пароль'),
    agreement: yup.string()
        .required('Подтвердите согласие')
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
        label: 'Номер телефона'
    },
    {
        type: 'password',
        name: 'password',
        label: 'Пароль'
    }
];
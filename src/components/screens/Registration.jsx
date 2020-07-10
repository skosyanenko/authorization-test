import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../fields/Input';
import Button from '../ui/Button';

const fields = [
    {
        type: 'text',
        name: 'name',
        label: 'Имя'
    },
//     {
//         type: 'text',
//         name: 'nickname',
//         label: 'Никнейм'
//     },
//     {
//         type: 'email',
//         name: 'email',
//         label: 'Email',
//         regular: '[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}',
//         message: 'Введен неверный e-mail!'
//     },
//     {
//         type: 'phone',
//         name: 'phone',
//         label: 'Номер телефона'
//     },
//     {
//         type: 'password',
//         name: 'password',
//         label: 'Пароль',
//         regular: '(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}',
//         message: 'Введен неверный пароль!'
//     }
];

const Registration = ({ handleSubmit, onSubmit, register, setValue, errors, formState, control }) => {
    return ( 
        <>
            <span className="wrapper__title">Регистрация</span>
            <span className="wrapper__subtitle">Введите свои данные</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, key) => (
                    <Input 
                        {...field} 
                        key={key}
                        register={register}
                        onChange={setValue}
                        control={control}
                        errors={errors}
                        isSubmit={formState.isSubmitting}
                    />
                ))}
                <Button 
                    text={'Зарегистрироваться'}
                    errors={errors}
                />
            </form>
            <div className="wrapper__link">
                <span className="wrapper__link-quest">Есть аккаунт?</span>
                <Link to="/auth" className="wrapper__link-button">Войти</Link>
            </div>
        </>
    );
}

export default Registration;
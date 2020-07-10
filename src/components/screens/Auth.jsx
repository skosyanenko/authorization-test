import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../fields/Input';
import Button from '../ui/Button';

const fields = [
    {
        type: 'email',
        name: 'email',
        label: 'Email или номер телефона',
        regular: '[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}',
        message: 'Введен неверный e-mail!'
    },
    {
        type: 'password',
        name: 'password',
        label: 'Пароль',
        regular: '(?=.*[0-9])(?=.*[a-z])[0-9a-z]{6,}',
        message: 'Введен неверный пароль!'
    }
];

const Auth = ({ handleSubmit, onSubmit, register, setValue, getValues, errors, formState, control }) => {
    return (
        <> 
            <span className="wrapper__title">Вход</span>
            <span className="wrapper__subtitle">Введите свои данные</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field, key) => (
                    <Input 
                        {...field} 
                        key={key}
                        register={register}
                        getValues={getValues}
                        onChange={setValue}
                        control={control}
                        errors={errors}
                        isSubmit={formState.isSubmitting}
                    />
                ))}
                <Button 
                    text={'войти'}
                    errors={errors}
                />
            </form>
            <div className="wrapper__link">
                <span className="wrapper__link-quest">Нет аккаунта?</span>
                <Link to="/register" className="wrapper__link-button">Зарегистрироваться</Link>
            </div>
        </>
    );
}
 
export default Auth;
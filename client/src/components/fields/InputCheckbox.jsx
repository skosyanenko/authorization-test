import React from 'react';
import { Controller } from 'react-hook-form';

const InputCheckbox = ({ inputClassName, ...inputProps }) => {
    return (
        <Controller
            {...inputProps}
            as={
                <div className={inputClassName('form__checkbox')}>
                    <input id={inputProps.name} type="checkbox"/>
                    <label htmlFor={inputProps.name}>{inputProps.label}</label>
                </div>
            }
        />
    )
};

export default InputCheckbox;
import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';

const InputPhoneMask = ({ inputRef, onChange, ...other }) => {
    return (
        <InputMask
            {...other}
            ref={inputRef}
            onChange={onChange}
            mask="+7 999 999 99 99"
        />
    )
};

const InputPhone = ({ inputClassName, ...inputProps }) => {
    return (
        <Controller
            {...inputProps}
            as={<TextField
                    {...inputProps}
                    className={inputClassName('form__input')}
                    InputProps={{
                        inputComponent: InputPhoneMask
                    }}
                />
            }
        />
    )
};

export default InputPhone;
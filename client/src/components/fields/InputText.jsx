import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';

const InputText = ({ inputClassName, ...inputProps }) => {
    return (
        <Controller
            {...inputProps}
            as={<TextField className={inputClassName('form__input')} />}
        />
    )
};

export default InputText;
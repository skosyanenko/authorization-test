import React, { useState } from 'react';
import { Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
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

const FormField = ({ error, register, ...inputProps }) => {

    const [showPassword, setShowPassword] = useState(false);

    const inputClassName = cls => `${cls} ${error && error.message.length > 0 ? 'error' : ''}`;

    const maskSwitch = (type) => {
        switch(type) {
            case 'text':
            case 'email':
                return (
                    <Controller 
                        {...inputProps}
                        as={<TextField className={inputClassName('form__input')} />}
                    />
                );
            case 'phone':
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
                );
            case 'checkbox':
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
            case 'password':
                return (
                    <Controller 
                        {...inputProps}
                        type={showPassword ? 'text' : 'password'}
                        as={
                            <TextField
                                className={inputClassName('form__input')}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                <div className={`form__input-icon ${showPassword ? 'enabled' : 'disabled'}`}/>
                                            </IconButton>
                                        </InputAdornment>,
                                }}
                            />
                        }
                    />
                );
            default:
                return (
                    <Controller 
                        {...inputProps}
                        as={<TextField className={inputClassName('form__input')}/>}
                    />
                );
        }
    };

    return maskSwitch(inputProps.type);
}
 
export default FormField;
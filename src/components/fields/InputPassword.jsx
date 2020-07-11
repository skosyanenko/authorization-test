import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { Controller } from 'react-hook-form';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

const InputPassword = ({ inputClassName, ...inputProps }) => {
    const [showPassword, setShowPassword] = useState(false);

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
};

export default InputPassword;
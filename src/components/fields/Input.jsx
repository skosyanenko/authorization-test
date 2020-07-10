import React, { useState } from 'react';
import { Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


const Input = ({ register, ...inputProps }) => {

    const [showPassword, setShowPassword] = useState(false);

    const maskSwitch = (type) => {
        switch(type) {
            case 'text':
            case 'email':
                return (
                    <Controller 
                        {...inputProps} 
                        ref={register}
                        as={<TextField className="form__input"/>}
                    />
                );
            case 'password':
                return (
                    <Controller 
                        {...inputProps} 
                        ref={register}
                        type={showPassword ? 'text' : 'password'}
                        as={
                            <TextField
                                className="form__input"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <div className={`form__input-icon ${showPassword ? 'abled' : 'disabled'}`}/>
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
                        ref={register}
                        as={<TextField className="form__input"/>}
                    />
                );
        }
    };

    return maskSwitch(inputProps.type);
}
 
export default Input;
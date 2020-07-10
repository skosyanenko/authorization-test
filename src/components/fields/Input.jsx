import React, { useState } from 'react';
import { Controller } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';


const Input = ({ register, ...inputProps }) => {

    const required = { 
        value: true, 
        message: 'Обязательное поле!'
    };

    const [showPassword, setShowPassword] = useState(false);

    // const handleChange = (prop) => (event) => {
    //     setValues({ ...values, [prop]: event.target.value });
    // };
    
    const handleClickShowPassword = () => {
        setShowPassword(!setShowPassword);
    };
    
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const maskSwitch = (type) => {
        switch(type) {
            case 'text':
                return (
                    <Controller 
                        {...inputProps} 
                        ref={register}
                        as={<TextField className="wrapper__input"/>}
                    />
                    
                );
            // case 'email':
            //     return (
            //         <TextField
            //             {...inputProps} 
            //             ref={register({required, pattern: {value: new RegExp(regular, 'i'), message}})}
            //             className="wrapper__input"
            //         />
            //     );
            // case 'password':
            //     return (
            //         <>
            //             <InputLabel htmlFor="standard-adornment-password">{label}</InputLabel>
            //             <Input
            //                 type={showPassword ? 'text' : 'password'}
            //                 value={''}
            //                 // ref={register({required, pattern: {value: new RegExp(regular, 'g')}})}
            //                 // onChange={handleChange('password')}
            //                 endAdornment={
            //                     <InputAdornment position="end">
            //                         <IconButton
            //                             aria-label="toggle password visibility"
            //                             onClick={handleClickShowPassword}
            //                             onMouseDown={handleMouseDownPassword}
            //                         >
            //                             <span>{showPassword ? 'показать пароль' : 'скрыть пароль'}</span>}
            //                         </IconButton>
            //                     </InputAdornment>
            //                 }
            //             />
            //         </>
            //     );
            default:
                return (
                    <TextField
                        {...inputProps} 
                        ref={register({required})} 
                        className="wrapper__input"
                    />
                );
        }
    };

    return maskSwitch(inputProps.type);
}
 
export default Input;
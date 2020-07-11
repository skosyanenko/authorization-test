import React from 'react';
import InputText from './InputText';
import InputPhone from './InputPhone';
import InputCheckbox from './InputCheckbox';
import InputPassword from './InputPassword';

const FormField = ({ error, register, ...inputProps }) => {

    const inputClassName = cls => `${cls} ${error && error.message.length > 0 ? 'error' : ''}`;

    const maskSwitch = (type) => {
        switch(type) {
            case 'text':
            case 'email':
                return <InputText inputClassName={inputClassName} {...inputProps}/>
            case 'phone':
                return <InputPhone inputClassName={inputClassName} {...inputProps}/>
            case 'checkbox':
                return <InputCheckbox inputClassName={inputClassName} {...inputProps}/>
            case 'password':
                return <InputPassword inputClassName={inputClassName} {...inputProps}/>
            default:
                return <InputText inputClassName={inputClassName} {...inputProps}/>
        }
    };

    return maskSwitch(inputProps.type);
}
 
export default FormField;
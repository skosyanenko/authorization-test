import React from 'react';
import { useForm } from 'react-hook-form';
import Auth from './screens/Auth';
import Registration from './screens/Registration';

const Form = ({ id }) => {
    const { handleSubmit, register, setValue, getValues, errors, formState, control } = useForm();

    const formConfig = {
        auth: Auth,
        register: Registration
    }

    const onSubmit = values => {
	    
    };

    const Component = formConfig[id];
    
    return (
        <Component
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
            setValue={setValue}
            getValues={getValues}
            errors={errors}
            formState={formState}
            control={control}
        />
    )
};
 
export default Form;
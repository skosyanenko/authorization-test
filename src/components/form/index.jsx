import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { formConfig } from '../../config/form';
import { yupResolver } from '@hookform/resolvers';
import FormHead from './Head';
import FormFooter from './Footer';
import Input from '../fields/Input';
import FormButton from '../ui/FormButton';

const Form = ({ id }) => {

    const {schema, fields, head, footer, button} = formConfig[id];

    const onSubmit = values => {
	    handleSubmit();
    };

    const { handleSubmit, register, setValue, getValues, errors, formState, control } = useForm({
        resolver: yupResolver(schema)
    });
    
    return (
        <Fragment>
            <FormHead title={head.title}/>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="form"
            >
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
                <FormButton 
                    text={button}
                    disabled={errors.length > 0}
                />
            </form>
            <FormFooter data={footer}/>
        </Fragment>
        
    )
};
 
export default Form;
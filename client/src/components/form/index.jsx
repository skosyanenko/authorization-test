import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { formConfig } from '../../config/form';
import { yupResolver } from '@hookform/resolvers';
import FormHead from './Head';
import FormFooter from './Footer';
import FormField from '../fields';
import FormButton from '../ui/FormButton';
import './index.sass';

const Form = ({ id }) => {
    const {schema, fields, head, footer, button} = formConfig[id];

    const defaultValues = fields.reduce((obj, field) => {
        obj[field.name] = '';
        return obj;
    }, {});

    const { handleSubmit, setValue, errors, control, register } = useForm({
        mode: 'onBlur',
        criteriaMode: 'firstError',
        resolver: yupResolver(schema),
        defaultValues
    });

    const onSubmit = values => {
	    axios.post('/api/register', values)
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
    };

    const disabled = Object.keys(errors).length > 0;

    return (
        <Fragment>
            <FormHead title={head.title}/>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className="form"
            >
                {fields.map((field, key) => (
                    <FormField
                        {...field}
                        key={key}
                        register={register}
                        onChange={setValue}
                        control={control}
                        error={errors[field.name]}
                    />
                ))}
                <FormButton 
                    text={button}
                    disabled={disabled}
                />
            </form>
            <FormFooter data={footer}/>
        </Fragment>
        
    )
};
 
export default Form;
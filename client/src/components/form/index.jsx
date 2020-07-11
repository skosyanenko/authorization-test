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

const Form = ({ id, history }) => {
    const {schema, fields, head, footer, button, success, api, next} = formConfig[id];

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
	    axios.post(api, values)
            .then(res => {
                if (res.data === 'Success') {
                    history.push('/success', { next, title: success});
                }
            })
            .catch(err => {
                const status = err.response.status;
                let errorText = '';

                if (status === 409 || status === 404) {
                    errorText = err.response.data;
                } else {
                    errorText = 'Произошла неизвестная ошибка! \n' + err
                }

                alert(errorText);
            });
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
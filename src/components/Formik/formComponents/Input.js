import React from 'react';
import { Field, ErrorMessage, useField } from 'formik';
import TextError from './TextError';

function Input(props) {
    //const { meta } = useField()
    const { label, name, ...rest } = props
    return (
        <div className="col1">
            <label htmlFor={name}> {label} </label>
            <Field className='user-input' id={name} name={name} {...rest} />
            <ErrorMessage  name={name} component={TextError} />
        </div>
    )
}

export default Input

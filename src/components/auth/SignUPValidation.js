import React, { Component, useEffect, useRef } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import  FormikControl  from '../Formik/FormikControl';
//import SetOfFields from "./SetOfFields";

const SignUPValidation = (props) => {
    //const validate = () => {};
    const initialValues = {
        email: '',
        password: ''
    }

    const validation = Yup.object({
        email: Yup
            .string()
            .email('Invalid email address')
            .required('* Required'),

        password: Yup
            .string()
            .min(6, 'Password is too short - should be 6 chars minimum')
            .required('* Required'),
    })

    const onSubmit = (values, {setSubmitting}) => {
        const payload = {
            ...values,
          };
          props.doSubmit(payload)
        console.log('Form Data =>', values)}

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={onSubmit}
        >
            <Form>
                {/* <SetOfFields doValidate={() => validate()} /> */}
                <FormikControl
                    control='input'
                    // control='chakraInput'
                    type='email'
                    label='Email'
                    name='email'
                //onChange={formik.handleChange}
                />
                <FormikControl
                    control='input'
                    type='password'
                    label='Password'
                    name='password'
                />
            </Form>
        </Formik>
    );
};

export default SignUPValidation;

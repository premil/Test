import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup';         // 3rd party validation library

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const validationSchema = Yup.object({       // form validation for using Yup library
    name: Yup
        .string()
        .required('* Required!'),
    email: Yup
        .string()
        .email('Invalid e-mail format')
        .required('* Required!'),
    channel: Yup
        .string()
        .required('* Required!')
})

const onSubmit = values => {
    console.log("Form data =>", values)
}

function YouTubeForm() {

    //console.log("Form Errors =>", formik.errors)
    //console.log("Visited Fields =>", formik.touched)    // User Visited field ==> true

    return (
        /*  Formik components use (replace to useFormik hook) */
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            className="form-control">

            {/* Form components ==> helps automatically link in onSubmith methoods to a Form submit event*/}
            {/* Form components use  ==> replace "<form onSubmit={formik.handleSubmit}> " */}
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        {...formik.getFieldProps('name')} //Single linecode of replace ==> both parameters onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name
                        ? <div className="error">{formik.errors.name}</div>
                        : null}
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        {...formik.getFieldProps('email')}   //onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email
                        ? <div className="error">{formik.errors.email}</div>
                        : null}
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <input
                        type='text'
                        id='channel'
                        name='channel'
                        {...formik.getFieldProps('channel')}   //onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.channel}
                    />
                    {formik.touched.channel && formik.errors.channel
                        ? <div className="error">{formik.errors.channel}</div>
                        : null}
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YouTubeForm

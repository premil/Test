import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';         // 3rd party validation library
import TextError from '../../Formik/TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
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
            initialValues={initialValues}           // accept initialvalues as props
            validationSchema={validationSchema}     // accept validationSchema as props
            onSubmit={onSubmit}                     // accept onSubmit as props
        >

            {/* Form components ==> helps automatically link in onSubmith methoods to a Form submit event*/}
            {/* Form components use  ==> replace "<form onSubmit={formik.handleSubmit}> " */}
            <Form>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    {/* Field components ==> replace "<input>" */}
                    {/* Remove ==> "{...formik.getFieldProps('name')}*/}
                    <Field
                        type='text'
                        id='name'
                        name='name'
                    />
                    {/*ErrorMessage component replace ==> "{formik.touched.name && formik.errors.name
                                ? <div className="error">{formik.errors.name}</div> 
                                : null}"" */}
                    <ErrorMessage name="name" component={TextError}/>
                </div>

                <div className="form-control">
                    <label htmlFor='email'>E-mail</label>
                    {/* Field components ==> replace "<input>" */}
                    {/* Remove ==> "{...formik.getFieldProps('email')}*/}
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    />
                    {/*ErrorMessage component replace ==> "{formik.touched.email && formik.errors.email
                                ? <div className="error">{formik.errors.email}</div>
                                : null}" */}
                    <ErrorMessage name="email" component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor='channel'>Channel</label>
                    <Field type='text' id='channel' name='channel' />
                    <ErrorMessage name="channel" component={TextError} />
                </div>

                <div className="form-control">
                    <label htmlFor='comments'>Comments</label>
                    <Field as='textarea' id='comments' name='comments' />
                </div>

                <div className="form-control">
                    <label htmlFor='address'>Address</label>
                    <Field name='address'>
                        {/* implimentation of Field component with render props pattern  */}
                        {(props) => {
                            const { field, form, meta } = props     // Default 3 Render props have
                            console.log("Render Props =>", props)
                            return (
                                <div>
                                    <input type='text' id='address' {...field} />
                                    {meta.touched && meta.error         // error message
                                        ? <div> {meta.error}</div>
                                        : null}
                                </div>
                            )
                        }}
                    </Field>
                </div>

                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default YouTubeForm

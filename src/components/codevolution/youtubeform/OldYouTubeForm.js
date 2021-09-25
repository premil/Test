import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';         // 3rd party validation library

const initialValues = {
    name: '',
    email: '',
    channel: ''
}

const validate = values => {                // form validation for default library
    const errors = {}

    if (!values.name) {             // values.name
        errors.name = '* Required'    // errors.name = "This field is required"
    }

    if (!values.email) {
        errors.email = '* Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!values.channel) {
        errors.channel = '* Required'
    }

    return errors
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

function OldYouTubeForm() {

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
        //validate
    })

    //console.log("Form Errors =>", formik.errors)
    console.log("Visited Fields =>", formik.touched)    // User Visited field ==> true

    return (
        <div className="form-control">
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}      // onBlur is using User Visited field ==> true
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
                        {...formik.getFieldProps('email')} //Single linecode of replace ==> both parameters onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}

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
                        {...formik.getFieldProps('channel')} //Single linecode of replace ==> both parameters onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur}

                    />
                    {formik.touched.channel && formik.errors.channel
                        ? <div className="error">{formik.errors.channel}</div>
                        : null}
                </div>

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default OldYouTubeForm;

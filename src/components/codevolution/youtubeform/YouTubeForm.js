import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup';         // 3rd party validation library
import TextError from '../../formik/formComponents/TextError';

const initialValues = {
    name: '',
    email: '',
    channel: '',
    comments: '',
    address: '',
    social: {               // initialized Nested Objects => empty string
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],   // initialized Array => empty string
    phNumbers: [''],
}
/* create the save values object */
const savedValues = {
    name: 'Premil',
    email: 'RJ@gmail.com',
    channel: 'RJ',
    comments: '',
    address: '100/4 Pannipitiya',
    social: {
        facebook: '',
        twitter: '',
    },
    phoneNumbers: ['', ''],
    phNumbers: [''],
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
        .required('* Required!'),
    // comments: Yup
    //     .string()
    //     .required('* Required!'),
})

/* Field Level Validations of comments Field*/
const validateComments = value => {
    let error
    if (!value) {
        error = 'Required'
    }
    return error
}


const onSubmit = (values, submitProps) => {
    console.log("Form data =>", values)
    //console.log('submitProps', submitProps)
    submitProps.setSubmitting(false)        // manually set Submitting forms ==> "setSubmitting"
    submitProps.resetForm()                 // reset the Form after submitted
}

function YouTubeForm() {

    const [formValues, setFormValues] = useState(null)
    //console.log("Form Errors =>", formik.errors)
    //console.log("Visited Fields =>", formik.touched)    // User Visited field ==> true

    return (
        /*  Formik components use (replace to useFormik hook) */
        <Formik
            initialValues={formValues || initialValues}           // accept initialvalues as props
            validationSchema={validationSchema}     // accept validationSchema as props
            onSubmit={onSubmit}                     // accept onSubmit as props
            /* important to weather your form can change initials values after the form initialized onece */
            enableReinitialize                      
        //validateOnChange={false}
        //validateOnBlur={false}
        //validateOnMount
        >
            {formik => {
                console.log('Formik props', formik)
                return (
                    /* Form components ==> helps automatically link in onSubmith methoods to a Form submit event*/
                    /* Form components use  ==> replace "<form onSubmit={formik.handleSubmit}> " */
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
                            <ErrorMessage
                                name="name"
                                /* use components props => pass in custome component "{TextError}" */
                                /* custome component includes => className="error" => styling */
                                component={TextError}
                            />
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
                            <ErrorMessage name="email" >
                                {/* use Render props pattern to render any JSX */}
                                {/* include => className="error" */}
                                {errorMsg => <div className="error"> {errorMsg} </div>}
                            </ErrorMessage>
                        </div>

                        <div className="form-control">
                            <label htmlFor='channel'>Channel</label>
                            <Field type='text' id='channel' name='channel' />
                            <ErrorMessage name="channel" component={TextError} />
                        </div>

                        <div className="form-control">
                            <label htmlFor='comments'>Comments</label>
                            <Field
                                as='textarea'
                                id='comments'
                                name='comments'
                                validate={validateComments}
                            />
                            <ErrorMessage name="comments" component={TextError} />

                        </div>

                        <div className="form-control">
                            <label htmlFor='address'>Address</label>
                            {/* FastField => optimized vertions of Field component */}
                            {/* To block all additional rerenders unless direct update to FastField components it self */}
                            {/* field is Indipendent all other fieds => use FastField component */}
                            <FastField name='address'>
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
                            </FastField>
                        </div>

                        <div className="form-control">
                            <label htmlFor='facebook'>Fecebook</label>
                            <Field
                                type='text'
                                id='facebook'
                                name='social.facebook'      //Nested object => define name attribute with dot notation
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor='twitter'>Twitter</label>
                            <Field type='text' id='twitter' name='social.twitter' />
                        </div>

                        <div className="form-control">
                            <label htmlFor='primaryPh'>Primary Phone Number</label>
                            <Field
                                type='text'
                                id='primaryPh'
                                name='phoneNumbers[0]'          // Array 
                            />
                        </div>

                        <div className="form-control">
                            <label htmlFor='secondaryPh'>Secondary Phone Number</label>
                            <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                        </div>

                        <div className="form-control">
                            <label htmlFor='phNumbers'>List of Phone Number</label>
                            <FieldArray name='phNumbers' >
                                {
                                    (fieldArrayProps) => {
                                        //console.log("FieldArray =>", fieldArrayProps)
                                        const { push, remove, form } = fieldArrayProps
                                        const { values } = form
                                        const { phNumbers } = values

                                        return (
                                            <div>
                                                {phNumbers.map((phNumber, index) => (
                                                    <div key={index}>
                                                        <Field name={`phNumbers[${index}]`} />
                                                        {index > 0 && (
                                                            <button type='button' onClick={() => remove(index)}>
                                                                {''} Remove {''}
                                                            </button>
                                                        )}
                                                        <button type='button' onClick={() => push('')}>
                                                            {''} Add {''}
                                                        </button>
                                                    </div>
                                                ))}

                                            </div>
                                        )
                                    }
                                }
                            </FieldArray>
                        </div>

                        <button
                            type='submit'
                            /* check not "isValid" input ==> if disable "Submit Button" */
                            /* check once "isSubmitting = true" ==> if disable "Submit Button" */
                            disabled={!formik.isValid || formik.isSubmitting}
                        >
                            Submit
                        </button>

                        <button type='button' onClick={() => setFormValues(savedValues)}>
                            Saved data
                        </button>
                        <button type='reset'>Reset</button>
                        
                    </Form>
                )
            }}

        </Formik>
    )
}

export default YouTubeForm

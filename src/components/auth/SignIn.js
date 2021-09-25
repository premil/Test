import { useState } from 'react';
import '../../styles/login.css';
import { Button } from '../button/Button';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormikControl from '../Formik/FormikControl';
import FormExample from './Register';
import SignUP from './SignUp';
import SignUPValidation from './SignUPValidation';

const SignIn = () => {

    const [showSignIn, setShowSignIn] = useState(false);        // showSignin "controller" 
    const closeSignin = () => setShowSignIn(false);

    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

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

    const onSubmit = (values, handleChange) => {
        console.log('Form Data =>', values)
        //console.log(handleChange)
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                onSubmit={onSubmit}
            >
                {formik => {
                    return (
                        <div className="signin">
                            <div className="signin-wrapper">
                                <span className="signin-title">Sign in Account</span>
                                <Form className="signinForm">
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
                                    {/*                                     <button type='submit' disabled={!formik.isValid}>Submit</button> */}
                                    <div className="new-button">
                                        <div className="signin-btn">
                                            {/* <Link to='/'> */}
                                            <Button
                                                className='btn'
                                                buttonStyle='btn-black-curve'
                                                buttonSize='btn-medium'
                                                type='submit'
                                                disabled={!formik.isValid}
                                            //onClick={onSubmit}
                                            >
                                                Sign IN
                                            </Button>
                                            {/* </Link> */}
                                        </div>
                                        {/* <div className="signup-btn">
                                            <Button
                                                className='btn'
                                                buttonStyle='btn-black-curve'
                                                buttonSize='btn-medium'
                                                onClick={() => setOpen(true)}        
                                            >
                                                New Account
                                            </Button>
                                            {open && (
                                                <SignUP
                                                    onCancel={close}
                                                    show={open}
                                                    onHide={close}
                                                    Content={<SignUPValidation />}
                                                    onSubmit={() => onSubmit()}

                                                />
                                            )}
                                        </div> */}
                                        <div className="signup-btn">
                                            <Button
                                                className='btn'
                                                buttonStyle='btn-black-curve'
                                                buttonSize='btn-medium'
                                                onClick={() => setOpen(true)}        
                                            >
                                                Account
                                            </Button>
                                            {open && (
                                                <FormExample
                                                    onCancel={close}
                                                    show={open}
                                                    onHide={close}
                                                    Content={<FormExample />}
                                                    onSubmit={() => onSubmit()}

                                                />
                                            )}
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </div>
                    )
                }}
            </Formik>
            
            {/* <Register
                modal_Show={showSignIn}
                modal_Hide={closeSignin}
            /> */}
        </>
    )
}

export default SignIn

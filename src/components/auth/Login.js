import { useState } from 'react';
import '../../styles/login.css';
import { Button } from '../button/Button';
import { useDispatch, useSelector } from "react-redux";
import {  Redirect, Link } from 'react-router-dom';
import { login } from '../../redux/actions/authAction';


const LogIn = () => {

    const dispatch = useDispatch();

    const { isLogged } = useSelector(state => state.users);
    const { message } = useSelector(state => state.message);

    const [showSignIn, setShowSignIn] = useState(false);        // showSignin "controller" 
    const closeSignin = () => setShowSignIn(false);

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState("Sign IN");

    const onChangeUserName = (e) => {
        setUserName(e.target.value);
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleLogIn = (e) => {
        e.preventDefault();
        //console.log(value)
        setLoading("Logging...");

        const userSigninInfo = { "email": username, "password": password};

        async function UserLogin() {
            await axios.post("<<backend-api-link>>", userSigninInfo, {
                headers: {}
            })
            .then(res => {              // not in completed
                dispatch(login(username, password));
                setLoading(res.data ? res.data.massage : "")
                setUserName("");
                setPassword("");
            })
            .catch(err => {
                setUserName("");
                setPassword("");
            })
        }
        UserLogin();
    }

    return (
        <div className="signin">
            <div className="signin-wrapper">
                <span className="signin-title">Sign in Account</span>
                <form className="signinForm">
                    <div className="col1">
                        <lable className="lable">Email</lable>
                        <input
                            className='user-input'
                            type='email'
                            placeholder='Enter your email'
                            value={username}
                            onChange={ onChangeUserName }
                        />
                    </div>
                    <div className="col1">
                        <lable className="lable">Password</lable>
                        <input
                            className='user-input'
                            type='password'
                            placeholder='Enter your Password'
                            value={password}
                            onChange={ onChangePassword }
                        />
                    </div>
                </form>
                <div className="new-button">
                    <div className="signin-btn">
                        {/* <Link to='/'> */}
                            <Button
                                className='btn'
                                buttonStyle='btn-black-curve'
                                buttonSize='btn-medium'
                                type='submit'
                                onClick={handleLogIn}
                            >
                                { loading }
                            </Button>
                        {/* </Link> */}
                    </div>
                    <div className="signup-btn">
                        <Button
                            className='btn'
                            buttonStyle='btn-black-curve'
                            buttonSize='btn-medium'
                            //onClick={() => setShowSignIn(true)}        /* show Signin Modal */
                        >
                            New Account
                        </Button>
                    </div>
                </div>
            </div>
            {/* <SignUpOfficer
                modal_Show={showSignIn}
                modal_Hide={closeSignin}
            /> */}
        </div>
    )
}

export default LogIn

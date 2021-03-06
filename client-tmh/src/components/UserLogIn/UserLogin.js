import React, { useState } from 'react'
import  {useDispatch,useSelector} from 'react-redux'
import { withRouter , Redirect} from 'react-router-dom'
import '../../styles/app.css';
import GoogleLogin from 'react-google-login'
import {authenticateUser, getUser} from '../../store/slice/user'

import API_CALL from '../../apiCalls/APIcalls'

const UserLogin = (loginProps) => {

    const dispatch = useDispatch();
    const user = useSelector(getUser);
    console.log(user)



    const [form, setForm] = useState({});

    const logInHandler = (event) => {
        event.preventDefault();
        dispatch(authenticateUser(form));
       

        // console.log(dispatch)
        // API_CALL.authenticate(form).then(response => {

        //     if (response.data) {
        //         console.log("in condition", response);
        //         loginProps.history.replace("/home");
        //         console.log(loginProps)

        //     }
        // })
    }

    const handleInput = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setForm({ ...form, [name]: value });
    }

    const signUpHandler = () => {
        loginProps.history.replace("/signup");
    }

    const googleHandler = (response) => {
        // console.log(response)
        API_CALL.googleAuthenticate(response).then(response => console.log(response));
    }
    const faceBookHandler = () => { }

        if (user) {
              return (
                <Redirect
                  to={{
                    pathname: '/home',
                    // state: { from: this.props.location }
                  }}
                />
              )
            } else {

                return (
        <div className="m-20 ">
            <p className="text-blue-300 text-center  text-xl sm:text-6xl">Welcome to </p>
            <p className="text-blue-400 text-center  text-2xl sm:text-6xl ">Track My Healing</p>

            <div className="mt-10   md:w-1/3 m-auto">
                <form
                    className="mb-20"
                    onSubmit={logInHandler}>


                    <input
                        placeholder="username"
                        className="mb-2 h-8 sm:h-12 w-full border-gray-100 border-2 bg-gray-200"
                        name="userId"
                        type="text"
                        onChange={(e) => handleInput(e)}
                    />

                    <input
                        placeholder="password"
                        className="mb-2 h-8 sm:h-12 w-full border-gray-100 border-2 bg-gray-200"
                        type="password"
                        name="password"
                        onChange={(event) => handleInput(event)}
                    />


                    <div className="mt-2">
                        <button
                            className="bg-blue-300 w-full h-8 sm:h-12 text-white"
                            type="submit"
                            value="submit">CONTINUE
                    </button>
                    </div>

                </form>



                <div className="mb-2">
                    <button
                        className="bg-green-300 w-full h-8 text-white"
                        onClick={signUpHandler}>Create new Account</button>
                </div>

                <div className="mb-2">
                    <button
                        className="bg-blue-500 w-full h-8 text-white"
                        onClick={faceBookHandler}>Login with Facebook</button>
                </div>

                <div>
                    <a
                        href="http://localhost:3001/api/auth/google"
                        className="bg-red-500 w-full h-8 text-white"
                        >Login with Google</a>


                    {/* <GoogleLogin
                        // clientId="833667121511-bfhhs616kln3bucu245btkd9l5qvr2c6.apps.googleusercontent.com"
                        href="http//localhost:3001/api/auth/google"
                        className=""
                        buttonText="Continue with Google"

                        // onSuccess={googleHandler}
                        // onFailure={googleHandler}
                        // cookiePolicy={'single_host_origin'}
                    /> */}

                </div>

            </div>
        </div>
                )}
    ;

}

export default withRouter(UserLogin);
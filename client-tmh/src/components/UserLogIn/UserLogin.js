import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import API_CALL from '../../apiCalls/APIcalls'

const UserLogin = (loginProps) => {

    const [form, setForm] = useState({});

    const logInHandler = (event) => {
        event.preventDefault();
        const validUser = false;

        API_CALL.authenticate(form).then(response => {

          
         

            if(response.data){
                console.log("in condition",response);
                loginProps.history.replace("/home");
                console.log(loginProps)
               
            }
        })

    }


    const handleInput = (event) => {
        console.log("input usesrname", event.target);
        const {name, value} = event.target;
        console.log(name,value);
        setForm({...form, [name]: value });
    }

    const signUpHandler = () => {
        loginProps.history.replace("/signup");
    }
    return (
        <div>
            {/* //onSubmit={this.handleSubmit}> */}
            <form 
            onSubmit={logInHandler}
            >

                <div className="bg-gray-100">
                    <label> UserName:</label>
                    <input
                        className="bg-gray-100"
                        name="userId"
                        type="text"
                        onChange={(e)=>handleInput(e)}
                    />
                </div>


                <label>Password: </label>
                <div>

                    <input 
                     className="bg-gray-600"
                        type="password"
                        name="password"
                        onChange={(event) => handleInput(event)} />
                </div>

                <button type="submit" value="submit">Submit</button>
            </form>

            <div>
                <button onClick={signUpHandler}>Register</button>

            </div>
        </div>
    );

}

export default withRouter(UserLogin);
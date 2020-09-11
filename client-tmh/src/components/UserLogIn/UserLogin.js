import React from 'react'
import {withRouter} from 'react-router-dom'

const userLogin = (loginProps) => {

    const signUpHandler= ()=>{
        loginProps.history.replace("/signup");
    }
    return (
        <div>
            {/* //onSubmit={this.handleSubmit}> */}
            <form onSubmit={loginProps.handleSubmit}>

                <div className="bg-gray-100">
                    <label> UserName:</label>
                    <input
                        className="bg-gray-100"
                        type="text"
                        value={loginProps.userName}
                        onChange={loginProps.handleInput}
                    />
                </div>


                <label>Password: </label>
                <div>

                    <input type="password" value={loginProps.password} onChange={loginProps.handlePassword} />
                </div>

                <button type="submit" value="submit">Submit</button>
            </form>

            <div>
                <button  onClick={signUpHandler}>Register</button>

            </div>
        </div>
    );

}

export default withRouter(userLogin);
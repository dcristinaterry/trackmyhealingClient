import React from 'react'

const userSingUp = (singUpProps) => {


    return (
        <div>
            <h1>Sign up.</h1>
            <input type="text" onChange={userNameHandler} value={userNameValue}></input>
            <input type="text" onChange={userLastNameHandler} value={userLastNameValue}></input>
            <input type="text" onChange={userLastNameHandler} value={userLastNameValue}></input>
        </div>

    );

}
export default userSingUp;
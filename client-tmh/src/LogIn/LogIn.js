import React from 'react'


const login = (loginProps) => {


    return (
        <div>
            {/* //onSubmit={this.handleSubmit}> */}
            <form onSubmit={loginProps.handleSubmit}>

                <div>
                    <label> UserName:</label>
                    <input type="text" value={loginProps.userName} onChange={loginProps.handleInput} />
                </div>


                <div>
                    <label>Password: </label>
                    <input type="password" value={loginProps.password} onChange={loginProps.handlePassword} />
                </div>

                <button type="submit" value="submit">Submit</button>
            </form>

        </div>


    );

}

export default login;
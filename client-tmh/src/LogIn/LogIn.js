import React from 'react'


const login = (loginProps) => {


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

        </div>
    );

}

export default login;
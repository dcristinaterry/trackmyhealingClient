import react from 'react'


const login = (loginProps) => {


    return (
        <div>

            <form onSubmit={this.handleSubmit}>
                <label>
                    UserName:
                    <input type="text" value={loginProps.userName} onChange={loginProps.handleInput} />
                </label>

                <label>
                    Password:
                    <input type="password" value={loginProps.password} onChange={loginProps.handlePassword} />
                </label>
                <button type="submit" value={loginProps.HandleSubmit} />
            </form>

        </div>


    );

}
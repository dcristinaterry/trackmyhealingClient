import React, {useState}from 'react'
// import {useForm} from 'react-hook-form'
import API_REGISTER from '../../apiCalls/APIcalls'

const UserSingUp = () => {

    // const {handleSubmit, register, errors} = useForm();

    const [name, setName] = useState({name:''});
    const [lastName, setLastName] = useState({lastName:''});
    const [email, setEmail] = useState({email:''});
    const [phoneNumber, setPhoneNumber] = useState({phoneNumber:''});
    const [password, setPassword] = useState({password:''});
    const [passwordVerify, setPasswordVerify] = useState({passwordVerify:''});



    const userNameHandler = (event)=>{
        console.log("name",event.target.value)
        setName({name: event.target.value});
    }

    const userLastNameHandler = (event)=>{
        setLastName({lastName:event.target.value});
    }

    const userPhoneHandler = (event)=>{
        setPhoneNumber({phoneNumber:event.target.value});
    }

    const userEmailHandler = (event)=>{
        setEmail({email: event.target.value});
    }

    const userPasswordHandler =(event)=>{
        setPassword({password: event.target.value});
    }

    const userPasswordSecondHandler = (event) => {
        setPasswordVerify({passwordVerify: event.target.value});
        // TODO: add condition to verify against password
        
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        const user = {
            firstName: name.name,
            lastName: lastName.lastName,
            phone: phoneNumber.phoneNumber,
            email_address: email.email,
            password: password.password
        }

        
        API_REGISTER.register(user).then(response =>{
            console.log("this is the response",response);
        })
    }


    return (
        <div>
            <h1>Sign up.</h1>

            <form onSubmit={submitHandler} >
                <div>
                    <label>Name</label>
                    <input type="text" onChange={(event)=>userNameHandler(event)} value={name.name}></input>

                </div>
                <div>
                    <label>Last Name:</label>
                    <input type="text" onChange={userLastNameHandler} value={lastName.lastName}></input>
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" onChange={userPhoneHandler} value={phoneNumber.phoneNumber}></input>
                </div>

                <div>
                    <label>E-mail    </label>
                    <input type="text" onChange={userEmailHandler} value={email.email}></input>
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" onChange={userPasswordHandler} value={password.password}></input>
                </div>

                <div>
                    <label>Confirm Password</label>
                    <input type="password" onChange={userPasswordSecondHandler} value={passwordVerify.passwordVerify}></input>
                </div>

                <div >
                    <button type="submit" onClick={submitHandler}>Submit</button>
                </div>
            </form>
        </div>

    );
}
export default UserSingUp;
import axios from 'axios'
import * as actions from '../user'

const auth =({dispatch}) => next => async action =>{

    console.log("hola");
    const {url, method, data} = action.payload;
    console.log("auth middleware",url);

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:3001/api/',
            url,
            method,
            data
        }
        )
        console.log(response);
    }catch(error){
        console.log(error)
    }

}

export default auth;
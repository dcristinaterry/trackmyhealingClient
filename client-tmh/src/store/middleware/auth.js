import axios from 'axios'

import { BrowserRouter}from 'react-router-dom';
import * as actions from '../user'

const auth =({dispatch}) => next => async action =>{

    if (action.type!==actions.apiCallLogInUser.type) return next(action);

    const {url, method, data,onSuccess} = action.payload;

    try{
        const response = await axios.request({
            baseURL: 'http://localhost:3001/api/',
            url,
            method,
            data
        }
        )

       if (onSuccess) dispatch({type: onSuccess, payload:response.data})
       
    }catch(error){
        console.log(error)
    }

}

export default auth;
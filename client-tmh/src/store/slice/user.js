import { createSlice } from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallLogInUser} from '../user'


const slice = createSlice({
    name: 'user',
    initialState:{
        user: {},
        loading:false,
        lasFetch:null
    },
    reducers:{

        // createUser

        userAuthenticated: (user, action) =>{
            
            console.log(user);
            console.log(action.payload)

            user = action.payload;
        }, 
        // getUser
        // getUserGoogle
        // getUserFacebook
        
    }
} 
)

const {userAuthenticated} = slice.actions
console.log("here at userauthenticate" , userAuthenticated.type)
export default slice.reducer;



//********ACTION CREATORS *************//
const url = '/auth/login'
export const authenticateUser=(form)=> apiCallLogInUser({
    url, 
    data: form,
    method: 'GET',
    onSuccess: userAuthenticated.type
    
})


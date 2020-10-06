import { createSlice } from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallLogInUser} from '../user'


const slice = createSlice({
    name: 'userInfo',
    initialState:{
        user: {},
        loading:false,
        lasFetch:null
    },
    reducers:{

        // createUser

        userAuthenticated: (user, action) =>{
            user.userInfo = action.payload;
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
const url = 'auth/login/'
export const authenticateUser=(form)=> apiCallLogInUser({
    url, 
    data: form,
    method: 'post',
    onSuccess: userAuthenticated.type
    
})

export const getUser=createSelector(
    state=>state.entities.user,
    user=>user.userInfo
)
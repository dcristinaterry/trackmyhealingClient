import {createAction} from '@reduxjs/toolkit'

export const apiCallNewUser = createAction("api/createUser");
export const apiCallLogInUser = createAction("api/logInUser")
export const apiCallLogOutUser = createAction("api/logOutUser")
export const apiCallGoogleUser= createAction("api/googledLoggedIn");

import { jwtDecode } from "jwt-decode";
import UserModel from "../Models/UserModel";
import { createStore } from "redux";
import CredentialsModel from "../Models/CredentialsModel";

export class AuthState {
    public user: UserModel = null;
    public token: string = null;

    constructor() {
        this.token = localStorage.getItem(`token`);
        if (this.token) {
            this.user = jwtDecode<{ user: UserModel }>(this.token).user
        }
    }
}

export enum AuthActionTypes {
    Register = "Register",
    Login = "Login",
    Logout = "Logout"
}

export interface AuthActions {
    type: AuthActionTypes,
    payload?: any
}

function AuthReducer(currentState = new AuthState(), action: AuthActions) {
    const newState = { ...currentState }

    switch (action.type) {
        // Register
        case AuthActionTypes.Register:
            const { user } = jwtDecode<{ user: UserModel }>(action.payload); // --> Create a token from user
            // Check
            console.log(user);
            // Save Token
            newState.token = action.payload;
            // Extract user
            newState.user = user;

            break;

        //    Log-In
        case AuthActionTypes.Login:
            newState.user = jwtDecode<{ user: UserModel }>(action.payload).user;

            newState.token = action.payload;
            localStorage.setItem(`token`, newState.token)



            break;
        // Log-Out
        case AuthActionTypes.Logout:
            newState.user = null
            newState.token = null
            localStorage.removeItem(`token`)
            break;
    }


    return newState

}


export const authStore = createStore(AuthReducer)
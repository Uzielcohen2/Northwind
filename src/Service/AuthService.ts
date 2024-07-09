// authService.ts
import axios from "axios";
import UserModel from "../Models/UserModel";
import appConfig from "../Utils/AppConfig";
import notificationService from "./NotificationService";
import { AuthActionTypes, AuthActions, authStore } from "../Redux/AuthState";
import CredentialsModel from "../Models/CredentialsModel";
import { login as authLogin, logout as authLogout } from "../Components/AuthArea/authHelper";

class AuthService {
    public async register(user: UserModel): Promise<void> {
        try {
            const response = await axios.post(appConfig.registerUrl, user);
            const token = response.data;

            const action: AuthActions = { type: AuthActionTypes.Register, payload: token };
            authStore.dispatch(action);
            authLogin();
        }
        catch (err: any) {
            notificationService.error(err.message);
            throw err;
        }
    }

    public async login(credentials: CredentialsModel): Promise<void> {
        try {
            const response = await axios.post(appConfig.loginUrl, credentials);
            const token = response.data;

            const action: AuthActions = { type: AuthActionTypes.Login, payload: token };
            authStore.dispatch(action);
            authLogin();
        }
        catch (err: any) {
            notificationService.error(err.message);
            throw err;
        }
    }

    public logout(): void {
        const action: AuthActions = { type: AuthActionTypes.Logout };
        authStore.dispatch(action);
        authLogout();
    }
}

const authService = new AuthService();

export default authService;

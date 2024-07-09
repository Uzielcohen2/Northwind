import { NavLink } from "react-router-dom";
import "./AuthMenu.css";
import { useEffect, useState } from "react";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Service/AuthService";
import { authStore } from "../../../Redux/AuthState";
import { unsubscribe } from "diagnostics_channel";
import notificationService from "../../../Service/NotificationService";

function AuthMenu(): JSX.Element {

    const [user, setUser] = useState<UserModel>();

    useEffect(() => {
        setUser(authStore.getState().user);

        const unsubscribe = authStore.subscribe(() => {
            setUser(authStore.getState().user);
        });
        return unsubscribe
    }, []);


    function logoutMe(): void {
        authService.logout();
        notificationService.success("Bye Bye , Hope we will see you soon 🤟")
    }
    return (
        <div className="AuthMenu">
            {!user &&
                <p>
                    <span>Hello guest</span>
                    <span> | </span>
                    <NavLink to={"/register"}> Register </NavLink>
                    <span> | </span>
                    <NavLink to={"login"}>Login</NavLink>
                </p>}

            {user &&
                <p>
                    <span>Hello {user.firstName + " " + user.lastName}</span>
                    <span> | </span>
                    <NavLink to="#" onClick={logoutMe}> Logout </NavLink>
                </p>}

        </div>
    );
}

export default AuthMenu;

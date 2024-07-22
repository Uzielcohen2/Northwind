import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import { authStore } from "../../../Redux/AuthState";
import authService from "../../../Service/AuthService";
import notificationService from "../../../Service/NotificationService";
import appConfig from "../../../Utils/AppConfig";
import "./AuthMenu.css";

function AuthMenu(): JSX.Element {
    const navigate = useNavigate();

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
        notificationService.success("Bye Bye , Hope we will see you soon 🤟");
        navigate(appConfig.HomeRoute)

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

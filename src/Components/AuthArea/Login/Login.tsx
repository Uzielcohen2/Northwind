import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import CredentialsModel from "../../../Models/CredentialsModel";
import authService from "../../../Service/AuthService";
import notificationService from "../../../Service/NotificationService";
import appConfig from "../../../Utils/AppConfig";
import NavBar from "../../../Utils/NavBar/NavBar";
import "./Login.css";
import { Button } from "@mui/material";

function Login(): JSX.Element {

    const { handleSubmit, register } = useForm<CredentialsModel>();
    const navigate = useNavigate();


    // Function
    async function send(credentials: CredentialsModel) {

        try {

            await authService.login(credentials);

            notificationService.success(`${credentials.email} Logged In  Successfully `);
            navigate(appConfig.HomeRoute)

        }
        catch (err: any) {
            notificationService.error(err);
            console.error("Error during registration:", err);
        }


    }

    return (
        <div className="Login">
            {/* Navbar */}
            <NavBar />
            {/* Login Form */}
            <div className="login-title">
                <h2>Login</h2>
            </div>


            <form onSubmit={handleSubmit(send)}>

                <label>email : </label>
                <input type="email"  {...register("email")} />


                <label>Password : </label>
                <input type="password" {...register("password")} />


                <button type="submit">Login</button>
                <Button>
                    <NavLink to={appConfig.HomeRoute} >Go Back</NavLink>
                </Button>

            </form>


        </div>
    );
}

export default Login;

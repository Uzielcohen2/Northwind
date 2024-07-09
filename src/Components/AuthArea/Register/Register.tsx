import { Button } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import UserModel from "../../../Models/UserModel";
import authService from "../../../Service/AuthService";
import notificationService from "../../../Service/NotificationService";
import appConfig from "../../../Utils/AppConfig";
import PasswordInput from "../PasswordInput/PasswordInput";
import "./Register.css";
import NavBar from "../../../Utils/NavBar/NavBar";

function Register(): JSX.Element {

    //UseForm Method 

    const methods = useForm<UserModel>();
    const { handleSubmit } = methods;

    const navigate = useNavigate();

    // Function
    async function send(user: UserModel) {

        try {
            notificationService.success("Registered Successfully");

            await authService.register(user);
            navigate(appConfig.HomeRoute)
        }
        catch (err: any) {
            notificationService.error(err);
            console.error("Error during registration:", err);
        }


    }

    { console.log("Page render register") }

    // Return
    return (

        < div className="Register" >
            {/* Navbar */}
            <NavBar />

            {/* Register Form */}
            <div className="register-title">
                <h2>Register</h2>
            </div>


            <FormProvider{...methods}>

                <form onSubmit={handleSubmit(send)}>
                    <label>First Name : </label>
                    <input type="text" {...methods.register("firstName")} />

                    <label>Last Name : </label>
                    <input type="text" {...methods.register("lastName")} />

                    <label>Username : </label>
                    <input type="text"  {...methods.register("username")} />

                    <label>email : </label>
                    <input type="email"  {...methods.register("email")} />

                    {/* Password label */}
                    <PasswordInput />



                    <button type="submit">Register</button>

                    <Button>
                        <NavLink to={appConfig.HomeRoute} >Go Back</NavLink>
                    </Button>

                </form>

            </FormProvider>



        </div >
    );
}

export default Register;

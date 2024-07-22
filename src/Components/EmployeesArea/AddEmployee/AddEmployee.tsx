import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeeService from "../../../Service/EmployeeService";
import notificationService from "../../../Service/NotificationService";
import NavBar from "../../../Utils/NavBar/NavBar";
import "./AddEmployee.css";

function AddEmployee(): JSX.Element {

    // Navigator
    const navigate = useNavigate();

    // useForm to add Employee
    const { register, handleSubmit } = useForm<EmployeeModel>();

    // async function send
    async function send(employee: EmployeeModel) {
        try {
            console.log(employee);
            // Image casting
            employee.image = (employee.image as unknown as FileList)[0];

            // Add Employee ->
            const beEmployee = await employeeService.addEmployee(employee);

            // Notification
            notificationService.success("Employee has been added successfully 🙂")
            navigate("/employees/details/" + beEmployee.id)

        } catch (err: any) {
            notificationService.error(err)
        }
    }

    return (
        // ADD EMPLOYEE FORM
        <div className="AddEmployee">
            {/* Navbar */}
            <NavBar />
            <form onSubmit={handleSubmit(send)}>
                {/* First Name */}
                <label>First Name ✳</label>
                <input type="text" {...register("firstName")} />
                {/* Last Name */}
                <label>Last Name ✳</label>
                <input type="text" {...register("lastName")} />
                {/* Title */}
                <label>Title ✳</label>
                <input type="text" {...register("title")} />
                {/* Birth Date  */}
                <label>Birth Date ✳</label>
                <input type="date" {...register("birthDate")} />
                {/* Country */}
                <label>Country ✳</label>
                <input type="text" {...register("country")} />
                {/* City */}
                <label>City ✳</label>
                <input type="text" {...register("city")} />
                {/* Image */}
                <label>Enter your image</label>
                <input type="file" accept="image/*" {...register("image")} />

                {/* ADD Button*/}
                <button>Add</button>

                {/* Required Mark */}
                <p>  All the labels mark with ✳ are required ❕ </p>
                <Button>
                    <NavLink to="/employees" >Go Back</NavLink>
                </Button>

            </form>
        </div>
    );
}

export default AddEmployee;

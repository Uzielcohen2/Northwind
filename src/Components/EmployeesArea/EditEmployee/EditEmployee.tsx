import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeeService from "../../../Service/EmployeeService";
import notificationService from "../../../Service/NotificationService";
import "./EditEmployee.css";
import NavBar from "../../../Utils/NavBar/NavBar";
import appConfig from "../../../Utils/AppConfig";
import { Button } from "@mui/material";

function EditEmployee(): JSX.Element {

    // Use Params 
    const params = useParams()
    const id = +params.empId

    // useForm
    const { register, handleSubmit, setValue } = useForm<EmployeeModel>();

    // Navigator
    const navigate = useNavigate();

    // Use Effect 
    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(emp => {
                setValue("firstName", emp.firstName);
                setValue("lastName", emp.lastName);
                setValue("title", emp.title);
                setValue("country", emp.country);
                setValue("city", emp.city);
                setValue("birthDate", emp.birthDate);
                setValue("imageUrl", emp.imageUrl);

            })
            .catch(err => notificationService.error(err.message))
    }, []);

    // Update function 
    async function update(employee: EmployeeModel) {
        try {
            console.log(employee);
            employee.id = id
            // Check if id exist
            if (!employee.id) {
                notificationService.error("Employee ID is missing.. Cannot update ! ")
            }
            // Cast image 
            employee.image = (employee.image as unknown as FileList)[0];

            // Add Employee to service
            const beEmployee = await employeeService.updateEmployee(employee)
            notificationService.success("Employee Has been Edited successfully 🙂");
            navigate("/employees/details/" + beEmployee.id)

        } catch (err: any) {
            notificationService.error(err.message)
        }
    }


    return (
        <div className="EditEmployee">

            {/* Navbar */}
            <NavBar />

            <form onSubmit={handleSubmit(update)}>
                {/*First Name */}
                <label>First Name ✳</label>
                <input type="text"{...register("firstName")} placeholder="Enter your first name " />


                {/*Last Name */}
                <label>Last Name ✳</label>
                <input type="text"{...register("lastName")} placeholder="Enter your last name " />

                {/* Title */}
                <label>Title ✳</label>
                <input type="text"{...register("title")} placeholder="Enter your title " />


                {/* Country */}
                <label>Country ✳</label>
                <input type="text"{...register("country")} placeholder="Enter your Country " />

                {/* City */}
                <label>City ✳</label>
                <input type="text"{...register("city")} placeholder="Enter your City " />

                {/* BirthDate */}
                <label>Birthday ✳</label>
                <input type="date"{...register("birthDate")} />


                {/* Image */}
                <label>Image</label>
                <input type="file"{...register("image")} />

                {/* Button */}
                <button>Update</button>
                {/* Required Mark */}
                <p>  All the labels mark with ✳ are required ❕ </p>
                {/* Back */}
                <Button>
                    <NavLink to={appConfig.employeesDetailsRoute + id} >Go Back</NavLink>
                </Button>

            </form>
        </div>
    );
}

export default EditEmployee;



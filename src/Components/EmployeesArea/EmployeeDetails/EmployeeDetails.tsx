import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeeService from "../../../Service/EmployeeService";
import notificationService from "../../../Service/NotificationService";
import appConfig from "../../../Utils/AppConfig";
import NavBar from "../../../Utils/NavBar/NavBar";
import useTitle from "../../../Utils/useTitle";
import "./EmployeeDetails.css";

function EmployeeDetails(): JSX.Element {

    // Title
    useTitle("Northiwnd | Employee Details")

    // Navigator
    const navigate = useNavigate();

    //Params
    const params = useParams();
    const id = +params.empId

    //Use State
    const [feEmployee, setFeEmployee] = useState<EmployeeModel>()

    // Use Effect
    useEffect(() => {
        employeeService.getOneEmployee(id)
            .then(beEmp => setFeEmployee(beEmp))
            .catch(err => notificationService.error(err))
    }, [])

    // Delete function
    async function deleteEmployee() {
        console.log(id);
        try {
            const ok = window.confirm("Are YOU SURE ?!! Please double check");
            if (!ok) return;

            await employeeService.deleteEmp(id);
            notificationService.success(`employee ${id} has been deleted.`);
            navigate(appConfig.employeesRoute)
        } catch (err: any) {
            notificationService.error(err)
        }

    }



    return (
        <div className="EmployeeDetails">
            <NavBar />

            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        // ImageUrl
                        image={feEmployee?.imageUrl}
                        alt="Employee image"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {/* First Name & Last Name */}
                            {feEmployee?.firstName} {feEmployee?.lastName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            <p>
                                {/* Title */}
                                Title : {feEmployee?.title}.
                                <hr />
                                {/* Location */}
                                Location: {feEmployee?.city},{feEmployee?.country}
                                <br />
                                {/* Birthday */}
                                Birthday : {feEmployee?.birthDate}
                            </p>
                            {/* Buttons */}
                            <div className="employees-buttons">
                                {/* Back */}
                                <NavLink to="/employees">Back</NavLink>
                                {/* Edit */}
                                <NavLink to={appConfig.employeesEditRoute + id}>Edit</NavLink>
                                {/* Delete */}
                                <NavLink to="#" onClick={deleteEmployee}>Delete</NavLink>
                            </div>
                        </Typography>
                    </CardContent>

                </CardActionArea>

            </Card>



        </div>
    );
}

export default EmployeeDetails;

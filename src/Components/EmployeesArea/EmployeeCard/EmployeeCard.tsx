import { Button, Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import EmployeeModel from "../../../Models/EmployeeModel";
import appConfig from "../../../Utils/AppConfig";
import useTitle from "../../../Utils/useTitle";
import "./EmployeeCard.css";


// Props type
type EmployeesProps = {
    key: number,
    employee: EmployeeModel
}
function EmployeeCard(props: EmployeesProps): JSX.Element {
    // Title
    useTitle("Northwind | Employee Card")

    return (

        // Whole section is a navlink
        <NavLink to={appConfig.employeesDetailsRoute + props.employee.id}>

            <div className="EmployeeCard">
                <div key={props.employee.id} className="employee-cards">


                    <p>


                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    // Card Image 
                                    image={props.employee.imageUrl}
                                    alt="Employee image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {/* First Name && Last Name */}
                                        {props.employee.firstName} {props.employee.lastName}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <p>
                                            {/* Title */}
                                            Title : {props.employee.title}.
                                            <hr />
                                            {/* Location */}
                                            Location: {props.employee.city},{props.employee.country}
                                            <br />
                                            {/* Birthday */}
                                            Birthday : {props.employee.birthDate}
                                        </p>
                                    </Typography>
                                </CardContent>

                            </CardActionArea>

                        </Card>
                    </p>




                </div>


            </div>

        </NavLink>
    );
}

export default EmployeeCard;

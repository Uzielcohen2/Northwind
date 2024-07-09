import { NavLink } from "react-router-dom";

import { useEffect, useState } from 'react';
import EmployeeModel from '../../../Models/EmployeeModel';
import { EmployeesActionTypes, EmployeesActions, employeesStore } from "../../../Redux/EmployeesState";
import employeeService from '../../../Service/EmployeeService';
import NavBar from "../../../Utils/NavBar/NavBar";
import clear from "../../../assets/images/clear.png";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import TotalEmployees from "../TotalEmployees/TotalEmployees";
import "./EmployeesList.css";



function EmployeesList(): JSX.Element {
    // Use State Hook 
    const [feEmp, setFeEmp] = useState<EmployeeModel[]>([])

    // Use Effect Hook
    useEffect(() => {
        employeeService.getAllEmp().then(beEmp => setFeEmp(beEmp))
            .catch(err => alert(err.message))


    }, []);

    // Clear All Function
    function clearAll(): void {
        const action: EmployeesActions = { type: EmployeesActionTypes.ClearAll }
        employeesStore.dispatch(action);
    }

    return (
        <div className="EmployeesList">
            {/* Navbar */}
            <NavBar />
            {/* Total prod + Add prod */}

            <div className="employees-title">
                {/* Title */}
                <h1>Our Employees</h1>
                {/* Total Employees */}
                <TotalEmployees />
                <div className="add-employee">
                    {/* Add Employee*/}
                    <NavLink to="/employees/details/new">➕ Add Employee</NavLink>
                </div>
                <div className="clear-employee">
                    {/* Clear All Employees*/}
                    <NavLink to="/home" onClick={clearAll}><img src={clear} className="clear-all" /></NavLink>
                </div>
            </div>
            {/* Employees Display  */}
            <span className="span-card">Click on any section for actions</span>

            {feEmp?.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}

        </div>
    );
}

export default EmployeesList;






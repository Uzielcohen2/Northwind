import { useEffect, useState } from "react";
import { employeesStore } from "../../../Redux/EmployeesState";
import employeeService from "../../../Service/EmployeeService";

function TotalEmployees(): JSX.Element {
    // Use State With initial number
    const [count, setCount] = useState<number>(0);

    // Use Effect
    useEffect(() => {
        employeeService.getAllEmp()
            .then(e => setCount(e.length))
            .catch(err => alert(err.message))

        const unsubscribe = employeesStore.subscribe(() => {
            setCount(employeesStore.getState().employees.length)
        })
        return unsubscribe
    }, [])

    return (
        <div className="TotalEmployees">
            {/* TOTAL EMPLOYEES */}
            <p>Total Employees : {count}</p>
        </div>
    );
}

export default TotalEmployees;

import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import appConfig from "../Utils/AppConfig";
import { employeesStore, EmployeesActions, EmployeesActionTypes } from "../Redux/EmployeesState";

class EmployeeService {
    // Get All Employees
    public async getAllEmp(): Promise<EmployeeModel[]> {

        let employees = employeesStore.getState().employees
        // If not get them from server
        if (employees.length === 0) {
            // Get all product to object (response)
            const response = await axios.get(appConfig.employeesUrl)
            // Extract the employees
            employees = response.data;

            //Save to state
            const action: EmployeesActions = { type: EmployeesActionTypes.SetEmployee, payload: employees }
            employeesStore.dispatch(action)

        }
        return employees
    }
    // -------------------------------------------------------------------------


    // Get One Employee
    public async getOneEmployee(empId: number): Promise<EmployeeModel> {
        // Get employees by Id : 
        const response = await axios.get(appConfig.employeesUrl + empId);

        const employee = response.data

        return employee
    }

    // -------------------------------------------------------------------------

    // Add Employee
    public async addEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
        const options = {
            headers: { "Content-Type": "multipart/form-data" }
        }

        // Send employee to backend
        const response = await axios.post(appConfig.employeesUrl, employee, options);
        // Extract
        const beEmployee = response.data;

        // Update store 
        const action: EmployeesActions = { type: EmployeesActionTypes.AddEmployee, payload: beEmployee }
        employeesStore.dispatch(action);

        return beEmployee
    }
    // -------------------------------------------------------------------------

    // UpdateEmployee
    public async updateEmployee(employee: EmployeeModel): Promise<EmployeeModel> {
        const options = {
            headers: { "Content-Type": "multipart/form-data" }
        }

        const response = await axios.put(appConfig.employeesUrl + employee.id, employee, options)

        const updateEmployee = response.data;
        console.log(updateEmployee);
        return updateEmployee;

    }
    // -------------------------------------------------------------------------

    // Delete employee
    public async deleteEmp(empId: number): Promise<void> {
        await axios.delete(appConfig.employeesUrl + empId);

        const action: EmployeesActions = { type: EmployeesActionTypes.DeleteEmployee, payload: empId };
        employeesStore.dispatch(action)
    }

}
const employeeService = new EmployeeService()
export default employeeService
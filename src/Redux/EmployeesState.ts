import { createStore } from "redux";
import EmployeeModel from "../Models/EmployeeModel";


// Class State
export class EmployeeState {
    employees: EmployeeModel[] = [];
}
// Enum Action Types
export enum EmployeesActionTypes {
    SetEmployee = "SetEmployee",
    AddEmployee = "AddEmployee",
    UpdateEmployee = "UpdateEmployee",
    DeleteEmployee = "DeleteEmployee",
    ClearAll = "ClearAll"

}
// Interface Actions
export interface EmployeesActions {
    type: EmployeesActionTypes,
    payload?: any
}
// Reducer
function employeesReducer(currentState = new EmployeeState(), action: EmployeesActions): EmployeeState {


    const newState = { ...currentState }

    switch (action.type) {
        // Set Employee
        case EmployeesActionTypes.SetEmployee:
            newState.employees = action.payload;
            break;
        // Add Employee
        case EmployeesActionTypes.AddEmployee:
            newState.employees.push(action.payload);
            break;
        // Update Employee
        case EmployeesActionTypes.UpdateEmployee:
            const indexToUpdate = newState.employees.findIndex(e => e.id === action.payload.id);
            newState.employees[indexToUpdate] = action.payload
            break;
        // Delete Employee
        case EmployeesActionTypes.DeleteEmployee:
            const indexToDelete = newState.employees.findIndex(e => e.id === action.payload.id);
            newState.employees.splice(indexToDelete, 1);
            break;
        // Clear All
        case EmployeesActionTypes.ClearAll:
            newState.employees = [];
            break;

    }

    return newState

}

// Store
export const employeesStore = createStore(employeesReducer);


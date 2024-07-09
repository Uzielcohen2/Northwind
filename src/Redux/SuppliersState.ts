import { createStore } from "redux";
import SupplierModel from "../Models/SupplierModel";
import { EmployeesActionTypes } from "./EmployeesState";

// Class state
export class SuppliersState {
    suppliers: SupplierModel[] = [];
}
// Enum Action types
export enum SuppliersActionTypes {
    SetSupplier = "SetSupplier",
    AddSupplier = "AddSupplier",
    UpdateSupplier = "UpdateSupplier",
    DeleteSupplier = "DeleteSupplier",
    ClearAll = "ClearAll",
}
// Interface Actions
export interface SuppliersActions {
    type: SuppliersActionTypes,
    payload?: any
}
// Reducer
function suppliersReducer(currentState = new SuppliersState(), action: SuppliersActions): SuppliersState {

    // new state
    const newState = { ...currentState };
    // Switch cases
    switch (action.type) {
        case SuppliersActionTypes.SetSupplier:
            newState.suppliers = action.payload;
            break;
        case SuppliersActionTypes.AddSupplier:
            newState.suppliers.push(action.payload);
            break;
        case SuppliersActionTypes.UpdateSupplier:
            const indexToUpdate = newState.suppliers.findIndex(s => s.id === action.payload.id);
            newState.suppliers[indexToUpdate] = action.payload;
            break;

        case SuppliersActionTypes.DeleteSupplier:
            const indexToDelete = newState.suppliers.findIndex(s => s.id === action.payload.id);
            newState.suppliers.splice(indexToDelete, 1)
            break;

        case SuppliersActionTypes.ClearAll:
            newState.suppliers = [];
            break;
    }

    return newState
}


// Store
export const suppliersStore = createStore(suppliersReducer)
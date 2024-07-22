import { createStore } from "redux";
import CategoryModel from "../Models/CategoryModel";

export class CategoryState {
    categories: CategoryModel[] = [];
}

export enum CategoryActionTypes {
    SetCategory = "SetCategory",
    AddCategory = "AddCategory",
    UpdateCategory = "UpdateCategory",
    DeleteCategory = "DeleteCategory",
    ClearAll = "ClearAll",
}

export interface CategoryActions {
    type: CategoryActionTypes,
    payload?: any
}

function categoryReducer(currentState = new CategoryState(), action: CategoryActions): CategoryState {

    const newState = { ...currentState };

    switch (action.type) {
        // Set Category
        case CategoryActionTypes.SetCategory:
            newState.categories = action.payload;
            break;
        // Add Category
        case CategoryActionTypes.AddCategory:
            newState.categories.push(action.payload)
            break;
        // Update Category
        case CategoryActionTypes.UpdateCategory:
            const indexToUpdate = newState.categories.findIndex(c => c.id === action.payload.id);
            newState.categories[indexToUpdate] = action.payload;
            break;
            // Delete Category
            const indexToDelete = newState.categories.findIndex(c => c.id === action.payload.id);
            newState.categories.splice(indexToDelete, 1);
            break;
        // Clear All
        case CategoryActionTypes.ClearAll:
            newState.categories = [];
            break;
    }

    return newState
}

export const categoryStore = createStore(categoryReducer)
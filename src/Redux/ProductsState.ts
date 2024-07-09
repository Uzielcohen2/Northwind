import { createStore } from "redux";
import ProductsModel from "../Models/ProductModel";

// Class State
export class ProductsState {
    products: ProductsModel[] = [];
}
// Enum ActionTypes
export enum ProductsActionTypes {
    SetProduct = "SetProduct",
    AddProduct = "AddProduct",
    UpdateProduct = "UpdateProduct",
    DeleteProduct = "DeleteProduct",
    ClearAll = "ClearAll"
}

// Interface Actions
export interface ProductsActions {
    type: ProductsActionTypes,
    payload?: any

}

//Reducer Function

function productsReducer(currentState = new ProductsState(), action: ProductsActions): ProductsState {

    const newState = { ...currentState }

    switch (action.type) {
        // Set Product
        case ProductsActionTypes.SetProduct:
            newState.products = action.payload;
            break;
        // Add Product
        case ProductsActionTypes.AddProduct:
            newState.products.push(action.payload);
            break;
        // Update Product
        case ProductsActionTypes.UpdateProduct:
            const indexToUpdate = newState.products.findIndex(p => p.id === action.payload.id);
            newState.products[indexToUpdate] = action.payload;
            break;
        // Delete Product
        case ProductsActionTypes.DeleteProduct:
            const indexToDelete = newState.products.findIndex(p => p.id === action.payload);
            newState.products.splice(indexToDelete, 1);
            break;
        // Clear All
        case ProductsActionTypes.ClearAll:
            newState.products = [];
            break;
    }


    return newState
}


//store
export const productStore = createStore(productsReducer)


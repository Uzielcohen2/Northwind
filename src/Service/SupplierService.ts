import axios from "axios";
import SupplierModel from "../Models/SupplierModel";
import appConfig from "../Utils/AppConfig";
import { SuppliersActionTypes, SuppliersActions, suppliersStore } from "../Redux/SuppliersState";


class SupplierService {
    //Get all Suppliers 
    public async getAllSuppliers(): Promise<SupplierModel[]> {
        // Get Suppliers
        let suppliers = suppliersStore.getState().suppliers;
        // Check if exist
        if (suppliers.length === 0) {
            // Get all suppliers to response object
            const response = await axios.get(appConfig.suppliersUrl);
            // Extract suppliers
            suppliers = response.data;

            // Save to state
            const action: SuppliersActions = { type: SuppliersActionTypes.SetSupplier, payload: suppliers };
            suppliersStore.dispatch(action)
        }

        return suppliers
    }

    // -------------------------------------------------------------------------

    // Get One Supplier 
    public async getOneSupplier(supId: number): Promise<SupplierModel> {
        // Get supplier with id 
        const response = await axios.get(appConfig.suppliersUrl + supId);
        // Extract
        const supplier = response.data;
        return supplier
    }

    // -------------------------------------------------------------------------

    // Add Supplier
    public async addSupplier(supplier: SupplierModel): Promise<SupplierModel> {
        const options = {
            headers: { "Content-Type": "multipart/form-data" }
        }
        // Supplier to backend 
        const response = await axios.post(appConfig.suppliersUrl, supplier, options)
        // Extract
        const beSupplier = response.data;

        // Store
        const action: SuppliersActions = { type: SuppliersActionTypes.AddSupplier, payload: beSupplier };
        suppliersStore.dispatch(action);

        // Return backend data
        return beSupplier
    }

    // -------------------------------------------------------------------------
    public async updateSupplier(supplier: SupplierModel): Promise<SupplierModel> {
        const options = {
            headers: { "Content-Type": "multipart/form-data" }
        }
        // get supplier with id 
        const response = await axios.put(appConfig.suppliersUrl + supplier.id, supplier, options)
        // Extract
        const updateSupplier = response.data;
        console.log(updateSupplier);

        // Return
        return updateSupplier

    }

    // -------------------------------------------------------------------------
    public async deleteSupplier(supId: number): Promise<void> {
        await axios.delete(appConfig.suppliersUrl + supId);

        // store
        const action: SuppliersActions = { type: SuppliersActionTypes.DeleteSupplier, payload: supId }
        suppliersStore.dispatch(action)
    }


    //End-of-class    
}

const supplierService = new SupplierService();

export default supplierService
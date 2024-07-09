import axios from "axios";
import CategoryModel from "../Models/CategoryModel";
import { CategoryActionTypes, CategoryActions, CategoryState, categoryStore } from "../Redux/CategoryState";
import appConfig from "../Utils/AppConfig";
import { authStore } from "../Redux/AuthState";

class CategoryService {
    // Get all categories
    public async getAllCategories(): Promise<CategoryModel[]> {

        // Token
        const token = authStore.getState().token;

        // Send token to axios build ->
        const options = {
            headers: { "Authorization": `Bearer ${token}` }
        }

        let category = categoryStore.getState().categories;
        if (category.length === 0) {
            const response = await axios.get(appConfig.categoriesUrl, options)
            category = response.data
        }
        return category

    }
    // -------------------------------------------------------------------------


    // GET ONE CATEGORY
    public async getOneCategory(catId: number): Promise<CategoryModel> {

        // Token
        const token = authStore.getState().token;

        // Send token to axios build ->
        const options = {
            headers: { "Authorization": `Bearer ${token}` }
        }

        const response = await axios.get(appConfig.categoriesUrl + catId, options);
        const category = response.data;

        return category
    }
    // -------------------------------------------------------------------------
    // Add Category
    public async addCategory(category: CategoryModel): Promise<CategoryModel> {
        // Token
        const token = authStore.getState().token
        // Options
        const options = {
            headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }
        }
        // Response
        const response = await axios.post(appConfig.categoriesUrl, category, options)
        // Extract
        const beCategory = response.data;
        // Store update
        const action: CategoryActions = { type: CategoryActionTypes.AddCategory, payload: beCategory }
        categoryStore.dispatch(action);

        return beCategory
    }
    // -------------------------------------------------------------------------

    // Update Category
    public async updateCategory(category: CategoryModel): Promise<CategoryModel> {
        // Token
        const token = authStore.getState().token;

        const options = {
            headers: { "Content-Type": "multipart/form-data", "Authorization": `Bearer ${token}` }
        }
        const response = await axios.put(appConfig.categoriesUrl + category.id, category, options);

        const updateCategory = response.data;
        return updateCategory

    }
    // -------------------------------------------------------------------------

    // Delete Category
    public async deleteCat(catId: number): Promise<void> {

        // Token
        const token = authStore.getState().token;

        // Send token to axios build ->
        const options = {
            headers: { "Authorization": `Bearer ${token}` }
        }

        await axios.delete(appConfig.categoriesUrl + catId, options);

        const action: CategoryActions = { type: CategoryActionTypes.DeleteCategory, payload: catId };

        categoryStore.dispatch(action);
    }
    // -------------------------------------------------------------------------

}

const categoryService = new CategoryService();
export default categoryService
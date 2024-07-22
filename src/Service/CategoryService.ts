import axios from "axios";
import CategoryModel from "../Models/CategoryModel";
import { CategoryActionTypes, CategoryActions, CategoryState, categoryStore } from "../Redux/CategoryState";
import appConfig from "../Utils/AppConfig";
import { authStore } from "../Redux/AuthState";

class CategoryService {
    // Get all categories
    public async getAllCategories(): Promise<CategoryModel[]> {





        let category = categoryStore.getState().categories;
        if (category.length === 0) {
            const response = await axios.get(appConfig.categoriesUrl)
            category = response.data
        }
        return category

    }
    // -------------------------------------------------------------------------


    // GET ONE CATEGORY
    public async getOneCategory(catId: number): Promise<CategoryModel> {




        const response = await axios.get(appConfig.categoriesUrl + catId);
        const category = response.data;

        return category
    }
    // -------------------------------------------------------------------------
    // Add Category
    public async addCategory(category: CategoryModel): Promise<CategoryModel> {


        // Response
        const response = await axios.post(appConfig.categoriesUrl, category)
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


        const response = await axios.put(appConfig.categoriesUrl + category.id, category);

        const updateCategory = response.data;
        return updateCategory

    }
    // -------------------------------------------------------------------------

    // Delete Category
    public async deleteCat(catId: number): Promise<void> {


        await axios.delete(appConfig.categoriesUrl + catId);

        const action: CategoryActions = { type: CategoryActionTypes.DeleteCategory, payload: catId };

        categoryStore.dispatch(action);
    }
    // -------------------------------------------------------------------------

}

const categoryService = new CategoryService();
export default categoryService
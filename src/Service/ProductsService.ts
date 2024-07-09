import axios from "axios";
import ProductsModel from "../Models/ProductModel";
import appConfig from "../Utils/AppConfig";
import { ProductsActionTypes, ProductsActions, productStore } from "../Redux/ProductsState";
import { useParams } from "react-router-dom";



class ProductService {


    //Get All Products
    public async getAllProd(): Promise<ProductsModel[]> {
        const response = await axios.get(appConfig.productsUrl)
        const products = response.data

        //Save to State
        const action: ProductsActions = { type: ProductsActionTypes.SetProduct, payload: products }
        productStore.dispatch(action);

        return products
    }

    // Get One Prod
    public async getOneProd(prodId: number): Promise<ProductsModel> {
        const response = await axios.get(appConfig.productsUrl + prodId);
        const product = response.data;
        return product
    }

    //Add Product
    public async addProduct(product: ProductsModel): Promise<ProductsModel> {

        const options = {
            headers: { "Content-Type": "multipart/form-data" }
        }


        //Send Product to backend
        const response = await axios.post(appConfig.productsUrl, product, options)
        //Extract product from response
        const newProduct = response.data;
        console.log(newProduct);

        //update state 
        const action: ProductsActions = { type: ProductsActionTypes.AddProduct, payload: newProduct }
        productStore.dispatch(action)

        //Return the extracted product 
        return newProduct
    }


    //Edit Product 
    public async updateProduct(product: ProductsModel): Promise<ProductsModel> {

        const options = {
            headers: { "Content-Type": "multipart/form-data" }
        }
        console.log(product.id);


        const response = await axios.put(appConfig.productsUrl + product.id, product, options);

        const updatedProduct = response.data;

        const action: ProductsActions = { type: ProductsActionTypes.UpdateProduct, payload: updatedProduct };
        productStore.dispatch(action)

        console.log(updatedProduct);


        return updatedProduct

    }


    //Delete Prod
    public async deleteProd(prodId: number): Promise<void> {
        await axios.delete(appConfig.productsUrl + prodId);

        const action: ProductsActions = { type: ProductsActionTypes.DeleteProduct, payload: prodId };
        productStore.dispatch(action)
    }



    //--------------------------------------------------------------------------------------



    //End-of-class
}
const productService = new ProductService();

export default productService


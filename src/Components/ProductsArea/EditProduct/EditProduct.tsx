import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductsModel from "../../../Models/ProductModel";
import notificationService from "../../../Service/NotificationService";
import productService from "../../../Service/ProductsService";
import NavBar from "../../../Utils/NavBar/NavBar";
import "./EditProduct.css";
import { Button } from "@mui/material";
import appConfig from "../../../Utils/AppConfig";

function EditProduct(): JSX.Element {

    // Use Form 
    const { register, handleSubmit, setValue } = useForm<ProductsModel>();

    // Use Params
    const params = useParams();
    const id = +params.prodId

    // Use Effect + SetValue
    useEffect(() => {
        productService.getOneProd(id)
            .then(product => {
                setValue("name", product.name);
                setValue("price", product.price);
                setValue("stock", product.stock);
                setValue("imageUrl", product.imageUrl)
            })
            .catch(err => notificationService.error(err.message))
    }, [])
    // Navigator
    const navigate = useNavigate()



    // Update function
    async function update(product: ProductsModel) {
        try {
            console.log(product);
            product.id = id
            // Check if id is exist
            if (!product.id) {
                notificationService.error("Product ID is missing. Update cannot be completed.");
            }

            //Image casting -> 
            product.image = (product.image as unknown as FileList)[0];

            // Add Product
            const beProduct = await productService.updateProduct(product)

            // Success
            notificationService.success("Product has been updated successfully")
            // Navigate
            navigate("/products/details/" + beProduct.id)

            //Catch Error
        } catch (err: any) {

            notificationService.error(err.message)
        }
    }

    return (
        <div className="EditProduct">
            {/* Navbar */}
            <NavBar />

            {/* Form */}
            <form onSubmit={handleSubmit(update)}>
                {/* Name */}
                <label>Name ✳</label>
                <input type="text" {...register("name")} placeholder="Enter Product name" />
                {/* Price */}
                <label>Price ✳</label>
                <input type="number" step="0.01" {...register("price")} placeholder="10,000$ Maximum !" />
                {/* Stock */}
                <label>Stock ✳</label>
                <input type="number" {...register("stock")} placeholder="10,000 Units Maximum ! " />
                {/* Image */}
                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} />
                {/* Update button */}
                <button>Update</button>
                {/* Required Mark */}
                <p>  All the labels mark with ✳ are required ❕ </p>
                {/* Back Button */}
                <Button>
                    <NavLink to={appConfig.productsDetailsRoute + id} >Go Back</NavLink>
                </Button>

            </form>
        </div>
    );
}

export default EditProduct;

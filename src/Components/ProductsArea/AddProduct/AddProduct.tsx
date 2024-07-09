import { useForm } from "react-hook-form";
import "./AddProduct.css";
import ProductsModel from "../../../Models/ProductModel";
import productService from "../../../Service/ProductsService";
import notificationService from "../../../Service/NotificationService";
import { NavLink, useNavigate } from "react-router-dom";
import NavBar from "../../../Utils/NavBar/NavBar";
import { Button } from "@mui/material";

function AddProduct(): JSX.Element {
    // Navigate
    const navigate = useNavigate()
    // Use Form
    const { register, handleSubmit } = useForm<ProductsModel>();

    // send Function
    async function send(product: ProductsModel) {
        try {
            console.log(product);

            //Image casting -> 
            product.image = (product.image as unknown as FileList)[0];

            // Add Product
            const beProduct = await productService.addProduct(product)

            // Success
            notificationService.success("Product Has Been Added successfully")
            navigate("/products/details/" + beProduct.id)

            //Catch Error
        } catch (err: any) {

            notificationService.error(err.message)
        }
    }


    return (
        <div className="AddProduct">
            {/* Navbar */}
            <NavBar />

            {/* Form */}
            <form onSubmit={handleSubmit(send)}>
                {/* Name */}
                <label>Name ✳</label>
                <input type="text" {...register("name")} placeholder="Enter Product Name" />
                {/* Price */}
                <label>Price ✳</label>
                <input type="number" step="0.01" {...register("price")} placeholder="10,000$ Maximum !" />
                {/* Stock */}
                <label>Stock ✳</label>
                <input type="number" {...register("stock")} placeholder="10,000 Units Maximum !" />
                {/* Image */}
                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} />
                {/* Add button */}
                <button>Add</button>
                {/* Required Mark */}
                <p>  All the labels mark with ✳ are required ❕ </p>
                {/* Back Button */}
                <Button>
                    <NavLink to="/products" >Go Back</NavLink>
                </Button>
            </form>
        </div>
    );
}

export default AddProduct;

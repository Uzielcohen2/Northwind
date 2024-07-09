import { NavLink, useNavigate } from "react-router-dom";
import "./AddCategory.css";
import { useForm } from "react-hook-form";
import CategoryModel from "../../../Models/CategoryModel";
import categoryService from "../../../Service/CategoryService";
import notificationService from "../../../Service/NotificationService";
import NavBar from "../../../Utils/NavBar/NavBar";
import { Button } from "@mui/material";
import appConfig from "../../../Utils/AppConfig";

function AddCategory(): JSX.Element {
    // Navigator
    const navigate = useNavigate();

    // Use Form
    const { register, handleSubmit } = useForm<CategoryModel>();

    //async Function send
    async function send(category: CategoryModel) {
        try {
            // Image cast -
            category.image = (category.image as unknown as FileList)[0];

            // Add Category:
            const beCategory = await categoryService.addCategory(category);
            // Notification
            notificationService.success("Your Category added successfully")
            navigate("/categories/details/" + beCategory.id)
        } catch (err: any) {
            notificationService.error(err.message)
        }
    }



    return (
        <div className="AddCategory">
            {/* Navbar */}
            <NavBar />
            <form onSubmit={handleSubmit(send)}>
                {/* Name */}
                <label>Category Name</label>
                <input type="text" {...register("name")} />
                {/* Description */}
                <label>Description</label>
                <input type="textarea" {...register("description")} />
                {/* Image */}
                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} />
                {/* Button */}
                <button>Add</button>
                <Button>
                    <NavLink to={appConfig.categoriesRoute} >Go Back</NavLink>
                </Button>


            </form>
        </div>
    );
}

export default AddCategory;

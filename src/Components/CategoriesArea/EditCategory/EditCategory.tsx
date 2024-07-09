import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./EditCategory.css";
import CategoryModel from "../../../Models/CategoryModel";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import categoryService from "../../../Service/CategoryService";
import notificationService from "../../../Service/NotificationService";
import NavBar from "../../../Utils/NavBar/NavBar";
import { Button } from "@mui/material";
import appConfig from "../../../Utils/AppConfig";

function EditCategory(): JSX.Element {

    // Params
    const params = useParams();
    const id = +params.catId

    // Navigator
    const navigate = useNavigate();

    // useForm
    const { register, handleSubmit, setValue } = useForm<CategoryModel>();

    // useEffect
    useEffect(() => {
        categoryService.getOneCategory(id)
            .then(cat => {
                setValue("name", cat.name);
                setValue("description", cat.description);
                setValue("imageUrl", cat.imageUrl);
            })
            .catch(err => notificationService.error(err.message))
    }, []);

    // UPDATE FUNCTION
    async function update(category: CategoryModel) {
        try {
            console.log(category);
            category.id = id;
            if (!category.id) {
                notificationService.error("Category is missing,Cannot UPDATE")
            }
            // Image casting..
            category.image = (category.image as unknown as FileList)[0];

            // Add to service
            const beCategory = await categoryService.updateCategory(category);
            notificationService.success("Category has been edited.");
            navigate("/categories/details/" + beCategory.id)

        } catch (err: any) {
            notificationService.error(err.message)
        }
    }




    return (
        <div className="EditCategory">
            {/* Nav-bar */}
            <NavBar />
            <form onSubmit={handleSubmit(update)} >
                {/* Category name */}
                <label>Category Name : </label>
                <input type="text"{...register("name")} placeholder="Enter Category name" />

                <label>Description : </label>
                <input type="textarea"{...register("description")} placeholder="Add a description" />

                <label>image : </label>
                <input type="file"{...register("image")} />

                {/* Button */}
                <button>Update</button>
                {/* Back button */}
                <Button>
                    <NavLink to={appConfig.categoriesDetailsRoute + id} >Go Back</NavLink>
                </Button>


            </form>



        </div>
    );
}

export default EditCategory;

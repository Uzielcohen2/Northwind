import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import CategoryModel from "../../../Models/CategoryModel";
import categoryService from "../../../Service/CategoryService";
import notificationService from "../../../Service/NotificationService";
import appConfig from "../../../Utils/AppConfig";
import NavBar from "../../../Utils/NavBar/NavBar";
import useTitle from "../../../Utils/useTitle";
import "./CategoryDetails.css";

function CategoryDetails(): JSX.Element {

    // Title
    useTitle("Northiwnd | Category Details");

    // Navigator 
    const navigate = useNavigate();

    // Params
    const params = useParams();
    const id = +params.catId;

    // Use State
    const [feCategory, setFeCategory] = useState<CategoryModel>();

    // Use Effect
    useEffect(() => {
        categoryService.getOneCategory(id)
            .then(beCat => setFeCategory(beCat))
            .catch(err => notificationService.error(err))
    }, [])

    // Delete function 
    async function deleteCategory() {
        try {


            const ok = window.confirm("Are you sure you wanna delete the category?");
            if (!ok) return

            await categoryService.deleteCat(id,);

            notificationService.success(`Category ${id} has been deleted successfully`)
            navigate(appConfig.categoriesRoute)
        } catch (err: any) {
            notificationService.error(err)
        }

    }


    return (
        <div className="CategoryDetails">
            {/* Navbar */}
            <NavBar />
            <h1 className="cat-name">{feCategory?.name}  </h1>
            <img src={feCategory?.imageUrl} alt="" className="cat-detail-img" />
            <p>{feCategory?.description} </p>

            <div className="categories-buttons">
                {/* Back */}
                <NavLink to="/categories">Back</NavLink>
                {/* Edit */}
                <NavLink to={appConfig.categoriesEditRoute + id}>Edit</NavLink>
                {/* Delete */}
                <NavLink to="#" onClick={deleteCategory}>Delete ✳</NavLink>

            </div>
            <hr />
            <p>✳ - Admin requierd for delete an category.</p>


        </div>
    );
}

export default CategoryDetails;

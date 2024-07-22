import { NavLink } from "react-router-dom";
import CategoryModel from "../../../Models/CategoryModel";
import appConfig from "../../../Utils/AppConfig";
import useTitle from "../../../Utils/useTitle";
import "./CategoryCard.css";


// Props
type CategoryProps = {
    key: number,
    category: CategoryModel
}


function CategoryCard(props: CategoryProps): JSX.Element {

    // Title
    useTitle("Northiwnd | Category Card")

    return (

        <NavLink to={appConfig.categoriesDetailsRoute + props.category.id}>



            <div key={props.category.id} className="categories-cards">

                <h4>{props.category.name}</h4>
                <img src={props.category.imageUrl} className="category-image" alt='CategoryImage'></img>
                <p>{props.category.description}</p>
               


            </div>



        </NavLink>
    );
}

export default CategoryCard;

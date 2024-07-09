import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CategoryModel from '../../../Models/CategoryModel';
import categoryService from '../../../Service/CategoryService';
import notificationService from '../../../Service/NotificationService';
import NavBar from '../../../Utils/NavBar/NavBar';
import CategoryCard from '../CategoryCard/CategoryCard';
import TotalCategories from '../TotalCategories/TotalCategories';
import "./CategoriesList.css";

function CategoriesList(): JSX.Element {

    const [feCategory, SetFeCategory] = useState<CategoryModel[]>([]);

    useEffect(() => {
        categoryService.getAllCategories()
            .then(beCategories => {
                console.log(beCategories);
                SetFeCategory(beCategories);
                if (!beCategories) return
            })
            .catch(err => notificationService.error(err.message))

    }, [])



    return (
        <div className="CategoriesList">
            {/* Navbar */}
            <NavBar />

            <div className="category-title">
                <h1>Categories</h1>
            </div>
            <div className="add-category">
                <NavLink to="/categories/details/new">➕ Add Category</NavLink>
            </div>
            
            {/* TOTAL */}
            <div className="total-categories">
                <TotalCategories />
            </div>

            <div className="category-mapped">
                {feCategory.map(c => <CategoryCard key={c.id} category={c} />)}
            </div>



        </div >
    );
}

export default CategoriesList;

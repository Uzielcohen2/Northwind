import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import ProductsModel from "../../../Models/ProductModel";
import { ProductsActionTypes, ProductsActions, productStore } from "../../../Redux/ProductsState";
import notificationService from '../../../Service/NotificationService';
import productService from "../../../Service/ProductsService";
import NavBar from "../../../Utils/NavBar/NavBar";
import Spinner from "../../../Utils/Spinner/Spinner";
import useTitle from '../../../Utils/useTitle';
import clear from "../../../assets/images/clear.png";
import ProductsCard from '../ProductsCard/ProductsCard';
import TotalProducts from '../TotalProducts/TotalProducts';
import "./ProductsList.css";



function ProductsList(): JSX.Element {

    // Title
    useTitle("Northwind | Products")

    // Use State
    const [feProd, setFeProd] = useState<ProductsModel[]>([])

    // Use Effect
    useEffect(() => {
        productService.getAllProd().then(beProd => setFeProd(beProd))
            .catch(err => notificationService.error(err.message))
    }, [])


    // Clear all function
    function clearAll(): void {
        const action: ProductsActions = { type: ProductsActionTypes.ClearAll }
        productStore.dispatch(action);

    }
    // Only with delay
    if (!feProd || feProd.length == 0) return <Spinner />
    return (

        <div className="ProductsList">

            {/* Navbar */}
            <NavBar />

            {/* Title && Total */}
            <div className="prod-title">
                <h1>Our Products</h1>
                <TotalProducts />

                {/* Add Product */}
                <div className="add-prod">
                    <NavLink to="/products/details/new">➕ Add Product </NavLink>
                </div>

                {/* Clear All */}
                <NavLink to="/home" onClick={clearAll}><img src={clear} className="clear-all" /></NavLink>
            </div>

            {/* Products display */}
            {feProd?.map(p => <ProductsCard key={p.id} product={p} />)}

        </div>
        // Return End
    );

    // END-OF-FUNCTION
}

export default ProductsList;

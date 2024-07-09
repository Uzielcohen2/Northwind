import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import notificationService from "../../../Service/NotificationService";
import productService from "../../../Service/ProductsService";
import appConfig from "../../../Utils/AppConfig";
import NavBar from '../../../Utils/NavBar/NavBar';
import useTitle from "../../../Utils/useTitle";
import "./ProductDetails.css";
import Spinner from "../../../Utils/Spinner/Spinner";


function ProductDetails(): JSX.Element {

    // Title
    useTitle("Northwind | Products Details");

    // Navigator 
    const navigate = useNavigate()

    // Params
    const params = useParams();
    const id = +params.prodId;

    // Use State
    const [feProduct, setFeProduct] = useState<ProductModel>();

    // Use Effect
    useEffect(() => {
        productService.getOneProd(id)
            .then(beProd => setFeProduct(beProd))
            .catch(err => notificationService.error(err))
    }, [])

    // Delete Function 
    async function deleteProd() {
        console.log(id);

        try {
            // Confirmation
            const ok = window.confirm("Are You Sure?");
            if (!ok) return;
            // Service delete with id
            await productService.deleteProd(id);
            // Success notification
            notificationService.success(`Product ${id} has been deleted`);
            // Navigate
            navigate(appConfig.productsRoute)
            // Catch error

        } catch (err: any) {
            notificationService.error(err)
        }
    }

    //If cant get Product for any reason ->
    if (!feProduct) return <Spinner />

    // Return
    return (
        <div className="ProductDetails">
            {/* Navbar */}
            <NavBar />

            {/* Title */}
            <div className="prodTitle">
                <h2>Product Details</h2>
            </div>

            {/* Products-Details */}
            <div className="proData">

                <div className="prodName">
                    {/* Product Name */}
                    <h3>Name: {feProduct?.name}</h3>
                </div>
                <div className="prodDetails">
                    <div className="prod-price-stock">
                        {/* Product Stock */}
                        <h3>  Stock: {feProduct?.stock} - (items left)</h3>
                        {/* Product Price */}
                        <h3>Price: {feProduct?.price}$ </h3>
                    </div>
                    <div className="prod-image">
                        {/* Product Image */}
                        <img src={feProduct?.imageUrl} />
                    </div>
                    <br />
                </div>
            </div>

            {/* ACTIONS */}
            <div className="products-details-actions">
                {/* Back */}
                <NavLink to={appConfig.productsRoute}>Back</NavLink>
                <br />
                {/* Edit */}
                <NavLink to={appConfig.productsEditRoute + id}>Edit</NavLink>
                <br />
                {/* Delete */}
                <NavLink to="#" onClick={deleteProd}>Delete</NavLink>
            </div>


        </div>

        //RETURN END
    );

    //END-OF-FUNCTION
}

export default ProductDetails;

import { Avatar, Card, CardContent, CardHeader, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import ProductsModel from "../../../Models/ProductModel";
import appConfig from "../../../Utils/AppConfig";
import useTitle from "../../../Utils/useTitle";
import "./ProductsCard.css";

// Type for props
type ProductsProps = {
    key: number,
    product: ProductsModel
}


function ProductsCard(props: ProductsProps): JSX.Element {
    //Title
    useTitle("Northwind | Products Card");

    return (

        // Whole section NavLink
        <NavLink to={appConfig.productsDetailsRoute + props.product.id}>

            <div className="ProductsCard">

                <div key={props.product.id} className='products-cards'>
                    {/* ID && NAME  */}
                    <Card variant="outlined">
                        <Avatar>
                            {/* ID */}
                            {props.product.id}
                        </Avatar>
                        <div className="prod-card-name">
                            {/* Name */}
                            {props.product.name}
                        </div>

                        {/* Image && Text && Content */}
                        <div className="products-card-details">

                            {/* Image */}
                            <img src={props.product.imageUrl} alt="imageUrl" className="prod-image"/>

                            {/* Text */}
                            <div className="text-details">
                                <p> (ℹ) Click for actions</p>
                            </div>

                            {/* Content */}
                            <CardContent>
                                <div className="prod-card-details">
                                    <p>
                                        Price : {props.product.price} $
                                    </p>
                                </div>

                            </CardContent>
                        </div>
                    </Card>
                </div>


            </div>

        </NavLink>
        // End Return
    );

    // END-OF-FUNCTION
}

export default ProductsCard;

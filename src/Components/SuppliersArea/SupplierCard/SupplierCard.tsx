import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import SupplierModel from "../../../Models/SupplierModel";
import appConfig from "../../../Utils/AppConfig";
import useTitle from "../../../Utils/useTitle";
import "./SupplierCard.css";



// props type
type SuppliersProps = {
    key: number,
    supplier: SupplierModel
}


function SupplierCard(props: SuppliersProps): JSX.Element {
    // Title
    useTitle("Northwid | Supplier card")
    return (

            <NavLink to={appConfig.supplierDetailsRoute + props.supplier.id}>
              
                    <Card className="supplier-card">
                        <CardActionArea>
                            <CardMedia

                                component="img"

                                image={props.supplier.imageUrl}
                                alt="Supplier image"
                                className="supplier-card-image"
                            />
                            <CardContent className="supplier-card-content">
                                <Typography gutterBottom variant="h5" component="div">
                                    {props.supplier.company}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <p>
                                        Phone Number: {props.supplier.phone}.
                                        <hr />
                                        Location: {props.supplier.address} {props.supplier.city},{" "}
                                        {props.supplier.country}
                                        <br />
                                    </p>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
              
            </NavLink>
      
    );
}

export default SupplierCard;

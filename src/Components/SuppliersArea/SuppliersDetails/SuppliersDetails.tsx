import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import SupplierModel from "../../../Models/SupplierModel";
import notificationService from "../../../Service/NotificationService";
import supplierService from "../../../Service/SupplierService";
import appConfig from "../../../Utils/AppConfig";
import NavBar from "../../../Utils/NavBar/NavBar";
import useTitle from "../../../Utils/useTitle";
import "./SuppliersDetails.css";

function SuppliersDetails(): JSX.Element {
    // Title
    useTitle("Northwind | Supplier Details")

    // Navigator
    const navigate = useNavigate()

    // Params
    const params = useParams();
    const id = +params.supId

    // UseState
    const [feSupplier, setFeSupplier] = useState<SupplierModel>()

    // UseEffect
    useEffect(() => {
        supplierService.getOneSupplier(id)
            .then(beSup => setFeSupplier(beSup))
            .catch(err => notificationService.error(err.message))
    }, [])

    // Delete Function
    async function deleteSupplier() {
        try {
            const ok = window.confirm("Are YOU SURE ?!! Please double check");
            if (!ok) return;

            // Delete
            await supplierService.deleteSupplier(id);
            // Notify success
            notificationService.success(`Supplier (${id}) has been deleted.`)
            // Navigate
            navigate(appConfig.suppliersRoute)
        }
        catch (err: any) {
            notificationService.error(err.message)
        }
    }

    return (
        <div className="SuppliersDetails">
            <NavBar />

            <div key={feSupplier?.id} className='suppliers-details'>

                {/* Image Url */}
                <div className="sup-details-image">
                    <img src={feSupplier?.imageUrl} alt="supplier-image" />
                </div>

                {/* Company Name */}

                <h1>Company Name 💼</h1>
                <p> {feSupplier?.company} </p>


                {/* // Full Address */}
                <h1>Location ⚲</h1>
                <p>Address : {feSupplier?.address},{feSupplier?.city} {feSupplier?.country}</p>



                {/* Phone Number */}
                <h1>Contact by number ☎</h1>
                <p>
                    {feSupplier?.phone}
                </p>




                {/* Buttons */}
                <div className="suppliers-buttons">
                    {/* Back */}
                    <a>
                                 <NavLink to="/suppliers">Back</NavLink>
                    </a>
           
                    {/* Edit */}
                    <NavLink to={appConfig.supplierEditRoute + id}>Edit</NavLink>
                    {/* Delete */}
                    <NavLink to="#" onClick={deleteSupplier}>Delete</NavLink>
                </div>



            </div>

        </div >
    );
}

export default SuppliersDetails;

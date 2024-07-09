
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SupplierModel from "../../../Models/SupplierModel";
import notificationService from '../../../Service/NotificationService';
import supplierService from "../../../Service/SupplierService";
import NavBar from '../../../Utils/NavBar/NavBar';
import SupplierCard from '../SupplierCard/SupplierCard';
import TotalSuppliers from "../TotalSuppliers/TotalSuppliers";
import "./SuppliersList.css";


function SuppliersList(): JSX.Element {
    // Use State
    const [feSup, setFeSup] = useState<SupplierModel[]>([])

    // Use Effect
    useEffect(() => {
        supplierService.getAllSuppliers().then(beSupplier => setFeSup(beSupplier))
            .catch(err => notificationService.error(err))
    }, [])




    return (
        <div className="SuppliersList">
            {/* Navbar */}
            <NavBar />
            <div className="sup-title">
                {/* Title + Toal */}
                <h1>Our Suppliers</h1>
                <TotalSuppliers />
                {/* Add Supplier */}
                <div className="add-supplier">
                    <NavLink to="/suppliers/details/new">➕ Add Supplier </NavLink>
                </div>
                <hr />
            </div>

            {/* Suppliers display with .map */}
            <ul className="supplier-list">
                {feSup?.map((sup) => (
                    <li key={sup.id}>
                        <SupplierCard key={sup.id} supplier={sup} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default SuppliersList;

import { Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import SupplierModel from "../../../Models/SupplierModel";
import notificationService from "../../../Service/NotificationService";
import supplierService from "../../../Service/SupplierService";
import NavBar from "../../../Utils/NavBar/NavBar";
import "./AddSupplier.css";

function AddSupplier(): JSX.Element {
    // Navigator
    const navigate = useNavigate();
    // Use Form
    const { register, handleSubmit } = useForm<SupplierModel>();

    // Function send 
    async function send(supplier: SupplierModel) {
        try {
            console.log(supplier);
            // Image cast
            supplier.image = (supplier.image as unknown as FileList)[0];
            // Add Supplier
            const beSupplier = await supplierService.addSupplier(supplier);
            // Notify
            notificationService.success("Supplier has been added successfully")
            navigate("/suppliers/details/" + beSupplier.id)

        } catch (err: any) {
            notificationService.error(err.message)
        }
    }


    return (
        // Supplier Form
        <div className="AddSupplier">
            {/* Navbar */}
            <NavBar />

            <form onSubmit={handleSubmit(send)}>
                {/* Company */}
                <label>Company ✳</label>
                <input type="text" {...register("company")} />

                {/* Country */}
                <label>Country ✳</label>
                <input type="text" {...register("country")} />

                {/* City */}
                <label>City ✳</label>
                <input type="text" {...register("city")} />

                {/* Address */}
                <label>Address ✳</label>
                <input type="text" {...register("address")} />


                {/* Telephone */}
                <label>Phone ✳</label>
                <input type="tel" {...register("phone")} />


                {/* Image */}
                <label>Enter your image</label>
                <input type="file" accept="image/*" {...register("image")} />

                {/* ADD Button*/}
                <button>Add</button>

                {/* Required Mark */}
                <p>  All the labels mark with ✳ are required ❕ </p>
                <Button>
                    <NavLink to="/suppliers" >Go Back</NavLink>
                </Button>

            </form>

        </div>
    );
}

export default AddSupplier;

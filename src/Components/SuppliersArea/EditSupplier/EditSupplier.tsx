import { NavLink, useNavigate, useParams } from "react-router-dom";
import "./EditSupplier.css";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import supplierService from "../../../Service/SupplierService";
import notificationService from "../../../Service/NotificationService";
import SupplierModel from "../../../Models/SupplierModel";
import NavBar from "../../../Utils/NavBar/NavBar";
import appConfig from "../../../Utils/AppConfig";
import { Button } from "@mui/material";

function EditSupplier(): JSX.Element {

    // Navigator
    const navigate = useNavigate();

    // Use Params
    const params = useParams();
    const id = +params.supId

    // Use Form
    const { register, handleSubmit, setValue } = useForm<SupplierModel>();

    // Use Effect with setValue
    useEffect(() => {
        supplierService.getOneSupplier(id)
            .then(supplier => {
                setValue("company", supplier.company); // Company
                setValue("country", supplier.country); // Country
                setValue("city", supplier.city); // City
                setValue("address", supplier.address); // Address
                setValue("phone", supplier.phone); // Phone
                setValue("imageUrl", supplier.imageUrl); // Image-Url
            })
            .catch(err => notificationService.error(err.message))
    }, [])

    // Update function
    async function update(supplier: SupplierModel) {
        try {
            supplier.id = id
            if (!supplier.id) {
                notificationService.error("Supplier ID is missing")
            }
            // Cast image 
            supplier.image = (supplier.image as unknown as FileList)[0];

            // Add Supplier
            const beSupplier = await supplierService.updateSupplier(supplier);
            // Success
            notificationService.success("Supplier has been updated successfully");
            //Navigate
            navigate("/suppliers/details/" + beSupplier.id)

        } catch (err: any) {
            notificationService.error(err.message)
        }
    }



    return (
        <div className="EditSupplier">
            {/* Navbar */}
            <NavBar />

            {/* Form Display*/}
            <form onSubmit={handleSubmit(update)}>
                {/* Company */}
                <label>Company ✳</label>
                <input type="text" {...register("company")} placeholder="Enter company name" />
                {/* Country */}
                <label>Country ✳</label>
                <input type="string" {...register("country")} placeholder="Enter company country!" />
                {/* City */}
                <label>City ✳</label>
                <input type="string" {...register("city")} placeholder="Enter company City! " />
                {/* Address */}
                <label>Address ✳</label>
                <input type="string" {...register("address")} placeholder="Enter company address! " />
                {/* Phone */}
                <label>Phone ✳</label>
                <input type="tel" {...register("phone")} placeholder="Enter company phone ! " />
                {/* Image */}
                <label>Image</label>
                <input type="file" accept="image/*" {...register("image")} />
                {/* Update button */}
                <button>Update</button>
                {/* Required Mark */}
                <p>  All the labels mark with ✳ are required ❕ </p>
                {/* Back Button */}
                <Button>
                    <NavLink to={appConfig.supplierDetailsRoute + id} >Go Back</NavLink>
                </Button>



            </form>

        </div>
    );
}

export default EditSupplier;

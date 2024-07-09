import { Navigate, Route, Routes } from "react-router-dom";
import appConfig from "../../../Utils/AppConfig";
import Register from "../../AuthArea/Register/Register";
import CategoriesList from "../../CategoriesArea/CategoriesList/CategoriesList";
import AddEmployee from "../../EmployeesArea/AddEmployee/AddEmployee";
import EditEmployee from "../../EmployeesArea/EditEmployee/EditEmployee";
import EmployeeDetails from "../../EmployeesArea/EmployeeDetails/EmployeeDetails";
import EmployeesList from "../../EmployeesArea/EmployeesList/EmployeesList";
import AddProduct from "../../ProductsArea/AddProduct/AddProduct";
import EditProduct from "../../ProductsArea/EditProduct/EditProduct";
import ProductDetails from "../../ProductsArea/ProductDetails/ProductDetails";
import ProductsList from "../../ProductsArea/ProductsList/ProductsList";
import AddSupplier from "../../SuppliersArea/AddSupplier/AddSupplier";
import SuppliersDetails from "../../SuppliersArea/SuppliersDetails/SuppliersDetails";
import SuppliersList from "../../SuppliersArea/SuppliersList/SuppliersList";
import MainContent from "../MainContent/MainContent";
import EditSupplier from "../../SuppliersArea/EditSupplier/EditSupplier";
import Login from "../../AuthArea/Login/Login";
import CategoryDetails from "../../CategoriesArea/CategoryDetails/CategoryDetails";
import EditCategory from "../../CategoriesArea/EditCategory/EditCategory";
import AddCategory from "../../CategoriesArea/AddCategory/AddCategory";
import ProtectedRoute from "./ProtectedRoutes";


function Routing(): JSX.Element {

    return (
        <div className="Routing">
            <Routes>
                {/*--------------------------------------------- Home Route------------------------------------------------------------------------- */}
                <Route path="/home" element={<MainContent />} />
                {/* ******************************************************************************************************************************** */}



                {/*--------------------------------------------- Suppliers Route-------------------------------------------------------------------- */}
                <Route path="/suppliers" element={<SuppliersList />} />

                {/* Supplier Details */}
                <Route path={"/suppliers/details/:supId"} element={<SuppliersDetails />} />

                {/* Add Supplier*/}
                <Route path="/suppliers/details/new" element={<AddSupplier />} />

                {/* Edit Supplier */}
                <Route path="/suppliers/edit/:supId" element={<EditSupplier />} />


                {/* ******************************************************************************************************************************** */}


                {/*--------------------------------------------- Employees Route-------------------------------------------------------------------- */}

                <Route path="/employees" element={<EmployeesList />} />

                {/* Employee Details */}
                <Route path={"/employees/details/:empId"} element={<EmployeeDetails />} />

                {/* Add Employee */}
                <Route path="/employees/details/new" element={<AddEmployee />} />

                {/* Edit Employee */}
                <Route path="/employees/edit/:empId" element={<EditEmployee />} />
                {/* ******************************************************************************************************************************** */}


                {/*--------------------------------------------- Products Route--------------------------------------------------------------------- */}
                <Route path="/products" element={<ProductsList />} />

                {/* Products Details */}
                <Route path={"/products/details/:prodId"} element={<ProductDetails />} />


                {/* Products Edit */}
                <Route path={"/products/edit/:prodId"} element={<EditProduct />} />


                {/* Products New */}
                <Route path={"/products/details/new"} element={<AddProduct />} />

                {/* Edit Product */}
                <Route path={appConfig.productsEditRoute + ":prodId"} element={<EditProduct />} />
                {/* ******************************************************************************************************************************** */}


                {/*--------------------------------------- Categories Route------------------------------------------------------------------------- */}
                <Route path="/categories" element={
                    <ProtectedRoute>
                        <CategoriesList />
                    </ProtectedRoute>

                } />

                {/* Categories details */}
                <Route path={"/categories/details/:catId"} element={<CategoryDetails />} />

                {/* Edit Category */}
                <Route path={"/categories/edit/:catId"} element={<EditCategory />} />
                {/* ******************************************************************************************************************************** */}

                {/* Add Category */}
                <Route path={"/categories/details/new"} element={<AddCategory />} />
                {/* ******************************************************************************************************************************** */}




                {/*--------------------------------------- Auth Route------------------------------------------------------------------------- */}
                {/* Register */}
                <Route path="/register" element={<Register />} />

                {/* Login */}
                <Route path="/login" element={<Login />} />
                {/* ******************************************************************************************************************************** */}



                {/*--------------------------------------- Default Route------------------------------------------------------------------------- */}
                <Route path="/" element={<Navigate to="/home" />} />
                {/* ******************************************************************************************************************************** */}



            </Routes>



        </div>
    );
}

export default Routing;

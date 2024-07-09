import { useEffect, useState } from "react";
import { employeesStore } from "../../../Redux/EmployeesState";
import { suppliersStore } from "../../../Redux/SuppliersState";
import notificationService from "../../../Service/NotificationService";
import supplierService from "../../../Service/SupplierService";

function TotalSuppliers(): JSX.Element {

    const [count, setCount] = useState<number>(0);

    useEffect(() => {
        supplierService.getAllSuppliers()
            .then(e => setCount(e.length))
            .catch(err => notificationService.error(err.message))

        const unsubscribe = suppliersStore.subscribe(() => {
            setCount(employeesStore.getState().employees.length)
        })
        return unsubscribe
    }, [])


    return (
        <div className="TotalSuppliers">
            <p>Total Suppliers : {count}</p>
        </div>
    );
}

export default TotalSuppliers;

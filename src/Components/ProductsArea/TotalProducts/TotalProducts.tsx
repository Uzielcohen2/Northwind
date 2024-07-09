import { useEffect, useState } from "react";
import productService from "../../../Service/ProductsService";
import { productStore } from "../../../Redux/ProductsState";

function TotalProducts(): JSX.Element {
    // Use State
    const [count, setCount] = useState<number>(0);
    // Use Effect
    useEffect(() => {
        productService.getAllProd()
            .then(products => setCount(products.length))
            .catch(err => alert(err.message));
            
        // Subscribe
        const unsubscribe = productStore.subscribe(() => {
            setCount(productStore.getState().products.length)
        })
        return unsubscribe
    }, [])

// Total Products 
    return (
        <div className="TotalProducts">
            <p>Total Products : {count}</p>
        </div>
    );
}

export default TotalProducts;

import { useEffect, useState } from "react";
import "./TotalCategories.css";
import categoryService from "../../../Service/CategoryService";
import { categoryStore } from "../../../Redux/CategoryState";

function TotalCategories(): JSX.Element {
    // Use State With initial number
    const [count, setCount] = useState<number>(0);

    // Use Effect
    useEffect(() => {
        categoryService.getAllCategories()
            .then(cat => setCount(cat.length))
            .catch(err => alert(err.message))

        const unsubscribe = categoryStore.subscribe(() => {
            setCount(categoryStore.getState().categories.length)
        })
        return unsubscribe
    }, [])
    return (
        <div className="TotalCategories">
            <p>Total Categories : {count}</p>
        </div>
    );
}

export default TotalCategories;

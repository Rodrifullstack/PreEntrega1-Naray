import { useEffect, useState } from "react";
import { getProducts, getProductsByCategory } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


const ItemListContainer = ({ greeting }) => {    
    
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    
    useEffect( () => {
        const asyncFunctions = categoryId ? getProductsByCategory : getProducts
        asyncFunctions(categoryId)
            .then((res) => {
                setProducts(res)
            })
            .catch( error => {
                console.log(error)
            })
    }, [categoryId])


    return(
        <>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </>
    )
}

export default ItemListContainer;
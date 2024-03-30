import { useEffect, useState } from "react";

import ItemList from "../ItemList/ItemList";
import { db } from "../../services/firebase"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";


const ItemListContainer = ({ greeting }) => {

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        const collectionRef = categoryId
            ? query(collection(db, "products"), where("category", "==", categoryId))
            : collection(db, "products")
        getDocs(collectionRef)
            .then((querySnapshot) => {
                console.log(querySnapshot)
                const products = querySnapshot.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            });

    }, [categoryId])


    return (
        <>
            {(!loading) ? (
                <>
                    <h1>{greeting}</h1>
                    <ItemList products={products} />
                </>
            ) :
                (<h2> Cargado productos...</h2>)
            }
        </>
    )

}

export default ItemListContainer;
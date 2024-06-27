import { fetchProducts } from '../api/fakestoreApi';
import ProductCard from '../components/ProductCard.jsx'
import { useEffect, useState } from 'react'


const ShopPage = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const productsData = await fetchProducts()
                setProducts(productsData)
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false)
            }
        }

        loadProducts()

    }, [])

    if (loading) {
        return(<p>Loading...</p>)
    }

    if (error) {
        return(<p>Error: {error}</p>)
    }

    return(
        <>
        <h1>Shop Page</h1>
        <div>
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
        </>
    )
}

export default ShopPage
const BASE_URL = 'https://fakestoreapi.com';

export const fetchProducts = async () => {
    try {
        const res = await fetch(`${BASE_URL}/products`); 
        if (!res.ok) { 
            throw new Error("Failed to fetch products");
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch products:", error);
        throw error;
    }
};

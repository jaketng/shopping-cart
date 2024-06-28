const BASE_URL = "https://fakestoreapi.com";

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

export const addToCart = async (productId, quantity) => {
  const url = `${BASE_URL}/carts`;
  const cartData = {
    userId: 1,
    date: "2023-06-30",
    products: [{ productId, quantity }],
  };

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartData),
    });

    if (!res.ok) {
      throw new Error("Failed to add product to cart");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw error;
  }
};

export const fetchCartData = async (userId) => {
  try {
    const url = `${BASE_URL}/carts/user/${userId}`;
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to retrieve cart data");
    }

    const cartData = await res.json();
    return cartData;
  } catch (error) {
    console.error("Error retrieving cart data:", error);
    throw error;
  }
};

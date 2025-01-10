import React, { useState, useEffect } from "react";
import { fetchUsers, fetchProductsByUser } from "../../services/userServices";
import Navbar from "../../components/navbar/navbar";
import { useUser } from "../../contexts/userContext";

const ProductList = () => {
    const { userId } = useUser(); // Get userId from context
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getUserProducts = async () => {
            if (!userId) {
                setError("User ID is missing. Please log in.");
                return;
            }

            try {
                const data = await fetchProductsByUser(userId); // Pass userId to API call
                setProducts(data);
            } catch (err) {
                setError("Failed to fetch products. Please try again later.");
            }
        };

        getUserProducts();
    }, [userId]); // Re-run if userId changes

    
    return (
        <div className="p-4">
            <Navbar />
            <h1 className="text-2xl font-bold mb-4">User Products</h1>
            {error ? (
                <p className="text-red-500">{error}</p>
            ) : products.length > 0 ? (
                <ul>
                    {products.map((product) => (
                        <li key={product._id}>
                            {product.name} - ${product.price}
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-gray-500">No products found for this user.</p>
            )}
        </div>
    );

};

export default ProductList;

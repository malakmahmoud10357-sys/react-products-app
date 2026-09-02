import { useState } from "react";
import ProductCard from "./ProductCard";

import tshirt from "../assets/T-Shirt.jpeg";
import shoes from "../assets/Shoes.jpeg";
import bag from "../assets/Bag.jpeg";

import { Outlet } from "react-router-dom";

function Products() {

    const [cartCount, setCartCount] = useState(0);

    function addToCart() {
        setCartCount(cartCount + 1);
    }

    function removeFromCart() {
        if (cartCount > 0) {
            setCartCount(cartCount - 1);
        }
    }

    const products = [
        {
            id: 1,
            name: "T-Shirt",
            price: 20,
            category: "Clothes",
            image: tshirt
        },
        {
            id: 2,
            name: "Shoes",
            price: 50,
            category: "Shoes",
            image: shoes
        },
        {
            id: 3,
            name: "Bag",
            price: 30,
            category: "Bags",
            image: bag
        }
    ];

    return (
        <>
            <section className="py-5">

                <div className="container bg-info-subtle p-4 rounded">

                    <h2 className="text-center mb-3">
                        Our Products
                    </h2>

                    <h5 className="text-center mb-4">
                        🛒 Cart Items: {cartCount}
                    </h5>

                    <div className="row">

                        {products.map((product) => (
                            <ProductCard
                                key={product.id}
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                image={product.image}
                                category={product.category}
                                onAddToCart={addToCart}
                                onRemoveFromCart={removeFromCart}
                            />
                        ))}

                    </div>

                </div>

            </section>

            <Outlet />

        </>
    );
}

export default Products;
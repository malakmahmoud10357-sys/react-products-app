import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {

    const [message, setMessage] = useState("");

    function showMessage() {
        setMessage("Welcome to our store! 🛍️");
    }

    return (
        <div className="container mt-5">

            <div className="text-center p-5 bg-info-subtle rounded">

                <h1 className="display-4">
                    Welcome to My Store 🛍️
                </h1>

                <p className="lead">
                    Find your favorite products in our store
                </p>

                <button
                    className="btn btn-dark me-2"
                    onClick={showMessage}
                >
                    Start Shopping
                </button>

                <Link
                    to="/products"
                    className="btn btn-primary"
                >
                    View Products
                </Link>

                {message && (
                    <h5 className="mt-4">
                        {message}
                    </h5>
                )}

            </div>

        </div>
    );
}

export default Home;
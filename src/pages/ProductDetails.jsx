import { useParams, Link } from "react-router-dom";

function ProductDetails() {

    const { id } = useParams();

    return (
        <div className="container mt-5">

            <div className="text-center bg-info-subtle p-5 rounded">

                <h1>Product Details</h1>

                <h3 className="mt-4">
                    Product ID: {id}
                </h3>

                <p>
                    You are viewing the details of this product.
                </p>

                <Link
                    to="/products"
                    className="btn btn-dark mt-3"
                >
                    Back to Products
                </Link>

            </div>

        </div>
    );
}

export default ProductDetails;
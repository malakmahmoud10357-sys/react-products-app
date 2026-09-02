import { useState } from "react";
import { Link } from "react-router-dom";

function ProductCard({
    id,
    name,
    price,
    image,
    category,
    onAddToCart,
    onRemoveFromCart
}) {

    const [count, setCount] = useState(0);

    function addProduct() {
        setCount(count + 1);
        onAddToCart();
    }

    function removeProduct() {
        if (count > 0) {
            setCount(count - 1);
            onRemoveFromCart();
        }
    }

    return (
        <div className="col-md-4 mb-4">

            <div className="card h-100 bg-info-subtle">

                <img
                    src={image}
                    className="card-img-top"
                    alt={name}
                    style={{
                        height: "250px",
                        objectFit: "cover"
                    }}
                />

                <div className="card-body text-center">

                    <h5 className="card-title">
                        {name}
                    </h5>

                    <p>{category}</p>

                    <p className="card-text">
                        ${price}
                    </p>

                    <input
                        type="number"
                        value={count}
                        onChange={(e) =>
                            setCount(Number(e.target.value))
                        }
                        className="form-control mb-3"
                        min="0"
                    />

                    <div className="d-flex justify-content-center align-items-center gap-3">

                        <button
                            className="btn btn-danger"
                            onClick={removeProduct}
                        >
                            -
                        </button>

                        <h5 className="mb-0">
                            {count}
                        </h5>

                        <button
                            className="btn btn-success"
                            onClick={addProduct}
                        >
                            +
                        </button>

                    </div>

                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => {
                            console.log(
                                name,
                                "Quantity:",
                                count
                            );
                        }}
                    >
                        Add to Cart
                    </button>

                    <Link
                       to={`details/${id}`}
                        className="btn btn-outline-dark mt-2"
                    >
                        View Details
                    </Link>

                </div>

            </div>

        </div>
    );
}

export default ProductCard;
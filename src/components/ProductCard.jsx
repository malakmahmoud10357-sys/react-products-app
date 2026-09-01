import { useState } from "react";

function ProductCard({ name, price, image }) {
    const [count, setCount] = useState(0);

    function addToCart() {
        setCount(count + 1);
    }

    return (
        <div className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">

                <img
                    src={image}
                    className="card-img-top"
                    alt={name}
                    style={{ height: "250px", objectFit: "cover" }}
                />

                <div className="card-body text-center d-flex flex-column">

                    <h5 className="card-title">{name}</h5>

                    <p className="card-text">${price}</p>

                    <div className="d-flex justify-content-center gap-2 mt-auto">
    <button
        className="btn btn-dark"
        onClick={addToCart}
    >
        Add to Cart
    </button>

    <button
        className="btn btn-outline-danger"
        onClick={() => {
            if (count > 0) {
                setCount(count - 1);
            }
        }}
    >
        Remove
    </button>
</div>

                    <p className="mt-2 mb-0">
                        Added: {count}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default ProductCard;
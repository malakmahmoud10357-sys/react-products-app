import ProductCard from "./ProductCard";
import tshirt from "../assets/T-Shirt.jpeg";
import shoes from "../assets/Shoes.jpeg";
import bag from "../assets/Bag.jpeg";

function Products() {
    const products = [
        {
            id: 1,
            name: "T-Shirt",
            price: 20,
            image: tshirt
        },
        {
            id: 2,
            name: "Shoes",
            price: 50,
            image: shoes
        },
          { id: 3,
            name: "Bag",
            price: 30,
            image: bag
          }];

    return (
        <section className="py-5">
            <div className="container">
                <h2 className="text-center mb-4">
                    Our Products
                </h2>

                <div className="row">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            price={product.price}
                            image={product.image} /> ))}
                </div>
            </div>
        </section>);
}
export default Products;
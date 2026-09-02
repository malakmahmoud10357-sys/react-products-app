import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Navbar />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "products",
                    element: <Products />,
                    children: [
                        {
                            path: "details/:id",
                            element: <ProductDetails />
                        }
                    ]
                }
            ]
        },
        {
            path: "*",
            element: <NotFound />
        }
    ],
    {
        basename: "/react-products-app"
    }
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
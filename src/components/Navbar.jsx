import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container">

                    <NavLink className="navbar-brand" to="/">
                        My Store
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">
                                    Products
                                </NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
}

export default Navbar;
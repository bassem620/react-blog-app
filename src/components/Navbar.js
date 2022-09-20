import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="border-bottom shadow-sm p-1 fixed-top bg-light">
          <div className="container d-flex">
            <h1 className="fs-2 fw-bold text-primary">The Blog</h1>
            <div className="d-flex ms-auto align-items-center gap-3">
                <Link to="/"  className="nav-link">Home</Link>
                <Link to="/create" className="btn btn-primary"> New Blog </Link>
            </div>
          </div>
        </nav>
    );
};

export default Navbar;

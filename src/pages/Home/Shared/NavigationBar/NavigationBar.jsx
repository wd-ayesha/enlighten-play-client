import { Link } from "react-router-dom";
import logo from "../../../../assets/images/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user?.email);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => {
        console.log(error);
      });
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/allToys">All Toys</Link>
      </li>

      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      {user?.email ? (
        <>
          <li>
            <Link to="/addToy">Add A Toy</Link>
          </li>
          <li>
            <Link to="/myToys">My Toys</Link>
          </li>
          <Link>
            <div className="avatar">
              <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL} title={user?.displayName} alt="" />
              </div>
            </div>
          </Link>
          <li>
            <Link onClick={handleLogOut} to="/login">
              LogOut
            </Link>
          </li>
        </>
      ) : (
        <li>
          <Link to="/login">LogIn</Link>
        </li>
      )}
      <li>
        <Link to="/register">Register</Link>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 mx-auto max-w-7xl">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <div>
            <img className="w-20" src={logo} alt="" />
            <h2 className="font-bold font-serif text-xl">EnlightenPlay</h2>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;

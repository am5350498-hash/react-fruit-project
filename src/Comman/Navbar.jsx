
import { useState } from "react";
import {
  RiAccountCircleFill,
  RiLoginBoxLine,
  RiShoppingCart2Fill,
  RiUserAddLine,
  RiMenu3Line,
  RiCloseLine,
} from "@remixicon/react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const token = localStorage.getItem("token");

  const closeMenu = () => setMenuOpen(false);

  const navLink =
    "transition duration-200 hover:text-blue-400";

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="text-2xl font-extrabold tracking-wide text-blue-400"
          >
            Dairy<span className="text-white">Fresh</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-7 md:flex">
            <Link to="/" className={navLink}>Home</Link>
            <Link to="/about" className={navLink}>About</Link>
            <Link to="/product" className={navLink}>Product</Link>
            <Link to="/contact" className={navLink}>Contact</Link>

            {token ? (
              <>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 rounded-lg border border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                >
                  <RiAccountCircleFill size={20} />
                  Profile
                </Link>

                <Link
                  to="/card"
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 transition hover:bg-blue-600"
                >
                  <RiShoppingCart2Fill size={20} />
                  Cart
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 rounded-lg border border-blue-400 px-4 py-2 text-blue-400 transition hover:bg-blue-500 hover:text-white"
                >
                  <RiLoginBoxLine size={20} />
                  Login
                </Link>

                <Link
                  to="/register"
                  className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 transition hover:bg-blue-600"
                >
                  <RiUserAddLine size={20} />
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-white hover:bg-gray-800 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <RiCloseLine size={28} />
            ) : (
              <RiMenu3Line size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 border-t border-gray-700 pt-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link to="/" onClick={closeMenu} className={navLink}>
                Home
              </Link>

              <Link to="/about" onClick={closeMenu} className={navLink}>
                About
              </Link>

              <Link to="/product" onClick={closeMenu} className={navLink}>
                Product
              </Link>

              <Link to="/contact" onClick={closeMenu} className={navLink}>
                Contact
              </Link>

              {token ? (
                <>
                  <Link
                    to="/profile"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-lg border border-blue-400 px-4 py-2 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <RiAccountCircleFill size={20} />
                    Profile
                  </Link>

                  <Link
                    to="/card"
                    onClick={closeMenu}
                    className="flex items-center gap-2 rounded-lg bg-blue-500 px-4 py-2 hover:bg-blue-600"
                  >
                    <RiShoppingCart2Fill size={20} />
                    Cart
                  </Link>
                </>
              ) : (
                <div className="flex gap-3">
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-blue-400 px-3 py-2 text-blue-400 hover:bg-blue-500 hover:text-white"
                  >
                    <RiLoginBoxLine size={20} />
                    Login
                  </Link>

                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-500 px-3 py-2 hover:bg-blue-600"
                  >
                    <RiUserAddLine size={20} />
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;

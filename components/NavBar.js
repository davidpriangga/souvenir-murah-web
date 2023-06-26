import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";
import styles from "../styles/Navbar.module.css";
import { Badge } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "react-use-cart";
import Cart from "./cart";

function NavBar() {
  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
    return router.push("/");
  };

  const adminRouter = () => {
    return (
      <>
        <Link href="/categories" className="dropdown-item">
          Add Categories
        </Link>
        <Link href="/create" className="dropdown-item">
          Add Products
        </Link>
      </>
    );
  };

  const loggedRouter = () => {
    const { totalUniqueItems } = useCart();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };

    const onClose = () => {
      setOpen(false);
    };

    return (
      <>
        <li className="nav-item dropdown">
          <a
            className="nav-link dropdown-toggle text-capitalize"
            href="#"
            id="navbarDropdownMenuLink"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="fas fa-user"></i> {auth.user.name}
          </a>

          <div
            className="dropdown-menu"
            aria-labelledby="navbarDropdownMenuLink"
          >
            <Link href="/profile" className="dropdown-item">
              Profile
            </Link>
            <Link href="/order" className="dropdown-item">
              Pesanan
            </Link>
            {auth.user.role === "admin" && adminRouter()}
            <div className="dropdown-divider"></div>
            <button className="dropdown-item" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              showDrawer();
            }}
            style={{ paddingTop: 10 }}
          >
            <Badge count={totalUniqueItems} size="small">
              <ShoppingCartOutlined style={{ color: "white", fontSize: 25 }} />
            </Badge>
          </div>
        </li>
        <Cart open={open} onClose={onClose} />
      </>
    );
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <Link href="/">
        <div className={styles.item}>
          <div className={styles.callButton}>
            <img src="/img/logo.png" alt="" width="56" height="56" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>Souvenir Murah</div>
            <div className={styles.text}>Banyuwangi</div>
          </div>
        </div>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-end mx-5"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav p-1">
          <li className="nav-item">
            <Link href="/" className={"nav-link" + isActive("/")}>
              <i
                className="fas fa-home position-relative"
                aria-hidden="true"
              ></i>{" "}
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/product" className={"nav-link" + isActive("/product")}>
              <i
                className="fas fa-file position-relative"
                aria-hidden="true"
              ></i>{" "}
              Product
            </Link>
          </li>
          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/signin" className={"nav-link" + isActive("/signin")}>
                <i className="fas fa-user" aria-hidden="true"></i> Sign in
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;

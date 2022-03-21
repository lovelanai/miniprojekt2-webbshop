import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import "./Header.css";
import "./ShoppingCartPage.tsx";

function Header() {
  const { amountOfProducts } = useContext(ShoppingCartContext);
  return (
    <header id="header" className="show-products">
      <Link to="/AdminPage">
        <AdminPanelSettingsIcon
          className="icon"
          sx={{ paddingLeft: "1rem", fontSize: "2rem", opacity: "0" }}
        />
      </Link>
      {/* <Link to="/">
        <CameraIcon
          className="icon"
          sx={{ paddingLeft: "1rem", fontSize: "2rem", opacity: "0" }}
        />
      </Link> */}

      <img id={"logo"} src={require("../assets/img/logo.png")} alt="logo" />

      <Link to="/">
        <img
          id={"smallLogo"}
          src={require("../assets/img/smallogo.png")}
          alt="logo"
        />
      </Link>
      <Link to="/ShoppingCartPage">
        <Badge
          className="icon"
          sx={{ marginRight: "1rem", opacity: "0" }}
          badgeContent={amountOfProducts}
          color="primary"
        >
          <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
        </Badge>
      </Link>
    </header>
  );
}

export default Header;

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraIcon from "@mui/icons-material/Camera";
import "./Header.css";
import { Badge, Button } from "@mui/material";
import { useState } from "react";

function Header() {
  const [animate, setAnimate] = useState(false);

  return (

    <header id="header" className="show-products">
      <CameraIcon
        className="icon"
        sx={{ paddingLeft: "1rem", fontSize: "2rem", opacity: "0" }}
      />

      <img id={"logo"} src={require("../assets/img/logo.png")} alt="logo" />
      <img
        id={"smallLogo"}
        src={require("../assets/img/smallogo.png")}
        alt="logo"
      />

      <Badge
        className="icon"
        sx={{ marginRight: "1rem", opacity: "0" }}
        badgeContent={"99+"}
        color="primary"
      >

        <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
      </Badge>
    </header>
  );
}

export default Header;

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraIcon from "@mui/icons-material/Camera";
import "./Header.css";
import { Badge, Button } from "@mui/material";
import { display } from "@mui/system";

function Header() {
  return (
    <header id="header">
      <CameraIcon
        id={"cameraIcon"}
        sx={{ paddingLeft: "1rem", fontSize: "2rem", opacity: "0" }}
      />

      <img id={"logo"} src={require("./logo.png")} alt="logo" />

      <Button id="showProductsBtn" onClick={showProducts}>
        Shoppa
      </Button>

      <Badge
        id={"cartIcon"}
        sx={{ marginRight: "1rem", opacity: "0" }}
        badgeContent={"99+"}
        color="primary"
      >
        <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
      </Badge>
    </header>
  );
}

function showProducts() {
  document.getElementById("header")?.classList.add("show-products");
  document.getElementById("logo")?.classList.add("logo-fit");
  document.getElementById("cartIcon")?.classList.add("show-cart");
  document.getElementById("cameraIcon")?.classList.add("show-cart");
  document.getElementById("showProductsBtn")?.remove();
}

export default Header;

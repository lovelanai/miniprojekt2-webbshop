import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DiamondIcon from "@mui/icons-material/Diamond";
import "./Header.css";

function Header() {
  return (
    <header>
      <DiamondIcon sx={{ paddingLeft: "1rem" }} />
      <h1>store2.se</h1>
      <ShoppingCartIcon sx={{ paddingRight: "1rem" }} />
    </header>
  );
}

export default Header;

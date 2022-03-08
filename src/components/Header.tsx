import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CameraIcon from "@mui/icons-material/Camera";
import "./Header.css";
import { Badge, Button } from "@mui/material";

function Header() {
  return (

    <header>
      <CameraIcon sx={{ paddingLeft: "1rem", fontSize: "2rem" }} />
      <div className="title">
        <h1>kameraproffset.se</h1>
        <h2>Av fotografer, för fotografer.</h2>
      </div>
      <Badge sx={{ marginRight: "1rem" }} badgeContent={99} color="primary">

        <ShoppingCartIcon sx={{ fontSize: "2rem" }} />
      </Badge>
    </header>
  );
}


export default Header;

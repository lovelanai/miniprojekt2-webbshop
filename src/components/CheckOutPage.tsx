import { Button } from "@mui/material";
import { useState } from "react";
import "./checkout.css";
import Shipping from "./Shipping";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CheckOutAccordion from "./CheckOutAccordion";

function CheckOut() {
  const [isFilled, setIsFilled] = useState(false);
  const [formData, setFormData] = useState();

  // function fillForm(data){
  //   data
  // }

  if (!isFilled) {
    return (
      <div className="checkout-container">
        <Link to="/ShoppingCartPage">
          <ArrowBackIcon sx={{ fontSize: "2.2rem" }} className="back-arrow" />
        </Link>
        <Shipping />
      </div>
    );
  } else {
    return (
      <div className="checkout-container">
        <Link to="/ShoppingCartPage">
          <ArrowBackIcon sx={{ fontSize: "2.2rem" }} className="back-arrow" />
        </Link>
        <CheckOutAccordion></CheckOutAccordion>

        <h3>välj frakt din fula jävla hora, du är inte ens värd en spermie</h3>
        <div>hej love bajs</div>
      </div>
    );
  }
}

export default CheckOut;

import { useState } from "react";
import "./checkout.css";
import Shipping from "./Shipping";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import CheckOutAccordion from "./CheckOutAccordion";

function CheckOut() {
  // const [isFilled, setIsFilled] = useState(false);
  // const [formData, setFormData] = useState();

  // function fillForm(data){
  //   data

  return (
    <div className="checkout-container">
      <Link to="/ShoppingCartPage">
        <ArrowBackIcon sx={{ fontSize: "2.2rem" }} className="back-arrow" />
      </Link>
      <CheckOutAccordion></CheckOutAccordion>
    </div>
  );
}

export default CheckOut;

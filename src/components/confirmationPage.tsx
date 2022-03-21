import { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import "./confirmationPage.css";

function Confirmation() {
  const { customerName } = useParams();

  let r = Math.round(Math.random() * 999999999999);

  return (
    <div className="rootStyle">
      <div className="rootChild">
        <p>Tack för ditt köp {customerName} </p>
        <h3>{r}</h3>
      </div>
    </div>
  );
}

export default Confirmation;

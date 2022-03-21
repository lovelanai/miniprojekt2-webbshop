import { CSSProperties } from "react";
import { useParams } from "react-router-dom";
import "./confirmationPage.css";
import { PersonalData, User } from "../interfaces/interfaces";
import { useUser } from "../contexts/confirmationContext";

function Confirmation() {
  const { customerName } = useParams();
  const { isLoading } = useUser();

  let r = Math.round(Math.random() * 999999999999);

  function confirmationFetch(_: string) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ customerName });
      }, 2000);
    });
  }

  return (
    <div className="rootStyle">
      <div className="rootChild">
        {/* {isLoading ? (
        <span>laddar...</span>) : ( <p>Tack för ditt köp {customerName} </p> <h3>{r}</h3>  )}; */}
      </div>
    </div>
  );
}

export default Confirmation;

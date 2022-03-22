import { useParams } from "react-router-dom";
import "./confirmationPage.css";
import { useUser } from "../contexts/confirmationContext";
import "./confirmationPage.css";

function Confirmation() {
  const { customerName } = useParams();
  const { isLoading } = useUser();

  let r = Math.round(Math.random() * 999999999999);

  return (
    <div className="checkout">
      {isLoading ? (
        <span className="loading">laddar...</span>
      ) : (
        <span>
          <p>Tack för ditt köp {customerName}</p> <h3>Ordernummer: {r}</h3>
        </span>
      )}
    </div>
  );
}

export default Confirmation;

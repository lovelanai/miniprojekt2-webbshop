import { Card } from "@mui/material";
import { useParams } from "react-router-dom";

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
        <div className="confirmation-container">
          <Card className="confirmation-card">
            <div>
              <img
                id={"logo"}
                src={require("../assets/img/logo.png")}
                alt="logo"
              />
            </div>
            <div>
              <p>Tack för ditt köp</p>
              <p>{customerName}</p>

              <p>Ordernummer:</p>
              <p>{r}</p>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default Confirmation;

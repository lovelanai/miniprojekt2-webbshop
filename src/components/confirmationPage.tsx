import { useParams } from "react-router-dom";
import "./confirmationPage.css";
import { useUser } from "../contexts/confirmationContext";
import { Typography } from "@mui/material";
import CheckOutItems from "./CheckoutItems";

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
          <Typography component={"span"}>
            <div className="person">
              <h3>Personuppgifter</h3>
              <p>Telefon: {personalInfo.phone}</p>
              <p>Email: {personalInfo.email}</p>
              <p>Namn: {personalInfo.name}</p>
              <p>Postnr: {personalInfo.postnr}</p>
              <p>Adress: {personalInfo.street}</p>
              <div>
                <h3>Leveranssätt</h3>
                {/* {checkboxes.map((checked) => (<div>{checked.findIndex() === true}</div>))} */}
                <p>
                  {
                    checkboxes?.find((item) => item.checked === true)?.shipper
                      .title
                  }{" "}
                  <p>
                    {
                      checkboxes?.find((item) => item.checked === true)?.shipper
                        .price
                    }
                    :-
                  </p>{" "}
                </p>
                <h3>Betalning</h3>
                <p>
                  {
                    checkboxesPay.find((item) => item.paychecked === true)
                      ?.paymethod.title
                  }{" "}
                  <p>
                    {
                      checkboxesPay.find((item) => item.paychecked === true)
                        ?.paymethod.price
                    }
                    :-{" "}
                  </p>{" "}
                </p>
              </div>
              <div>
                <h3>Valda produkter</h3>
                <CheckOutItems />
              </div>
              Totalpris:{" "}
              {totalPrice +
                checkboxesPay.find((item) => item.paychecked === true)
                  ?.paymethod.price! +
                checkboxes.find((item) => item.checked === true)?.shipper
                  .price!}{" "}
              kr
              <div>Moms: {totalPrice * 0.25} kr</div>
            </div>
          </Typography>
        </span>
      )}
    </div>
  );
}

export default Confirmation;

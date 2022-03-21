/* eslint-disable react/jsx-no-comment-textnodes */
import {
  mockedShipping,
  ShipperSelection,
  mockedPay,
  PaySelection,
  PersonalData,
} from "../interfaces/interfaces";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Shipping from "./Shipping";
import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import CheckOutItems from "./CheckoutItems";
import { Link } from "react-router-dom";
import CardPayment from "./CardPayment";
import { CheckBox } from "@mui/icons-material";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import "./checkOutAccordion.css";

import SwishPayment from "./SwishPayment";
import FakturaPayment from "./FakturaPayment";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CheckOutAccordion() {
  const { totalPrice } = React.useContext(ShoppingCartContext);
  const [expanded, setExpanded] = React.useState<string | false>("panel1");

  const defaultShipperState: ShipperSelection[] = mockedShipping.map(
    (shipper) => ({ shipper, checked: false })
  );

  const [checkboxes, setCheckboxes] =
    React.useState<ShipperSelection[]>(defaultShipperState);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  const defaultPaymentState: PaySelection[] = mockedPay.map((paymethod) => ({
    paymethod,
    paychecked: false,
  }));

  const [checkboxesPay, setCheckboxesPay] =
    React.useState<PaySelection[]>(defaultPaymentState);

  const [personalInfo, setPersonalInfo] = useState<PersonalData>({
    email: "",
    name: "",
    phone: "",
    postnr: "",
    street: "",
  });

  function sendPersonalData(personaldata: PersonalData) {
    setPersonalInfo(personaldata);
  }

  const areAllFieldsFilled = () => {
    if (
      personalInfo.email?.length >= 5 &&
      personalInfo.name?.length &&
      personalInfo.phone.toString().length >= 7 &&
      personalInfo.postnr?.toString().length === 5 &&
      personalInfo.street?.length
    ) {
      return false;
    } else return true;
  };

  return (
    <div className=" rootStyle">
      {/*  Personuppgifter liggandes i första accordion*/}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={"span"}>Personuppgifter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Shipping sendPersonalData={sendPersonalData} />
          <Button
            variant="contained"
            disabled={Boolean(areAllFieldsFilled())}
            onClick={() => setExpanded("panel2")}
            size="medium"
            color="primary"
          >
            Bekräfta
          </Button>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component={"span"}>Betalnings alternativ</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} className="DeliveryForm">
            {checkboxesPay.map((CheckBox) => (
              <div key={CheckBox.paymethod.id}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <Checkbox
                    onChange={() => {
                      let checkboxPayListToUpdate = checkboxesPay;

                      checkboxPayListToUpdate.forEach((tempCheckbox) => {
                        tempCheckbox.paychecked = false;
                      });

                      const currentBoxIndex = mockedPay.findIndex(
                        (item) => item.id === CheckBox.paymethod.id
                      );

                      checkboxPayListToUpdate[currentBoxIndex].paychecked =
                        true;

                      // console.log(checkboxListToUpdate);

                      setCheckboxesPay([...checkboxPayListToUpdate]);
                      // console.log(checkboxes);
                    }}
                    checked={CheckBox.paychecked}
                  />

                  <div className="info" key={CheckBox.paymethod.id}>
                    <p>{CheckBox.paymethod.price}:-</p>
                    <p>{CheckBox.paymethod.info}</p>
                    <p> {CheckBox.paymethod.alt}</p>
                    <p>
                      {CheckBox.paymethod.title === "swish"
                        ? personalInfo.phone
                        : null}{" "}
                      {CheckBox.paymethod.title === "faktura"
                        ? personalInfo.email
                        : null}
                    </p>
                  </div>
                </FormGroup>
              </div>
            ))}
          </Typography>
          <Button variant="contained" onClick={() => setExpanded("panel3")}>
            Bekräfta
          </Button>
        </AccordionDetails>

        {/* Översikt liggandes i tredje accordion */}
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={"span"}>Betalning</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"}>
            {checkboxesPay.find((item) => item.paychecked === true)?.paymethod
              .title === "Kortbetalning" ? (
              <CardPayment triggerNextAccordion={() => setExpanded("panel4")} />
            ) : checkboxesPay.find((item) => item.paychecked === true)
                ?.paymethod.title === "swish" ? (
              <SwishPayment />
            ) : checkboxesPay.find((item) => item.paychecked === true)
                ?.paymethod.title === "faktura" ? (
              <FakturaPayment />
            ) : (
              <p>Ingen betalningsmetod vald</p>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      {/*Fraktuppgifter liggandes i andra accordion*/}
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component={"span"}>Leverans uppgifter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={"span"} className="DeliveryForm">
            {checkboxes.map((checkbox) => (
              <div key={checkbox.shipper.id}>
                <FormGroup
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "1rem 0",
                  }}
                >
                  <FormControlLabel
                    control={
                      <Checkbox
                        onChange={() => {
                          let checkboxListToUpdate = checkboxes;

                          checkboxListToUpdate.forEach((tempCheckbox) => {
                            tempCheckbox.checked = false;
                          });

                          const currentBoxIndex = mockedShipping.findIndex(
                            (item) => item.id === checkbox.shipper.id
                          );

                          checkboxListToUpdate[currentBoxIndex].checked = true;

                          // console.log(checkboxListToUpdate);

                          setCheckboxes([...checkboxListToUpdate]);
                          // console.log(checkboxes);
                        }}
                        checked={checkbox.checked}
                      />
                    }
                    label={
                      <img
                        className="img"
                        src={checkbox.shipper.image}
                        alt=""
                      />
                    }
                  />

                  <div className="info" key={checkbox.shipper.id}>
                    <p>{checkbox.shipper.price}:-</p>
                    <p>{checkbox.shipper.info}</p>
                  </div>
                </FormGroup>
              </div>
            ))}
          </Typography>
          <Button variant="contained" onClick={() => setExpanded("panel5")}>
            {" "}
            Bekräfta
          </Button>
        </AccordionDetails>

        {/* Översikt liggandes i tredje accordion */}
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component={"span"}>Översikt</Typography>
        </AccordionSummary>
        <AccordionDetails>
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
                    checkboxes.find((item) => item.checked === true)?.shipper
                      .title
                  }{" "}
                  <p>
                    {
                      checkboxes.find((item) => item.checked === true)?.shipper
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
                <p>{personalInfo.email}</p>
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

            <Link to={`/ConfirmationPage/${personalInfo.name}`}>
              <Button variant="contained">Bekräfta köp</Button>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

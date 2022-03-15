/* eslint-disable react/jsx-no-comment-textnodes */
import {
  mockedShipping,
  ShipperSelection,
  mockedPay,
  paySelection,
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
import React, { useState } from "react";
import { Button } from "@mui/material";
import CheckOutItems from "./CheckoutItems";

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


  const [personalInfo, setPersonalInfo] = useState<any[]>()



  function sendPersonalData(personaldata: any[]) {


    console.log(personaldata)

    setPersonalInfo([...personaldata])
    console.log(personalInfo)


  }





  // const personalInfo = [email, name, phonenum, postnr, street];

  return (
    <div style={rootStyle}>

      {/*  Personuppgifter liggandes i första accordion*/}
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography component={'span'}>Personuppgifter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <Shipping sendPersonalData={sendPersonalData} />
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography component={'span'}>betalnings metod</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} style={DeliveryForm}>
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
                      <img style={img} src={checkbox.shipper.image} alt="" />
                    }
                  />

                  <div style={info} key={checkbox.shipper.id}>
                    <p>{checkbox.shipper.price}:-</p>
                    <p>{checkbox.shipper.info}</p>
                  </div>


                </FormGroup>
              </div>
            ))}
          </Typography>
          <Button onClick={() => console.log(checkboxes.find(item => item.checked === true))} > leverans</Button>
          <Button>testknapp</Button>
        </AccordionDetails>

        {/* Översikt liggandes i tredje accordion */}
      </Accordion>
      {/*Fraktuppgifter liggandes i andra accordion*/}
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography component={'span'}>Leverans uppgifter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'} style={DeliveryForm}>
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
                      <img style={img} src={checkbox.shipper.image} alt="" />
                    }
                  />

                  <div style={info} key={checkbox.shipper.id}>
                    <p>{checkbox.shipper.price}:-</p>
                    <p>{checkbox.shipper.info}</p>
                  </div>


                </FormGroup>
              </div>
            ))}
          </Typography>
          <Button onClick={() => console.log(checkboxes.find(item => item.checked === true))} > leverans</Button>
          <Button>testknapp</Button>
        </AccordionDetails>

        {/* Översikt liggandes i tredje accordion */}
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ width: "100%" }}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography component={'span'}>Översikt</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component={'span'}>
            <div>
              <p>Orderöversikt</p>
              <div>
                <h3>Personuppgifter</h3>
                {personalInfo?.map((item) => (<div>{item}</div>))}
              </div>

              <div>
                <h3>Leveranssätt</h3>
                {/* {checkboxes.map((checked) => (<div>{checked.findIndex() === true}</div>))} */}
                <p>här ska valt fraktsätt finnas</p>
              </div>


              <div>
                <h3>Valda produkter</h3>
                <CheckOutItems />

              </div>



            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div >
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  minWidth: "40rem",
  width: "70%",
  marginTop: "5rem",
  marginBottom: "3rem"
};

const DeliveryForm: CSSProperties = {
  dislpay: "flex",
  flexDirection: "column",
};

const info: CSSProperties = {
  display: "flex",
};

const img: CSSProperties = {
  width: "10rem",
  height: "3.5rem",
  paddingLeft: "3rem",
};

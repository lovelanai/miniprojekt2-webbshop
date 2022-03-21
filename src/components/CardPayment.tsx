import React, { useState, FocusEvent, ChangeEvent } from "react";

import { Box, Button, TextField } from "@mui/material";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { grid, margin } from "@mui/system";
import "./cardPayment.css";

interface Props {
  triggerNextAccordion(): void;
}

export default function CardPayment(props: Props) {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");

  const areAllFieldsFilled = () => {
    if (
      name?.length &&
      number?.toString().length === 16 &&
      expiry?.toString().length === 4 &&
      cvc?.toString().length === 3
    ) {
      return false;
    } else return true;
  };

  const initialErrors = {
    name: false,
    number: false,
    expiry: false,
    cvc: false,
  };
  const [errorInput, setErrorinput] = useState(initialErrors);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (evt.target.name === "name") {
      if (
        !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
          evt.target.value
        )
      ) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setName(evt.target.value);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }

    if (evt.target.name === "number") {
      if (!/^\d{16,16}$/gm.test(evt.target.value)) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setNumber(evt.target.value);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }

    if (evt.target.name === "cvc") {
      if (!/^\d{3,3}$/gm.test(evt.target.value)) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setCvc(evt.target.value);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }

    if (evt.target.name === "expiry") {
      if (!/^\d{4,4}$/gm.test(evt.target.value)) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setExpiry(evt.target.value);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }
  };

  return (
    <div className="rootStyle">
      <div className="inputs">
        <TextField
          name="name"
          id="outlined-name"
          helperText={errorInput.name ? "Ange giltig Namn" : "Namn på kort"}
          error={Boolean(errorInput.name)}
          onChange={handleChange}
        />
        <TextField
          name="number"
          id="outlined-number"
          label="number"
          helperText={
            errorInput.number ? "Ange giltigt kortnummer" : "Kortnummer"
          }
          error={Boolean(errorInput.number)}
          onChange={handleChange}
        />

        <TextField
          name="expiry"
          placeholder="MM/YY"
          helperText={
            errorInput.expiry ? "Ange korrekt MM/YY utan '/'" : "Utgångsdatum"
          }
          error={Boolean(errorInput.expiry)}
          onChange={handleChange}
        />

        <TextField
          name="cvc"
          placeholder="CVC"
          helperText={errorInput.cvc ? "Ange giltig CVC" : "CVC"}
          error={Boolean(errorInput.cvc)}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          onClick={() => props.triggerNextAccordion()}
          disabled={Boolean(areAllFieldsFilled())}
          size="medium"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

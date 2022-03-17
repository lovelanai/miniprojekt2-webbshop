import React, { useState, FocusEvent, ChangeEvent } from "react";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Focused } from "react-credit-cards";
import { Box, TextField } from "@mui/material";
import { CSSProperties } from "@material-ui/core/styles/withStyles";
import { grid, margin } from "@mui/system";

export default function CardPayment() {
  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [focus, setFocus] = useState<Focused>();

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
        setFocus(evt.target.name as Focused);
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
        setFocus(evt.target.name as Focused);
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
        setFocus(evt.target.name as Focused);
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
        setFocus(evt.target.name as Focused);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }
  };

  // if (evt.target.name === "name") {
  //   setName(evt.target.value);
  // }

  return (
    <div style={rootStyle}>
      <Cards
        name={name}
        number={number}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
      <div style={inputs}>
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
      </div>
    </div>
  );
}

const rootStyle: CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
};

const inputs: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  margin: "1rem",
  columnGap: ".5rem",
  rowGap: ".5rem",
};

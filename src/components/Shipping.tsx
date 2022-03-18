import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { ChangeEvent, useState } from "react";
import { Focused } from "react-credit-cards";
import { PersonalData } from "../interfaces/interfaces";

import "./checkout.css";

interface Props {
  sendPersonalData: (data: PersonalData) => void;
}

export default function Shipping(props: Props) {
  function personalDataTransfer() {
    props.sendPersonalData({
      email: email,
      name: name,
      phone: phonenumber,
      postnr: zip,
      street: adress1,
    });
  }

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [zip, setZip] = useState("");
  const [adress1, setAdress1] = useState("");

  // const personalInfo = [email, name, phonenum, postnr, street];

  const initialErrors = {
    email: false,
    name: false,
    phonenumber: false,
    zip: false,
    adress1: false,
  };
  const [errorInput, setErrorinput] = useState(initialErrors);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (evt.target.name === "email") {
      if (
        !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
          evt.target.value
        )
      ) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setEmail(evt.target.value);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }

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

    if (evt.target.name === "phonenumber") {
      if (!/^\d{8,11}$/gm.test(evt.target.value)) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setPhonenumber(evt.target.value);

        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }

    if (evt.target.name === "zip") {
      if (!/^\d{5,5}$/gm.test(evt.target.value)) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setZip(evt.target.value);
        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }
    if (evt.target.name === "adress1") {
      if (!/^\d{4,4}$/gm.test(evt.target.value)) {
        setErrorinput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else {
        setAdress1(evt.target.value);

        setErrorinput({
          ...errorInput,
          [evt.target.name]: false,
        });
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <div>
        <div className="form-container">
          <div className="box-1">
            <TextField
              className="box-1-input"
              type="email"
              name="email"
              label="Mejladress"
              required
              helperText={
                errorInput.email ? "Ange gilig email" : "Email adress"
              }
              error={Boolean(errorInput.email)}
              onChange={handleChange}
            />
            <TextField
              name="name"
              label="Fullständigt namn"
              required
              helperText={
                errorInput.name ? "Ange giltig Namn" : "För och efternamn"
              }
              error={Boolean(errorInput.name)}
              onChange={handleChange}
            />

            <TextField
              name="phonenumber"
              label="Telefon nr"
              required
              helperText={
                errorInput.phonenumber
                  ? "Ange giltig telefon nummer"
                  : "Telefon nummer"
              }
              error={Boolean(errorInput.phonenumber)}
              onChange={handleChange}
            />
          </div>
          <TextField
            className="box-1-input"
            name="zip"
            label="Postnummer"
            required
            helperText={
              errorInput.zip ? "Ange giltigt postnummer" : "Ange postnummer"
            }
            error={Boolean(errorInput.zip)}
            onChange={handleChange}
          />
          <TextField
            name="adress1"
            label="Leveransadress"
            required
            error={Boolean(errorInput.adress1)}
            onChange={handleChange}
            helperText={
              errorInput.adress1 ? "Ange giltig adress" : "Leverans adress"
            }
          />
        </div>

        <Button onClick={() => personalDataTransfer()}> Bekräfta </Button>
      </div>
    </Box>
  );
}

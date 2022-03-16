
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useState } from 'react';

import "./checkout.css";

interface Props {
  sendPersonalData: (data: any[]) => void
}

export default function Shipping(props: Props) {



  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phonenum, setPhonenum] = useState('');
  const [postnr, setPostnr] = useState('');
  const [street, setStreet] = useState('');

  const [personalInfo, setPersonalInfo] = useState<any[]>()

  // const personalInfo = [email, name, phonenum, postnr, street];

  function personalDataTransfer() {
    setPersonalInfo([{ email: email, name: name, phone: phonenum, post: postnr, street: street }])

    props.sendPersonalData([email, name, phonenum, postnr, street])


  }



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
              value={email}
              onChange={(event) => setEmail(event.target.value)}

            />
            <TextField
              name="given-name"
              label="Fullständigt namn"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />


            <TextField name="phonenumber" label="Telefon nr" required
              value={phonenum}
              onChange={(event) => setPhonenum(event.target.value)} />



          </div>
          <TextField
            className="box-1-input"
            name="zip-code"
            label="Postnummer"
            required
            value={postnr}
            onChange={(event) => setPostnr(event.target.value)}

          />
          <TextField name="adress1" label="Leveransadress" required
            value={street}
            onChange={(event) => setStreet(event.target.value)} />
        </div>


        <Button onClick={() => personalDataTransfer()} > Bekräfta </Button>




      </div >
    </Box >

  );
}

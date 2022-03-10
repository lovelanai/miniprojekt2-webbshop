import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import "./checkout.css";

import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Input, FormHelperText } from "@mui/material";

export default function Shipping() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className="form-container">
          <div className="box-1">
            <TextField
              className="box-1-input"
              type="email"
              name="email"
              label="Mejladress"
            />
            <TextField
              className="box-1-input"
              name="zip-code"
              label="Postnummer"
            />
          </div>
          <TextField name="firstandlastname" label="Fullständigt Namn" />
          <TextField name="street" label="street" />
          <TextField name="phonenumber" label="Telefon nr" />
        </div>
      </div>
    </Box>
  );
}

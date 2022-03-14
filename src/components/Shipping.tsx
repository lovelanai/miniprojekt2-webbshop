import { PinDropSharp } from "@mui/icons-material";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import "./checkout.css";

export default function Shipping() {
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
            />
            <TextField
              className="box-1-input"
              name="zip-code"
              label="Postnummer"
              required
            />
          </div>
          <TextField
            name="firstandlastname"
            label="Fullständigt Namn"
            required
          />
          <TextField name="street" label="street" required />
          <TextField name="phonenumber" label="Telefon nr" required />
        </div>
      </div>
    </Box>
  );
}

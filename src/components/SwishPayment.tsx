import { Box, TextField } from "@mui/material";

export default function SwishPayment() {
  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="on"
    >
      <div className="form-container">
        <div className="box-1">
          <TextField
            name="phonenumber"
            label="Telefon nr"
            required
            // helperText={
            //   errorInput.phonenumber
            //     ? "Ange giltig telefon nummer"
            //     : "Telefon nummer"
            // }
            // error={Boolean(errorInput.phonenumber)}
            // onChange={handleChange}
          />
        </div>
      </div>
    </Box>
  );
}

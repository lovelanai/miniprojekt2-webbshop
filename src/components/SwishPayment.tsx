import { TextField } from "@mui/material";

export default function SwishPayment() {
  return (
    <div>
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
  );
}

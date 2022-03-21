import { Box, Button, TextField } from "@mui/material";
import { useState, ChangeEvent } from "react";

interface Props {
  telnumber: string;
  triggerNextAccordion(): void;
}

export default function SwishPayment(props: Props) {
  const [errorInput, setErrorinput] = useState({ phonenumber: false });
  const [phonenumber, setPhonenumber] = useState("");

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
  };

  function isNumberFilled() {
    if (phonenumber.toString().length >= 7) {
      return true;
    } else return false;
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
      <div className="form-container">
        <div className="box-1">
          <TextField
            name="phonenumber"
            label="Telefon nr"
            required
            defaultValue={props.telnumber}
            helperText={
              errorInput.phonenumber
                ? "Ange giltig telefon nummer"
                : "Telefon nummer"
            }
            error={Boolean(errorInput.phonenumber)}
            onChange={handleChange}
          />
          <Button
            variant="contained"
            disabled={Boolean(isNumberFilled())}
            onClick={() => props.triggerNextAccordion()}
          >
            Bekräfta
          </Button>
        </div>
      </div>
    </Box>
  );
}

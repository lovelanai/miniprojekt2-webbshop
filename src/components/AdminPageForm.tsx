import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { ChangeEvent, useState } from "react";
import { Product } from "../interfaces/interfaces";

interface Props {
  product?: Product;
}

export default function AdminPageForm(props: Props) {
  const [price, setPrice] = useState<string>();
  const [errors, setErrors] = useState<{ price: string }>();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setErrors({ price: "" });
    setPrice(value);
    /**
     * If the value contains something other than numbers, the reg variable
     * gets set to false, which then sets the errors state to the following.
     */
    let reg = /^\d*$/.test(value);
    if (!reg) {
      setErrors({ price: "Only numbers are permitted" });
    }
    console.log(value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": {
          marginTop: 2,
          marginBottom: 2,
          width: "100%",
        },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          multiline
          maxRows={4}
          id="outlined-Titel"
          label="Titel"
          defaultValue={props.product?.title}
          helperText="Produktens titel"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            required
            id="outlined-number"
            label="Price"
            error={Boolean(errors?.price)}
            defaultValue={props.product?.price}
            helperText={errors?.price ? errors?.price : "Produktens pris"}
            onChange={handleChange}
          />
          <TextField
            sx={{ marginLeft: 3 }}
            required
            multiline
            maxRows={6}
            type="Number"
            id="outlined-ID"
            label="ID"
            defaultValue={props.product?.id}
            helperText="Produktens ID"
          />
        </div>
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image1"
          label="Image1"
          defaultValue={props.product?.image}
          helperText="Produktens bild URL 1"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image2"
          defaultValue={props.product?.image2}
          label="Image2"
          helperText="Produktens bild URL 2"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image1"
          label="Image3"
          defaultValue={props.product?.image3}
          helperText="Produktens bild URL 3"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="Outlined-LongInfo"
          label="Long info"
          helperText="Produktens långa info"
          defaultValue={props.product?.longinfo}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info1"
          label="Info1"
          helperText="Produktens korta info 1"
          defaultValue={props.product?.info1}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info2"
          label="Info2"
          helperText="Produktens korta info 2"
          defaultValue={props.product?.info2}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info3"
          label="Info3"
          helperText="Produktens korta info 3"
          defaultValue={props.product?.info3}
        />
      </div>
    </Box>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Product } from "../interfaces/interfaces";

interface Props {
  product?: Product;
}

export default function AdminPageForm(props: Props) {
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
            type="Number"
            defaultValue={props.product?.price}
            helperText="Produktens pris"
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

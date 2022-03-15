import { Box, TextField } from "@mui/material";
import { useFormik } from "formik";
import { title } from "process";
import { ChangeEvent, FormEvent, useState } from "react";
import { setConstantValue } from "typescript";
import { string } from "yup";
import { number } from "yup/lib/locale";
import { Product } from "../interfaces/interfaces";

interface Props {
  product?: Product;
}

interface formData {
  title: formThing;
  id: formThing;
}

interface formThing {
  id: number;
  title: string;
  longinfo: string;
  info1: string;
  info2: string;
  info3: string;
  price: number;
  image: string;
  image2: string;
  image3: string;
  spectitle: string;
  spec: string;
  specid: number;
}
export default function AdminPageForm(props: Props) {
  const initialValues = {
    id: props.product?.id,
    title: props.product?.title,
    longInfo: props.product?.longinfo,
    info1: props.product?.info1,
    info2: props.product?.info2,
    info3: props.product?.info3,
    price: props.product?.price,
    image: props.product?.image,
    image2: props.product?.image2,
    image3: props.product?.image3,
  };
  const [value, setValue] = useState(initialValues);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const currentValue = evt.target.value;
    setValue({
      ...value,
      [evt.target.name]: currentValue,
    });
    console.log(value);
  };

  //   const handleChange = (
  //     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     if (event.target.name === "titel" && event.target.value.length === 0) {
  //       console.log("du måste skriva titel");
  //     }
  //   };
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
          name="title"
          onChange={handleChange}
          //   value={value.title}
          defaultValue={props.product?.title}
          helperText="Produktens titel"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            required
            id="outlined-number"
            label="Price"
            name="price"
            onChange={handleChange}
            defaultValue={props.product?.price}
            // value={value.price ? value.price : props.product?.price}
            helperText={"Produktens pris"}
          />
          <TextField
            sx={{ marginLeft: 3 }}
            required
            multiline
            maxRows={6}
            type="Number"
            id="outlined-ID"
            onChange={handleChange}
            name="id"
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
          onChange={handleChange}
          label="Image1"
          name="image"
          defaultValue={props.product?.image}
          helperText="Produktens bild URL 1"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image2"
          defaultValue={props.product?.image2}
          onChange={handleChange}
          label="Image2"
          name="image2"
          helperText="Produktens bild URL 2"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image3"
          label="Image3"
          name="image3"
          onChange={handleChange}
          defaultValue={props.product?.image3}
          helperText="Produktens bild URL 3"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="Outlined-LongInfo"
          label="Long info"
          name="longInfo"
          onChange={handleChange}
          helperText="Produktens långa info"
          defaultValue={props.product?.longinfo}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info1"
          label="Info1"
          name="info1"
          onChange={handleChange}
          helperText="Produktens korta info 1"
          defaultValue={props.product?.info1}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info2"
          label="Info2"
          name="info2"
          defaultValue={props.product?.info2}
          onChange={handleChange}
          helperText="Produktens korta info 2"
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info3"
          label="Info3"
          name="info3"
          onChange={handleChange}
          helperText="Produktens korta info 3"
          defaultValue={props.product?.info3}
        />
        {props.product?.spec.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <TextField
              required
              multiline
              maxRows={6}
              id="outlined-spectitle"
              label="Spec title"
              name="spectitle"
              onChange={handleChange}
              helperText={"Specifikationstitel " + item.id}
              defaultValue={props.product?.spec[item.id - 1].spectitle}
            />
            <TextField
              sx={{ marginLeft: 3 }}
              required
              multiline
              maxRows={6}
              id="outlined-specinfo"
              label="Spec info"
              name="specinfo"
              onChange={handleChange}
              helperText={"Specifikationsinfo " + item.id}
              defaultValue={props.product?.spec[item.id - 1].spec}
            />
          </div>
        ))}
      </div>
    </Box>
  );
}

//  <Box
//       component="form"
//       sx={{
//         "& .MuiTextField-root": {
//           marginTop: 2,
//           marginBottom: 2,
//           width: "100%",
//         },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//       <div>
//         <TextField
//           required
//           multiline
//           maxRows={4}
//           id="outlined-Titel"
//           label="Titel"
//           defaultValue={props.product?.title}
//           helperText="Produktens titel"
//         />
//         <div style={{ display: "flex", justifyContent: "center" }}>
//           <TextField
//             required
//             id="outlined-number"
//             label="Price"
//             defaultValue={props.product?.price}
//             helperText={"Produktens pris"}
//           />
//           <TextField
//             sx={{ marginLeft: 3 }}
//             required
//             multiline
//             maxRows={6}
//             type="Number"
//             id="outlined-ID"
//             label="ID"
//             defaultValue={props.product?.id}
//             helperText="Produktens ID"
//           />
//         </div>
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="outlined-Image1"
//           label="Image1"
//           defaultValue={props.product?.image}
//           helperText="Produktens bild URL 1"
//         />
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="outlined-Image2"
//           defaultValue={props.product?.image2}
//           label="Image2"
//           helperText="Produktens bild URL 2"
//         />
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="outlined-Image1"
//           label="Image3"
//           defaultValue={props.product?.image3}
//           helperText="Produktens bild URL 3"
//         />
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="Outlined-LongInfo"
//           label="Long info"
//           helperText="Produktens långa info"
//           defaultValue={props.product?.longinfo}
//         />
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="outlined-Info1"
//           label="Info1"
//           helperText="Produktens korta info 1"
//           defaultValue={props.product?.info1}
//         />
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="outlined-Info2"
//           label="Info2"
//           helperText="Produktens korta info 2"
//           defaultValue={props.product?.info2}
//         />
//         <TextField
//           required
//           multiline
//           maxRows={6}
//           id="outlined-Info3"
//           label="Info3"
//           helperText="Produktens korta info 3"
//           defaultValue={props.product?.info3}
//         />
//       </div>
//     </Box>

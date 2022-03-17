import { Button, Box, TextField } from "@mui/material";
import { ChangeEvent, FC, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../interfaces/interfaces";

interface Props {
  product?: Product;
}

export default function AdminPageForm(props?: Props) {
  const initialValues = {
    id: props?.product?.id,
    title: props?.product?.title,
    longInfo: props?.product?.longinfo,
    info1: props?.product?.info1,
    info2: props?.product?.info2,
    info3: props?.product?.info3,
    price: props?.product?.price,
    image: props?.product?.image,
    image2: props?.product?.image2,
    image3: props?.product?.image3,
    spec: [
      {
        spectitle: props?.product?.specs[0].spectitle,
        specinfo: props?.product?.specs[0].spec,
        id: 1,
      },
      {
        spectitle: props?.product?.specs[1].spectitle,
        specinfo: props?.product?.specs[1].spec,
        id: 2,
      },
      {
        spectitle: props?.product?.specs[2].spectitle,
        specinfo: props?.product?.specs[2].spec,
        id: 3,
      },
      {
        spectitle: props?.product?.specs[3].spectitle,
        specinfo: props?.product?.specs[3].spec,
        id: 4,
      },
      {
        spectitle: props?.product?.specs[4].spectitle,
        specinfo: props?.product?.specs[4].spec,
        id: 5,
      },
    ],
  };

  const initialErrors = {
    id: false,
    title: false,
    longInfo: false,
    info1: false,
    info2: false,
    info3: false,
    price: false,
    image: false,
    image2: false,
    image3: false,
  };
  const { handleAddProduct, handleRemoveProduct } = useContext(ProductContext);
  const [value, setValue] = useState(initialValues);
  const [errorInput, setErrorInput] = useState(initialErrors);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (evt.target.value.length === 0) {
      setErrorInput({
        ...errorInput,
        [evt.target.name]: true,
      });
    } else if (evt.target.value.length > 0) {
      setErrorInput({
        ...errorInput,
        [evt.target.name]: false,
      });
    }

    /**This if-statement checks if the name of the target is title or price, if true, then it checks
     * if it includes anything else than numbers.
     */
    if (evt.target.name === "id" || evt.target.name === "price") {
      if (!/^\d*$/.test(evt.target.value)) {
        setErrorInput({
          ...errorInput,
          [evt.target.name]: true,
        });
      } else
        setErrorInput({
          ...errorInput,
          [evt.target.name]: false,
        });
    }
    const currentValue = evt.target.value;
    setValue({
      ...value,
      [evt.target.name]: currentValue,
    });
    console.log(value);
  };

  const sendToAddProduct = () => {
    const product: Product = {
      id: value.id as number,
      title: value.title as string,
      longinfo: value.longInfo as string,
      info1: value.info1 as string,
      info2: value.info2 as string,
      info3: value.info3 as string,
      price: value.price as number,
      quantity: 1,
      image: value.image as string,
      image2: value.image2 as string,
      image3: value.image3 as string,
      specs: [
        {
          spectitle: value.spec[0].spectitle as string,
          spec: value.spec[0].specinfo as string,
          id: 1,
        },
        {
          spectitle: value.spec[1].spectitle as string,
          spec: value.spec[1].specinfo as string,
          id: 2,
        },
        {
          spectitle: value.spec[2].spectitle as string,
          spec: value.spec[2].specinfo as string,
          id: 3,
        },
        {
          spectitle: value.spec[3].spectitle as string,
          spec: value.spec[3].specinfo as string,
          id: 4,
        },
        {
          spectitle: value.spec[4].spectitle as string,
          spec: value.spec[4].specinfo as string,
          id: 5,
        },
      ],
    };
    handleAddProduct(product);
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
          name="title"
          error={Boolean(errorInput.title)}
          onChange={handleChange}
          defaultValue={props?.product?.title}
          helperText={
            errorInput.title
              ? "Titeln måste vara minst ett tecken"
              : "Produktens titel"
          }
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <TextField
            required
            id="outlined-number"
            label="Price"
            name="price"
            onChange={handleChange}
            error={Boolean(errorInput.price)}
            defaultValue={props?.product?.price}
            // value={value.price ? value.price : props.product?.price}
            helperText={
              errorInput.price
                ? "Produktens pris får endast innehålla siffror"
                : "Produktens pris"
            }
          />
          <TextField
            sx={{ marginLeft: 3 }}
            required
            multiline
            maxRows={6}
            id="outlined-ID"
            onChange={handleChange}
            name="id"
            error={Boolean(errorInput.id)}
            label="ID"
            defaultValue={props?.product?.id}
            helperText={
              errorInput.id
                ? "Produktens id får endast innehålla siffror"
                : "Produktens ID"
            }
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
          error={Boolean(errorInput.image)}
          defaultValue={props?.product?.image}
          helperText={
            errorInput.image ? "Skriv in en URL" : "Produktens bild URL 1"
          }
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image2"
          defaultValue={props?.product?.image2}
          onChange={handleChange}
          error={Boolean(errorInput.image2)}
          label="Image2"
          name="image2"
          helperText={
            errorInput.image2 ? "Skriv in en URL" : "Produktens bild URL 2"
          }
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Image3"
          label="Image3"
          name="image3"
          onChange={handleChange}
          error={Boolean(errorInput.image3)}
          defaultValue={props?.product?.image3}
          helperText={
            errorInput.image3 ? "Skriv in en URL" : "Produktens bild URL 3"
          }
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="Outlined-LongInfo"
          label="Long info"
          name="longInfo"
          onChange={handleChange}
          error={Boolean(errorInput.longInfo)}
          helperText={
            errorInput.longInfo
              ? "Produktinfo får inte vara tom"
              : "Produktens långa info"
          }
          defaultValue={props?.product?.longinfo}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info1"
          label="Info1"
          name="info1"
          onChange={handleChange}
          error={Boolean(errorInput.info1)}
          helperText={
            errorInput.info1 ? "Ange produktens info" : "Produktens info 1"
          }
          defaultValue={props?.product?.info1}
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info2"
          label="Info2"
          name="info2"
          error={Boolean(errorInput.info2)}
          defaultValue={props?.product?.info2}
          onChange={handleChange}
          helperText={
            errorInput.info2
              ? "Ange produktens info"
              : "Produktens korta info 2"
          }
        />
        <TextField
          required
          multiline
          maxRows={6}
          id="outlined-Info3"
          label="Info3"
          name="info3"
          onChange={handleChange}
          error={Boolean(errorInput.info3)}
          helperText={
            errorInput.info3
              ? "Ange produktens info"
              : "Produktens korta info 3"
          }
          defaultValue={props?.product?.info3}
        />
        {value.spec.map((item) => (
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
              name={`spec[${item.id - 1}].spectitle`}
              onChange={handleChange}
              error={Boolean(`errorInput.spec[${item.id}].spectitle`)}
              helperText={
                `errorInput.spec[${item.id}].spectitle`
                  ? "Specifikationstitel " + item.id
                  : "Ange specifikationstitel"
              }
              defaultValue={props?.product?.specs[item.id - 1].spectitle}
            />
            <TextField
              sx={{ marginLeft: 3 }}
              required
              multiline
              maxRows={6}
              id="outlined-specinfo"
              label="Spec info"
              name={`spec[${item.id - 1}].specinfo`}
              onChange={handleChange}
              error={Boolean(`errorInput.spec[${item.id}].specinfo`)}
              helperText={
                `errorInput.spec[${item.id}].specinfo`
                  ? "Specifikationsinfo " + item.id
                  : "Ange specifikationsinfo"
              }
              defaultValue={props?.product?.specs[item.id - 1].spec}
            />
          </div>
        ))}
      </div>
      <Button
        onClick={sendToAddProduct}
        variant="contained"
        size="medium"
        color="primary"
      >
        Submit
      </Button>
    </Box>
  );
}

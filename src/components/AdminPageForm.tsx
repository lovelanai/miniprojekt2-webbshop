import { Button, Box, TextField } from "@mui/material";
import { ChangeEvent, useContext, useState } from "react";
import { ProductContext } from "../contexts/ProductContext";
import { Product } from "../interfaces/interfaces";
import { Link } from "react-router-dom";

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
  const { handleAddProduct, handleRemoveProduct, products } =
    useContext(ProductContext);
  const [value, setValue] = useState(initialValues);
  const [errorInput, setErrorInput] = useState(initialErrors);

  const handleChange = (
    evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (evt.target.value.length === 0 && !evt.target.name.includes("spec")) {
      setErrorInput({
        ...errorInput,
        [evt.target.name]: true,
      });
    } else if (
      evt.target.value.length > 0 &&
      !evt.target.name.includes("spec")
    ) {
      setErrorInput({
        ...errorInput,
        [evt.target.name]: false,
      });
    }

    /**This if-statement checks if the name of the target is price, if true, then it checks
     * if it includes anything else than numbers.
     */
    if (evt.target.name === "price") {
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
  };
  // <TextField
  //   sx={{ marginLeft: 3 }}
  //   required
  //   multiline
  //   maxRows={6}
  //   id="outlined-ID"
  //   onChange={handleChange}
  //   name="id"
  //   disabled={true}
  //   label="ID"
  //   /** If we edit an existing product the ID input-field shows its ID number. If we want to add a new product we
  //    * check for the highest already existing ID number in the products array,
  //    *  and sets the new ID number to the highest ID number + 1.
  //    */
  //   defaultValue={
  //     props?.product?.id
  //       ? props?.product?.id
  //       : Math.max.apply(
  //           Math,
  //           products.map((item) => {
  //             return item.id + 1;
  //           })
  //         )
  //   }
  //   helperText={
  //     errorInput.id
  //       ? "Produktens id får endast innehålla siffror"
  //       : "Produktens ID"
  //   }
  // />;

  const sendToAddProduct = () => {
    const product: Product = {
      id: props?.product
        ? props.product.id
        : Math.max.apply(
            Math,
            products.map((item) => {
              return item.id + 1;
            })
          ),
      title: value.title!,
      longinfo: value.longInfo!,
      info1: value.info1!,
      info2: value.info2!,
      info3: value.info3!,
      price: Number(value.price),
      quantity: 1,
      image: value.image!,
      image2: value.image2!,
      image3: value.image3!,
      specs: [
        {
          spectitle: value.spec[0].spectitle!,
          spec: value.spec[0].specinfo!,
          id: 1,
        },
        {
          spectitle: value.spec[1].spectitle!,
          spec: value.spec[1].specinfo!,
          id: 2,
        },
        {
          spectitle: value.spec[2].spectitle!,
          spec: value.spec[2].specinfo!,
          id: 3,
        },
        {
          spectitle: value.spec[3].spectitle!,
          spec: value.spec[3].specinfo!,
          id: 4,
        },
        {
          spectitle: value.spec[4].spectitle!,
          spec: value.spec[4].specinfo!,
          id: 5,
        },
      ],
    };
    handleAddProduct(product);
  };

  const areAllFieldsFilled = () => {
    if (
      value.title?.length &&
      value.price?.toString().length &&
      value.longInfo?.length &&
      value.image?.length &&
      value.image2?.length &&
      value.image3?.length &&
      value.info1?.length &&
      value.info2?.length &&
      value.info3?.length
    ) {
      return false;
    } else return true;
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
              helperText={"Specifikationstitel " + item.id}
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
              helperText={"Ange specifikationsinfo " + item.id}
              defaultValue={props?.product?.specs[item.id - 1].spec}
            />
          </div>
        ))}
      </div>
      <Link to="/AdminPage">
        <Button
          onClick={sendToAddProduct}
          variant="contained"
          disabled={Boolean(areAllFieldsFilled())}
          size="medium"
          color="primary"
        >
          Submit
        </Button>
      </Link>
    </Box>
  );
}

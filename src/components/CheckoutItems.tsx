import { CSSProperties, useContext } from "react";
import "./ShoppingCart.css";
import { ShoppingCartContext } from "../contexts/ShoppingCartContext";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";


export default function CheckOutItems(): JSX.Element {
    const { cartItems } = useContext(ShoppingCartContext);





    return (
        <div>
            <div>
                {cartItems.map((item) => (
                    <div>
                        <Card style={cardContainer} key={item.id}>
                            <div className="image">
                                <h1>{item.title}</h1>
                                <CardMedia style={testett}
                                    component="img"
                                    alt={item.title}
                                    height="auto"
                                    image={item.image}
                                    title={item.title}

                                />
                            </div>

                            <div style={productInfo}>
                                <CardContent>

                                </CardContent>
                                <CardActions>

                                    <Typography>{item.quantity} st</Typography>

                                </CardActions>
                                <Typography>{item.quantity * item.price}:- </Typography>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}


const cardContainer: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    margin: "0 1rem",
    marginBottom: "0.7rem",
    height: "8rem",

}

const productInfo: CSSProperties = {
    display: "flex",
    alignItems: "center",
    margin: "1rem",
}

const testett: CSSProperties = {
    width: "20%"
}
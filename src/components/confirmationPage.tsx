import { CSSProperties } from "react";
import { useParams } from "react-router-dom";




function Confirmation() {
    const { customerName } = useParams();


    let r = Math.round(Math.random() * 999999999999);

    return (
        <div style={rootStyle}>
            <p>Tack för ditt köp {customerName}  </p>


            <div>
                <h3>{r}</h3>
            </div>
        </div>
    )
}

export default Confirmation;

const rootStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    minWidth: "40rem",
    width: "70%",
    marginTop: "5rem",
    marginBottom: "3rem",
};
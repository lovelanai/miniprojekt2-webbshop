// import React, { useState } from "react";
// import { Cards } from "react-credit-cards";
// import 'react-credit-cards/es/styles-compiled.css'

import { useState, ChangeEvent, CSSProperties } from "react";

export default function CardPayment() {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [focus, setFocus] = useState<Focused>();

    const initialErrors = {
        name: false,
        number: false,
        expiry: false,
        cvc: false,
    };
    const [errorInput, setErrorinput] = useState(initialErrors);

    const handleChange = (
        evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        if (evt.target.name === "name") {
            if (
                !/^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u.test(
                    evt.target.value
                )
            ) {
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: true,
                });
            } else {
                setName(evt.target.value);
                setFocus(evt.target.name as Focused);
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: false,
                });
            }
        }

        if (evt.target.name === "number") {
            if (!/^\d{16,16}$/gm.test(evt.target.value)) {
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: true,
                });
            } else {
                setNumber(evt.target.value);
                setFocus(evt.target.name as Focused);
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: false,
                });
            }
        }

        if (evt.target.name === "cvc") {
            if (!/^\d{3,3}$/gm.test(evt.target.value)) {
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: true,
                });
            } else {
                setCvc(evt.target.value);
                setFocus(evt.target.name as Focused);
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: false,
                });
            }
        }

        if (evt.target.name === "expiry") {
            if (!/^\d{4,4}$/gm.test(evt.target.value)) {
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: true,
                });
            } else {
                setExpiry(evt.target.value);
                setFocus(evt.target.name as Focused);
                setErrorinput({
                    ...errorInput,
                    [evt.target.name]: false,
                });
            }
        }
    };

    // const [number, setNumber] = useState('')
    // const [name, setName] = useState('')
    // const [expiry, setExpiry] = useState('')
    // const [cvc, setCvc] = useState('')
    // const [focus, setFocus] = useState('')


    return (
        <div>Hello World</div>
        // <div>
        //     <Cards
        //         number={number}
        //         name={name}
        //         xpiry={expiry}
        //         cvc={cvc}
        //         focused={focus} />
        //     <form>
        //         <input type="tel"
        //             name='number'
        //             placeholder='Card Number'
        //             value={number} onChange={e => setNumber(e.target.value)}
        //             onFocus={e => setFocus(e.target.name)} />
        //         <input type="text"
        //             name='name'
        //             placeholder='Name'
        //             value={name} onChange={e => setName(e.target.value)}
        //             onFocus={e => setFocus(e.target.name)} />

        //         <input type="text"
        //             name='expiry'
        //             placeholder='MM/YY Expiry'
        //             value={expiry} onChange={e => setExpiry(e.target.value)}
        //             onFocus={e => setFocus(e.target.name)} />

        //         <input type="tel"
        //             name='cvc'
        //             placeholder='CVC'
        //             value={cvc} onChange={e => setCvc(e.target.value)}
        //             onFocus={e => setFocus(e.target.name)} />


        //     </form>
        // </div>
    )
}

const rootStyle: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
};

const inputs: CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    margin: "1rem",
    columnGap: ".5rem",
    rowGap: ".5rem",
};

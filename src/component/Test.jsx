import React from 'react';
import { useGlobalContext } from '../testc/context';

const Test = () => {
    const { value, setValue, quantity, setQuantity,vc } = useGlobalContext();

    return (
        <>
            <br />
            <button onClick={() => setQuantity(quantity + 1)}>+</button>
            <p>{`Quantity : ${quantity}`}</p>
            <button onClick={() => setQuantity(quantity - 1)}>-</button>
            <br />
            <p>{`value : ${value}`}</p>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(parseInt(e.target.value))}
            />
            <p>{`Total Cost : ${vc}  `}</p>
        </>
    );
};

export default Test;
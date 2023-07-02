import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [value, setValue] = useState(400);
    const [quantity, setQuantity] = useState(1);
    const [vc, setVc] = useState(value * quantity);

    const cost = (value, quantity) => {
        setVc(value * quantity);
    };

    useEffect(() => {
        cost(value, quantity);
        if(isNaN(value)){
            setValue(400);
        }
        if(quantity<=0){
            
            setQuantity(1);
        }
    }, [value, quantity]);

    return (
        <AppContext.Provider
            value={{ value, setValue, quantity, setQuantity, vc }}
        >
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

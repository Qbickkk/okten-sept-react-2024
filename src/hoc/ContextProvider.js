import React, {createContext, useState} from 'react';


const Context = createContext(null);

const ContextProvider = ({children}) => {

    const [trigger, setTrigger] = useState(true);

    const changeTrigger = () => {
        setTrigger(prev=>!prev);
    };

    return (
        <Context.Provider value={{changeTrigger,trigger}}>
            {children}
        </Context.Provider>
    );
};

export {
    ContextProvider,
    Context
};
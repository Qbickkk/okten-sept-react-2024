import React, {createContext, useState} from 'react';


const Context = createContext(null);
const ContextProvider = ({children}) => {

    const [episodes, setEpisodes] = useState([]);
    
    return (
        <Context.Provider value={{setEpisodes,episodes}}>
            {children}
        </Context.Provider>
    );
};

export {ContextProvider,Context};
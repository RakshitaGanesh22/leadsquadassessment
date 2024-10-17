import { createContext,useState } from "react";
const Context=createContext();
function ContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [cardData,setCardData] = useState([]);
    const [newCardData,setNewCardData] = useState([]);
    return(
        <Context.Provider value={{loading,setError,setLoading,cardData,setCardData,error,setNewCardData,newCardData}}>
            {children}
        </Context.Provider>
    )
}
export {Context,ContextProvider};
import { Children, createContext , useContext , useState } from "react";


const ShopContext = createContext({});

export const useShopContext = () => {
    return useContext(ShopContext);
}


const ShopContextProvider = ({children}) => {
   
   
   
   const [showProduct , SetShowProduct] = useState(false);
   const SetShowProductHandler = (state) => {
    SetShowProduct(state);
   }
   
  

const [ chosenItemIndex , SetChosenItemIndex ] = useState(false);
const SetChosenItemIndexHandler = (index) => {
  SetChosenItemIndex(index);
}



  const [basket , SeBasketChanges] = useState([]);
  const addToBasketHandler = ( obj ) => {
    const shalowBasket = [...basket];
    shalowBasket.push(obj);
    SeBasketChanges(shalowBasket);

  }


  const removeFromBasketHandler = ( index ) => {
    const shalowBasket = [...basket];
    shalowBasket.splice(index , 1);
    SeBasketChanges(shalowBasket);
  }

  











    return (

  <ShopContext.Provider value={{
    showProduct , SetShowProductHandler , basket , addToBasketHandler ,chosenItemIndex , SetChosenItemIndexHandler , removeFromBasketHandler
  }}>
    {children}
</ShopContext.Provider>

    )
}

export default ShopContextProvider;

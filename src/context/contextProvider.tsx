import { createContext, useState } from "react";
import { IProduct } from "../interfaces/product.interface";
import { Context } from "../interfaces/context.interface";

import { ISpecialPrice } from "../interfaces/specialPrice";
import { ISpecialPriceForm } from "../interfaces/specialPriceForm.interface";

interface Props {
    children: React.ReactNode
}


export const AppContext = createContext<Context>({
    products: [],
    setProducts: ()=>{},
    specialPrices: [],
    setSpecialPrices: ()=>{},
    registeredUser: null,
    setRegisteredUser: ()=>{},
    
});

export const AppProvider = ({children}:Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [specialPrices, setSpecialPrices] = useState<ISpecialPrice[]>([])
    const [registeredUser, setRegisteredUser] = useState<ISpecialPriceForm | null>(null);
  
  return (
    <AppContext.Provider value={{ products, setProducts, specialPrices, setSpecialPrices,
        registeredUser, setRegisteredUser
    }}>
    {children}
  </AppContext.Provider>
  )
}

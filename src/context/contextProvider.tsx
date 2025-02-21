import { createContext, useState } from "react";
import { IProduct } from "../interfaces/product.interface";
import { Context } from "../interfaces/context.interface";

import { ISpecialPrice } from "../interfaces/specialPrice";


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
    isLogin: false,
    setIsLogin: ()=>{},
    registeredDocument: null,
    setRegisteredDocument: ()=>{},
    
});

export const AppProvider = ({children}:Props) => {
    const [products, setProducts] = useState<IProduct[]>([]);
    const [specialPrices, setSpecialPrices] = useState<ISpecialPrice[]>([])
    const [registeredUser, setRegisteredUser] = useState<ISpecialPrice | null>(null);
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const [registeredDocument, setRegisteredDocument] = useState<string | null>(null);
  
  return (
    <AppContext.Provider value={{ products, setProducts, specialPrices, setSpecialPrices,
        registeredUser, setRegisteredUser, isLogin, setIsLogin, registeredDocument, setRegisteredDocument
    }}>
    {children}
  </AppContext.Provider>
  )
}

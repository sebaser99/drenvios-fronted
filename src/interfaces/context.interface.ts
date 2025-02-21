import { IProduct } from "./product.interface";
import { ISpecialPrice } from "./specialPrice";


export interface Context {
    products : IProduct[] | [],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    specialPrices: ISpecialPrice[],
    setSpecialPrices: React.Dispatch<React.SetStateAction<ISpecialPrice[]>>,
    registeredUser: ISpecialPrice | null,
    setRegisteredUser: React.Dispatch<React.SetStateAction<ISpecialPrice | null>>,
    isLogin: boolean,
    setIsLogin : React.Dispatch<React.SetStateAction<boolean>>,
    registeredDocument: string | null,
    setRegisteredDocument : React.Dispatch<React.SetStateAction<string | null>>,
    
    
}
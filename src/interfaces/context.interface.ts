import { IProduct } from "./product.interface";
import { ISpecialPrice } from "./specialPrice";
import { ISpecialPriceForm } from "./specialPriceForm.interface";

export interface Context {
    products : IProduct[] | [],
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>,
    specialPrices: ISpecialPrice[],
    setSpecialPrices: React.Dispatch<React.SetStateAction<ISpecialPrice[]>>,
    registeredUser: ISpecialPriceForm | null,
    setRegisteredUser: React.Dispatch<React.SetStateAction<ISpecialPriceForm | null>>,
}
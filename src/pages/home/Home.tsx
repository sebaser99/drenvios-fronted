
import { useContext, useEffect} from "react";
import { LayoutComponent } from "../../layout/LayoutComponent";

import { Products } from "../../components/products/Products";
import { AppContext } from "../../context/contextProvider";
import { getAllProducts, getAllSpecialPrices } from "../../services/apiService";
import { IProduct } from "../../interfaces/product.interface";


export default function Home(){
    useEffect(() => {
        const fetchSpecialPrices = async() => {
            if(sessionStorage.getItem('specialPrices')){
                const storageSpecialPrices = JSON.parse( sessionStorage.getItem('specialPrices')!);
                setSpecialPrices(storageSpecialPrices);
                
            } else {
                const p = await getAllSpecialPrices();
                setSpecialPrices(p.data);
                sessionStorage.setItem('specialPrices', JSON.stringify(p.data));
            }
        }

        fetchSpecialPrices();
    }, [])

    useEffect(() => {
        const fetchProducts = async() => {
            if(sessionStorage.getItem('products')){
                const storageProducts = JSON.parse( sessionStorage.getItem('products')!);
                setProducts(storageProducts);
                
            } else {
                const p = await getAllProducts();
                const conSpecialPrice = p.data.map((product: IProduct)=> {
                    specialPrices.forEach(sp => {
                        if(product._id === sp.productId){
                            product.specialPrice = sp.specialPrice
                        }
                    })
                    return product
                })
                setProducts([...conSpecialPrice]);
                
                sessionStorage.setItem('products', JSON.stringify(p.data));
            }
        }

        fetchProducts();
    }, [])

    
    useEffect(() => {
        if(sessionStorage.getItem('registeredUser')){
            const storageUser = JSON.parse( sessionStorage.getItem('registeredUser')!);
            setRegisteredUser(storageUser);
        }
    }, [])
    
   
    
    const {products, setProducts, specialPrices, setSpecialPrices, setRegisteredUser} = useContext(AppContext);
   console.log('products', products);
  
  return (
    <LayoutComponent>
        <h1 className='container-percent' style={{marginBottom: '5px'}}>Dr Envíos Mall</h1>
        <h3 className='container-percent' style={{marginTop: '0px'}}>Encuentra los productos que necesitas al mejor precio. Hazte miembro y recibe precios Especiales.</h3>    
        {
          products.length > 0 ? 
            <Products products={products} />
          : <h2 className="container" style={{color: 'white', textAlign: 'center', margin: '10px'}}>No existe esa compañia</h2>
        }
    </LayoutComponent>
  )
}

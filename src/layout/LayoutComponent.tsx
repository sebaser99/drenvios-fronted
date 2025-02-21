import { ChangeEvent, useContext, useState } from "react";
import { Navbar } from "../components/navbar/Navbar"
import './layout.css';
import { getAllProducts, userRegisteredSpecialPrices } from "../services/apiService";
import { AppContext } from "../context/contextProvider";
import { IProduct } from "../interfaces/product.interface";

interface Props {
    children: React.ReactNode;
}
export const LayoutComponent: React.FC<Props> = ({children}) => {
      const {setProducts, specialPrices, registeredDocument,  registeredUser, setRegisteredUser, setIsLogin, setRegisteredDocument, isLogin} = useContext(AppContext);
  
  const [showInput, setShowinput] = useState(false);
   const [inputValue, setInputValue] = useState<string>('');

   const showDocumentDiv = ()=>{
    setShowinput(prev => !prev);
  }

  const showDocumentInput = async ()=>{
    if(inputValue.trim() === '' || inputValue.length < 5){
      return alert('Por favor ingresa un número de documento válido')
    }
    const user = await userRegisteredSpecialPrices(inputValue.trim());
    if(user.data.length === 0){
      return alert('El documento no está registrado. Por favor hágalo en el módulo "subida"')
    }
    setIsLogin(true)
    setShowinput(prev => !prev);
    setRegisteredDocument(user.data[0].subscribedUsers[0].document)
   
    setRegisteredUser({...user.data[0]})
    sessionStorage.setItem('registeredUser', JSON.stringify({...user.data[0]}));
    sessionStorage.setItem('isLogin', 'true');
    sessionStorage.setItem('registeredDocument', JSON.stringify(user.data[0].subscribedUsers[0].document));
    setInputValue('');

    const latestSpecialPrices = [...specialPrices]
    const p = await getAllProducts();

    const conSpecialPrice = p.data.map((product: IProduct)=> {
        latestSpecialPrices.forEach(sp => {
            if(product._id === sp.productId){
                sp.subscribedUsers?.forEach(user=> {
                    if(user.document === registeredDocument ){
                        product.specialPrice = sp.specialPrice
                    }
                })
            }
        })
        return product
    })
    setProducts([...conSpecialPrice]);
    
    sessionStorage.setItem('products', JSON.stringify(conSpecialPrice));

  }
  const handleinput = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>)=> {
    setInputValue(e.target.value)
  }
  const logOut = ()=> {
    sessionStorage.removeItem('registeredUser');
    sessionStorage.removeItem('isLogin');
    sessionStorage.removeItem('registeredDocument');
    setShowinput(false);
    setIsLogin(false);
  }

const LogoutIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 17L21 12L16 7M21 12H9M12 21H6C4.9 21 4 20.1 4 19V5C4 3.9 4.9 3 6 3H12" 
      stroke="#2c3469" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

  return (
    <div style={{
      backgroundColor: location.pathname === "/" ? "#2c3469" : "#747db5",
      color: location.pathname === "/" ? "#fff" : "#2c3469",
      minHeight: '100vh',
      paddingBottom: '50px',
      
    }}>
        <Navbar />
        {location.pathname === "/" && <div className="discount-container">
                    {showInput || isLogin 
                    ? isLogin 
                      ? <div style={{textAlign: 'center', display:'flex', gap: '5px', margin: '0 auto', fontWeight: 'bold'}}>
                          <span style={{margin: 'auto'}}>{registeredUser && registeredUser.subscribedUsers![0].name }</span> 
                          <div onClick={logOut} style={{display: 'inline-block', paddingTop: '6px', marginRight:'10px', cursor: 'pointer'}}><LogoutIcon /></div> 
                        </div> 
                      : <div className="discount-input-container"><input type="number" value={inputValue} onChange={handleinput} placeholder="Ingresa tu documento" required/> <button onClick={showDocumentInput}>Verficar</button></div> 
                    :<div className="discounts" onClick={showDocumentDiv}><span>OBTENER DESCUENTOS -----  Da click para validar tu documento o ingresa a subida y regístrate</span></div>}
                </div>
        }
        <main className="container layout-flex">
        {
           children
        }
        </main>
        
    </div>
  )
}

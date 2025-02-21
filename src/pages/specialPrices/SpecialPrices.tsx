
import SpecialPriceForm from "../../components/specialPricesForm/SpecialPricesForm";
import { LayoutComponent } from "../../layout/LayoutComponent";
import './specialPrices.css';

export default function SpecialPrices(){
   
  return (
    <LayoutComponent>
      <div className="special-prices-container">
        <div className="special-prices-title">
          <h1 className='container-percent' style={{marginBottom:'0px', color: '#fafafa', backgroundColor: '#e74c3c', padding: '10px 20px', borderRadius: '20px'}}>Dr Envíos Mall</h1>
          <h3 className='container-percent' style={{marginTop:'20px', color:'white'}}>Regístrate para obtener precios especiales. Elige los productos que deseas agregar</h3>    
        </div>
        <SpecialPriceForm />

        
      </div>
    </LayoutComponent>
  )
}

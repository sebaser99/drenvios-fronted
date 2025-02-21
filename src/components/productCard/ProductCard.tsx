
import './productCard.css';

import { IProduct } from "../../interfaces/product.interface";
import { useContext } from 'react';
import { AppContext } from '../../context/contextProvider';



interface Props {
  product: IProduct
}

export const ProductCard = ({product}: Props) => {
    const {isLogin} = useContext(AppContext);

    let specialPrice;
    const formattedPrice = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "USD", 
      }).format(product.price!);
    
      if(product.specialPrice){
          specialPrice = new Intl.NumberFormat("es-CO", {
            style: "currency",
            currency: "USD",
          }).format(product.specialPrice);
        
      }


  return (
    <div className="card">
        <div className="card-header">
            {product.specialPrice && isLogin && <span className="promo">PROMO</span>}
            <h3>{product.name}</h3>
            <h3 className="card-brand">{product.brand}</h3>
        </div>
        <div className="card-body" style={{display: 'flex', gap: '20px'}}>
            <p><strong style={{color: "#2c3469"}}>Precio:</strong> <span style={{textDecoration: product.specialPrice ? 'line-through': 'none' , color: product.specialPrice ? 'gray': "#2c3469" }}>{formattedPrice}</span></p>
            {product.specialPrice && isLogin && <p style={{color: "#e74c3c"}}> {specialPrice}</p> }
        </div>
        <div className="card-footer">
            <div className="card-footer-info description"> 
                <p className="card-footer-description"> {product.description}</p>
            </div>
            <div className="card-footer-info"> 
                <p className="card-footer-description">Categoría</p>
                <p className="card-footer-description"><b> {product.category}</b></p>
            </div>
            <div className="card-footer-info"> 
                <p className="card-footer-description">Stock</p>
                <p className="card-footer-description"><b> {product.stock}</b></p>
            </div>
            <div className="card-footer-info">
                {/* <Counter value={valueCounter} setValue={setValueCounter}/> */}
                {/* <button className="btn buy" onClick={handleBuy}>Comprar</button> */}
            </div>   
        </div>
    </div>
  )
}

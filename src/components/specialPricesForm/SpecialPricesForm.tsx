import { useState, ChangeEvent, FormEvent, useEffect, useContext } from "react";
import "./specialPricesForm.css"; 
import { IProduct } from "../../interfaces/product.interface";
import { ISpecialPriceForm } from "../../interfaces/specialPriceForm.interface";
import { createSpecialPrice, getAllProducts } from "../../services/apiService";
import { AppContext } from "../../context/contextProvider";
import Swal from 'sweetalert2';


const initialForm =  {
    document: "",
    name: '',
    productId: "",
}

export default function SpecialPriceForm() {
  const {products, setProducts, specialPrices, setIsLogin, setRegisteredUser, setRegisteredDocument } = useContext(AppContext);
  const [formData, setFormData] = useState<ISpecialPriceForm>(initialForm);

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
  


  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const createSpecialPriceUser = await createSpecialPrice(formData);
      if(createSpecialPriceUser){
          sessionStorage.removeItem('products');
          sessionStorage.removeItem('specialPrices');
          setIsLogin(true);
          setRegisteredUser(createSpecialPriceUser.data);
          setRegisteredDocument(createSpecialPriceUser.data.subscribedUsers[0]?.document)
          sessionStorage.setItem('registeredUser', JSON.stringify(createSpecialPriceUser.data));
          sessionStorage.setItem('isLogin', 'true');
          sessionStorage.setItem('registeredDocument', JSON.stringify(createSpecialPriceUser.data.subscribedUsers[0]?.document));

      }
      if(createSpecialPriceUser.resStatus === 400 ) {
        return Swal.fire({
          icon: "warning",
          title: "No se agregó",
          text: createSpecialPriceUser.messages[0],
        });
      }
      setFormData(initialForm);
      return Swal.fire({
              icon: "success",
              title: "Registro Exitoso",
              text: "Registraste el producto con éxito. Búscalo en tienda",
            });
  };

  return (
    <div className="form-container">
      <h2>Solicitud de Precios Especiales</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input placeholder="Ingres tu Nombre y Apellido" type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Documento</label>
          <input placeholder="Ingres el documento" type="number" name="document" value={formData.document} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Producto</label>
          <select name="productId" value={formData.productId} onChange={handleChange} required>
            <option value="">Selecciona un producto</option>
            {products.map((product) => (
              <option key={product._id} value={product._id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

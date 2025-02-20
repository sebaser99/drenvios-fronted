import { useState, ChangeEvent, FormEvent } from "react";
import "./specialPricesForm.css"; 
import { IProduct } from "../../interfaces/product.interface";
import { ISpecialPriceForm } from "../../interfaces/specialPriceForm.interface";



// Lista de productos
const products: IProduct[] = [
  { _id: "p1", name: "Producto 1" },
  { _id: "p2", name: "Producto 2" },
  { _id: "p3", name: "Producto 3" },
];

export default function SpecialPriceForm() {
  const [formData, setFormData] = useState<ISpecialPriceForm>({
    document: "",
    name: '',
    productId: "",
  });

  // Manejo de cambios en los inputs
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Manejo del envío del formulario
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
  };

  return (
    <div className="form-container">
      <h2>Solicitud de Precios Especiales</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Documento</label>
          <input type="text" name="document" value={formData.document} onChange={handleChange} required />
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

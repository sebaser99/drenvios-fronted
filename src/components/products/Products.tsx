
import { IProduct } from '../../interfaces/product.interface';
import { ProductCard } from '../productCard/ProductCard';
import './products.css';

interface Props {
  products? : IProduct[]
}

export const Products = ({products = []}: Props) => {
  return (
    <div className="cards-container">
        {
            products.map(product => <ProductCard product={product} key={product._id}/>)
        }
    </div>
  )
}

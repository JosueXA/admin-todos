import { products } from '@/products/data/products';
import { ProductCard } from '../../../products/components/ProductCard';

export default function ProductsPage() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-2">
      {/* Product Card */}
      {
        products.map( (product) => (
          <ProductCard key={product.id} {...product}/>
        ))
      }
    </div>
  );
}
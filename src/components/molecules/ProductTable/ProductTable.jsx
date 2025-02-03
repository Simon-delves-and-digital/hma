import { ProductCard } from '../ProductCard/ProductCard';

export const ProductTable = ({ products, addToCart }) => {
  return (
    <>
      <div className='grid grid-cols-12 gap-4'>
        {products.map(product => {

          return (
            <ProductCard product={product} addToCart={addToCart} key={product.id} />
          );
        })}
      </div>
    </>
  );
};

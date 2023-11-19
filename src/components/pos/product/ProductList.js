import ProductItem from './ProductItem';

import './product-list.css';

const ProductList = ({ products }) => {
  return (
    <>
      <div className="pos-product-list">
        <div class="row">
          {products.map((product) => (
            <ProductItem product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;

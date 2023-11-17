import SearchBox from './product/SearchBox';
import Categories from './product/Categories';

import './product.css';
const Products = ({ categories }) => {
  return (
    <div className="pos_product_section">
      <Categories categories={categories} />
      <SearchBox />
    </div>
  );
};

export default Products;

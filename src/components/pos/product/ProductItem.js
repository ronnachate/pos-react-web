import Image from 'react-bootstrap/Image';
import { FaPlusCircle } from 'react-icons/fa';

import './product-item.css';

const ProductItem = ({ product }) => {
  const productImage =
    'https://nerf.prionize.com/static/product/01040060-f812-4c78-badb-e524b590e734.png';
  if (product.image_path) {
    productImage = product.image_path;
  }
  return (
    <div className="product-item col-xl-2">
      <div className="item product-item">
        <div className="item-img">
          <Image src={productImage} />
        </div>
        <div class="product-detail">
          <h2>{product.name}</h2>
          <h3>{product.price}</h3>
          <FaPlusCircle className="add-icon" />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;

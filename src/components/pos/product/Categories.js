import './categories.css';

const Categories = ({ categories }) => {
  return (
    <div className="pos_product_section_header ms-2">
      <div className="category-container mt-3">
        <div className="nav">
          {categories.map((category, i) => (
            <a className="nav-item nav-link category-item" aria-selected="true">
              <h5>{category.name}</h5>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
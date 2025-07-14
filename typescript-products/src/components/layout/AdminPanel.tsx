import './adminPanel.css';
import ProductTable from '../common/ProductTable';
import { womenShirts } from '../../data/femaleShirt';
import { menShirts } from '../../data/maleShirt';
import { kidsProducts } from '../../data/kidShirt';
import { Link } from 'react-router-dom';
// import CounterComponent from '../CounterComponent';




const AdminPanel = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <div className='container-admin flex_column'>
        <div className='admin-panel margin_top_6 margin_bottom_3'>
        <Link to ={"/"}>
        <img className='navbar-logo' src="/logos/H59.svg" alt="Logo" width="50" height="42" />
        <h2>Dash Board</h2>
        </Link>
        </div>
        <div className='Table-producs margin_top_1'>
        <h3>List Product</h3>
        </div>
        <div className='margin_top_3'>
        <div className="table-row header-row">
          <div className="table-cell">ID</div>
          <div className="table-cell">Title</div>
          <div className="table-cell">Category</div>
          <div className="table-cell">Price</div>
          <div className="table-cell">Stock</div>
        </div>
      {womenShirts.map(product => (
        <ProductTable key={product.id} product={product} />
      ))};
      {menShirts.map(product => (
        <ProductTable key={product.id} product={product} />
      ))};
      {kidsProducts.map(product => (
        <ProductTable key={product.id} product={product} />
      ))}

        </div>
    </div>
  );
};

export default AdminPanel;
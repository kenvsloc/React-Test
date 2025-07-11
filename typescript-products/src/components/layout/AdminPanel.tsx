import './adminPanel.css';
import ProductTable from '../common/ProductTable';
import { products } from '../../data/products';
// import CounterComponent from '../CounterComponent';




const AdminPanel = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <div className='container-admin flex_column'>
        <div className='admin-panel margin_top_6'>
        <h2>Dash Board</h2>
        </div>

        <div className='Table-producs margin_top_1'>
        <h3>List Product</h3>
        </div>
        <div className='margin_top_3'>
        <div className="table-row header-row">
          <div className="table-cell">Title</div>
          <div className="table-cell">Category</div>
          <div className="table-cell">Price</div>
          <div className="table-cell">Stock</div>
          <div className="table-cell">Image</div>
        </div>
      {products.map(product => (
        <ProductTable key={product.id} product={product} />
      ))}
        </div>
    </div>
  );
};

export default AdminPanel;
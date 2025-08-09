import ProductTable from '../common/ProductTable';
import { womenShirts } from '../../data/femaleShirt';
import { menShirts } from '../../data/maleShirt';
import { kidsProducts } from '../../data/kidShirt';
import { Link } from 'react-router-dom';
// import CounterComponent from '../CounterComponent';
import { ChartPieDonutText } from '../PieCharts';


import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"



const AdminPanel = () => {

  // let uuid = self.crypto.randomUUID();
  // console.log(uuid);

  return (
    <>
    <div className='container-admin flex_column'>

        <div className='admin-panel margin_top_6 margin_bottom_3'>
        <Link to ={"/"}>
        <img className='navbar-logo' src="/logos/H59.svg" alt="Logo" width="50" height="42" />
        <h2>Dash Board</h2>
        </Link>
        </div>
        <ChartPieDonutText />
        <div className='Table-producs margin_top_1'>
        <h3>List Product</h3>
        </div>
        <div className='margin_top_3'>
        <Table>
  <TableCaption>A list of your recent invoices.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
    {womenShirts.map(product => (
        <ProductTable key={product.id} product={product} />
      ))};
      {menShirts.map(product => (
        <ProductTable key={product.id} product={product} />
      ))};
      {kidsProducts.map(product => (
        <ProductTable key={product.id} product={product} />
      ))}
    </TableRow>
  </TableBody>
</Table>

        </div>
    </div>
    </>
  );
};

export default AdminPanel;
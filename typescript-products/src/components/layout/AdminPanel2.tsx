import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import ProductTable from "../common/ProductTable";

import { womenShirts } from '../../data/femaleShirt';
import { menShirts } from '../../data/maleShirt';
import { kidsProducts } from '../../data/kidShirt';

import type { ProductProps } from '../../types/typesData';

import { ChartPieDonutText } from '../PieCharts';
import { ChartProduct } from "../ProductChart1";
import { ChartBarProduct } from "../BarChartProduct";


interface ProductCardProps {
  product: ProductProps;
}

export default function Component({ product }: ProductCardProps) {
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
  <div>
    <ChartBarProduct />
  </div>
  <div>
    <ChartProduct />
  </div>
  <div><ChartPieDonutText /></div>
</div>
      <div className="bg-background overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 w-full">
              <TableHead className="h-9 py-2">Id</TableHead>
              <TableHead className="h-9 py-2">Category</TableHead>
              <TableHead className="h-9 py-2">Stock</TableHead>
              <TableHead className="h-9 py-2">Buy</TableHead>
              <TableHead className="h-9 py-2">Price</TableHead>
              <TableHead className="h-9 py-2">Popularity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {womenShirts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="py-2">
                <ProductTable key={product.id} product={product} />
                </TableCell>
                <TableCell className="py-2">{product.id}</TableCell>
                <TableCell className="py-2">{product.buy}</TableCell>
                <TableCell className="py-2">{product.stock}</TableCell>
                <TableCell className="py-2">{product.price}</TableCell>
                <TableCell className="py-2">{product.type}</TableCell>
              </TableRow>
            ))};
            {menShirts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="py-2">
                <ProductTable key={product.id} product={product} />
                </TableCell>
                <TableCell className="py-2">{product.id}</TableCell>
                <TableCell className="py-2">{product.buy}</TableCell>
                <TableCell className="py-2">{product.stock}</TableCell>
                <TableCell className="py-2">{product.price}</TableCell>
                <TableCell className="py-2">{product.type}</TableCell>
              </TableRow>
            ))};
            {kidsProducts.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="py-2">
                <ProductTable key={product.id} product={product} />
                </TableCell>
                <TableCell className="py-2">{product.id}</TableCell>
                <TableCell className="py-2">{product.buy}</TableCell>
                <TableCell className="py-2">{product.stock}</TableCell>
                <TableCell className="py-2">{product.price}</TableCell>
                <TableCell className="py-2">{product.type}</TableCell>
              </TableRow>
            ))};


          </TableBody>
        </Table>
      </div>
    </div>
  )
}

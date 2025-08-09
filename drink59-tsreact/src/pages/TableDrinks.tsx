import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { AllDrinkData } from "@/data/AllDrinkData";

export default function TableDrinks() {
    return (
        <div className="grid w-full [&>div]:max-h-[300px] [&>div]:border [&>div]:rounded">
            <Table>
                <TableHeader>
                    <TableRow className="[&>*]:whitespace-nowrap">
                        <TableHead className="pl-4">ID</TableHead>
                        <TableHead>Product Name</TableHead>
                        <TableHead>Category</TableHead>
                        <TableHead>Price (USD)</TableHead>
                        <TableHead>Stock Quantity</TableHead>
                        <TableHead>Supplier</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="overflow-hidden">
                    {AllDrinkData.map((product) => (
                        <TableRow
                            key={product.id}
                            className="odd:bg-muted/50 [&>*]:whitespace-nowrap text-xl"
                        >
                            <TableCell className="pl-4">{product.id}</TableCell>
                            <TableCell className="font-medium">{product.title}</TableCell>
                            <TableCell>{product.category}</TableCell>
                            <TableCell>{product.buy}</TableCell>
                            <TableCell>{product.price}</TableCell>
                            <TableCell>{product.type}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

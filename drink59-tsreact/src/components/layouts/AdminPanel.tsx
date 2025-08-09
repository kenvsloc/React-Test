// import DrinkTablePage from "@/app/drink-table/page"
import { ChartBarProduct } from "../ChartsBoard/BarChartProduct"
import { ChartProduct } from "../ChartsBoard/ChartTable"
import { ChartPieDonut } from "../ChartsBoard/PieCharts"
import TableDrinks from "@/pages/TableDrinks"



const AdminPanel = () => {
    return (
        <>
            <div className="grid grid-cols-3 gap-4 m-12">
                <div>
                    <ChartBarProduct />
                </div>
                <div>
                    <ChartProduct />
                </div>
                <div>
                    <ChartPieDonut />
                </div>
            </div>
            <div>
                <TableDrinks />
            </div>


        </>
    )
}

export default AdminPanel
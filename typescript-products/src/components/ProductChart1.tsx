
import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

import { womenShirts } from "@/data/femaleShirt"


export const description = "An area chart with gradient fill"



const chartConfig = {
  price: {
    label: "price",
    color: "var(--chart-2)",
  },
  buy: {
    label: "buy",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig

export function ChartProduct() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Gradient</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={womenShirts}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="category"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={true} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-price)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillBuy" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-buy)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-buy)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <Area
              dataKey="buy"
              type="natural"
              fill="url(#fillBuy)"
              fillOpacity={0.4}
              stroke="var(--color-buy)"
              stackId="a"
            />
            <Area
              dataKey="price"
              type="natural"
              fill="url(#fillPrice)"
              fillOpacity={0.4}
              stroke="var(--color-price)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 leading-none font-medium">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" color="green" />
            </div>
            <div className="text-muted-foreground flex items-center gap-2 leading-none">
              January - June 2025
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}

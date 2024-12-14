import React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const SalesChart = () => {
  const chartData = [
    { month: "July", order: 190, sales: 80 },
    { month: "August", order: 305, sales: 200 },
    { month: "september", order: 237, sales: 120 },
    { month: "October", order: 73, sales: 190 },
    { month: "November", order: 209, sales: 130 },
    { month: "December", order: 214, sales: 140 },
  ];

  const chartConfig = {
    order: {
      label: "Order",
      color: "hsl(var(--chart-1, 210, 80%, 50%))",
    },
    sales: {
      label: "Sales",
      color: "hsl(var(--chart-2, 340, 80%, 50%))",
    },
  } satisfies ChartConfig;

  return (
    <div className=" bg-white w-1/2 rounded-[4px] shadow-sm">
      <CardHeader className="pb-20 px-4">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle className="font-semibold text-gray-900 text-base tracking-wide">
              Order Vs Sales
            </CardTitle>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-600 border"></div>
              <p className="text-sm text-gray-700 font-medium">Order</p>
            </div>
            <div className="flex gap-2 items-center">
              <div className="w-2.5 h-2.5 rounded-full bg-red-600 border"></div>
              <p className="text-sm text-gray-700 font-medium">Sales</p>
            </div>
          </div>
        </div>

        <hr className="!mt-4" />
      </CardHeader>

      <CardContent className="px-6 ">
        <ChartContainer config={chartConfig} style={{ height: "325px" }}>
          <BarChart data={chartData} barGap={8} barSize={20}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#e5e7eb"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={{ stroke: "#e5e7eb" }}
              tick={{ fill: "#6b7280", fontSize: 12, fontWeight: 500 }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
              content={
                <ChartTooltipContent
                  indicator="line"
                  className="bg-white text-gray-700 shadow-lg rounded-lg border border-gray-200 px-4 py-3"
                />
              }
            />

            <Bar
              dataKey="order"
              fill="hsl(var(--chart-1, 210, 80%, 50%))"
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="sales"
              fill="hsl(var(--chart-2, 340, 80%, 50%))"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </div>
  );
};

export default SalesChart;

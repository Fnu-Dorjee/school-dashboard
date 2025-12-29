
"use client"

import { TrendingUp } from "lucide-react"

export const description = "Student activity in school"

const chartData = [
  { month: "January", participation: 186, sports: 80 },
  { month: "February", participation: 115, sports: 200 },
  { month: "March", participation: 237, sports: 120 },
  { month: "April", participation: 173, sports: 190 },
  { month: "May", participation: 29, sports: 130 },
  { month: "June", participation: 214, sports: 140 },
]

const chartConfig = {
  participation: {
    label: "Class Participation",
    color: "var(--chart-1)",
  },
  sports: {
    label: "Sports Activity",
    color: "var(--chart-2)",
  },
}

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../ui/chart"

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
} from "recharts"

const AppLineChart = () => {
  return (
    <ChartContainer config={chartConfig} className="mt-6">
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{ left: 12, right: 12 }}
      >
        <CartesianGrid vertical={false} />

        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />

        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

        <Line
          dataKey="participation"
          type="monotone"
          stroke="var(--color-participation)"
          strokeWidth={2}
          dot={false}
        />

        <Line
          dataKey="sports"
          type="monotone"
          stroke="var(--color-sports)"
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    </ChartContainer>
  )
}

export default AppLineChart

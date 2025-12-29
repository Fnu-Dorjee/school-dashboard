
'use client'

import { 
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
 } from "../ui/chart";



import { BarChart, Bar,CartesianGrid, XAxis, YAxis } from "recharts";

 const chartConfig = {
   classes: {
     label: "Classes",
     color: "var(--chart-3)",
   },
   holiday: {
     label: "Holiday",
     color: "var(--chart-2)",
   },
 } 

 const chartData = [
    { month: "January", classes: 18, holiday: 12 },
    { month: "February", classes: 20, holiday: 10 },
    { month: "March", classes: 23, holiday: 7 },
    { month: "April", classes: 25, holiday: 5 },
    { month: "May", classes: 20, holiday: 10 },
    { month: "June", classes: 21, holiday: 6 },
  ]



const AppBarChat = ()=>{
    return (
        <div>
            <h1 className="mb-2 font-medium text-lg">Monthly Active Classes</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false}/>
                    <XAxis
                        dataKey="month"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                    <YAxis
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        />
                    <ChartTooltip content={<ChartTooltipContent/>}/>
                    <ChartLegend content={<ChartLegendContent />} />
                    <Bar dataKey="classes" fill="var(--color-classes)" radius={4} />
                    <Bar dataKey="holiday" fill="var(--color-holiday)" radius={4} />
                </BarChart>
            </ChartContainer>
        </div>
        
    )
};



export default AppBarChat;

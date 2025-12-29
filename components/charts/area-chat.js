'use client'

import { 
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
    ChartLegend,
    ChartLegendContent,
 } from "../ui/chart";



import { Area,CartesianGrid, XAxis, 
    YAxis, AreaChart } from "recharts";

 const chartConfig = {
   term1: {
     label: "Term1",
     color: "var(--chart-3)",
   },
   term2: {
     label: "Term2",
     color: "var(--chart-2)",
   },
 } 

 const chartData = [
    { subject: "English", term1: 77, term2: 75 },
    { subject: "Math", term1: 94, term2: 98 },
    { subject: "Science", term1: 70, term2: 80},
    { subject: "Geography", term1: 60, term2: 77 },
    { subject: "Tibetan", term1: 85, term2: 96 },
    { subject: "Computer", term1: 95, term2: 98 },
  ]



const AppAreaChat = ()=>{
    return (
        <div >
            <h1 className="mb-2 font-medium text-lg">Score Per Term</h1>
            <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
            
            <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
            >
                    <CartesianGrid vertical={false}/>
                    <XAxis
                        dataKey="subject"
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
                    
                  <defs>
              <linearGradient id="fillTerm1" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-term1)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-term1)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillTerm2" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-term2)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-term2)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>


                    <Area
                        dataKey="term1"
                        type="natural"
                        fill="url(#fillTerm1)"
                        fillOpacity={0.4}
                        stroke="var(--color-term1)"
                        stackId="a"
                    />

                    <Area
                        dataKey="term2"
                        type="natural"
                        fill="url(#fillTerm2)"
                        fillOpacity={0.4}
                        stroke="var(--color-term2)"
                        stackId="a"
                    />
                
                </AreaChart>

            </ChartContainer>
        </div>
        
    )
};



export default AppAreaChat;
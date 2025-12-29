
"use client"
import {Highlighter} from "lucide-react"
import { Label, Pie, PieChart } from "recharts"



import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,

  } from "@/components/ui/chart"


  const chartData = [
    { subject: "maths", credits: 25, fill: "var(--color-maths)" },
    { subject: "english", credits: 15, fill: "var(--color-english)" },
    { subject: "computer", credits: 20, fill: "var(--color-computer)" },
    { subject: "science", credits: 20, fill: "var(--color-science)" },
    { subject: "tibetan", credits: 15, fill: "var(--color-tibetan)" },
    { subject: "others", credits: 15, fill: "var(--color-others)" },
  ]
  
  const chartConfig = {
    credits: {
      label: "Credits",
    },
    maths: {
      label: "Maths",
      color: "var(--chart-1)",
    },
    english: {
      label: "English",
      color: "var(--chart-2)",
    },
    computer: {
      label: "Computer",
      color: "var(--chart-3)",
    },
    science: {
      label: "Science",
      color: "var(--chart-4)",
    },
    tibetan: {
        label: "Tibetan",
        color: "var(--chart-5)",
      },
    others: {
      label: "Others",
      color: "var(--chart-7)",
    },
  } 

const AppPieChat = ()=>{

    const totalVisitors = chartData.reduce((acc, curr) => acc + curr.credits, 0);


    return(
        <div>
            <h1 className="mb-2 font-medium text-lg">Total Credit Accumulated</h1>
            <ChartContainer config={chartConfig}  className="mx-auto aspect-square max-h-[250px]">
               

            <PieChart>
                <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                data={chartData}
                dataKey="credits"
                nameKey="subject"
                innerRadius={60}
                strokeWidth={5}
                >
                <Label
                    content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                        <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                            >
                            {totalVisitors.toLocaleString()}
                            </tspan>
                            <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                            >
                            Credits
                            </tspan>
                        </text>
                        )
                    }
                    }}
                />
                </Pie>
                </PieChart>

                <div className="flex items-center gap-2 leading-none font-medium">
                    Total required credit is <span className="text-rose-700">110</span> for class X <Highlighter className="size-4"/> 
                </div>
                    
            </ChartContainer>
        </div>
    )
};

export default AppPieChat;




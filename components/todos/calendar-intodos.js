
'use client'

import { useState } from "react";
import { Calendar} from "../ui/calendar";
import { Button } from "../ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { format } from "date-fns";
import { CalendarDays } from "lucide-react";


const CalenderInTodos = ()=>{
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);

    return(
        
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button variant='outline' className='w-full'><CalendarDays/> 
                 {date? format(date, "MMMM dd, yyyy"): <span>Pick a date </span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='p-0 w-auto'>
                <Calendar 
                mode="single"
                selected={date}
                onSelect={(date)=>{
                    setDate(date)
                    setOpen(false);
                }}
                captionLayout="dropdown"
            
                />
            </PopoverContent>
        </Popover>
    
    )
};


export default CalenderInTodos;
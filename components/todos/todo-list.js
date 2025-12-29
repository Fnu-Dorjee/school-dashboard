
import { ScrollArea,ScrollBar } from "../ui/scroll-area";
import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

import CalenderInTodos from "./calendar-intodos";


const TodoList = ()=>{
    return (
        <div>
            {/* Calendar */}
            <h1 className="text-lg font-medium mb-6">Todo List</h1>
            <CalenderInTodos />
            {/* list */}
            <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
                <Card className='p-4 mb-1'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='myId' checked/>
                        <Label htmlFor='myId'  className='text-sm text-muted-foreground'>
                            Tomorrow would be Monday. Or Tuesday. Or maybe it was already Wednesday. 
                            The calendar had been blinking “12:00” for years.
                        </Label>
                    
                    </div>
                    
                </Card>
                <Card className='p-4 mb-1'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='myId'/>
                        <Label htmlFor='myId' className='text-sm text-muted-foreground'>
                            Tomorrow would be Monday. Or Tuesday. Or maybe it was already Wednesday. 
                            The calendar had been blinking “12:00” for years.
                        </Label>
                    
                    </div>
                    
                </Card>
                <Card className='p-4 mb-1'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='myId'/>
                        <Label htmlFor='myId' className='text-sm text-muted-foreground'>
                            Tomorrow would be Monday. Or Tuesday. Or maybe it was already Wednesday. 
                            The calendar had been blinking “12:00” for years.
                        </Label>
                    
                    </div>
                    
                </Card>
                <Card className='p-4 mb-1'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='myId'/>
                        <Label htmlFor='myId' className='text-sm text-muted-foreground'>
                            Tomorrow would be Monday. Or Tuesday. Or maybe it was already Wednesday. 
                            The calendar had been blinking “12:00” for years.
                        </Label>
                    
                    </div>
                    
                </Card>

                <Card className='p-4 mb-1'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='myId' checked/>
                        <Label htmlFor='myId' className='text-sm text-muted-foreground'>
                            Tomorrow would be Monday. Or Tuesday. Or maybe it was already Wednesday. 
                            The calendar had been blinking “12:00” for years.
                        </Label>
                    
                    </div>
                    
                </Card>
                <Card className='p-4 mb-1'>
                    <div className="flex items-center gap-4">
                        <Checkbox id='myId'/>
                        <Label htmlFor='myId' className='text-sm text-muted-foreground'>
                            Tomorrow would be Monday. Or Tuesday. Or maybe it was already Wednesday. 
                            The calendar had been blinking “12:00” for years.
                        </Label>
                    
                    </div>
                    
                </Card>


            </ScrollArea>
        </div>
    )
};

export default TodoList;

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { Button } from "../ui/button";

import EditUser from "./edit-user";

const SheetSideBar = ()=>{
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button size="sm">Edit User</Button>
            </SheetTrigger>
            <SheetContent>
                <EditUser/>
            </SheetContent>
        </Sheet>
    )
};

export default SheetSideBar;
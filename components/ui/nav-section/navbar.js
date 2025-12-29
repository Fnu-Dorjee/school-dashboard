
import Link from "next/link";

import ModeToggle from "@/components/providers/theme-menu";

import { 
    User,
    SlidersVertical, 
    LogOut 
} from "lucide-react";


import { 
    Avatar,
    AvatarFallback,
    AvatarImage
 } from "../avatar";

import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "../dropdown-menu";

import { SidebarTrigger } from "../sidebar";


const Navbar = ()=>{
    return (
        <nav className="flex p-4 items-center justify-between">
            {/* collapsable sidebar trigger */}
            <SidebarTrigger />
            {/* LEFT SIDE */}
            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
                <Link href='/'>Dashboard</Link>
                <ModeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src='/images/payload.jpg'/>
                            <AvatarFallback>profile</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent sideOffset={10}>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                            <DropdownMenuItem> 
                                <User className="size-5 mr-2"/> Profile 
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <SlidersVertical className=" size-5 mr-2"/> Settings
                            </DropdownMenuItem>
                            <DropdownMenuItem variant="destructive">
                                <LogOut className="size-5  mr-2"/> Logout
                            </DropdownMenuItem>
                            
                    </DropdownMenuContent>
                    
                </DropdownMenu>
                

            </div>
           

        </nav>
    )
};

export default Navbar;
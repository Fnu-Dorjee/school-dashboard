
import { 
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
 } from "../dropdown-menu"


const MyDropdownMenu = ({children})=>{
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                {children}
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end'>
                
                
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Setting</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
                <DropdownMenuItem>More</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default MyDropdownMenu;
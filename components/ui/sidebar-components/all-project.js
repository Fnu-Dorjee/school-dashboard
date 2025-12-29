
import { 
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroupContent,


} from "../sidebar"



import Link from "next/link"


const AllProject = ({link, title, icon})=>{
    return(
        <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem >
                    <SidebarMenuButton asChild >
                        <Link href={link}>
                            {icon}
                                <span>{title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
                             
            </SidebarMenu>
        </SidebarGroupContent>
    )
};


export default AllProject;
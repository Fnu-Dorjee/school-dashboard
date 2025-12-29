
import {
     Calendar, Home, Inbox,
     Search, Settings, ChevronUp,
     PlusIcon, NotebookPen, ScrollText  } from "lucide-react"

import Link from "next/link";
import Image from "next/image";

const ITEMS = [
    {
        title: "Home",
        url: "/",
        icon: Home,
      },
      {
        title: "Inbox",
        url: "#",
        icon: Inbox,
      },
      {
        title: "Calendar",
        url: "#",
        icon: Calendar,
      },
      {
        title: "Search",
        url: "#",
        icon: Search,
      },
      {
        title: "Result",
        url: "/result",
        icon: ScrollText,
      },
      {
        title: "Settings",
        url: "#",
        icon: Settings,
      },
];


import { 
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarSeparator,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarGroupAction,
    SidebarMenuBadge

} from "../sidebar";

import { Avatar, AvatarImage, AvatarFallback } from "../avatar";
import MyDropdownMenu from "./dropdown-menu";
import AllProject from "../sidebar-components/all-project";
import CollapsibleMenu from "../sidebar-components/collapible-menu";


const AppSidebar = ()=>{
    return (
        <Sidebar collapsible="icon">

            <SidebarHeader className='py-4'>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton asChild >
                            <Link href='/'>
                                    <Image  
                                        src='/images/tcv_logo.png' 
                                        height={30} width={30} priority alt='Tcv logo' 
                                        />
                                    <span>TCV School</span>
                                
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <div className="px-3">
                <SidebarSeparator className="w-full" />
            </div>

            <SidebarContent>

                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {
                                ITEMS.map((item)=>(
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild >
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                        {
                                            item.title === 'Inbox' && (
                                                <SidebarMenuBadge>25</SidebarMenuBadge>
                                            )
                                        }
                                    </SidebarMenuItem>
                                ))
                            }
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarGroup>
                    <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupAction><PlusIcon/> <span className="sr-only">Add Project</span></SidebarGroupAction>

                    <AllProject  title='See All Projects' link='/' icon={<NotebookPen/>}/>
                    <AllProject title='Add New Projects' link='/' icon={<PlusIcon/>}/>
                    <CollapsibleMenu />
                </SidebarGroup>

            </SidebarContent>
            
            <div className="px-3">
                <SidebarSeparator className="w-full" />
            </div>

            <SidebarFooter>
                <SidebarMenu>
                    <SidebarMenuItem>
                            <MyDropdownMenu>
                                <SidebarMenuButton>
                                    <Avatar>
                                        <AvatarImage src='/images/payload.jpg'/>
                                        <AvatarFallback>user</AvatarFallback>
                                    </Avatar>Namgyal Dorjee <ChevronUp className="ml-auto"/>
                                </SidebarMenuButton>
                            </MyDropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>

      </Sidebar>
    )
};


export default AppSidebar;
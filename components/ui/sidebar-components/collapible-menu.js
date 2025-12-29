
import { 
    Collapsible, CollapsibleTrigger, CollapsibleContent
} from "../collapsible"

import AllProject from "./all-project";
import { User2 } from "lucide-react";

import { SidebarGroup, SidebarGroupLabel, 
     } from "../sidebar";

import { ChevronDown } from "lucide-react";


const CollapsibleMenu = ()=>{
    return (
        <Collapsible defaultOpen className="group/collapsible">
            <SidebarGroup>
                <SidebarGroupLabel asChild>
                    <CollapsibleTrigger>
                    Help
                    <ChevronDown className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-180" />
                    </CollapsibleTrigger>
                </SidebarGroupLabel>

                <CollapsibleContent>
                    <AllProject title='Science' link='/' icon={<User2/>}/>
                    <AllProject title='Maths' link='/' icon={<User2/>}/>
                </CollapsibleContent>
                
            </SidebarGroup>
      </Collapsible>
    )
};


export default CollapsibleMenu;

"use client"

import { SidebarProvider} from "../ui/sidebar";


 const WrapperProvider = ({cookieState, children})=>{
    return (
        <SidebarProvider defaultOpen={cookieState}>
            {children}
        </SidebarProvider>
    )
 };

 export default WrapperProvider;
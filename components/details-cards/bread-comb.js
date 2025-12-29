

import { 
    Breadcrumb, BreadcrumbLink, BreadcrumbItem,
    BreadcrumbPage,BreadcrumbSeparator,BreadcrumbList
 } from "../ui/breadcrumb"


const BreadCumb = ()=>{
    return (
        <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbLink href="/user">User</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                    <BreadcrumbPage>Namgyal Dorje</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
    )
};

export default BreadCumb;
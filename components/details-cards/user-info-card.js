

import { Badge } from "../ui/badge";
import ProgressBar from "./progress-bar";
import SheetSideBar from "./sheet-side";

const UserInfo = ()=>{
    return (
        <>
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">User Information</h1>
                <SheetSideBar />
            </div>
                
        
                <div className="space-y-4 mt-4">
                    <div className="flex flex-col gap-2 mb-4">
                        <p className="text-sm text-muted-foreground">Profile completion</p>
                        <ProgressBar/>
                    </div>

                    <div className="flex items-center  gap-2">
                        <span className="font-bold">Username:</span>
                        <span>Namgyal Dorjee</span>
                    </div>

                    <div className="flex items-center  gap-2">
                        <span className="font-bold">Email:</span>
                        <span>dorjee@gmail.com</span>
                    </div>

                    <div className="flex items-center  gap-2">
                        <span className="font-bold">Phone no:</span>
                        <span>(929)999-8888</span>
                    </div>

                    <div className="flex items-center  gap-2">
                        <span className="font-bold">Location:</span>
                        <span>Mongod</span>
                    </div>

                    <div className="flex items-center  gap-2">
                        <span className="font-bold">Role:</span>
                        <Badge>Student</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">Joined on 2025.01.01</p>
            </div>
        </>
       
    )
};

export default UserInfo;
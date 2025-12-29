


import CardList from "@/components/cards/card-list";
import HoveroverCard from "@/components/details-cards/hover-over";
import BreadCumb from "@/components/details-cards/bread-comb";
import UserInfo from "@/components/details-cards/user-info-card";

import UserAvatar from "@/components/details-cards/user-avatar";
import AppLineChart from "@/components/details-cards/app-line-chart";

import { BadgeCheck,Trophy, LandPlot, Drum  } from "lucide-react";

const SingleUserPage = ()=>{
    return (
        <div>
            <BreadCumb />
            <div className="mt-4 flex flex-col xl:flex-row gap-8">

                {/** LEFT */}
                <div className="w-full xl:w-1/2 space-y-6">

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold mb-2">Student Badges</h1>
                        <div className="flex gap-4 items-center  ">
                    
                        <HoveroverCard 
                            title="Verified User"
                            description="The user has been verified by the admin"
                            icon={BadgeCheck}
                        />
                        <HoveroverCard 
                            title="Excellence Award"
                            description="Awarded for exceptional academic achievement"
                            icon={Trophy}
                        />
                        <HoveroverCard 
                            title="Sports"
                            description="Student is active in Sports."
                            icon={LandPlot}
                        />
                        <HoveroverCard 
                            title="Arts/Music"
                            description="The student is active in music."
                            icon={Drum}
                        />
                        </div>
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <UserInfo />
                    </div>

                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <CardList title="Subject Teachers"/>
                    </div>
                    
                </div>
                {/** RIGHT */}
                <div className="w-full xl:w-2/3 space-y-6">
                    <div className="bg-primary-foreground p-4 rounded-lg space-y-2">
                        <UserAvatar />
                    </div>
                    <div className="bg-primary-foreground p-4 rounded-lg">
                        <h1 className="text-xl font-semibold">Student's Activity</h1>
                        <AppLineChart />
                    </div>
                </div>

            </div>
        </div>
        
    )
};

export default SingleUserPage;
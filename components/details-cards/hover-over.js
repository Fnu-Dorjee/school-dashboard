
import { 
    HoverCard, 
    HoverCardContent, 
    HoverCardTrigger 
}from "../ui/hover-card"


const HoveroverCard = ({title, description, icon:Icon})=>{
    return(
        <HoverCard >
            <HoverCardTrigger className='hover:cursor-pointer' asChild>
                <Icon className="size-8 bg-blue-400/30 p-1 rounded-full border border-blue-400/50" />
            </HoverCardTrigger>
            <HoverCardContent>
                <h1 className=" font-bold mb-2">{title}</h1>
                <p className="text-sm text-muted-foreground">{description}</p>
            </HoverCardContent>
        </HoverCard>
    )
};

export default HoveroverCard;
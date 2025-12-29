import { Avatar, AvatarImage, AvatarFallback} from "../ui/avatar"


const UserAvatar = ()=>{
    return (
        <>
            <div className="flex items-center gap-2">
                <Avatar className='size-12'>
                    <AvatarImage src="/images/payload.jpg"/>
                    <AvatarFallback>Fnu</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold">Fnu Dorjee</h1>
            </div>
            <p className="text-sm text-muted-foreground">
                Fnu is a Class 10 student from Dharamsala,India who demonstrates 
                strong abilities in mathematics and critical thinking.
            </p>
        </>
        
    )
};

export default UserAvatar;
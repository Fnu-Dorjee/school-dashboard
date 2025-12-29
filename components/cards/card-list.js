
import { MessageSquareMore } from "lucide-react";


const POPULAR_CONTENT = [
    { 
        id:1, 
        title:"Science", 
        badge: 'Tenzin Tsepal',
        image: "/images/payload.jpg",
    },
    {
        id:2, 
        title:"Math", 
        badge: 'Ten Lhamo',
        image: "/images/payload.jpg",

    },
    {
        id:3, 
        title:"Computer", 
        badge: 'N. Dorje',
        image: "/images/payload.jpg"},
];

const LATEST_CONTENT = [
    {
      id: '1a',
      title: "Computer",
      badge: "Mr. Dorje",
      image: "/images/book.png",
    },
    {
        id: '2b',
        title: "Math",
        badge: "Mr. Tsepal",
        image: "/images/book.png",
      },
      {
        id: '3c',
        title: "Science",
        badge: "Mrs. Dolma",
        image: "/images/book.png",
    },
  ];
  


import Image from "next/image";

import { Card,CardFooter,
    CardContent,
    CardTitle

} from "../ui/card";

import { Badge } from "../ui/badge";


const CardList = ({title})=>{

    const list = title === 'Subject Teacher'? POPULAR_CONTENT: LATEST_CONTENT;

    return(
    <div>
        <h1 className="text-lg font-medium mb-4">{title}</h1>

        <div className="flex flex-col gap-2">
            {
                list.map((list)=>(
                    <Card key={list.id} className='flex-row items-center justify-between gap-4 p-1'>
                        <div className="size-10 rounded-sm relative overflow-hidden p-1">
                            <Image  
                                src={list.image} 
                                alt={list.title}
                                fill
                                className="object-cover size-6"
                            />
                        </div>

                        <CardContent className='flex flex-col items-center justify-center'>
                            <CardTitle className='text-sm font-medium'>{list.title}</CardTitle>
                            <Badge variant="secondary">{list.badge}</Badge>
                
                        </CardContent>
                        <CardFooter> <MessageSquareMore className="size-5"/> </CardFooter>
                       
                    </Card>
                ))
            }
        </div>

        

    </div>
        
    )
};


export default CardList;
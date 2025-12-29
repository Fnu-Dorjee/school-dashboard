'use client'

import { useState, useEffect } from "react";

import { Progress } from "../ui/progress"

const ProgressBar = ()=>{
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setProgress(35)
        }, 600);

        return ()=> clearTimeout(timer);
        
    },[])

    useEffect(()=>{
        
    },[])

    return (
        <Progress value={progress}/>
    )
};

export default ProgressBar;
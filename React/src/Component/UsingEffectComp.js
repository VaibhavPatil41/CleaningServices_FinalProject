import { useEffect, useState } from "react"
import $ from 'jquery';


export default function UsingEffectComp () {

    const [cdate, setCdate] = useState(new Date()); 
    //server inetraction
    //setting refreshed
    useEffect(()=>{ 
        console.log("Mounted");
        const timer = setInterval(()=>{setCdate(new Date())},1000)
        //unmounting
        return ()=>{clearInterval(timer)}
    }, [])

    useEffect(()=>{
        console.log("updated");
    });   

    return (
        <div>
            <p> {cdate.getHours()+":"+cdate.getMinutes()+":"+cdate.getSeconds()} </p>
        </div>
    )

}
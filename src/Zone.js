import React, {useState} from 'react'
import { useParams} from 'react-router-dom';
import Navbar from './Navbar';
import {zones} from './dataLocal';

export default function Zone() {
    const {zoneName} = useParams();
    const objZone = zones.find((z) => z.name.toLowerCase() === zoneName);
    const [currentZone, setCurrentZone] = useState(objZone);
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="container text-justify" style={{backgroundColor: "white"}}>
                <h1 className="display-1">{currentZone.name}</h1> 
                <span>{currentZone.blog.time}</span>
                <p>{currentZone.blog.p1}</p>
                <p>{currentZone.blog.p2}</p>
                <p>{currentZone.blog.p3}</p>
                <p>{currentZone.blog.p4}</p>
                <p>{currentZone.blog.p5}</p>
                <p>{currentZone.blog.p6}</p>
                <p>{currentZone.blog.p7}</p>
                <p>{currentZone.blog.p8}</p>
            </div>                       
        </div>
    )
}

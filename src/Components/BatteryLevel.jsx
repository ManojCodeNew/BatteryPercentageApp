import React, { useEffect, useState } from 'react'
import './BatteryLevel.css';
import charging from './charging.png';
export default function BatteryLevel() {
    const [currentBatteryLevel, setCurrentBatteryLevel] = useState(0);
    const [isCharging, setIsCharging] = useState(false);
useEffect(()=>{
    setInterval(()=>{
        batteryLevelFinder();
    },1000)
    
})
    const batteryLevelFinder = async () => {
        const BatteryLevel = await navigator.getBattery();
        setCurrentBatteryLevel(Math.floor(BatteryLevel.level * 100));
        console.log(BatteryLevel.charging);
        setIsCharging(BatteryLevel.charging?true:false);
        
    }
    useEffect(() => {
        batteryLevelFinder();
    }, [currentBatteryLevel,isCharging])
    return (
        <>
        
        <center>
        <div
        style={
            {
                color:currentBatteryLevel>=50?"yellow":"red",
                fontSize:"60px"
            }
        }>
            <p>HAI THIS IS Likith</p>
            <h1 >{currentBatteryLevel} %</h1>
            {
                isCharging?<img src={charging} alt="charging" />:''
            }
        </div>
        </center>
        </>
    )
}

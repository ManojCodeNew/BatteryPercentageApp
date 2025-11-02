import React, { useEffect, useState } from 'react'
import './BatteryLevel.css';
import charging from './charging.png';
export default function BatteryLevel() {
    const [currentBatteryLevel, setCurrentBatteryLevel] = useState(0);
    const [isCharging, setIsCharging] = useState(false);

    // Pidmi Start Date
    const pidmiStartDate = "2/12/2024";
    const currentCalculationDate = "2025-10-29";
    const todaysDate = new Date();
    const calculationStartDate = new Date(currentCalculationDate).getTime();
    const currentDate = new Date().getTime();

    const differenceInMilliseconds = currentDate - calculationStartDate;
    const daysPassed = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    // Total Amount Calculation
    let totalAmount = 56700;
    totalAmount = totalAmount + (daysPassed * 200);

    useEffect(() => {
        setInterval(() => {
            batteryLevelFinder();
        }, 1000)

    })
    const batteryLevelFinder = async () => {
        const BatteryLevel = await navigator.getBattery();
        setCurrentBatteryLevel(Math.floor(BatteryLevel.level * 100));
        setIsCharging(BatteryLevel.charging ? true : false);

    }
    useEffect(() => {
        batteryLevelFinder();
    }, [currentBatteryLevel, isCharging]);


    return (
        <div className='container'>
            <div className="left-circle"></div>
            <div
                className='top-box'
                style={
                    {
                        color: currentBatteryLevel >= 50 ? "green" : "red",
                        fontSize: "60px",
                    }
                }>
                <h1 >{currentBatteryLevel} %</h1>
                {
                    isCharging ? <img src={charging} alt="charging" /> : ''
                }
            </div>

            {/* Pidmi container */}
            <div className="pidmi-container">
                <h2>PIDMI Total Amount</h2>
                <div className="date-container">
                    <div className="startDate">{pidmiStartDate}</div>
                    <span className='to'>-</span>
                    <div className="todayDate">{todaysDate.toLocaleDateString()}</div>
                </div>
                <h1>₹ {totalAmount}</h1>
            </div>

            {/* Footer */}
            <div className="footer">
                <div className="dot-container">
                    <p className="dot">

                    </p>
                    <p className="dot">

                    </p>
                    <p className="dot">

                    </p>
                </div>


                <p >Developed by Manoj ChandraShekar</p>
            </div>

        </div>
    )
}

import React from 'react';
import './BatteryLevel.css'

export default function PidmiCalculate() {
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

    return (
        <div className="pidmi-container">
            <h2>PIDMI Total Amount</h2>
            <div className="date-container">
                <div className="startDate">{pidmiStartDate}</div>
                <span className='to'>-</span>
                <div className="todayDate">{todaysDate.toLocaleDateString()}</div>
            </div>
            <h1>₹ {totalAmount}</h1>
        </div>
    )
}

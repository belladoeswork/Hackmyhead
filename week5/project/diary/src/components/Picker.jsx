import { useState } from "react";

export default function datesPicker() {

    // year init
    const currentYear = new Date().getFullYear();
    const initialYear = currentYear;
    const [year, setYear] = useState(initialYear);

    const yearsRange = 50;
    const years = [];

    for (let i = 0; i < yearsRange; i++) {
    years.push(initialYear - Math.floor(yearsRange / 2) + i);
    }

    const changeYear = (increment) => {
    const currentIndex = years.indexOf(year);
    const newIndex = (currentIndex + increment + years.length) % years.length;
    setYear(years[newIndex]);
    };

    // month init
    const [month, setMonth] = useState(new Date().getMonth());
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const changeMonth = (increment) => {
        const newMonth = (month + increment + 12) % 12;
        setMonth((newMonth + 12) % 12);
    }


    return (
        <div className="picker">
            <div className="counter1" >
                <button className='decr' onClick={() => changeMonth(-1)}>&lt;</button>
                <p className='month_display'>{monthNames[month]}</p>
                <button className='incr' onClick={() => changeMonth(1)}>&gt;</button>
            </div>
            <div className="counter2" >
                <button className='decr' onClick={() => changeYear(-1)}>&lt;</button>
                <p className='year_display'>{year}</p>
                <button className='incr' onClick={() => changeYear(1)}>&gt;</button>
            </div>
        </div>
    );
}
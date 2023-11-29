
import Divider from '@/components/Divider.jsx';
import { useState, useRef } from 'react';



export default function stopWatch() {

    const [time, setTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const intervalRef = useRef();

    const startClick = () => {
        if (!isRunning) {
            setIsRunning(true);
            intervalRef.current = setInterval(() => {
              setTime((time) => time + 1);
            }, 1000);
        }
    };

    const stopClick = () => {
        if (isRunning) {
            setIsRunning(false);
            clearInterval(intervalRef.current);
        }
    };

    const resetClick = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setTime(0);
    };


    return (
        <div>
            <h2>Stopwatch</h2>
            <div className="stopwatch" >
                
                <p className='timer'>{time} Seconds</p>
                <button className='start' onClick={() => startClick ()}>Start</button>
                <button className='stop' onClick={() => stopClick ()}>Stop</button>
                <button className='clear' onClick={() => resetClick ()}>Clear</button>
           
            </div>

            <Divider />

        </div>
    );
}
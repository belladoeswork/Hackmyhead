import Divider from '@/components/Divider.jsx';
import { useState } from 'react';



export default function counter() {


    const [counter, setCounter] = useState(0);

    const counterClick = (count) => {
        setCounter((counter + count));
    }

    return (
        <div>
            <h2>Counter</h2>
            <div className="counter" >
                <button className='decr' onClick={() => counterClick (-1)}>-</button>
                <p className='counter_display'>{counter}</p>
                <button className='incr' onClick={() => counterClick (+1)}>+</button>
            </div>
            <Divider />
        </div>
    );
}
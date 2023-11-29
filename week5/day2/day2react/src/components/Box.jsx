import Divider from '@/components/Divider.jsx';
import { useState } from 'react';


export default function ToggleBox() {

    const [boxColor, setColor] = useState("white");

    const handleClick = (e) => {
        setColor((boxColor === "white" ? "blue" : "white"));
    }
    return (
        <div>
            <h2>Toggle the box</h2>
            <div className="box" onClick={handleClick} style={{ backgroundColor: boxColor }} >
            </div>
            <Divider />

        </div>

    );
}
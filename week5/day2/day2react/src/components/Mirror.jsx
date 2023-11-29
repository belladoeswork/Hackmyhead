
import Divider from '@/components/Divider.jsx';
import { useState } from 'react';



export default function mirror() {

    const [text, setText] = useState("");
    return (
        <div>
            <h2>Mirror</h2>
            <div className="mirror" >
                <input type="text" onInput={(e) => setText(e.target.value)}value={text}/>
                <p>{text}</p>
            </div>
            <Divider />
        </div>
    );
}
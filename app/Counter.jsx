'use client';
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);



    return (
        <div> 
            <p>Count: {count}</p>
            <button onClick={() => setCount(count +1)}>Add Count</button>
        </div>
    )
}
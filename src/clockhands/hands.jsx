import { useState, useEffect } from 'react'
import ClockHand from './hand';

/**
 * 針の描画
 */
function ClockHands({ radius }) {
    const [hour, setHour] = useState(()=>new Date().getHours());
    const [minute, setMinute] = useState(()=>new Date().getMinutes());
    const [second, setSecond] = useState(()=>new Date().getSeconds());

    useEffect(() => {
        let timeoutId;

        const schedule = () => {
            const delay = 1000 - (Date.now() % 1000);

            timeoutId = window.setTimeout(() => {
                const now = new Date();
                setHour(now.getHours());
                setMinute(now.getMinutes());
                setSecond(now.getSeconds());
                schedule();
            }, delay);
        };

        schedule();
        return () => clearTimeout(timeoutId);
    }, []);

    const hourValue = (hour % 12) * 60 + minute;

    return (
        <>
            <ClockHand id="hand-hour" radius={radius} value={ hourValue } divNum={12 * 60} />
            <ClockHand id="hand-minute" radius={radius} value={ minute } divNum={60} />
            <ClockHand id="hand-second" radius={radius} value={ second } divNum={60} />
        </>
    )
}

export default ClockHands
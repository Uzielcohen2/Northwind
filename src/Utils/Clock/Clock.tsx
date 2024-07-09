import { useState } from "react";
import "./Clock.css";

function Clock(): JSX.Element {

    const now = new Date().toLocaleTimeString();

    const [time, setTime] = useState<string>(now);
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000)

    return (
        <div className="Clock">
            <h1>🕕{time}</h1>
        </div>
    );
}

export default Clock;

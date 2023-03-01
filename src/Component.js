import React, { useState, useRef } from 'react';

const Component = () => {
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const handleConnect = () => {
        console.log("1st")
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            console.log("2nd")
            const connection = document.querySelectorAll('.entity-result__item .artdeco-button');
            if (connection.length > 0) {
                console.log("3rd")
                connection.forEach((element) => {
                    console.log("4th click")
                    element.click();
                    document.body.appendChild(element);
                });
            }
        }, 1000);
    };

    const handleStop = () => {
        console.log("5th stop")
        setIsRunning(false);
        clearInterval(intervalRef.current);
        console.log("4th, stooped")
    };

    return (
        <div style={{ padding: "3rem" }}>
            {!isRunning ?
                <button style={{ cursor: "pointer" }} onClick={handleConnect} disabled={isRunning}>
                    Start Connecting
                </button>
                :
                <button style={{ cursor: "pointer" }} onClick={handleStop} disabled={!isRunning}>
                    Stop Connecting
                </button>
            }
        </div>
    );
};

export default Component;
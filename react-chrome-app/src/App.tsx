import React, { useState } from 'react';

const App = () => {

    const [isRunning, setIsRunning] = useState(false);

  let interval: any;

    const handleConnect = () => {
        setIsRunning(true);
        interval = setInterval(() => {
            const connection = document.querySelectorAll('.entity-result__item .artdeco-button');
            if (connection.length > 0) {
                connection.forEach((element: any) => {
                    element.click();
                    document.body.appendChild(element);
                });
            }
        }, 1000);
    };

    const handleStop = () => {
        setIsRunning(false);
        clearInterval(interval);
    };

    return (
        <div style={{ padding: "3rem" }}>
            {!isRunning ?
                <button style={{ cursor: "pointer", border: "2px solid black" }} onClick={handleConnect} disabled={isRunning}>
                    Start Connecting
                </button>
                :
                <button style={{ cursor: "pointer", border: "2px solid black" }} onClick={handleStop} disabled={!isRunning}>
                    Stop Connecting
                </button>
            }
        </div>
    );
};

export default App;
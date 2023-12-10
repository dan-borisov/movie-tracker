import React, { useState } from 'react';

const ClickCounter = () => {
    const [clickValue, setClickValue] = useState(0);

    const handlePlusButtonClick = () => {
        setClickValue(clickValue + 1);
    };

    const handleMinusButtonClick = () => {
        setClickValue(clickValue - 1);
    }

    return (
        <div>
            <h2>Click Counter</h2>
            <button onClick={handlePlusButtonClick}>Click for +1</button>
            <button onClick={handleMinusButtonClick}>Click for -1</button>
            <p>Value: {clickValue}</p>
        </div>
    );
};

export default ClickCounter;

import React, { useState } from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };

function BoilingVerdict({celsius}) {
    if(celsius >= 100) {
        return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
}

function TemperatureInput ({scale}) {
    const [temperature, setTemperature] = useState('');

    const handleChange = (e) => {
        setTemperature(e.target.value);
    }

    return (
        <fieldset>
            <legend>Enter temperature in {scale} : </legend>
            <input type="text" value={temperature} onChange={handleChange} />
        </fieldset>
    );
}

function Calculator() {
    return (
        <>
        <TemperatureInput scale={scaleNames.c} />
        <TemperatureInput scale={scaleNames.f} />
        {/* <BoilingVerdict celsius={temperature} /> */}
        </>
    );
}

export default Calculator;
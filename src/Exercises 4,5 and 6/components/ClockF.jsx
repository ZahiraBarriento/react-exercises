import React, { useState, useEffect } from 'react';

const ClockF = (props) => {

    const [date, setDate] = useState(new Date());
    const [age, setAge] = useState(0);

    const tick = () => {
        setDate(new Date());
        setAge(age + 1);
    }

    useEffect(() => {

        const timerID = setInterval(() => {
            tick();
        }, 1000);

        return () => {
            clearInterval (timerID);
        };
    }, );

    return (
        <div>
            <h2>
                Hora Actual:
                { date.toLocaleTimeString() }
            </h2>
            <h3>{ props.name } {props.lastName}</h3>
            <h1>Edad: { age }</h1>
        </div>
    );
}

export default ClockF;

import React, { useState, useEffect } from 'react';

const Square = () => {

    const initialState = {
        backgroundColor: 'black',
        width: '255px',
        height: '255px'
    }

    const [squareColor, setSquareColor] = useState(initialState);
    const [enableChange, setEnableChange] = useState(true);

    function changeColor(){

        if(enableChange){
            var red = (Math.random() * 255).toFixed(0);
            var green = (Math.random() * 255).toFixed(0);
            var blue = (Math.random() * 255).toFixed(0);
            
            setSquareColor({
                ...squareColor,
                backgroundColor: `rgb(${red},${green},${blue})`
            })
    
            console.log('On Mouse Over')
        }
    }

    function baseColor(){
        
        if(enableChange){
            setSquareColor({
                ...squareColor,
                backgroundColor: 'black'
            })

            console.log('On Mouse Out')
        }
    }

    function stopChangeColor(){
        setEnableChange(!enableChange);
        console.log('On Double Click');
    }


    return (
        <div>
            <div onMouseOver={ changeColor } onMouseOut= { baseColor } onDoubleClick={ stopChangeColor } style={ squareColor }></div>
        </div>
    );
}

export default Square;

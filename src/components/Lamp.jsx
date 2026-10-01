/*
✔️ achieve pixel 
✔️ then make a circle 
replace its radius and circumference with variables that change
have the variables be tied +/- to the drawstring
style ellipsoid in paper to get lamp into lantern 

arc((x, y), r, startAngle, endAngle)

(x, y): might need to do math on how the x, y would be calculated 
if we want it to sway back and forth 
r: this is the radius. This will also need to change with ellipsoid
startAngle: set to 0 
endAngle: set to 2 * Math.PI
counterclockwise: the final parameter 
*/

import React, { useRef, useEffect } from "react";

export function Lamp() {
    const canvasRef = useRef(null); 

    useEffect(() => {
        // get html5 canvas element
        const canvas = canvasRef.current; 
        if (!canvas) return; 

        // create 2d drawing env
        const ctx = canvas.getContext('2d');

        ctx.beginPath(); 
        ctx.arc(100, 150, 40, 0, 2 * Math.PI);
        ctx.stroke();
         
    }, []);

    return (
        <div>
            <canvas
                ref={canvasRef}
                width={200}
                height={300}
                style={{ border: '1px solid #ccc' }}
            />
        </div>
    )
}
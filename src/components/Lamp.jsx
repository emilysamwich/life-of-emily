import React, { useRef, useEffect } from "react";

export function Lamp() {
    const canvasRef = useRef(null); 

    useEffect(() => {
        const canvas = canvasRef.current; 

        if (!canvas) return; 

        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'rgba(255, 0, 0, 1.0)';
        ctx.fillRect(10, 10, 10, 10); 
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
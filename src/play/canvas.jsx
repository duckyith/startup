 import React, { useRef, useState, useContext} from 'react';

 import { CountdownTimer } from './timer';
 import { useNavigate } from 'react-router-dom';
 import { GameContext } from '../GameContext.jsx';

 export function CanvasArea() {
    const canvasRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const undoStack = useRef([]);
    const [mode, setMode] = useState("draw");
    const { imagesList, setImagesList } = useContext(GameContext);

    const startDrawing = (e) => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        saveState();
        ctx.beginPath();
        ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setIsDrawing(true);
    };
    const draw = (e) => {
        if (!isDrawing) return;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = mode === "erase" ? "white" : "black";
        ctx.lineWidth = mode === "erase" ? 10 : 2;
        ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctx.stroke();
    };
    const stopDrawing = () => {
        setIsDrawing(false);
    };

    const handleClear = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    };
    const handleErase = () => {
        setMode("erase");
    };
    const handleDraw = () => {
        setMode("draw");
    };

    const saveState = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        undoStack.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    };
    const handleUndo = () => {
        const canvas = canvasRef.current;
        if  (undoStack.current.length === 0) return;
        const ctx = canvas.getContext('2d');
        const previous = undoStack.current.pop();
        ctx.putImageData(previous, 0, 0);
    };
    //Add touch screen support for my mobile friends :)
    const convertTouch = (e) => {
        const rect = canvasRef.current.getBoundingClientRect();
        const touch = e.touches[0];
        return {
            nativeEvent: {
            offsetX: touch.clientX - rect.left,
            offsetY: touch.clientY - rect.top
            }
        };
        };

    const navigate = useNavigate();
    const cleanup = () => {
        const canvas = canvasRef.current;
        const dataURL = canvas.toDataURL();
        setImagesList(prevList => [...prevList, dataURL]);
        navigate('/vote');
    };
    return (
        <div className="Canvas">
            <canvas
            ref={canvasRef}
            id="pad"
            width={400}
            height={300}
            style={{ border: "1px solid black", cursor: "crosshair" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}

            onTouchStart={(e) => startDrawing(convertTouch(e))}
            onTouchMove={(e) => draw(convertTouch(e))}
            onTouchEnd={stopDrawing}
            ></canvas>
            <div className="canvas_button_group">
                <button className="btn btn-secondary"type="button"
                onClick={handleClear}>Clear</button>
                <button className="btn btn-secondary" type="button"
                onClick={handleErase}>Erase</button>
                <button className="btn btn-secondary" type="button"
                onClick={handleDraw}>Draw</button>
                <button className="btn btn-secondary" type="button"
                onClick={handleUndo}>Undo</button>
            </div>
            <CountdownTimer
                initialSeconds={60}
                onTimeUp={cleanup}/>
            <div style={{ textAlign: "center" }}>
                <button className="btn" onClick={() => {
                cleanup();
                navigate('/vote')}}>click to advance: temp for testing</button>
            </div>
        </div>
    );
 }
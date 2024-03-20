"use client";
import React, { useRef, useState, useEffect } from "react";

import { useForm, SubmitHandler } from "react-hook-form";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import styles from "./page.module.css";
import TextField from "@mui/material/TextField";

interface Point {
  x: number;
  y: number;
}
export default function TouchCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [points, setPoints] = useState<Point[]>([]);
  const [step, setStep] = useState<number>(0);

  const handleCanvasClick = (
    event: React.MouseEvent<HTMLCanvasElement, MouseEvent>
  ) => {
    if (points.length > 3) {
      return;
    }
    const { offsetX, offsetY } = event.nativeEvent;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPoint(ctx, { x: offsetX, y: offsetY });
    drawTriangle(ctx);
    setPoints([...points, { x: offsetX, y: offsetY }]);
  };

  const drawPoint = (ctx: CanvasRenderingContext2D, point: Point) => {
    ctx.fillStyle = "#000000";
    ctx.beginPath();
    ctx.arc(points[step].x, points[step].y, 10, 0, 2 * Math.PI);
    ctx.fill();
  };

  const drawTriangle = (ctx: CanvasRenderingContext2D) => {
    if (points.length < 2) return;
    ctx.beginPath();
    ctx.moveTo(points[step]?.x, points[step]?.y);
    ctx.lineTo(points[step + 1]?.x, points[step + 1]?.y);
    ctx.closePath();
    ctx.strokeStyle = "#000";
    ctx.stroke();

    setStep(step + 1);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setPoints([]);
    setStep(0);
  };

  return (
    <>
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: "1px solid black", cursor: "crosshair" }}
        onClick={handleCanvasClick}
      />
      <button onClick={clearCanvas}>캔버스 지우기</button>
    </>
  );
}

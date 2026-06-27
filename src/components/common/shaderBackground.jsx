import React, { useEffect, useRef } from "react";

const ShaderBackground = () => {
	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return undefined;
		if (typeof window.matchMedia !== "function") return undefined;

		const context = canvas.getContext("2d", { alpha: true });
		if (!context) return undefined;

		const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
		let animationFrame;
		let width = 0;
		let height = 0;
		let pixelWidth = 0;
		let pixelHeight = 0;

		const resize = () => {
			width = window.innerWidth;
			height = window.innerHeight;
			pixelWidth = Math.max(96, Math.floor(width / 7));
			pixelHeight = Math.max(72, Math.floor(height / 7));
			canvas.width = pixelWidth;
			canvas.height = pixelHeight;
			canvas.style.width = `${width}px`;
			canvas.style.height = `${height}px`;
		};

		const paint = (time = 0) => {
			const image = context.createImageData(pixelWidth, pixelHeight);
			const data = image.data;
			const t = reduceMotion.matches ? 0 : time * 0.00028;

			for (let y = 0; y < pixelHeight; y += 1) {
				for (let x = 0; x < pixelWidth; x += 1) {
					const nx = x / pixelWidth;
					const ny = y / pixelHeight;
					const waveA = Math.sin(nx * 9.2 + t * 2.2) * Math.cos(ny * 7.4 - t);
					const waveB = Math.sin((nx + ny) * 7.8 - t * 1.7);
					const waveC = Math.cos(Math.hypot(nx - 0.72, ny - 0.28) * 11 - t * 2.5);
					const mix = (waveA + waveB + waveC + 3) / 6;
					const index = (y * pixelWidth + x) * 4;

					data[index] = 8 + mix * 18 + waveC * 8;
					data[index + 1] = 16 + mix * 40 + waveA * 16;
					data[index + 2] = 32 + mix * 74 + waveB * 22;
					data[index + 3] = 218;
				}
			}

			context.putImageData(image, 0, 0);

			if (!reduceMotion.matches) {
				animationFrame = window.requestAnimationFrame(paint);
			}
		};

		resize();
		paint();
		window.addEventListener("resize", resize);

		if (!reduceMotion.matches) {
			animationFrame = window.requestAnimationFrame(paint);
		}

		return () => {
			window.cancelAnimationFrame(animationFrame);
			window.removeEventListener("resize", resize);
		};
	}, []);

	return (
		<div className="shader-background" aria-hidden="true">
			<canvas ref={canvasRef} />
			<div className="shader-vignette" />
		</div>
	);
};

export default ShaderBackground;

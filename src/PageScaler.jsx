import React, { useState, useEffect } from "react";

function useWindowSize() {
	const isClient = typeof window === `object`;

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined,
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	const handleResize = () => {
		setWindowSize(getSize());
	};

	useEffect(() => {
		if (!isClient) {
			return false;
		}

		window.addEventListener(`resize`, handleResize);
		return () => window.removeEventListener(`resize`, handleResize);
	}, []);

	return windowSize;
}

const PageScaler = ({
	children,
	contentWidth,
	contentHeight,
	color1 = `black`,
	color2 = `darkslategray`,
	noStripes = false,
}) => {
	const size = useWindowSize();
	const [scale, setScale] = useState(1);

	// set the scale whenever the window resizes
	useEffect(() => {
		console.log(size.width, contentWidth, size.height, contentHeight);
		console.log(
			Math.min(size.width / contentWidth, size.height / contentHeight)
		);

		setScale(
			Math.min(size.width / contentWidth, size.height / contentHeight)
		);
	}, [size]);

	// if window is perfectly sized, don't rescale
	if (size.width === contentWidth && size.height === contentHeight)
		return <>{children}</>;

	// render
	return (
		<div
			style={{
				position: `absolute`,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				overflow: `hidden`,
				background: noStripes
					? color1
					: `repeating-radial-gradient(circle at bottom right,${color1},${color1} 5px,${color2} 5px,${color2} 10px)`,
			}}
		>
			<div
				style={{
					transformOrigin: `top left`,
					transform: `scale(${scale})`,
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default PageScaler;

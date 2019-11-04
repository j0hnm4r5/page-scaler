import React from "react";
import ReactDOM from "react-dom";

import PageScaler from "../src/PageScaler";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

// an SVG to place on the page
const SVGBox = () => (
	<svg viewBox="0 0 100 100">
		<path
			fill="white"
			stroke="forestgreen"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={4}
			d="M87 87l-9-9V13l9 9v65M13 78l9 9h65l-9-9H13"
		/>
		<path fill="forestgreen" d="M82 27v55H27V27h55m5-5H22v65h65V22z" />
		<path
			fill="none"
			stroke="forestgreen"
			strokeLinejoin="round"
			strokeWidth={4}
			d="M22 22h65v65H22z"
		/>
		<path
			fill="white"
			stroke="forestgreen"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth={4}
			d="M22 87V22l-9-9v65l9 9zM13 13h65l9 9H22l-9-9z"
		/>
	</svg>
);

// the main component
const Index = () => {
	return (
		<PageScaler contentWidth={600} contentHeight={800}>
			<div
				css={css`
					width: 600px;
					height: 800px;
					background-color: #bada55;
					color: forestgreen;
					font-family: "Comic Sans MS", "Comic Sans", cursive;

					font-size: 2em;

					box-sizing: border-box;
					padding: 2em;

					border: 1em solid forestgreen;

					display: flex;
					flex-direction: column;
					align-content: center;
				`}
			>
				<h1>My awesome webpage</h1>
				<div
					css={css`
						width: 200px;
						height: 200px;
					`}
				>
					<SVGBox />
				</div>
			</div>
		</PageScaler>
	);
};

ReactDOM.render(<Index />, document.querySelector(`#app`));

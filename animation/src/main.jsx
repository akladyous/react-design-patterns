import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import CountUpComponent from "./CountUpComponent.jsx";
import ProgressBarCircle from "./ProgressBarCircle.jsx";
import App from "./App";
import Root from "./Root.jsx";
import TypeAnimation from "./TypeAnimation.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		{/* <App /> */}
		<Root>
			<TypeAnimation />
		</Root>
		<div className="border mb-2 w-75 mx-auto">
			<CountUpComponent maxValue={50} suffix="%" className="text-bg-warning" />
		</div>
		<div
			className="border mb-2 mx-auto"
			style={{ height: "100px", width: "100px" }}
		>
			<ProgressBarCircle
				maxValue={85}
				// textColor='green'
				// pathColor='red'
				duration={5}
				// text={85}
				// suffix={'%'}
			>
				<CountUpComponent maxValue={85} duration={6} suffix="%" />
			</ProgressBarCircle>
		</div>
	</React.StrictMode>
);

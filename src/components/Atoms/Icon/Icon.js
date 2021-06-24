import React from "react";
import { ReactComponent as ReactSprite } from "./icon.svg";

const Icon = (props) => (
	<svg className='icon' style={{ width: "35px", height: "40px" }}>
		<ReactSprite />
		<use xlinkHref={`#${props.name}`} />
	</svg>
);

export default Icon;

// <svg class="icon">
//   <use xlink:href="#Dashboard"></use>
// </svg>

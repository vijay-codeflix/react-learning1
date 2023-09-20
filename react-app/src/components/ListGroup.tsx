/** Eg- passig data using props */

// {items:[],heading:string}
interface Props {
	items: string[];
	heading: string;
}
import { useState } from "react";

// function ListGroup(props: Props) {
function ListGroup({ items, heading }: Props) {
	const [selectedIndex, setSelectedIndex] = useState(-1);
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No item fount</p>}
			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
						}}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

/**Eg- manage event state */

//change colour on click
// import { useState } from "react";

// function ListGroup() {
// 	let items = ["Delhi", "Mumbai", "Ahm", "Agra", "Udaipur", "Puna"];
// 	// let selectedIndex = 0;

// 	// Hook
// 	// const arr = useState(-1);
// 	//	const [name, setName] = useState(-1);
// 	// arr[0]; //variable (selectedIndex)
// 	// arr[1]; //update function

// 	const [selectedIndex, setSelectedIndex] = useState(-1);
// 	return (
// 		<>
// 			<h1>List Group</h1>
// 			{items.length === 0 && <p>No item fount</p>}
// 			<ul className="list-group">
// 				{items.map((item, index) => (
// 					<li
// 						className={
// 							selectedIndex === index
// 								? "list-group-item active"
// 								: "list-group-item"
// 						}
// 						key={item}
// 						onClick={() => {
// 							setSelectedIndex(index);
// 						}}
// 					>
// 						{item}
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

/**Eg- Click Events */
// import { MouseEvent } from "react";
// function ListGroup() {
// 	let items = ["Delhi", "Mumbai", "Ahm", "Agra", "Udaipur", "Puna"];

// 	// event handler
// 	// type annotaion effiocent way to handel event
// 	const handle = (e: MouseEvent) => console.log(e);
// 	return (
// 		<>
// 			<h1>List Group</h1>
// 			{items.length === 0 && <p>No item fount</p>}
// 			<ul className="list-group">
// 				{items.map((item, index) => (
// 					<li
// 						className="list-group-item"
// 						key={item}
// 						// onClick={() => console.log(item, index)}
// 						onClick={handle	}
// 					>
// 						{item}
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

/** Eg- Resolving Duplicate Data & call back function */

// function ListGroup() {
// 	let items = ["Delhi", "Mumbai", "Ahm", "Agra", "Udaipur", "Puna"];
// 	// items = [];

// 	// const message = items.length === 0 ? <p>No item fount</p> : null;
// 	// const getMessage = () => {
// 	// 	return items.length === 0 ? <p>No item fount</p> : null;
// 	// };
// 	return (
// 		<>
// 			<h1>List Group</h1>
// 			{/* {items.length === 0 ? <p>No item fount</p> : null} */}
// 			{/** with function */}
// 			{/* {getMessage()} */}
// 			{/** more efficent */}
// 			{items.length === 0 && <p>No item fount</p>}
// 			<ul className="list-group">
// 				{items.map((item) => (
// 					<li className="list-group-item" key={item}>
// 						{item}
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 	);
// }

/**Eg- Dynamic data  */
// function ListGroup() {
// 	let items = ["Delhi", "Mumbai", "Ahm", "Agra", "Udaipur", "Puna"];
// 	items = [];

// 	if (items.length == 0) {
// 		return (
// 			<>
// 				<h1>List Group</h1> {/* Duplicate 1.0 */}
// 				<h2>No Data Found</h2>;
// 			</>
// 		);
// 	}
// 	return (
// 		// <Fragment>
// 		<>
// 			<h1>List Group</h1> {/* Duplicate 1.0 */}
// 			<ul className="list-group">
// 				{items.map((item) => (
// 					<li className="list-group-item" key={item}>
// 						{item}
// 					</li>
// 				))}
// 			</ul>
// 		</>
// 		// </Fragment> */
// 	);
// }

/**Eg- fragment */
// import { Fragment } from "react";

// function ListGroup() {
// 	return (
// 		// <Fragment>
// 		<>
// 			<h1>List Group</h1>
// 			<ul className="list-group">
// 				<li className="list-group-item">An item</li>
// 				<li className="list-group-item">A second item</li>
// 				<li className="list-group-item">A third item</li>
// 				<li className="list-group-item">A fourth item</li>
// 				<li className="list-group-item">And a fifth one</li>
// 			</ul>
// 		</>
// 		// </Fragment> */
// 	);
// }

/**
 * Eg- Basic
 */
// function ListGroup() {
// 	return (
// 		<div>
// 			<h1>List Group</h1>
// 			<ul className="list-group">
// 				<li className="list-group-item">An item</li>
// 				<li className="list-group-item">A second item</li>
// 				<li className="list-group-item">A third item</li>
// 				<li className="list-group-item">A fourth item</li>
// 				<li className="list-group-item">And a fifth one</li>
// 			</ul>
// 		</div>
// 	);
// }

export default ListGroup;

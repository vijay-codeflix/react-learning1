// import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
	let items = ["Delhi", "Mumbai", "Ahm", "Agra", "Udaipur", "Puna"];

	return (
		<div>
			<ListGroup items={items} heading="Cities" />

			{/* independent list groups */}
			{/* <ListGroup /> */}
			{/* <ListGroup /> */}
		</div>
	);
	// return <div><Message></Message></div>
}

export default App;

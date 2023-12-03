import LeftSideComponent from "./component/HomePageComponent/LeftSideComponent";
import RightSideComponent from "./component/HomePageComponent/RightSideComponent";

function App() {
	return (
		<div className="lg:flex lg:flex-row flex flex-col h-screen">
			<div className=" lg:w-[70%] ">
				<LeftSideComponent />
			</div>
			<div className=" lg:w-[30%] lg:mt-0 lg:pb-0 mt-12 pb-12">
				<RightSideComponent />
			</div>
		</div>
	);
}

export default App;

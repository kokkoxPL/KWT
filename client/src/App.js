import "./index.css";
import "./form.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Pages

import Home from "./pages/Home";
import Join from "./pages/Join";

//COMPONENTS

import Navbar from "./components/Navbar";

document.title = "KWT";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<div className="pages">
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/join' element={<Join />} />
					</Routes>
				</div>
			</BrowserRouter >
		</div>
	);
}

export default App;

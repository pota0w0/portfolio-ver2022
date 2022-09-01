import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./pages/main";
import Work from "./pages/work"

const App = () => {
	return (
		<div className='App'>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/work/*" element={<Work />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
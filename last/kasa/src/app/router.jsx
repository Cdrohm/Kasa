import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Housing from "../pages/Housing";
import About from "../pages/About";
import Error from "../pages/Error";
import { ProviderLogements } from "../utils/context_Housing";


function Router() {
	

	return (
		<React.StrictMode>
			<BrowserRouter className="container" basename="/kasa">
				 <ProviderLogements>
					<div className="App">
						<div className="content">
							<Header />
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/logement/:idPage" element={<Housing />} />
								<Route path="/apropos" element={<About />} />
								<Route path="*" element={<Error />} />
							</Routes>
						</div>
						<Footer />
					</div>
				</ProviderLogements>
			</BrowserRouter>
		</React.StrictMode>
	);
}

export default Router;
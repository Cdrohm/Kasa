import { createContext, useState } from "react";
import housing from "../app/fetcher";

export const ContextHousing = createContext();

export const ProviderLogements = ({ children }) => {
	const [locs, setLocs] = useState(housing.get());
	function getLoc(id) {
		return locs.filter((loc) => loc["id"] === id);
	}
	function getIDs() {
		return locs.map(loc => loc.id);
	}

	return (
		<ContextHousing.Provider value={{ locs, setLocs, getLoc, getIDs }}>
			{children}
		</ContextHousing.Provider>
	);
};
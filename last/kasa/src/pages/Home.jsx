import Photo from "../components/modules/Picture";
import Grid from "../components/modules/Grid";

import { useContext } from "react";
import { ContextHousing } from "../utils/context_Housing";

/**
 * F home => take Id logement + location
 * @returns grid with all photo of house
 */
function Home() {
	const { locs, getIDs } = useContext(ContextHousing);
	const locIDs = getIDs();
	if (
		!localStorage.getItem("locIDs") ||
		localStorage.getItem("locIDs") === undefined ||
		localStorage.getItem("locIDs") === []
	) {
		localStorage.setItem("locIDs", JSON.stringify(locIDs));
	}

	return (
		<div> 
			<Photo hpImg={true} />
			<Grid locs={locs} />
		</div>
	);
}

export default Home;
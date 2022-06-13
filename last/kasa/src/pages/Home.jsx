import React from 'react';
import { useContext } from 'react';
import { ContextHousing } from '../utils/context_Housing';

import Photo from "../components/modules/Picture";
import Grid from "../components/modules/Grid";

const Home = () => {
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
			<Photo hpImg={true} />0
			<Grid locs={locs} />
		</div>
	
	);
};

export default Home;
/*import Photo from "../components/modules/Picture";
import Grid from "../components/modules/Grid";

import { useContext } from "react";
import { ContextHousing } from "../utils/context_Housing";

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
			<Photo hpImg={true} />0
			<Grid locs={locs} />
		</div>
	);
}

export default Home;*/
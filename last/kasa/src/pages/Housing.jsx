import { useContext } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ContextHousing } from "../utils/context_Housing";

import Tags from "../components/modules/Tags";
import Lessor from "../components/modules/Lessor";
import Rates from "../components/modules/Rates";
import Texts from "../components/modules/Texts";
import Carrousel from "../components/modules/Carrousel";

function Housing() {
	const { idPage } = useParams();
	const { getLoc, getIDs } = useContext(ContextHousing);
	const storedLocIDs = localStorage.getItem("locIDs");
	const storedLoc = localStorage.getItem("loc");
	let loc, locIDs;

	// LOCALSTORAGE
	/* verify idPage => localStorage.
	If it's not, it will get the new data from the API and store it in localStorage. */
	if (
		!localStorage.getItem("loc") ||
		localStorage.getItem("loc") === "undefined"
	) {
		[loc] = getLoc(idPage);
		localStorage.setItem("loc", JSON.stringify(loc));
	} else {
		if (JSON.parse(localStorage.getItem("loc")).id === idPage) {
			loc = JSON.parse(storedLoc);
		} else {
			[loc] = getLoc(idPage);
			localStorage.setItem("loc", JSON.stringify(loc));
		}
	}
	if (
		!localStorage.getItem("locIDs") ||
		localStorage.getItem("locIDs") === "undefined" ||
		localStorage.getItem('locIDs') === []
	) {
		locIDs = getIDs();
		localStorage.setItem("locIDs", JSON.stringify(locIDs));
	} else {
		locIDs = JSON.parse(storedLocIDs);
	}
	console.log("IDPAGE", idPage, "LOCIDS", locIDs);

	// wrong ID => page 404
	if (loc === undefined || !locIDs.includes(idPage)) {
		console.log('nav to 404')
		return <Navigate to="/error" />;
	}

	const {
		// eslint-disable-next-line
		id,
		title,
		// eslint-disable-next-line
		cover,
		// eslint-disable-next-line
		pictures,
		description,
		host,
		rating,
		location,
		equipments,
		tags,
	} = loc;

	return (
		<div className="House">
			<div className="cover">
				<Carrousel loc={loc} />
			</div>
			<div className="content">
				<div className="top">
					<div className="title">
						<h1>{title}</h1>
						<h3>{location}</h3>
						<div className="tags">
							<Tags tags={tags} />
						</div>
					</div>
					<div className="lessor_rates">
						<Lessor host={host} />
						<Rates rateNum={rating} />
					</div>
				</div>

				<div className="texts">
					<Texts type="Description" text={description} />
					<Texts type="Équipements" text={equipments} />
				</div>
			</div>
		</div>
	);
}

export default Housing;
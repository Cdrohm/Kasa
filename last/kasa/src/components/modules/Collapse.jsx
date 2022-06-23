import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

function switchText(type) {
	const textuals = document.querySelectorAll(".Collapse");
	console.log(type);
	console.log(textuals);
	const textual = [...textuals].filter(
		(elt) => elt.querySelector("h3").innerText === type
	)[0];
	
	console.log(textual);
	const text = textual.querySelector(".text");
	//console.log('text');

	// eslint-disable-next-line no-unused-expressions
	textual.classList.contains("hide")
		? (textual.classList.remove("hide"), text.classList.remove("hide"))
		: (textual.classList.add("hide"), text.classList.add("hide"));
}

/**
 * description + equipements txt, appear on click / change chevron up/down
 * @param {*} param0 
 * @returns 
 */
function Collapse({ type, text }) {
	return (
		<div className="Collapse hide">
			
			<h3 className="cap" onClick={() => switchText(type)}>
				<span>{type}</span>
				<FontAwesomeIcon
					icon={solid("chevron-up")}
					className="chevron chevron_up"
				/>
				<FontAwesomeIcon
					icon={solid("chevron-down")}
					className="chevron chevron_down"
				/>
			</h3>
			{type !== "Equipements" ? (
				<div className="text hide">{text}</div>
			) : (
				<div className="text hide">
					{
						<ul>
							{text.map((el, i) => (
								<li key={`equip-${i}`}>{el}</li>
							))}
						</ul>
					}
				</div>
			)}
		</div>
	);
}

export default Collapse;
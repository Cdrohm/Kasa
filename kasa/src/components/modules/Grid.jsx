//Grid for pictures
import Photo from "./Picture";
import {
    Link
} from "react-router-dom";

/**
 * Grid for home page = photo of houses in 3 columns
 * @param {*} param0 
 * @returns 
 */
function Grid({
    locs
}) {
    return (
        <div className="Grid">
			{locs.map(loc => (
				<Link to={`/Logement/${loc.id}`} key={loc.id}>
					<div className="photo_grid">
						<Photo loc={loc} />
					</div>
				</Link>
			))}
		</div>
    );
}

export default Grid;
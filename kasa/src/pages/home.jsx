import Photo from "../assets/paysage1.png";
//import grid 3/ ligne

import { useContext } from "react";
import { envHousing } from '../utils/env_housing';

function Home() {
    const { locs, getIDs } = useContext(envHousing);
    const locIDs = getIDs();

   // if(){}
    return (
        <div>
            <Photo />
            /*grid 3/L */

        </div>
    )
}

export default Home;
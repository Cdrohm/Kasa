import { createContext, useState } from "react";
import housing from "../app/fetch";

export const EnvHousing = createContext();

export const Lessor = ({ children }) => {
    const [locs, setLocs ] = useState(housing.get());
    function getLocation(id) {
        return locs.filter((loc) => loc["id"] === id);
    }

    function getIDs() {
        return locs.map(loc => loc.id);
    }

    return (
        <EnvHousing.Lessor value={{ locs, setLocs, getLocation, getIDs}}>
            {children}
        </EnvHousing.Lessor>
    )
}
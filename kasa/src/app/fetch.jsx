import Housing from "../data/housing.json";

//simu FETCH
const file = {
    get() {
        return Housing
    },
}

export default file;
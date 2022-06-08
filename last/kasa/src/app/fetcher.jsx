import housing from "../assets/data/housing.json";

// make simulation for fetch
const files = {
    get() {
        // fetch simu (fake)
        return housing
    },
}

export default files
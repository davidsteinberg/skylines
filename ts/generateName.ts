import cities from "./cities.json" assert { type: "json" };
import { namerator } from "./deps.ts";

const generator = namerator(cities, { unique: true });
const generateName = () => generator.next().value;

export default generateName;

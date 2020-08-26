console.log("Welcome to the main module")

import {createPlan} from './plan.js';
import {addPlant, usePlants} from './field.js';

const yearlyPlan = createPlan();

console.log(yearlyPlan);



// import { createAsparagus } from "./seeds/asparagus.js"

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)


addPlant(seedObj);
const yield = usePlants();

usePlants();
console.log(yield);


console.log(addPlant);

console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { addPlant, usePlants } from './field.js';
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

const yearlyPlan = createPlan();
console.log(yearlyPlan);

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)


// addPlant(seedObj);
// const plantArray = usePlants();
// console.log(plantArray);
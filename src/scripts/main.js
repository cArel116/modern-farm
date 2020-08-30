console.log("Welcome to the main module")

import { createPlan } from './plan.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { createPotato } from './seeds/potato.js';

const yearlyPlan = createPlan();
console.log(yearlyPlan);

plantSeeds(yearlyPlan);
const plantArray = usePlants();
console.log(plantArray);
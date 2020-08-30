// import { createPlan } from './plan.js';
import { addPlant, usePlants } from './field.js';
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"

let planArray = [];

export const plantSeeds = (plantingPlan) => {
    for (const row of plantingPlan) {
        for (const plant of row) {
            if (plant === "Asparagus") {
                const asparagus = createAsparagus();
                addPlant(asparagus);
            }
            else if (plant === "Potato") {
                const potato = createPotato();
                addPlant(potato);
            }
            else if (plant === "Soybean") {
                const soybean = createSoybean();
                addPlant(soybean);
            }
            else if (plant === "Sunflower") {
                const sunflower = createSunflower();
                addPlant(sunflower);
            }
            else if (plant === "Wheat") {
                const wheat = createWheat();
                addPlant(wheat);
            }
            else {
                const corn = createCorn();
                addPlant(corn);
            }
        }
    }
}
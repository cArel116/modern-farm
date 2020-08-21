const plantsGrowingArray = [];

export const addPlant = (seedObj) => {
    plantsGrowingArray.push(seedObj);
}

export const usePlants = () => {
    return plantsGrowingArray;
}
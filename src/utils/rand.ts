const seedRandom = process.env.isDebug ? Math.random : fxrand;

export const rand = (min?: number, max?: number): number => {
    if (min !== undefined && max === undefined) {
        return seedRandom() * min;
    } else if (min !== undefined && max !== undefined) {
        return min + seedRandom() * (max - min);
    }
    return seedRandom();
};

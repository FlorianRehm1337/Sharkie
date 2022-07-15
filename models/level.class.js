class Level {
    pufferfishes;
    jellyfishes;
    endboss;
    lights;
    coins;
    poisonbottles;
    lifes;
    backgroundObjects;
    level_end_x = 1600;

    constructor(pufferfishes, jellyfishes, endboss, lights, coins,poisonbottles,lifes, backgroundObjects) {
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.endboss = endboss
        this.lights = lights;
        this.coins = coins;
        this.poisonbottles = poisonbottles;
        this.lifes = lifes;
        this.backgroundObjects = backgroundObjects;
        
    }
}
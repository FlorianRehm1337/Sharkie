class Level {
    pufferfishes;
    jellyfishes;
    endboss;
    lights;
    coins;
    poisonbottles;
    backgroundObjects;
    level_end_x = 2000;

    constructor(pufferfishes, jellyfishes, endboss, lights, coins,poisonbottles, backgroundObjects) {
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.endboss = endboss
        this.lights = lights;
        this.coins = coins;
        this.poisonbottles = poisonbottles;
        this.backgroundObjects = backgroundObjects;
        
    }
}
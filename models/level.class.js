class Level {
    pufferfishes;
    jellyfishes;
    endboss;
    lights;
    coins;
    poisonbottles;
    lifes;
    backgroundObjects;
    barriers;
    level_end_x = 2500;

    constructor(pufferfishes, jellyfishes, endboss, lights, coins,poisonbottles,lifes, backgroundObjects,barriers) {
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.endboss = endboss
        this.lights = lights;
        this.coins = coins;
        this.poisonbottles = poisonbottles;
        this.lifes = lifes;
        this.backgroundObjects = backgroundObjects;
        this.barriers = barriers;
        
    }
}
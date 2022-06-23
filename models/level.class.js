class Level {
    pufferfishes;
    jellyfishes;
    endboss;
    lights;
    coins;
    backgroundObjects;
    level_end_x = 1400;

    constructor(pufferfishes, jellyfishes, endboss, lights, coins, backgroundObjects) {
        this.pufferfishes = pufferfishes;
        this.jellyfishes = jellyfishes;
        this.endboss = endboss
        this.lights = lights;
        this.coins = coins;
        this.backgroundObjects = backgroundObjects;
        
    }
}
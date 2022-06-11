class Level{
    enemies;
    endboss;
    lights;
    backgroundObjects;
    level_end_x = 1400;
    
    constructor(enemies,endboss, lights, backgroundObjects){
        this.enemies = enemies;
        this.endboss = endboss
        this.lights = lights;
        this.backgroundObjects = backgroundObjects;
    }
}
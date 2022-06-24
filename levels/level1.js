const level1 = new Level(
    [
        new Pufferfish_Green(),
        new Pufferfish_Orange(),
        new Pufferfish_Red(),
    ],
    [
        new JellyFish_Yellow(500),
        new JellyFish_Pink(750),
        new JellyFish_Purple(1000),
        new JellyFish_Green(1250),
    ],
    [
        new Endboss(),
    ], 
    [
        new Light(),
    ],
    [
        new Coin(300),
        new Coin(450),
        new Coin(600),
        new Coin(750),
        new Coin(900),
        new Coin(1000),
        new Coin(1200),
        new Coin(1400),
        new Coin(1600),
        new Coin(1800),
    ],
    [
        new PoisonBottle(300),
        new PoisonBottle(600),
        new PoisonBottle(900),
        new PoisonBottle(1200),
        new PoisonBottle(1600),
    ],
    [
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', -720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', -720),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 0),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 0),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L2.png', 720),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L2.png', 720),
    
        new BackgroundObject('img/3. Background/Layers/5. Water/L1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/4.Fondo 2/L1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/3.Fondo 1/L1.png', 720*2),
        new BackgroundObject('img/3. Background/Layers/2. Floor/L1.png', 720*2),
    ],
    

)
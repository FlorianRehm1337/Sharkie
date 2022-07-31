let canvas;
let world;
let slider;
let sliderText;
let keyboard = new Keyboard();
let assets = new Assets();
let audio;

function init(){
    
    canvas = document.getElementById('canvas');
    slider = document.getElementById('sliderWithValue');
    sliderText = document.getElementById('sliderOutputText');
    audio = new AudioCollection(slider,sliderText);
    world = new World(canvas,keyboard,audio,assets);
    setListener(slider,sliderText);
    saveValue(slider,sliderText);
}

function fullScreen(){
    canvas.requestFullscreen();
}

function startGame(){
    setTimeout(() =>{
        document.getElementById('start-container').classList.add('d-none');
    },200)
    
    initLevel();
}

function setListener(slider,sliderText){
    slider.addEventListener('input', function(){
        audio.sendSetting(slider,sliderText);
    });
}

function saveValue(){
    slider.addEventListener('change', function(){
        audio.setVolume();
    });
}



window.addEventListener('keydown', (e) => {

    if(e.keyCode == 16){
        keyboard.SHIFTL = true;
    }

    if(e.keyCode == 39){
        keyboard.RIGHT = true;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = true;
    }

    if(e.keyCode == 38){
        keyboard.UP = true;
    }

    if(e.keyCode == 40){
        keyboard.DOWN = true;
    }

    if(e.keyCode == 32){
        keyboard.SPACE = true;
    }

    if(e.keyCode == 68){
        keyboard.D = true;
    }

    if(e.keyCode == 70){
        keyboard.F = true;
    }
})

window.addEventListener('keyup', (e) => {

    if(e.keyCode == 16){
        keyboard.SHIFTL = false;
    }

    if(e.keyCode == 39){
        keyboard.RIGHT = false;
    }

    if(e.keyCode == 37){
        keyboard.LEFT = false;
    }

    if(e.keyCode == 38){
        keyboard.UP = false;
    }

    if(e.keyCode == 40){
        keyboard.DOWN = false;
    }

    if(e.keyCode == 32){
        keyboard.SPACE = false;
    }

    if(e.keyCode == 68){
        keyboard.D = false;
    }

    if(e.keyCode == 70){
        keyboard.F = true;
    }
})
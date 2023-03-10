let canvas;
let world;
let slider;
let sliderText;
let keyboard = new Keyboard();
let assets = new Assets();
let audio;
let fullScreenIsActive = false;
let settingsOpened = false;
let infoOpened = false;

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
    document.getElementById('canvas').classList.add('canvasFullscreen');
    fullScreenIsActive = true;
}

function startGame(){
    document.getElementById('canvas-container').classList.remove('d-none');
    setTimeout(() =>{
        document.getElementById('start-container').classList.add('d-none');
    },200)
    
    initLevel();
}

function handleSettings(){

    if (!settingsOpened) {
        document.getElementById('settings').classList.remove('d-none');
        document.getElementById('settings-icon').classList.add('d-none');
        settingsOpened = true;
    }else{
        document.getElementById('settings').classList.add('d-none');
        document.getElementById('settings-icon').classList.remove('d-none');
        settingsOpened = false;
    }
    
}

function restartGame(){
    location.reload();
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
    if (e.keyCode == 27 && fullScreenIsActive) {
        document.getElementById('canvas').classList.remove('canvasFullscreen');
        fullScreenIsActive = false;
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

function left(value,event) {
    event.preventDefault();
    keyboard.LEFT = value;
}

function right(value, event) {
    event.preventDefault();
    keyboard.RIGHT = value;
}

function up(value, event) {
    event.preventDefault();
    keyboard.UP = value;
}

function down(value, event) {
    event.preventDefault();
    keyboard.DOWN = value;
}

function normalBubble(value, event) {
    event.preventDefault();
    keyboard.D = value;
}

function poisonBubble(value, event) {
    event.preventDefault();
    keyboard.F = value;
}

function slap(value, event) {
    event.preventDefault();
    keyboard.SPACE = value;
}

function showInfo(){
    if (infoOpened) {
        document.getElementById('info-container').classList.add('d-none');
        infoOpened = false;
    } else {
        document.getElementById('info-container').classList.remove('d-none');
        infoOpened = true;
    }
    
}
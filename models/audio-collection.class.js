class AudioCollection{

    slider;
    sliderText;
    currentVolume;
    percentage;
    
    coinCollection = new Audio('audio/coin.mp3');
    healthCollection = new Audio('audio/healthUp.mp3');
    bottleCollection = new Audio('audio/bottle_pickup.mp3');
    bossAttack = new Audio('audio/boss_attack.mp3');
    bossBackground = new Audio('audio/boss_bg_music.mp3');
    bossDead = new Audio('audio/boss_dead.mp3');
    bossHurt = new Audio('audio/boss_hurt.mp3');
    bossIntroLaugh = new Audio('audio/boss_intro_laugh.mp3');
    bossIntroLevel = new Audio('audio/boss_level_intro.mp3');
    jellyfishAttack = new Audio('audio/jellyfish_attack.mp3');
    normalBackground = new Audio('audio/normal_bg_music.mp3');
    poisonBubble = new Audio('audio/poison_bubble.mp3');
    characterAttack = new Audio('audio/sharkie_attack.mp3');
    characterHurt = new Audio('audio/sharkie_hurt.mp3');
    characterFinslap = new Audio('audio/slap_sound.mp3');
    characterMove = new Audio('audio/swim.mp3');

    constructor(slider,sliderText){
        this.slider = slider;
        this.sliderText = sliderText;
        this.currentVolume = localStorage.getItem('userSettedVolume');
        this.getVolume(slider,sliderText);  
        this.setVolume()      
    }

    sendSetting(slider,sliderText){
        this.currentVolume = slider.value;
        sliderText.innerHTML = this.currentVolume;
        this.setVolume();
    }

    getVolume(slider,sliderText){
        if (localStorage.getItem('userSettedVolume') === null) {
            this.currentVolume = slider.value;
            sliderText.innerHTML = this.currentVolume;
        }else{
           slider.value = this.currentVolume;
           sliderText.innerHTML = this.currentVolume;
        }  
    }

    setVolume(){
        this.percentage = this.currentVolume / 100;
        localStorage.setItem('userSettedVolume',this.currentVolume);
        this.editVolume();
    }

    editVolume(){
        this.coinCollection.volume = this.percentage;
        this.healthCollection.volume = this.percentage;
        this.bottleCollection.volume = this.percentage;
        this.bossAttack.volume = this.percentage;
        this.bossBackground.volume = this.percentage;
        this.bossDead.volume = this.percentage;
        this.bossHurt.volume = this.percentage;
        this.bossIntroLaugh.volume = this.percentage;
        this.bossIntroLevel.volume = this.percentage;
        this.jellyfishAttack.volume = this.percentage;
        this.normalBackground.volume = this.percentage;
        this.poisonBubble.volume = this.percentage;
        this.characterAttack.volume = this.percentage;
        this.characterHurt.volume = this.percentage;
        this.characterFinslap.volume = this.percentage;
        this.characterMove.volume = this.percentage;   
    }
}

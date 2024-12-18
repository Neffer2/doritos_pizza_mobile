export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        /* PLAYER */
        this.load.spritesheet('player_iddle', './animaciones/player_iddle.png', { frameWidth: 389, frameHeight: 779 });
        // this.load.spritesheet('player_run', './animaciones/player_run.png', { frameWidth: 450, frameHeight: 651.6 });
        this.load.spritesheet('player_run', './animaciones/player_run.png', { frameWidth: 389, frameHeight: 779 });
        this.load.spritesheet('player_jump', './animaciones/player_jump.png', { frameWidth: 389, frameHeight: 779 });
        this.load.spritesheet('player_fall', './animaciones/player_fall.png', { frameWidth: 893, frameHeight: 779 });
        

        /* ELEMS */
        this.load.image('background', './elems/bg.jpg');
        this.load.image('score-bg', './elems/score_bg.png');
        this.load.image('lives-bg', './elems/lives_bg.png');
        this.load.image('time-bg', './elems/time_bg.png');
        
        /* BUTTONS */
        this.load.image('left-btn', './botones/left.png');
        this.load.image('right-btn', './botones/right.png');
        this.load.image('jump-btn', './botones/jump.png');
        this.load.image('pause-btn', './botones/pause.png');
        this.load.image('resume-btn', './botones/resume.png');
        this.load.image('score', './botones/score.png');
        this.load.image('start-btn', './botones/start.png');
        this.load.image('popUp', './botones/popUp.png');        
        this.load.image('volver', './botones/volver.png');        

        /* TUTORIAL */
        this.load.image('background_tutorial', './tutorial/bg_tutorial.jpg');
        this.load.image('aceptar-btn', './tutorial/aceptar_btn.png');
        this.load.image('volver-btn', './tutorial/volver_btn.png');
        this.load.image('title', './tutorial/title.png');
        this.load.image('tutorial', './tutorial/tutorial.png');

        /* POPUP */
        this.load.image('title-score', './popup/title_score.png');
        this.load.image('title-footer', './popup/socore_footer.png');

        this.load.image('burger', './elems/burger.png');
        this.load.image('dorito', './elems/dorito.png');
    }

    create ()
    {
        this.scene.start('Game');
        // this.scene.start('Tutorial');
    } 
}
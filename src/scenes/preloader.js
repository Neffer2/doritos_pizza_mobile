export class Preloader extends Phaser.Scene {
    constructor ()
    {
        super('Preloader');
    }

    preload ()
    {
        this.load.setPath('public/assets');
        /* AREPAS */
        this.load.image('player', './elems/arepa.png');
        this.load.image('arepa-huevo', './elems/arepa-huevo.png');
        this.load.image('arepa-carne', './elems/arepa-carne.png');
        this.load.image('arepa-mq', './elems/arepa-mq.png');        
        
        /* BUTTONS */
        this.load.image('left-btn', './botones/left.png');
        this.load.image('right-btn', './botones/right.png');
        this.load.image('pause-btn', './botones/pause.png');
        this.load.image('resume-btn', './botones/resume.png');
        this.load.image('score', './botones/score.png');
        this.load.image('start-btn', './botones/start.png');
        this.load.image('popUp', './botones/popUp.png');        
        this.load.image('volver', './botones/volver.png');        

        /* ELEMS */
        this.load.image('background', './elems/KITCHEN.png');
        this.load.image('background_tutorial', './elems/bg_tutorial.jpg');
        this.load.image('presentaciones', './elems/presentaciones.png');
        this.load.image('presentaciones2', './elems/presentaciones2.png');
        this.load.image('floor', './elems/FloorTwo.png');
        this.load.image('huevo1', './elems/huevo1.png');
        this.load.image('huevo2', './elems/huevo2.png');
        this.load.image('mortadela', './elems/mortadela.png');
        this.load.image('queso', './elems/queso.png');
        this.load.image('camaron', './elems/camaron.png');
        this.load.image('camaron1', './elems/camaron1.png');
        this.load.image('carne', './elems/carne.png');
        this.load.image('carne1', './elems/carne1.png');
        this.load.image('logo-pan', './elems/pan.png');        
    }

    create ()
    {
        this.scene.start('Tutorial');
    } 
}
export class Tutorial extends Phaser.Scene {
    constructor ()
    {
        super('Tutorial');
    }

    preload ()
    {
        let bg = this.add.image(0, 0, 'bg_tutorial').setOrigin(0, 0);
        
        console.log("Tutorial");        
    }

    create ()
    {
        // this.scene.start('Game');
    } 
}
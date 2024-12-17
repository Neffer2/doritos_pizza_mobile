const VELOCITY = 480;
// Useful vars
let width, height, mContext, floor, player, elemsFall = [],
    scoreText, elemsInterval,
    elemsKeys = ['dorito', 'burger'];

// Movements
let goRight = false, goLeft = false, leftBtn, rightBtn, jumpBtn, jump = false;

// Filled
let arepa;

export class Game extends Phaser.Scene {
    constructor ()
    {
        super('Game');
    }

    create(){
        mContext = this;
        leftBtn.on('pointerdown', function(){
            leftBtn.setScale(1.1);
            goLeft = true;
        });

        leftBtn.on('pointerup', function(){
            goLeft = false;
        });

        leftBtn.on('pointerout', () => {            
            leftBtn.setScale(1); 
            goLeft = false;
        });

        // --------------------------------------

        rightBtn.on('pointerdown', function(){
            rightBtn.setScale(1.1);
            goRight = true;
        });

        rightBtn.on('pointerup', function(){
            goRight = false;
        });

        rightBtn.on('pointerout', () => {            
            rightBtn.setScale(1); 
            goRight = false;
        });

        // --------------------------------------

        jumpBtn.on('pointerdown', function(){
            jumpBtn.setScale(1.1);
            jump = true;
        });

        jumpBtn.on('pointerup', function(){
            jump = false;
        });

        jumpBtn.on('pointerout', () => {            
            jumpBtn.setScale(1); 
            jump = false;
        });

        // Elems Fall
        elemsInterval = setInterval(() => {
            let elem = this.physics.add.sprite(Phaser.Math.Between(20, (width - 20)), 0, elemsKeys[this.getRandomNumber(0, elemsKeys.length)]).setScale(.6);
            elemsFall.push(elem);
        }, 600);

        // Time
        // setTimeout(() => {
        //     this.popUp();
        // }, 30000);

        // Colliders
        this.physics.add.collider(player, floor);
        this.physics.add.overlap(player, elemsFall, this.hitElem, null, this);

        // Animations
        player.anims.create({
            key: 'iddle',
            frames: this.anims.generateFrameNumbers('player_iddle', { start: 0, end: 6 }),
            frameRate: 12,
            repeat: -1
        });
        player.anims.play('iddle');

        player.anims.create({
            key: 'run',
            frames: this.anims.generateFrameNumbers('player_run', { start: 0, end: 23 }),
            frameRate: 30,
            repeat: -1
        });

        player.anims.create({
            key: 'jump',
            frames: this.anims.generateFrameNumbers('player_jump', { start: 0, end: 1 }),
            frameRate: 8,
            repeat: 1
        });
    }

    update(){
        if (goLeft){
            player.setVelocityX(-VELOCITY);
            if (player.body.touching.down){ player.anims.play('run', true); }
            player.flipX = false;
        }else if (goRight){
            player.setVelocityX(VELOCITY);
            if (player.body.touching.down){ player.anims.play('run', true); }
            player.flipX = true;
        }else {
            if (player.body.touching.down){player.anims.play('iddle', true);}
            player.setVelocityX(0);
        }

        if (jump && player.body.touching.down){
            player.setVelocityY(-VELOCITY);
            player.anims.play('jump', true);
        }

        elemsFall.forEach(elem => {
            elem.setAngularVelocity(Phaser.Math.RadToDeg(elem.body.velocity.y / 225));         
        });
    }

    init(){
        width = this.game.config.width;
        height = this.game.config.height;
        
        this.add.image(0, 0, 'background').setOrigin(0);
        floor = this.physics.add.staticGroup();
        floor.create(15, (height - 190), '').setSize(width, 20).setOffset(0, 20).setAlpha(0.001);

        let livesBg = this.add.image((width/2), 80, 'lives-bg').setDepth(1);
        let scoreBg = this.add.image((livesBg.x - 250), 80, 'score-bg').setDepth(1);
        let timeBg = this.add.image((livesBg.x + 250), 80, 'time-bg').setDepth(1);

        scoreText = this.add.text((livesBg.x - 250), 58, '0', {font: '40px primary-font', fill: '#fff'}).setDepth(1);

        leftBtn = this.add.image(110, height - 120, 'left-btn').setInteractive().setDepth(1);
        rightBtn = this.add.image(leftBtn.x + 200, leftBtn.y, 'right-btn').setInteractive().setDepth(1);
        jumpBtn = this.add.image(rightBtn.x + 280, leftBtn.y, 'jump-btn').setInteractive().setDepth(1);

        player = this.physics.add.sprite((width/2), height - 400, 'player_iddle', 0).setScale(.5);
        player.setSize(350, 620, true);
        player.score = 0;
        player.setCollideWorldBounds(true);
    }

    getRandomNumber(min, max){
        return Math.floor(Math.random() * (max - min)) + min;
    }

    hitElem(player, elem){
        player.score += 1;
        scoreText.setText(player.score);
        elemsFall.splice(elemsFall.indexOf(elem), 1);
        elem.destroy();
    }

    popUp(){
        clearInterval(elemsInterval);
        let popUp = this.add.image((width/2), (height/2), 'popUp').setScale(1.5).setDepth(1);
        let title = this.add.text((width/2) - 230, (height/2) - 150, 'GANASTE', {font: '180px primary-font', fill: '#fff'}).setDepth(2);
        let pts = this.add.text((width/2) - 70, (height/2) + 20, `${player.score} puntos`, {font: '50px primary-font', fill: '#fff'}).setDepth(2);
        let volver = this.add.image((width/2) + 10, (height/2) + 220, 'volver').setScale(1.5).setInteractive().setDepth(2);

        volver.on('pointerdown', function(){
            volver.setScale(1.3);
            setTimeout(() => {
                window.location.reload();
            }, 350);
        });

        volver.on('pointerout', () => {            
            volver.setScale(1.5); 
        });
    }
}   
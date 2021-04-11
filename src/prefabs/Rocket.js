// Rocket (player1) frefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame){
        super(scene, x, y, texture, frame);

        // add object to the existing scene
        scene.add.existing(this);
        this.isFiring = false; // track rocket firing status
        this.moveSpeed = 2; //PIXEL per frame

        this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx

    }

    update() {
        //left/right move
        if (!this.isFiring) {
            if(keyLEFT.isDown && this.x>= game.config.height / 15 + this.width){
                this.x-=this.moveSpeed;
            }else if (keyRIGHT.isDown){
                this.x+=this.moveSpeed;
            }
        }

        //fire button
        if(Phaser.Input.Keyboard.JustDown(keyF)) {
            this.isFiring = true;
            this.sfxRocket.play();  // play sfx
        }
        // if fire, move the rocket up
        if(this.isFiring && this.y >= borderUISize *3 +borderPadding) {
            this.y -= this.moveSpeed;
        }
        //reset if miss
        if(this.y <= borderUISize *3 +borderPadding) {
            this.reset();
        }
    }

    //reset rocket to "ground"

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}
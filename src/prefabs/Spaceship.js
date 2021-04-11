// spaceship prefabs
class Spaceship extends Phaser.GameObjects.Sprite{
    constructor(scene,x,y,texture,frame,pointValue){
        super(scene,x,y,texture,frame);
        scene.add.existing(this); //add to existing scene
        this.points = pointValue; // store pointvalue
        this.moveSpeed = game.settings.spaceshipSpeed;  //pixel per frame
    }

    update() {
        //move spaceship left
        this.x -= this.moveSpeed;
        //wrap around from left to right
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    //position reset
    reset(){
        this.x = game.config.width;
    }
}
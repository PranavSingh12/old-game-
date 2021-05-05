class Orb{
    constructor(x,y,radius) {
        var options = {
            isStatic: true

        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
      display(){
        var pos =this.body.position;
        imageMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
          };
          this.body = Bodies.rectangle(x, y, 50, 50, options);
          this.width = 50;
          this.height = 50;
          this.image = loadImage("sprites/bird.png")
          World.add(world, this.body);
        }
    };
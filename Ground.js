class Ground {
  constructor(x, y, w, h) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1,
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.width = w;
    this.height = h;
    console.log(this.width)
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
class Rope {
  constructor(firstBody, secondBody) {
    var options = {
      bodyA: firstBody,
      bodyB: secondBody,
      stiffness: 0.5,
      length: 200
    };

  
    this.rope = Constraint.create(options);
    World.add(world, this.rope);
  }
  
  display() {
   //Draw a line from bodyA to bodyB


  
}
}


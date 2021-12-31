class Hero {
  constructor(x,y,r)
	{
		var options = { 
			density:1, 
			frictionAir: 0.00059999,

		};
		this.x=x;
		this.y=y;
		this.r=r;
		this.image=loadImage("walk-person-png.png");
		this.body=Bodies.circle(this.x, this.y, this.r, options);
		World.add(world, this.body);

	}
	
	display()
	{
			this.body.x=mouseX;
			this.body.y=mouseY;
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}

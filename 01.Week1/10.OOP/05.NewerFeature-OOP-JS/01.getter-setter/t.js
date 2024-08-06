// class Circle{
// 	constructor(radius)
// 	{
// 		this.radius=radius;
// 	}
// 	get diameter()
// 	{
// 		return this.radius*2;
// 	}
// }

// let o1=new Circle(4);
// console.log(o1);
// console.log(o1.diameter);
// console.log(o1);

 class Cat{

 	numLegs=4;
 	isTail=true;
 	static species="Felis-catus";
	constructor(name,breed)
	{
		this.name=name;
		this.breed=breed;
	}
}

let o=new Cat("blue");

console.log(o);
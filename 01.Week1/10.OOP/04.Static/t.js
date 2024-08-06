class Cat{
	constructor(name,breed)
	{
		this.name=name;
		this.breed=breed;
	}
	static geneticSpecies="felis catus";

	static meow(breed)
	{
		console.log(breed);
	}
}
let o1=new Cat("a","b");
Cat.meow(o1.breed);
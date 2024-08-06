class Cat{
	constructor(name)
	{
		this.name=name;
	}

	dance(style="tango")
	{
		return `Meow I am ${this.name}`+`and i like to ${style}`;
	}
}

const fluffy=new Cat("fluffy");

console.log(fluffy.dance());

//but this line will produce error :

let errorLine=fluffy.dance;

console.log(errorLine);

function add2Num(a,b)
{
	console.log(this);
	console.log(a+b);
}

add2Num(4,5);
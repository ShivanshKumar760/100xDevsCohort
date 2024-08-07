//So javaScript object ,a pojo for short can be created with curly braces like this below
let o1={} 
console.log(o1);
// or via using the new keyword to allocate memory dynamically

let o2=new Object();//same thing as let o1={}
console.log(o2);

// and we can add item using the syntax:
// object.key=value;
// or object["key"]=value;
// like
o1.name="Mike";
// or 
o2["name"]="Mike";
console.log(o1);
console.log(o2);


// lets create a object pet using object literal

let pet={species:"beagle-dog",name:"Elton",age:1.5};

// so keys dont need to be wrapped inside quotes in object but when they are stored they all are stored in string 

//thats why if we have to access key from memory  like we acess the array element we use index like syntax and wrap key in quotes:

pet["name"]="Melton";
console.log(pet);

// and our square method actually supports expressions
let newKey="dob";

pet[newKey]="02-02-2023";//this will work but this same thing wont work with dot notation
//So in dot notation we cant access string


// Details we should know :
// ----------------------------------

// 1.Properties that dont exist evaluate to undefined unlike other language say like python which will thow an error but in JavaScript if we try and access a property that dosent exist we just get undefined until we define it and add as new key.

// like pet.color;//undefined 

// it can work if we define it like this :

// pet.color="brown";

// 2.All the keys get "stringified" in memory or storage 

// so even if we write pet[color]="brown" it will be interpreted as pet["color"]


// 3.Now as far as the values is concerned it can be anything we want as the value in an object an object can be collection of array ,or collection of object or mixed data type

// like

// let o1={a:[1,2,3],b:[4,5,6]};

// let o2={a:{name:"mike",age:12},b:{name:"alex",age:15}};

// let o3={
// 	name:"mike",
// 	age:12,
// 	marks:[80,90,100]
// }

// we can also add function as value but it has to be anonymous cause the key will act as function name

// o3.sayHi=()=>{
// 	return "hi"
// };

//What is object in JavaScript ---so object are key value pair which is also known to be as a hash data structure in cpp and java or dictionary in python 
//syntax of object is fairly simple like array :
/*
let/var/const objectRefrenceName={key1:value1,key2:value2,key3:value3,......,keyN:valueN}

so this is how a  object is declarerd lets see with an example; 
*/

let car={"Maruti":"alto",Honda:"accent","Mahindra":"Thar"};


//to access the value corresponding to a key in object we use dot notation or dynamic notation also known as bracket notation[]
//dot notation->objectName.key
//dynamic notation->objectName["key"]
console.log(car.Maruti);
console.log(car.Honda);
console.log(car.Mahindra);

// now lets look at the code and try to breakdown what actually is going on here alright  lets see,so lets see line by line:
/*
    let car={
    //1st property that is first key and value pair are :
    "Maruti":"alto",

    //2nd property is:
    Honda:"accent"

    //3rd property is :

    "Mahindra":"Thar"
    }

    Now if we see that both 1st and 3rd property has string key that is the key is in the form of string but the 2nd being a stream of character is still not enclosed in 
    single or double qoute ie(''/"")yet it is valid as key cause one unique feature of JavaScript a hash data strucutre is that even if we do not enlose the key in single
    or double qoute if key is a stream of character it wont produce an error as when js will store the structure internally using hash function to correspond key with
    memory address it will automatically get stringified 


    console.log(car.Maruti);
    console.log(car.Honda);
    console.log(car.Mahindra);

    now if we look carefully the above 3 statement are being used to print the value corresponding to three key where conosle.log is being used for printing onto the 
    console and the dot notation is the method used to access value corresponding to the key ,now if we look that although while declaring the key ->Maruti in object car 
    we enclosed it in qoutes when accesing the value we really dont have to enclose the key in qoutes 
    
    ## Why You Can't Enclose Keys in Quotes with Dot Notation in JavaScript

**Dot notation is a direct way to access object properties.** It assumes that the property name is a valid JavaScript identifier. This means it can only be used with property names that follow specific rules:

* Can only contain letters, numbers, and underscores.
* Must start with a letter or underscore.
* Cannot be a reserved keyword.

**When you enclose a key in quotes, you're essentially treating it as a string.** Dot notation doesn't interpret strings as property names. Instead, it looks for a property with the exact name without quotes.

### Example:
```javascript
const person = {
  firstName: "John",
  "last name": "Doe" // Invalid property name for dot notation
};

console.log(person.firstName); // Works
console.log(person."last name"); // Syntax error
```

**To access properties with spaces or special characters, you must use bracket notation:**
```javascript
console.log(person["last name"]); // Works
```

**In summary:**
* Dot notation is for direct property access.
* Bracket notation is for dynamic property access or properties with special characters.

By understanding these distinctions, you can effectively access object properties in JavaScript.
 
**Do you have any other questions about accessing object properties?**


plus internally it gets translated into as car.Maruti===>car["Maruti"]-->it automatically gets stringified in order to find hash function 
    


So before we do deep dive into object oriented programming classes ,design pattern etc we are going to recap the most important part of javascript object 

So javaScript object ,a pojo for short can be created with curly braces like this below

let o1={} 

or via using the new keyword to allocate memory dynamically

let o2=new Object();//same thing as let o1={}


and we can add item using the syntax:

object.key=value;
or object["key"]=value;


like
o1.name="Mike";
or 
o1["name"]="Mike";

lets create a object pet using object literal

let pet={species:"beagle-dog",name:"Elton",age:1.5};


so keys dont need to be wrapped inside quotes in object but when they are stored they all are stored in string 

//thats why if we have to access key from memory  like we acess the array element we use index like syntax and wrap key in quotes:

pet["name"]>>Elton

and our square method actually supports expressionsm


let newKey="dob";

pet[newKey]="02-02-2023";

this will work but this same thing wont work with dot notation


So in dot notation we cant access string


Details we should know :
----------------------------------

1.Properties that dont exist evaluate to undefined unlike other language say like python which will thow an error but in JavaScript if we try and access a property that dosent exist we just get undefined until we define it and add as new key.

like pet.color;//undefined 

it can work if we define it like this :

pet.color="brown";

2.All the keys get "stringified" in memory or storage 

so even if we write pet[color]="brown" it will be interpreted as pet["color"]


3.Now as far as the values is concerned it can be anything we want as the value in an object an object can be collection of array ,or collection of object or mixed data type

like

let o1={a:[1,2,3],b:[4,5,6]};

let o2={a:{name:"mike",age:12},b:{name:"alex",age:15}};

let o3={
	name:"mike",
	age:12,
	marks:[80,90,100]
}

we can also add function as value but it has to be anonymous cause the key will act as function name

o3.sayHi=()=>{
	return "hi"
};

o2.sayHi();//output hi
    
*/


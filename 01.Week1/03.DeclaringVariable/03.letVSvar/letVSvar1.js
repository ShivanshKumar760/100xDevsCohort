{//block1
    let x=5;
    var y=6;
}
//main area
//x=x+5;//this will give error as x is a block scope variable declared using let and hence w cannot use it
//outside the block

y=y+5;//this will work perfectly cause var is not a block scope way of declaring variable but its a
//function way
console.log(y);

function change()
{
    let change1=2;
    var change2=3;
}
//main area
//change1=change1+2;
//change2=change2+2;
//both line will give error cause let is block scoped and var is function scoped

//main area
let a1=3;
var a2=7;

{//block2
    a1=a1+2;
    a2=a2+3;
//both line will work cause a1 although declared using let is not constrained by a block and a2 is declared
//using var outside a function
}
console.log(a1);
console.log(a2);


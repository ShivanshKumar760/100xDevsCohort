var a="hey sup";
/*
Since var is function based and now here it is not declared in/inside the function hence it will act
as global variable and it can be accessed anywhere throughout the program in function or in any scope*/

console.log("a is :",a);//op: a is :hey,sup

let b=1;
/*
Now we know let is a scope based /block based keyword and variable declared using let inside block are
specific to that block ,but since b is not declared inside a block it will act as global
*/
console.log("b is :",b);//op: b is :1

{//block1--entrance
    var c=3;
    var d=4;
    /*
    here c and d are both global variable as we have used var inside a block but (var) is not specific to
    block rather it is specific to function
    */

    let e=5;
    /*
    e can only be accessed inside this block cause it is declared using (let) keyword which is block
    specific
    */

    b=2;//Since declared above block the b variable will act as global for both function and block although
//declared using let

    a=7;//a will also act as global as it is declared in main area using var and not in any function
}
//console.log(e);//wont print e cause e is declared in block1 using let hence its access is limited to block

function hey(a)
{
    var num=1;
//num is declared using var and hence cannot be used outside this function cause var is function scoped
    if(num===1)
    {
        a="nothing much bro,u tell?"
    }
    let anotherVar=8;
    /*
    Since let is block scoped and function include {} braces which forms block anotherVar is limited to this
    function it cannot be accessed outside the function
    */
    console.log("a under function is :",a);
    console.log(anotherVar)
}
hey(a);
//console.log(num);//will give error
//console.log(anotherVar);//will also give error
console.log("a outside the function is :",a);
console.log("b is :",b);
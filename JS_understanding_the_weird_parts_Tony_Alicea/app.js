function b(){
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


/* b() myVar is 1 because it is outside of function a()
 so it looks for a globally declared variable */
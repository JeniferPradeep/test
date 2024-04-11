//function declartion and definition
function addNumbers(a,b){
    var c =a + b;
    return c;
}
//function call
var res = addNumbers(12,20);
alert(res);

//example

function applyDiscount(discount){
    var cartAmt = 1000;
    if(cartAmt > 1000){
    var result = cartAmt - discount;
    console.log(result);
    }else 
    {
        console.log(cartAmt," discount not applicable")
    }
}
  applyDiscount(500);

// annnymous function 

var assign = function(dis){
    var amt = 800;
    amt -= dis;
    console.log(amt);
};
console.log(assign(200));

//IIFE

(function (d,f){
    var e = d+f;
    console.log(e);
})(20,30);
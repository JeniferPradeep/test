//copyby value
//  -- it share only the values ..
var cryon = "red";
var myFriendCryon = cryon;
console.log("my cryon", cryon);
console.log("my Frieng cryon", myFriendCryon);
myFriendCryon = "blue";
console.log("my cryon after  updating ", cryon);
console.log("my Frieng cryon after updating", myFriendCryon);

//copy by reference
//  ---- its not only the value and also shares the references.
var myFridge = { veg:"carrot"};
var myFriendFridge = myFridge;
console.log("my fridge", myFridge.veg);
console.log("my Frieng cryon", myFriendFridge.veg);
myFriendFridge.veg = "beans";
console.log("my fridge after  updating ", myFridge.veg);
console.log("my Fridge after  updating ", myFriendFridge.veg);

// function
//----its used to avoid the repeating the same lines again
function add(num1,num2,text){
 return text+ ":"+(num1 + num2);
}
console.log(add(10,20,"values"));


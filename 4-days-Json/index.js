// comparsion
var obj1 = {name : "person 1", age: 5};
var obj2 = { age: 5,name : "person 1"};
function Isequal(obj1,obj2)
{
    var key1 = Object.keys(obj1);
    var key2 = Object.keys(obj2);
    if(key1.length !== key2.length)
    {
        return false;
    }
        for(var key of key1)
        {
            if(obj1[key] !== obj2[key]){
                return false;
            }
          
        }
        return true;
     }   
     console.log(Isequal(obj1,obj2));


     // Json
var xhr = new XMLHttpRequest();
xhr.open("GET","https://restcountries.com/v3.1/all",true);
xhr.onload = function() {
    console.log(xhr.status);
    var countries = JSON.parse(xhr.responseText);
    countries.forEach(country => {
        console.log(country.name.common + ": " + country.flags);
        console.log(country.name.common + ": " + country.region + ": " + country.subregion + ": " + country.population);
    });
}
xhr.send();

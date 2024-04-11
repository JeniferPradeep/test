// task-4
//anonymous function
console.log("**********Promblems using Anonymous function:*******")
var anonymousFunction = function(){
   //finding odd numbers
    var array1 = [1,2,3,4,5,1,2,3];
    var oddarray = [];
   for(var i = 0; i <= array1.length; i++)
   { 
    if (array1[i] % 2 !== 0)
    {
      oddarray.push(array1[i]);
      // console.log(oddarray)
    }
   }
   console.log(" 1) The odd numbers: ",(oddarray));
   //converting all strings to title caps 
   var array2 = ["i am jenifer"];
   var a = array2[0];
   var a =array2[0].toLowerCase().split(' ');
   for(var i = 0; i< a.length; i++)
   {
      a[i] = a[i].charAt(0).toUpperCase()+a[i].slice(1);
   }
   console.log(" 2) converting all strings to title caps:  ",a.join(' '));
   //sum of all numbers in array
   var sum = 0;
   for(var i=0; i<array1.length;i++)
   {
      sum += array1[i];
   }
   console.log(" 3) sum of all numbers in array",sum);
   //prime numbers in array
    var primes = [];
    for(var i = 2; i <= array1.length;i++)
    {
      if(array1[i])
      {
         primes.push(i);
      }
    }
    console.log(" 4) The prime numbers in array:",primes);
    //find palindrome or not
    var array3 = ["madam"];
    var b = array3[0];
    const len = b.length;
    for(var i = 0; i<len/2;i++ )
    {
      if(b[i] == b[len-1-i])
      {
         console.log(" 5) The word is palindrome:", b);
      }else
      {
         console.log(" 5) The word is not a palindrome:",b);
      }
    }
    // Return median of two sorted arrays of the same size.
    var ar1 = [1, 2, 3, 26, 40];
    var ar2 = [2, 13, 4, 6, 45];
    var n = ar1.length;
    var i = 0; /* Current index of i/p array ar1[] */
    var j = 0; /* Current index of i/p array ar2[] */
    var count;
    var m1 = -1;
    var m2 = -1;
    for (count = 0; count <= n; count++)
    {
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; /* Store the prev median */
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; /* Store the prev median */
            m2 = ar2[j];
            j++;
        }
        var median = (m1 + m2)/2;
    }
    console.log("  6) Return median of two sorted arrays of the same size:",median);
    //Remove duplicates from an array
    let unique = [];
    array1.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    console.log(" 7) Remove duplicates from an array: ",unique);
    //Rotate an array by k times
    const s = array1.length;
    var k = 2;
    k %= s;
    
    const rotated = [];
    for (let i = 0; i < s; i++) {
        rotated[(i + k) % s] = array1[i];
    }
    
    for (let i = 0; i < s; i++) {
        array1[i] = rotated[i];
    }
    console.log(" 8) Rotate an array by k times: ",rotated);

};
anonymousFunction();

console.log("*********Problems using ARROW FUNCTION*********")


// Arrow function
var arrowFunction = () =>{
   //finding odd numbers
   var array1 = [1,2,3,4,5,1,2,3];
   var oddarray = [];
  for(var i = 0; i <= array1.length; i++)
  { 
   if (array1[i] % 2 !== 0)
   {
     oddarray.push(array1[i]);
     // console.log(oddarray)
   }
  }
  console.log(" 1) The odd numbers: ",(oddarray));
  //converting all strings to title caps 
  var array2 = ["i am jenifer"];
  var a = array2[0];
  var a =array2[0].toLowerCase().split(' ');
  for(var i = 0; i< a.length; i++)
  {
     a[i] = a[i].charAt(0).toUpperCase()+a[i].slice(1);
  }
  console.log(" 2) converting all strings to title caps:  ",a.join(' '));
  //sum of all numbers in array
  var sum = 0;
  for(var i=0; i<array1.length;i++)
  {
     sum += array1[i];
  }
  console.log(" 3) sum of all numbers in array",sum);
  //prime numbers in array
   var primes = [];
   for(var i = 2; i <= array1.length;i++)
   {
     if(array1[i])
     {
        primes.push(i);
     }
   }
   console.log(" 4) The prime numbers in array:",primes);
   //find palindrome or not
   var array3 = ["madam"];
   var b = array3[0];
   const len = b.length;
   for(var i = 0; i<len/2;i++ )
   {
     if(b[i] == b[len-1-i])
     {
        console.log("The word is palindrome:", b);
     }else
     {
        console.log("The word is not a palindrome:",b);
     }
   }
};
arrowFunction();


// var
// var a;
// var a;
// a=10;
// a="hello";
// console.log(a);

// let
// let a;
// // let a; can't redeclare
// a=10;
// a="hello"
// console.log(a);

// const a=10;
// // const a;
// // a=10;
// // a="hello";
// console.log(a);

// let a=10;
// a="hello"
// console.log(a);

// let a="Hello"
// let b='Hello'
// let c=`Hello`
// console.log(a,b,c);

// let a="i can't go"
// let b='It is raining "cats and dogs"'
// console.log(a,b);

// let a=`"Hello this is "me""`
// console.log(a);

// let b=`klshklfhkshfkhsklfhklhklshf
// slkshkfhsklfhklsh;fks   sfjkhsjkfhjkshfkljhjkljfh
// kfnshklfhsjkhfjkshfowihfkbvhyighihfinjkn`
// console.log(b)

//``   - - - -- templetae String
// interpolate variables and eoressions

// let name = "Samuel";
// let speak = `my name is ${name}`
// console.log(speak);

// let priceOfApples=120;
// let noOfAApples=40;
// let TotalPrice=`The total price of Apples is 
//                 ${priceOfApples*noOfAApples}`
//                 console.log(TotalPrice)

//String MEthods

// let a='Encyclopedia';
// console.log(a.length)
// console.log(a.toUpperCase);
// console.log(a.toLowerCasewer);

// console.log(a.charAt(5));
// console.log(a.charCodeAt(5));

// // a=a.slice(0,3)
// console.log(a);
// a=a.slice(4)
// console.log(a);
// a=a.slice(-8)
// console.log(a);
// a=a.substring(0,3)
// console.log(a);
// a=a.substring(-8,-3)     //negative index ------ Zero
// a=a.substring(-8)
// console.log(a);

// split
// a=a.split()
// a=a.split("")
// a=a.split("e")
// a=a.split("l")
// a=a.split("",5)

//replace method
// let a=`It was raining cats and dogs in the MorNing`;
// a=a.replace("morning","evening")
// a=a.replace(/morning/i,"evening")               // strings inside /  /i will be irrespective of small and capital letterss
// console.log(a);

// let a=`It was raining cats and dogs in the MorNing,
// Morning is worst`;
// a=a.replace(/morning/ig, "evening")
// console.log(a);

// let a=`    It was raining cats and dogs in the MorNing,
// morning is worst`
// a=a.trim()
// // trim start and end for assignment
// console.log(a);

// 09-03-02023
//pad start// padstart adds a charecter/s to the start  of a string to be able to apply padstart datatype should be a string
//-padstart takes two arguements first the length , should include teh padding charecter and aso the string length.
// and hen the padding charecter/s in string.
// let price=100
// let gst=18
// price=price+gst

// let a=price.toString()

// let b=a.padStart(4, "$")
// console.log(b);

// padding
// let price =100
// let gst=18
// price=price+gst
// let a=price.toString()
// let b=a.padStart(4,"$")
// let c=b.padEnd(10,` only/-`)
// console.log(c);

// let a="morning are colder"
// let b=a.indexOf("are")
// console.log(b)

// let a="Mornings are colder butevenings are colder too"
// let b=a.lastIndexOf("colder")
// console.log(b);

//Operators and its types
// ->Assignment operator
// ->arithmetic operator
// ->unary operator
// ->ternary operator
// ->logical operator
// ->comparision or relational oprators

// ->Arithmetic operators
// let a=3
// let b=4
// c=a+b
// console.log(c);
// let a=3
// let b=4
// c=a-b
// console.log(c);
// let a=3
// let b=4
// c=a*b
// console.log(c);
// let a=3
// let b=4
// c=a/b
// console.log(c);
// let a=3
// let b=4
// c=a%b
// console.log(c);
// let a=3
// let b=4
// c=a**b
// console.log(c)

// order of precedency
// let a=2 + (3*50/10)
// console.log(a)

// Assignment operators
// let price =100
// let gst=18
// // price=price+gst
// price += gst
// console.log(price)

let a=10
let b=20

// b-=a
// a*=b
// a/=b
// a%=b
a**=b
console.log(a);
//unary operator




















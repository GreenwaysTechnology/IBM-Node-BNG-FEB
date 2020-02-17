//strings
var firstName = "Subramanian";
var lastName = 'Murugan';
//
console.log("First Name" + firstName);
console.log('lastName' + lastName);
console.log("First Name", firstName);
console.log('lastName', lastName);

//es 6 feature
console.log(`First Name ${firstName} `)
console.log(`last Name ${lastName} `)

//multi line string literal

var title ='IBM digital'
var doc = "<html>" +
    "<head>" +
    "<title>" +
     title + 
    "</title>" +
    "</head>" +
    "<body>" +
    "<h1>Test</h1>" +
    "</body></html>";
console.log(doc);

var newDoc = `
<html>
<title>
   ${title}
</title>
</head>
<body>
<h1>Test</h1>
</body></html>
`
console.log(newDoc);

var price =100;
console.log(`price is ${price}`);

//boolean
var isWorking = true;
console.log(`Working ${isWorking}`);

var qty;
console.log(`The Qty ${qty}`);

//Nan Use case : 1

//number * undefined
var totalPrice =  price  * qty;
console.log(totalPrice)

//type convesion
var i ="10";
//string * number - string converted to number and then computation
var j =  i * 10;
console.log(j)

var x ="90";
var y = parseInt(x) * 100;
console.log(y);

//use case NaN; type conversion error

var todayPrice = "$10"
var toalTodayPrice = todayPrice  *100;
console.log(toalTodayPrice)

//Infinity ; div / 0
var avgMark = 100 /0;
console.log(avgMark)
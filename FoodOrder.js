console.log("Hello, welcome to the food app");
console.log("Lets create an app");
var username=prompt("please create a user name: ");
var password=prompt("plese enter a password: ");
console.log("Thank you, your account have beeen created.");

// chek weather user name and password are same as entered before

console.log("please enter your login informations: ");
var tryuser=prompt("username: ");
var trypass=prompt("password: ");

while(username!=tryuser && password!=trypass){
    console.log("wrong user name or password, please try again");
    var tryuser=prompt("enter your user name: ");
    var trypass=prompt("Enter your password: ");

}

console.log("Your are connected.");

var balance=10;
console.log("Your balance is "+balance+" rupees");

var q1 = prompt("would you like to add money to your account");

if(q1=="yes"){
    var q2 = prompt("How much would you like to add: ");
    var balance = balance + Number(q2);
    console.log("Your new balance is "+balance +" rupees");
} else{
    console.log("Great");
}

var q4=prompt("Would you like a burger ");
if(q4=="yes"){
    console.log("please choose what burger you want ");
    var burgertypes = ["cheese burger","Fish burger", "All Dress burger"];
    var prices=[2,3,4];
    console.log("choice 1: "+burgertypes[0]+ "  "+ prices[0] + " rupees");
    console.log("choice 2: "+burgertypes[1]+ "  "+ prices[1] + " rupees");
    console.log("choice 3: "+burgertypes[2]+ "  "+ prices[2] + " rupees");
    var q5 = prompt("What is your choice: ")
    if(q5=="choice 1"){
        console.log("You have ordered a "+burgertypes[0]);
        console.log("The total of the order is "+prices[0]+" rupees");
        var balance = balance-prices[0];
        console.log("You have "+balance+ " rupees left on your balance.");
    } 
    else if(q5=="choice 2"){
        console.log("You have ordered a "+burgertypes[1]);
        console.log("The total of the order is "+prices[1]+" rupees");
        var balance = balance-prices[1];
        console.log("You have "+balance+ " rupees left on your balance.");
    }
    else if(q5=="choice 3"){
        console.log("You have ordered a "+burgertypes[2]);
        console.log("The total of the order is "+prices[2]+" rupees");
        var balance = balance-prices[2];
        console.log("You have "+balance+ " rupees left on your balance.");
    }
} else{
    console.log("Have a good day!");
}
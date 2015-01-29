//Rayme Silverberg
//MDVB01
//Assignment 4

// 1. Does a string follow a 123-456-7890 pattern like a phone number?
function isPhoneNumber(args) {
var phoneNumber = args;
var characterAt3 = phoneNumber.charAt(3);
var characterAt7 = phoneNumber.charAt(7);
var length = phoneNumber.length;
var first3Characters = parseInt(phoneNumber.substr(0,3));
var second3Characters = parseInt(phoneNumber.substr(4,3));
var third4Characters = parseInt(phoneNumber.substr(8,4));


if (length === 12 && characterAt3 === "-" && characterAt7 === "-" && isNaN(first3Characters) === false && isNaN(second3Characters) === false && isNaN(third4Characters) === false ) {
    return true;

}else{
    return false;
}

}

console.log(isPhoneNumber("1234213456"));

// 2. Title-case a string (split into words, then uppercase the first letter of each word).
function titleCase(args) {
    var originalString = args;
    var splitUp = originalString.split(" ");
    var newWords = [];
    for (i=0; i < splitUp.length; i++) {
        var lowercase = splitUp[i].toLowerCase();
        var capitalize = lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
        newWords.push(capitalize);
    }
    return newWords.join(" ");
}
console.log(titleCase("I'm a little tea pot"));

//3. Given a string version of a number, such as Ò42Ó, return the value as an actual Number data type, such as 42.
function returnNumber(args) {
    var stringNumber = args;
    return parseInt(stringNumber); 
}

console.log(returnNumber("15"));

// 4. Given a string that is a list of things separated by a given string, as well as another string separator, return a string with the first separator changed to the second: Òa,b,cÓ + Ò,Ó + Ò/Ó --> Òa/b/cÓ.
function newSymbol(args, args2, args3) {
    var originalString = args;// sets up arg 1
    var oldCharacter = args2;// sets up arg 2
    var newCharacter = args3;// sets up arg 3
     
    var noMoreCharacter = originalString.split(oldCharacter);// creates an array
    var newString = noMoreCharacter.join(newCharacter);// array method that creates a string
    
    return newString; // return string
}

console.log(newSymbol("1+2+3+4", "+", "-"));

// 5. Is the string a URL (Does it start with http:// or https://)?
function isUrl(args) {
    var url = args
    var firstCheck = url.substr(0,7)
    var secondCheck = url.substr(0,8)
    
if (firstCheck === "http://" || secondCheck ==="https://") {
    return true;    
}else{
    return false;
}
}

console.log(isUrl("http://yahoo.com"));

//6. Format a number to use a specific number of decimal places as for money: 2.1 --> 2.10.
function roundNumber(args, args2) {
    var givenNumber = args// float argument
    var decimalPlace = args2// integer argument
    return givenNumber.toFixed(decimalPlace); //return float

}

console.log(roundNumber(56.7012014810, 4));
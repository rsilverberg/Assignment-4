//Rayme Silverberg
//MDVB01
//Assignment 4

//Does a string follow a 123-456-7890 pattern like a phone number?
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
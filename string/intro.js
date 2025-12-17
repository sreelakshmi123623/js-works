
//string
//define var str ="hello";
//keeps order
//duplicated allowed
//immutable
//methods



// var string{
//     length,   => //attribute
//     toUppercase(){}   =>//method -  convert to touppercase ,return a new string
//     toLowerCase(){}   =>//method -  convert to lower case
//     charAt(index){}   =>// method with parameter //return character at specified index // negative indexing are not applicale
//     at(index){}   =>//return character at specified index //negative indexing are also applicable
//      concat(){}            =>//for add a new value // or add new text with present stiring //uppend
//      slice(start of index , end of index){}  => used for take a slice from a string
//      substr(){}     =>substring   //used for take a part from a string //doesn't support negative
//       trim(){}   => // it removes white space //removes spaces like if there have \t,\n 
//       trimStart(){}  => it only removes space in the left side
//       trimEnd(){}  => it only removes the space in the right side
//        padStart(){} => if the string is not in the maximum number of string space we can fill the balance empty space with a special character  // in padStart it fill the special character in the left side
//        padEnd(){}  =>  if the string is not in the maximum number of string space we can fill the balance empty space with a special character  // in padEnd it fill the special character in the right side
//        split(delimeter) => split(" ")   => used for split the words in a sentance (always return array)
//        repeat(count)=>return as str //count- times the value need to repeat
//         replace("old str","new str") => can replace an old character by a new character
//         replaceAll("old str","new str")=> replaceAll can change if  the old str have in more than one place,we can change it to  the new one in one go
//         indexOf("") => we can mention a character the it returns its index number, if we mention undefined character  it returns -1.
//}



//function add(...nums){  => ... means can pass parameters as much as we need //can see when we hover the object name

//}

                // 012345678910111213141516
var companyName = "Luminar Technolab";

//console.log(companyName.length);
//console.log(companyName.toUpperCase());
//console.log(companyName.toLowerCase());

//console.log(companyName.charAt(5));  //taking single character from a string by index number  //return character at specified index  //only support positive indexing
//console.log(companyName.at(-4));//...-9-8-7-6-5-4-3-2-1  //it support negative indexing and positive indexing also
//                                //   Luminar  Technolab
//
//console.log(companyName.concat(".com",".edu"));
//console.log(companyName.slice(0,7));  // in the ending it takes a number-1 from our indexing number (eg:Luminar  0123456    if the indexing is 0,6 output will be Lumina   // but we need the :Luminar completely so we should write it 0 to 7 (0,7))
//console.log(companyName.slice(8,));
//console.log(companyName.substring(0,8));
//console.log(`new string:${companyName.trim()}.....`);//removes spaces like if there have \t,\n 
//console.log(`lets see${companyName.trimStart()}..`);
//console.log(`lets see${companyName.trimEnd()}...`);
//console.log(companyName.padStart(25,"$"));
//console.log(companyName.padEnd(25,"$"));
//
//
//
//
////enter a 10 digit number and hide its last 4 digits
//var number= "2456789654";
//var sliceNumber=number.slice(0,6);
//console.log(sliceNumber);
//
//let hideNumber = sliceNumber;
//console.log(hideNumber.padEnd(10,"X"));

//changing the word all to team
var text = "hai#all#good#morning";
                       //"old str","new str"
var newText = text.replace("all","team");
console.log(newText);


//replace only remove the first # 
var newest=text.replace("#"," ");
console.log(newest);
 

//for remoove all # in the text we use replaceAll()
var newText = text.replaceAll("#"," ");
console.log(newText);


//the original text will not channge it remains the same
console.log(text);


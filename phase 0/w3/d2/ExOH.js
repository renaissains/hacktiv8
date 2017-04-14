/*
Challenge
Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 

Sample Test Cases
Input:"xooxxo"
Output:"true"

Input:"x"
Output:"false"
*/

function ExOh(str) { 

    var foundx=str.match(/x/g);
    var foundo=str.match(/o/g);
    if (foundx===null || foundo===null){
            return "false";
        }
    else{return foundx.length===foundo.length;} 
           
}
   
// keep this function call here 
ExOh(readline());
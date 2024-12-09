//Get the middle character
function getMiddle(s)
{
  let middle = Math.floor(s.length/2);
  
  return s.length % 2 === 0
        ? s.slice(middle-1, middle+1)
        : s.slice(middle, middle+1);
  
}

//You're a square!
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n));
  }

//String cleaning
function stringClean(s){
  var result = '';
  for(var i=0;i<s.length;i++) {
    if(isNaN(s[i])||s[i]==' ') result+=s[i]; 
    }
  return result;
  }

//Calculate BMI
function bmi(weight, height) {
    const bmi = weight / (height * height);
    if(bmi <= 18.5) return "Underweight";
    if(bmi <= 25) return "Normal";
    if(bmi <= 30) return "Overweight";
    return "Obese";
  }
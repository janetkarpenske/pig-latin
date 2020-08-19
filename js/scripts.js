// Interface Logic

$(document).ready(function() {
  $("#form").submit(function(event) {
    event.preventDefault();

    const userInput = $("#input").val().toLowerCase();
    let translation = newPigLatin(userInput);
    //capTrans = translation.charAt(0).toUpperCase();
    $("#display").text(translation.charAt(0).toUpperCase() + translation.slice(1) + ".");
  })
})

function newPigLatin(userInput) {
  let inputSplit = userInput.split(" ") 
  newString = [] 
  inputSplit.forEach(function(word) {
    pigWord = pigLatin(word)
    newString.push(pigWord)    
});
  return newString.join(" ");
}


//Business Logic:
function pigLatin(origString) {
  let vowels = ["a","e","i","o","u"]  
  let firstVowel = false
  let splitString = origString.split(''); 
  vowels.forEach(function(vowel) {
    if (splitString[0] === vowel) {
      splitString.push("way");
      firstVowel = true;  
    }
  })   
  if (firstVowel === false) {   
    let i;    
    for(i = 1; i <= splitString.length; i++) {
      let stop = false
      vowels.forEach(function(vowel) {
        if (splitString[i] === vowel) {
         stop = true }
      })
    if (stop === true) {
      break;
    }
  }  
  let indexQ = splitString.indexOf("q"); 
  if (indexQ < i && indexQ >= 0) { 
    let isU = indexQ + 1;
    if (splitString[isU] === "u") {
      i += 1;
    }
  }
  let firstCons = splitString.splice(0, i);
  splitString.push(firstCons.join("") + "ay"); 
  }
  return splitString.join("");
}






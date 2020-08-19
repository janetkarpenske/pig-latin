// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();

//   })
// })


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
      console.log("cons loop start" + i)
      let stop = false
      vowels.forEach(function(vowel) {
        if (splitString[i] === vowel) {
         stop = true }
      })
    if (stop === true) {
      break;
    }
  }
  let firstCons = splitString.splice(0, i);
  splitString.push(firstCons + "ay"); 
  }
  return splitString.join("");
}

console.log(pigLatin("dog"));

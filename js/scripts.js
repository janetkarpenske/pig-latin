// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();

//   })
// })


//Business Logic:

function pigLatin(origString) {
  let vowels = ["a","e","i","o","u"]
  let cons = []
  let firstVowel = false
  let splitString = origString.split('');  
  vowels.forEach(function(vowel) {
    if (splitString[0] === vowel) {
      splitString.push("way");
      firstVowel = true  
    } 
  // SPEC 2
  if (firstVowel = false) {
      vowels.forEach(function(vowel) {
        let i = 1;
        if (splitString[i] !== vowel) {
          i++;
        }
        let firstCons = splitSring.splice(0, i);
      })
  }
    
  })
  return splitString.join("");
}





// BENS WIERD IDEA
if (firstVowel = false) {
  for(let i=1;i<3;i++) {  
    vowels.forEach(function(vowel) {
      let i = 1;
      let indexCounter = 0;
      if (splitString[i] !== vowel) {
        i++;
      }
      let firstCons = splitSring.splice(0, i);
    })
}







console.log(pigLatin("away"));

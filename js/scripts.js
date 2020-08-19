// $(document).ready(function() {
//   $("#formOne").submit(function(event) {
//     event.preventDefault();

//   })
// })


//Business Logic:

function pigLatin(origString) {
  let vowels = ["a","e","i","o","u"]
  let splitString = origString.split('');
  
  // let newArray = []
  // splitString.forEach(function(letter) {
  //   if (vowels.includes)
  // })
  vowels.forEach(function(vowel) {
    if (splitString[0] === vowel) {
      splitString.push("way");
      
    }
  })
  return splitString.join("");
}

console.log(pigLatin("a"));
// $(function(){
//   // var leapYear = function(year) {
//   //   if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
//   //     return true;
//   //   } else {
//   //     return false;
//   //   }
//   // };
//   // $("form").submit(function(event){
//   //   event.preventDefault();
//   //    var userInput = parseInt($("input#year").val());
//   //    var result = leapYear(userInput);
//   //
//   //    $(".year").text(userInput);
//   //
//   //    if (!result) {
//   //      $(".not").text("not");
//   //    } else {
//   //      $(".not").text("");
//   //    }
//   //    $(".result").show();
//   // })
//
// //business logic

//   $("form").submit(function(event){
//     event.preventDefault();
//     var normalText = $("input#normal").val().split('');
//     var output = translator(normalText);
//     alert(output);
//   });
//
//
//
//
//   });


  // 1st letter vowel -> +=way at the end
  // 1st letter consonant -> move all consecutive to end +=ay
  // 1st letter = qu -> move qu to end += ay
  // y=consonant
  //
  //
  // var j = normal.split(" ");
  //
  // normal == This is a sentence
  // j = ["this","is","a","sentence"]


  $(document).ready(function(){
    $("form").submit(function(event){
      event.preventDefault();
      var userInput = $("input#normal").val();
      var output = isVowel(userInput);
      var output2 = isConsonants(userInput);
      $("#result").text(output);
      $("#result").text(output2);

    });
  });



    var vowels = ['a','e','i','o','u'];
    var consonants = 'bcdfghjklmnpqrstvwxyz'.split('');

function isVowel(userInput){

  for (var index=0;index < vowels.length; index++){

    if (userInput.charAt(0)=== vowels[index]){
      return userInput+"way";
      }
    }
};

function isConsonants(userInput){
  for (var index=0; index< consonants.length; index++){

    if(userInput.charAt(0)=== consonants[index]) {

      var userInput = userInput.slice(1)+userInput.charAt(0);

      index = 0;
      console.log(userInput);


    }
  }

  return userInput+"ay";
};

$(document).ready(function(){

    var vowels = ['a','e','i','o','u'];
    var consonants = 'bcdfghjklmnpqrstvwxyz'.split('');

  $("form").submit(function(event){
    event.preventDefault();
    $("#result").text(" ");
    var userInput = $("input#normal").val().split(" ");
    for (var i = 0; i < userInput.length; i++){

    if (vowels.includes(userInput[i].split('')[0].toLowerCase())){
        console.log(userInput[i]);
      $('#result').append(userInput[i] + 'way'+' ')
    } else {
        console.log(userInput[i]);
      if (userInput[i].charAt(0).toLowerCase()=== "q" && userInput[i].charAt(1).toLowerCase()=== "u" ) {
        console.log(userInput[i]);
      userInput[i] = userInput[i].slice(2)+userInput[i].charAt(0)+userInput[i].charAt(1);
      }
      while (consonants.includes(userInput[i].split('')[0].toLowerCase())) {
        console.log(userInput[i]);
      userInput[i] = userInput[i].slice(1)+userInput[i].charAt(0);
      }
      $('#result').append(userInput[i] + 'ay'+ " ");
      }
    };
  });
});

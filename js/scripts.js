//Back End Logic
    //A function to count up the inputted number while changing the multiples of 3, 5 and 15 to ping, pong and pingpong respectively.
    function countUp(input) {
        var total = [];
        for (var index = 1; index <= input; index++) {
            //test
            //console.log(index)
            if (index % 3 === 0 && index % 5 === 0) {
                total.push("pingpong");
            } else if (index % 5 === 0) {
                total.push("pong");
            } else if (index % 3 === 0) {
                total.push("ping");
            } else {
                total.push(index);
            }
        };
        return total;
    };
    //A function to clear the input field after successful submission of a number.
    function clearForm(form) {
        $(':input').not(':button, :submit').val('');
    };

// Front End Logic
$(document).ready(function () {
   $("form#play ").submit(function (event) {
       event.preventDefault();
       //Clear previously displayed output
       console.log("click");
       $("p").empty();
       //Store the user input into a variable
       var enteredNumber = parseInt($("#numeral").val());
       //Call the function countUp to work on the new variable enteredNumber inside a new variable
       var countedNumbers = countUp(enteredNumber);
       //Print out the processed numbers in list form.
       for (var index = 0; index <= countedNumbers.length - 1; index++) {
           $("p#output").append(countedNumbers[index]+"</br>");
       };
       //Clear the previously filled input by calling the function clearForm to empty out the input field
       clearForm("input");
   });
});


lab3();

function lab3() {
    //list of numbers, and the variable that will hold the math for the program
    var coins = [16, 8, 4, 2, 1];
    var value = 0;
    //ask the user for a number
    var number = prompt('please enter a number between 20 and 100.');
    //counting loops and list locations
    var i = 0;
    var u = 0;
    var count = [0, 0, 0, 0, 0];
    //filter out numbers under 20 and over 100 and non numbers.
    if (number < 20 || number > 100 || isNaN(number)) {
        alert("Invalid number");
        Program.restart();
    }
    //convert remaining output to numbers
    number = Number(number);
    while (value != number) {
        //run the loop while a number from the list + the value is less than or equal to the number the user entered 
        while (coins[i] + value <= number) {
            value += coins[i];
            count[i]++;
        }
        i++;
    }
    document.write("You entered the number: " + number);
    for (u = 0; u < coins.length; u++) {
        document.write("<br><br> This would require the " + coins[u] + " coin " + count[u] + " time(s)");
    }
}


//list of numbers, and the variable that will hold the math for the program
var coins = [16, 8, 4, 2, 1];
var value = 0;

//ask the user for a number
var number = Number(prompt('please enter a number between 20 and 100.'));

//counting loops and list locations
var i = 0;
var count = 0;

//filter out numbers under 20 and over 100
if (number < 20 || number > 100){
    alert("Invalid number");
} 


while (value != number ) {
    //run the loop while a number from the list + the value is less than or equal to the number the user entered 
    while(coins[i] + value <= number){
        value += coins[i];
        console.log(coins[i]);

        //count how many times the loop runs. currently its only doing the first position of the list which seems wrong.
        if (coins[i] == coins[0]){
            count++;
        }
    }
    i++;
}

console.log(value);
console.log(number);
console.log(i);
console.log(count);

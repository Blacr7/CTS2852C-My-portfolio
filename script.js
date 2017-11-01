function main() {
    // ask the user for their birth month and day of birth
    var bMonth = parseInt(prompt('Please enter your birth month(mm)', '01'));
    var bDay = parseInt(prompt('Please enter the day your were born(dd)', '01'));
    //input validation to catch non numbers or numbers that are too high or low
    while (bMonth < 1 || bMonth > 12 || isNaN(bMonth)) {
        bMonth = parseInt(prompt('That was Invalid, Please enter your birth month(mm)(01-12)', '01'));
    }
    while (bDay < 1 || bDay > 31 || isNaN(bDay)) {
        bDay = parseInt(prompt('That was Invalid, Please enter the day your were born(mm)(01-31)', '01'));
    }
    // set dates
    var currentDate = new Date();
    var birthday = new Date();
    //set the date and month in the birthday variable to be the number the user inputted before
    //Fun fact if you use setDate before setMonth you can run into a logic error if you are 
    //in a month with 30 days and input a value for 31 days 
    birthday.setMonth(bMonth - 1);
    birthday.setDate(bDay);
    //conditional statement that should increase the year by one if the users birthday has 
    //already passed
    if (birthday < currentDate) {
        birthday.setFullYear(birthday.getFullYear() + 1);
    }
    // math to get the number of milliseconds in one day
    var day = 24 * 60 * 60 * 1000;
    // math to convert the difference between birthday and the currentDate into days
    var daysTill = Math.round(Math.abs((birthday.getTime() - currentDate.getTime()) / day));
    alert("Your next birthday is " + birthday  + " You have " + daysTill + " days until your next birthday!");
}

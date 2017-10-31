var birthday = prompt('Please enter your date of birth(mm/dd/yyyy)', '01/01/1970');

function runDate() {
    var currentDate = new Date();
    var month = currentDate.getMonth() +1 ;
    var day = currentDate.getDate();
    var year = currentDate.getFullYear();
    var timeString = month + ':' + day + ':' + year;
    document.timeForm.timeNow.value = timeString;
  }


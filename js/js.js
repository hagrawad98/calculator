function myage() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    //collect input from HTML  
    var userinput = document.getElementById("dob").value;
    var date = new Date(userinput);
    //check  correct or not  
    if (userinput == null || userinput == '') {
        alert("Enter a date please!");
        return false;
    }
    //see if user entered a date   
    else {
        //get  and collect only date from date-time string  
        var mdate = userinput.toString();
        var dobYear = parseInt(mdate.substring(0, 4), 10);
        var dobMonth = parseInt(mdate.substring(5, 7), 10);
        var dobDate = parseInt(mdate.substring(8, 10), 10);
        //get the current date from system  
        var today = new Date();
        //date string after broking  
        var birthday = new Date(dobYear, dobMonth - 1, dobDate);
        //calculate the difference of dates  
        var diffInMillisecond = today.valueOf() - birthday.valueOf();
        //convert the difference in milliseconds and store in day and year variable          
        var year_age = Math.floor(diffInMillisecond / 31536000000);
        var day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);
        //when birthday is same as today's date        
        if ((today.getMonth() == birthday.getMonth()) && (today.getDate() == birthday.getDate())) {
            alert("Happy Birthday ");
        }
        var month_age = Math.floor(day_age / 30);
        day_ageday_age = day_age % 30;
        var tMnt = (month_age + (year_age * 12));
        var tDays = (tMnt * 30) + day_age;
        //DOB is greater than today's date, generate an error: Invalid date    
        if (birthday > today) {
            alert("not born yet!");
        } else {
            document.getElementById('flname').innerText = "hey" + " " + fname + " " + lname;
            document.getElementById("result").innerText =
                "your" + " " + "age" + " " + "is" + " " + "(" + " " + year_age +
                " years " + " , " + "    " + month_age + " months " + " , " +
                "    " + day_age + " days" + " " + ")";
        }
    }
}
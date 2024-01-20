<script src="https://cdn.jsdelivr.net/npm/date-fns@3.3.0/index.min.js"></script>

<script>
function calculateAge() {
    var inputDate = new Date(document.getElementById("year").value, document.getElementById("month").value - 1, document.getElementById("date").value);

    
    if (isNaN(inputDate.getTime())) {
        alert("Please enter a valid date.");
        return;
    }

    var currentDate = new Date();


    var age = require('date-fns/each_day');
    var ageArray = age({ start: inputDate, end: currentDate });
    var years = ageArray.length - 1;

    var lastBirthday = new Date(currentDate.getFullYear() - years, inputDate.getMonth(), inputDate.getDate());
    var months = currentDate.getMonth() - lastBirthday.getMonth();
    if (currentDate.getDate() < lastBirthday.getDate()) {
        months--;
    }

    var days = currentDate.getDate() - lastBirthday.getDate();
    if (days < 0) {
        days += dateFns.getDaysInMonth(lastBirthday);
    }

    document.getElementById("age").innerHTML =
        "Your Age is " + years + " Years " + months + " Months " + days + " Days";
}
</script>

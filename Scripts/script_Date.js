$( document ).ready(function() {
    var temp_date = new Date();
    var  day = temp_date.getDate();
    var month = temp_date.getMonth() + 1;
    var year = temp_date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month <10) {
        month = "0" + month;
    }
    document.getElementById('mainDate').innerHTML =
        'Сегодня'+' '+' ' + day + "." + month + "." + year;
});


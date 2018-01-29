
var MainCalendar = new Obj_Calendar(document.getElementById('calendar'), false);
MainCalendar.ShowCalendar(Days);

createTableLesson();


// table with amount of lessons
function createTableLesson() {
    // counter for summary
    var countDone = 0;
    var countUnDone = 0;
    var countAmount = 0;
    for
    (var LessonsCounter = 0;
     LessonsCounter < ArrLessons.length;
     LessonsCounter++) {
        //create elements and their info in table
        var newTr = document.createElement('tr');

        var newTdName = document.createElement('td');
        newTdName.innerHTML = ArrLessons[LessonsCounter].name;

        var newTdDone = document.createElement('td');
        newTdDone.innerHTML = ArrLessons[LessonsCounter].done;
// count of done lessons
        countDone = countDone + ArrLessons[LessonsCounter].done;

        var newTdUnDone = document.createElement('td');
        newTdUnDone.innerHTML = ArrLessons[LessonsCounter].undone;
// count of undone lessons
        countUnDone = countUnDone + ArrLessons[LessonsCounter].undone;

        var newTdCounter = document.createElement('td');
//count of all lessons in one object
        var counter = ArrLessons[LessonsCounter].done +
            ArrLessons[LessonsCounter].undone;
        newTdCounter.innerHTML = counter;
// count of all lessons
        countAmount = countAmount + counter;

        newTr.appendChild(newTdName);
        newTr.appendChild(newTdDone);
        newTr.appendChild(newTdUnDone);
        newTr.appendChild(newTdCounter);

        document.getElementById('TableLessons').appendChild(newTr);
    }
    // adding of tr with all summary info
    var newTrAmount = document.createElement('tr');

    var newTdAmountName = document.createElement('td');
    newTdAmountName.innerHTML = 'Итого:';
    newTdAmountName.style.fontWeight = 'bold';

    var newTdAmountDone = document.createElement('td');
    newTdAmountDone.innerHTML = countDone;

    var newTdAmountUnDone = document.createElement('td');
    newTdAmountUnDone.innerHTML = countUnDone;

    var newTdAmountAmount = document.createElement('td');
    newTdAmountAmount.innerHTML = countAmount;
    newTdAmountAmount.style.fontWeight = 'bold';

    newTrAmount.appendChild(newTdAmountName);
    newTrAmount.appendChild(newTdAmountDone);
    newTrAmount.appendChild(newTdAmountUnDone);
    newTrAmount.appendChild(newTdAmountAmount);

    document.getElementById('TableLessons').appendChild(newTrAmount);
}


alignCenter($('.modal-wrapper'));

function alignCenter(elem) {
    elem.css({ // назначение координат left и top
        left: ($(window).width() - elem.width()) / 2 + 'px',
        top: ($(window).height() - elem.height()) / 2 + 'px'
    })
}

var choossPeriod = new Obj_ChoosePeriod(document.getElementById('choosePeriod'));

choossPeriod.setStartDate(Date.now());
choossPeriod.setStopDate(Date.now());


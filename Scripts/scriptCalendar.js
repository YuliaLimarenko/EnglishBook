function Obj_Calendar(Table, RollAble, Input) {
    this.Table = Table;
    this.RollAble = RollAble;
    this._StartDate = new Date();
    CalendarLinks.push(this);
    this._LnkId = CalendarLinks.length - 1;
    CalendarIds.push(this);
    this._CalendarId = CalendarIds.length - 1;
    this._Input = Input;
}


/**
 *
 * @param DaysArray if DaysArray contains field 'days'
 * then calendar shows only days corespondent to 'days' elements
 * else calendar shows entire month that contain 'start_day'
 * 'start_day' will be selected in this case
 */
Obj_Calendar.prototype.ShowCalendar = function (DaysArray) {

    var dayPointer = {
        WeekDay: null,
        dayTr: null,
        signTr: null
    };

    if (DaysArray.days) {
        dayPointer.Day = new Date(DaysArray.start_day);
    }
    else {
        dayPointer.SalectedDay = new Date(DaysArray.start_day);
        dayPointer.Day = new Date(DaysArray.start_day);
        dayPointer.Day.setDate(1);
    }
    // Clear table
    this.Table.innerHTML = "";
    // Show first headline
    this._ShowHeadline(dayPointer, this.RollAble);
    for (
        var DaysCounter = 0, CurrentMonth = dayPointer.Day.getMonth();
        (

            (DaysArray.days && DaysCounter < DaysArray.days.length) ||
            (DaysArray.payment && DaysCounter < DaysArray.payment.length) ||
            (!(DaysArray.days || DaysArray.payment) && CurrentMonth === dayPointer.Day.getMonth())
        );
        DaysCounter++
    ) {
        // Is it new month
        if (CurrentMonth !== dayPointer.Day.getMonth())
        // Yes, it is new month
        {
            // Show headline
            this._ShowHeadline(dayPointer, this.RollAble);
        }
        // Add new day sell
        this._AddNewDayCell(dayPointer, DaysArray.days ? DaysArray.days[DaysCounter] : null, false);
        // Remember month
        CurrentMonth = dayPointer.Day.getMonth();
        // Proceed to the next day
        dayPointer.Day.setDate(dayPointer.Day.getDate() + 1);
        // Is it new month
        if (CurrentMonth !== dayPointer.Day.getMonth())
        // Yes, it is new month
        {
            // Finish table
            this._FinishTableRow(dayPointer);
        }
    }
    // Finish table
    this._FinishTableRow(dayPointer);
};


/**
 *
 * @param dayPointer
 * @return {Element}
 */
Obj_Calendar.prototype._ShowHeadline = function (dayPointer) {
    var MonthArray = [
        'ЯНВАРЬ',
        'ФЕВРАЛЬ',
        'МАРТ',
        'АПРЕЛЬ',
        'МАЙ',
        'ИЮНЬ',
        'ИЮЛЬ',
        'АВГУСТ',
        'СЕНТЯБРЬ',
        'ОКТЯБРЬ',
        'НОЯБРЬ',
        'ДЕКАБРЬ'
    ];
    // Create first line
    var newTr = document.createElement('tr');
    var Month = dayPointer.Day.getMonth();
    newTr.setAttribute('class', 'calendarHat');
    var MonthStr = MonthArray[Month];
    var YearStr = dayPointer.Day.getFullYear();

    var newMonth = document.createElement('td');
    newMonth.className = 'month';
    newMonth.colSpan = 4;
    var newYear = document.createElement('td');
    newYear.className = 'year';
    newYear.colSpan = 3;
    newTr.append(newMonth, newYear);
    newMonth.innerHTML = MonthStr;
    newYear.innerHTML = YearStr;
    if (this.RollAble) {
        newTr.className = 'calendarHat ';

        var newBtnLM = document.createElement('button');
        newBtnLM.className = "btn-name MonthLeft";
        newBtnLM.id = "MonthLeft" + this._CalendarId;
        newBtnLM.dataset.lnkid = this._LnkId;
        newBtnLM.innerHTML = '<img src="Images/arrowLeft1.png" width="10px" alt="arrow left">';
        var newBtnRM = document.createElement('button');
        newBtnRM.className = "btn-name MonthRight";
        newBtnRM.id = "MonthRight" + this._CalendarId;
        newBtnRM.dataset.lnkid = this._LnkId;
        newBtnRM.innerHTML = '<img src="Images/arrowRight.png" width="10px" alt="arrow right">'
        var newBtnLY = document.createElement('button');
        newBtnLY.className = "btn-name btn-name YearLeft";
        newBtnLY.id = "YearLeft" + this._CalendarId;
        newBtnLY.dataset.lnkid = this._LnkId;
        newBtnLY.innerHTML = '<img src="Images/arrowLeft1.png" width="10px" alt="arrow left">';
        var newBtnRY = document.createElement('button');
        newBtnRY.className = "btn-name btn-name YearRight";
        newBtnRY.id = "YearRight" + this._CalendarId;
        newBtnRY.dataset.lnkid = this._LnkId;
        newBtnRY.innerHTML = '<img src="Images/arrowRight.png" width="10px" alt="arrow right">';

        var newSpanMonth = document.createElement('span');
        newSpanMonth.className = 'curMonth';
        newSpanMonth.innerHTML = MonthStr;
        var newSpanYear = document.createElement('span');
        newSpanYear.className = 'curYear';
        newSpanYear.innerHTML = YearStr;
        newMonth.innerHTML = "";
        newMonth.append(newBtnLM, newSpanMonth, newBtnRM);
        newYear.innerHTML = "";
        newYear.append(newBtnLY, newSpanYear, newBtnRY);
        newTr.append(newMonth, newYear);
    }

    this.Table.append(newTr);

    if (this.RollAble) {

        // TODO: append events to the exact button
        document.getElementById("YearRight" + this._CalendarId).addEventListener('click', this._SetYearRight);
        document.getElementById("YearLeft" + this._CalendarId).addEventListener('click', this._SetYearLeft);
        document.getElementById("MonthRight" + this._CalendarId).addEventListener('click', this._SetMonthRight);
        document.getElementById("MonthLeft" + this._CalendarId).addEventListener('click', this._SetMonthLeft);
    }

    // Create second line
    newTr = document.createElement('tr');
    newTr.setAttribute('class', 'dayweek');
    newTr.innerHTML = '<td>ПН<td>ВТ<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс';
    this.Table.append(newTr);
    // Create first rows
    dayPointer.dayTr = document.createElement('tr');
    this.Table.append(dayPointer.dayTr);
    dayPointer.signTr = document.createElement('tr');
    this.Table.append(dayPointer.signTr);
    // Set dummy sells
    dayPointer.WeekDay = 0;
    var weekDay = dayPointer.Day.getWeekDay(false);
    while (dayPointer.WeekDay < weekDay) {
        this._AddNewDayCell(dayPointer, null, true);
    }
    return newTr;
};

Obj_Calendar.prototype._AddNewDayCell = function (dayPointer, content, blanket) {
    var Img;

    // Start new week if needed
    if (dayPointer.WeekDay >= _WeekDaysNumber) {
        dayPointer.WeekDay = 0;
        var newMainDivTd = document.createElement('span');
        dayPointer.dayTr = document.createElement('tr');
        this.Table.append(dayPointer.dayTr);
        this.Table.append(dayPointer.dayTr);
        dayPointer.signTr = document.createElement('tr');
        this.Table.append(dayPointer.signTr);
    }
    // Create date sell
    var dateTd = document.createElement('td');
    if (!blanket) {
        dateTd.className = 'tdNumbers curDay';
        dateTd.dataset.time = dayPointer.Day.getTime();
        dateTd.dataset.lnkid = this._LnkId;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = dayPointer.Day.getDate();
        dateTd.append(newSpan);

        if (
            dayPointer.SalectedDay &&
            dayPointer.Day.getDate() === dayPointer.SalectedDay.getDate() &&
            dayPointer.Day.getMonth() === dayPointer.SalectedDay.getMonth() &&
            dayPointer.Day.getFullYear() === dayPointer.SalectedDay.getFullYear()
        ) {
            dateTd.className = 'tdDate';
            dateTd.innerHTML = '<span style="padding:10px 5px;font-weight: bold; color: #00ad27" >' + dateTd.innerHTML + '</span>';
        }
    }
    dayPointer.dayTr.append(dateTd);
    dateTd.addEventListener('click', this._SetDay);
    // Get day image
    switch (content) {
        case _dc_allLessonsDone :
            Img = 'Images/Present.jpg';
            break;
        case _dc_allLessonsCanceled:
            Img = 'Images/Absent.jpg';
            break;
        case _dc_scheduledLessons:
            Img = 'Images/Plan.jpg';
            break;
        case _dc_scheduelChanged:
            Img = 'Images/Changes.jpg';
            break;
        case _dc_scheduledChange:
            Img = 'Images/Miss.jpg';
            break;
        case _dc_empty:
        default:
            Img = '';
            break;
    }
    // Create image sell
    var imageTd = document.createElement('td');
    imageTd.className = 'empty';
    if (Img) {
        imageTd.innerHTML = '<img src = "' + Img + '" alt ="V" >';
    }
    dayPointer.signTr.append(imageTd);
    // Proceed to the next week days
    dayPointer.WeekDay++;
};

Obj_Calendar.prototype._FinishTableRow = function (dayPointer) {
    while (dayPointer.WeekDay < _WeekDaysNumber) {
        this._AddNewDayCell(dayPointer, null, true);
    }
};

Obj_Calendar.prototype._SetYearRight = function () {
    var Calendar = CalendarLinks[this.dataset.lnkid];
    var curMonth = Calendar._StartDate.getMonth();
    Calendar._StartDate.setFullYear(Calendar._StartDate.getFullYear() + 1);
    if (curMonth !== Calendar._StartDate.getMonth()) {
        Calendar._StartDate.setDate(1);
        Calendar._StartDate.setDate(Calendar._StartDate.getDate() - 1);
    }
    Calendar._SetStartDate();
};

Obj_Calendar.prototype._SetYearLeft = function () {
    var Calendar = CalendarLinks[this.dataset.lnkid];
    var curMonth = Calendar._StartDate.getMonth() - 1;
    Calendar._StartDate.setFullYear(Calendar._StartDate.getFullYear() - 1);
    if (curMonth !== Calendar._StartDate.getMonth() - 1) {
        Calendar._StartDate.setDate(1);
        Calendar._StartDate.setDate(Calendar._StartDate.getDate() - 1);
    }
    Calendar._SetStartDate();
};

Obj_Calendar.prototype._SetMonthRight = function () {
    var Calendar = CalendarLinks[this.dataset.lnkid];
    var curMonth = Calendar._StartDate.getMonth() + 1;
    Calendar._StartDate.setMonth(curMonth);
    if (curMonth >= 12) {
        curMonth = 0;
    }
    if (curMonth !== Calendar._StartDate.getMonth()) {
        Calendar._StartDate.setDate(1);
        Calendar._StartDate.setDate(Calendar._StartDate.getDate() - 1);
    }
    Calendar._SetStartDate();
};

Obj_Calendar.prototype._SetMonthLeft = function SetMonthLeft() {
    var Calendar = CalendarLinks[this.dataset.lnkid];
    var curMonth = Calendar._StartDate.getMonth() - 1;
    Calendar._StartDate.setMonth(curMonth);
    if (curMonth < 0) {
        curMonth = 11;
    }
    if (curMonth !== Calendar._StartDate.getMonth()) {
        Calendar._StartDate.setDate(1);
        Calendar._StartDate.setDate(this._StartDate.getDate() - 1);
    }
    Calendar._SetStartDate();
};

Obj_Calendar.prototype._SetDay = function () {
    var Calendar = CalendarLinks[this.dataset.lnkid];
    Calendar._StartDate.setTime(this.dataset.time);
    Calendar._SetStartDate();
};

Obj_Calendar.prototype._SetStartDate = function () {
    if (this._Input) {
        var day = this._StartDate.getDate();
        var month = this._StartDate.getMonth() + 1;
        var year = this._StartDate.getFullYear();
        if (day < 10) {
            day = "0" + day;
        }
        if (month < 10) {
            month = "0" + month;
        }
        this._Input.value = month + '.' + day + '.' + year;
        this.ShowCalendar({start_day: this._StartDate.getTime()});

    }

};


/*var Days = {
    start_day: D.getTime() - 365 * DayInMs,
    payment: [
        {},
        {
            income: {
                id: 1,
                sum: 350
            },
            total: 250
        },
        {
            outlay: [
                {
                    id: 1,
                    sum: 45,
                    lesson:"Английский"
                },
                {
                    id: 2,
                    sum: 45,
                    lesson:"Немецкий"
                }
            ],
            total: 160
        },
        {},
        {
            outlay: [
                {
                    id: 3,
                    sum: 45,
                    lesson:"Английский"
                },
                {
                    id: 4,
                    sum: 45,
                    lesson:"Немецкий"
                }
            ],
            total: 115
        },
        {},
        {
            outlay: [
                {
                    id: 5,
                    sum: 45,
                    lesson:"Подготовка к школе"
                }
            ],
            total: 70
        },
        {},
        {},
        {
            outlay: [
                {
                    id: 6,
                    sum: 45,
                    lesson:"Английский"
                },
                {
                    id: 7,
                    sum: 45,
                    lesson:"Немецкий"
                }
            ],
            total: -20
        },
        {},
        {
            outlay: [
                {
                    id: 8,
                    sum: 45,
                    lesson:"Английский"
                },
                {
                    id: 9,
                    sum: 45,
                    lesson:"Немецкий"
                }
            ],
            total: -110
        },
        {},
        {
            outlay: [
                {
                    id: 10,
                    sum: 45,
                    lesson:"Подготовка к школе"
                }
            ],
            total: -115
        },
        {},
        {},
        {
            outlay: [
                {
                    id: 11,
                    sum: 45,
                    lesson:"Английский"
                },
                {
                    id: 12,
                    sum: 45,
                    lesson:"Немецкий"
                }
            ],
            total: -245
        },
        {},
        {
            outlay: [
                {
                    id: 13,
                    sum: 0,
                    lesson:"Английский"
                },
                {
                    id: 14,
                    sum: 45,
                    lesson:"Немецкий"
                }
            ],
            income: {
                id: 2,
                sum: 450
            },
            total: 250
        }
    ]
}; */

var ArrLessons = [
    {
        name: 'Английский',
        done: 176,
        undone: 5
    },
    {
        name: 'Немецкий',
        done: 5,
        undone: 0
    },
    {
        name: 'Французский',
        done: 150,
        undone: 20
    }
];

Date.prototype.getWeekDay = function (enStandard) {
    var WeekDay = this.getDay();

    if (!enStandard) {
        if (WeekDay-- === 0) {
            WeekDay = 6;
        }
    }
    return WeekDay;
};


var DayInMs = 1000 * 60 * 60 * 24;
var _WeekDaysNumber = 7;

var D = new Date();

var _dc_allLessonsDone = 0;
var _dc_allLessonsCanceled = 1;
var _dc_scheduledLessons = 3;
var _dc_scheduelChanged = 4;
var _dc_scheduledChange = 5;
var _dc_empty = 6;

var Days = {
    start_day: D.getTime() /*- 365 * DayInMs*/,
    days: [
        _dc_allLessonsDone,
        _dc_allLessonsCanceled,
        _dc_scheduledLessons,
        _dc_scheduelChanged,
        _dc_scheduledChange,
        _dc_empty,
        _dc_empty,
        _dc_allLessonsDone,
        _dc_allLessonsCanceled,
        _dc_scheduledLessons,
        _dc_scheduelChanged,
        _dc_scheduledChange,
        _dc_empty,
        _dc_empty,
        _dc_allLessonsDone,
        _dc_allLessonsCanceled,
        _dc_scheduledLessons,
        _dc_scheduelChanged,
        _dc_scheduledChange,

    ]
};

var ShowManth = {
    start_day: D.getTime() // - 365 * DayInMs
};

var CalendarLinks = [];
var CalendarIds = [];

var MainCalendar = new Obj_Calendar(document.getElementById('calendar1'), false);
MainCalendar.ShowCalendar(Days);

var ChoseStartDateCalendar = new Obj_Calendar(
    document.getElementById('calendar2'),
    true,
    document.getElementById('StartPeriod')
);

var ChoseStopDateCalendar = new Obj_Calendar(
    document.getElementById('calendar2-1'),
    true,
    document.getElementById('FinishPeriod')
);


$("#imgStartPeriod").click(function () {
    $('.calendar2').slideToggle('fast');
    PlaceCalendar2();
    $('.calendar2-1').hide();
    $('.calendar2').show();

    // Get date from input
    var time = Date.parse(document.getElementById('StartPeriod').value);
    ChoseStartDateCalendar._StartDate.setTime(time);
    ChoseStartDateCalendar.ShowCalendar({start_day: time});


});

$("#imgFinishPeriod").click(function () {
    $('.calendar2-1').slideToggle('fast');
    PlaceCalendar3();
    $('.calendar2-1').show();
    $('.calendar2').hide();

    // Get date from input
    var time = Date.parse(document.getElementById('FinishPeriod').value);
    ChoseStopDateCalendar._StartDate.setTime(time);
    ChoseStopDateCalendar.ShowCalendar({start_day: time});
});

function LostFocus(selector) {
    document.getElementById(selector).onkeyup = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            document.getElementById(selector).blur();
            var time = Date.parse(document.getElementById(selector).value);
            ChoseStartDateCalendar._StartDate.setTime(time);
            if (selector == 'FinishPeriod') {
                ChoseStopDateCalendar.ShowCalendar({start_day: time});
            }
            ChoseStartDateCalendar.ShowCalendar({start_day: time});

        }
    };
}

function CloseByEsc(selector) {
    document.onkeyup = function (e) {
        e = e || window.event;
        if (e.keyCode === 27) {
            $(selector).css("display", 'none');

        }
    };
}

LostFocus('StartPeriod');
LostFocus('FinishPeriod');

CloseByEsc('.calendar2-1');
CloseByEsc('.calendar2');


//calendar2 situated under .filterPeriod always
function PlaceCalendar2() {
    var leftCor = $("#StartPeriod").offset();
    var Calendar = $(".calendarHat").offset();

    if (screen.width <= '705' || document.body.clientWidth <= '705') {
        $('.calendar2').css({
            left: Calendar.left - 70
        })
    }
    else {
        $('.calendar2').css({
            left: leftCor.left - 108
        })
    }

}

//calendar2-1 situated under .filterPeriod always
function PlaceCalendar3() {
    var leftCor = $("#FinishPeriod").offset();
    var Calendar = $(".calendarHat").offset();
    if (screen.width <= '705' || document.body.clientWidth <= '705') {
        $('.calendar2-1').css({
            left: Calendar.left - 70
        })
    }
    else {
        $('.calendar2-1').css({
            left: leftCor.left - 106
        })
    }

}

// if resize calendar2 of calendar2-1, situated under their identifications
$(window).resize(
    function () {
        PlaceCalendar2();
        PlaceCalendar3()
    }
);


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

        newTr.append(newTdName);
        newTr.append(newTdDone);
        newTr.append(newTdUnDone);
        newTr.append(newTdCounter);

        document.getElementById('TableLessons').append(newTr);
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

    newTrAmount.append(newTdAmountName);
    newTrAmount.append(newTdAmountDone);
    newTrAmount.append(newTdAmountUnDone);
    newTrAmount.append(newTdAmountAmount);

    document.getElementById('TableLessons').append(newTrAmount);
}


alignCenter($('.modal-wrapper'));

function alignCenter(elem) {
    elem.css({ // назначение координат left и top
        left: ($(window).width() - elem.width()) / 2 + 'px',
        top: ($(window).height() - elem.height()) / 2 + 'px'
    })
}
document.getElementById('close').addEventListener('click', Hidepopup);

function Hidepopup() {
    $('.hide-layout').fadeOut(300);
    $('.modal-wrapper').fadeOut(300);
}

$('.curDay').click(function () {
    $('.hide-layout').fadeIn(300);
    $('.modal-wrapper').fadeIn(300);
    var CurDay = this.dataset;
    console.log(CurDay);

});






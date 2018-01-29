//todo: вылез баг с переключение последнего дня месяца влево 31 число

function Obj_Calendar(htmlContainer, RollAble, Input) {
    this.Table = document.createElement('table');
    this.Table.id = 'calendarTable';
    htmlContainer.appendChild(this.Table);
    this.RollAble = RollAble;
    this._StartDate = new Date();
    CalendarLinks.push(this);
    this._LnkId = CalendarLinks.length - 1;
    CalendarIds.push(this);
    this._CalendarId = CalendarIds.length - 1;
    this._Input = Input;
}

Obj_Calendar.prototype.setTime = function (time) {
    this._StartDate.setTime(time);

};

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
    newMonth.innerHTML = MonthStr;
    newYear.innerHTML = YearStr;
    newTr.appendChild(newMonth);
    newTr.appendChild(newYear);
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
        newBtnRM.innerHTML = '<img src="Images/arrowRight.png" width="10px" alt="arrow right">';
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
        newMonth.appendChild(newBtnLM);
        newMonth.appendChild(newSpanMonth);
        newMonth.appendChild(newBtnRM);
        newYear.innerHTML = "";
        newYear.appendChild(newBtnLY);
        newYear.appendChild(newSpanYear);
        newYear.appendChild(newBtnRY);

        newTr.appendChild(newMonth);
        newTr.appendChild(newYear);
    }

    this.Table.appendChild(newTr);

    if (this.RollAble) {

        document.getElementById("YearRight" + this._CalendarId).addEventListener('click', this._SetYearRight);
        document.getElementById("YearLeft" + this._CalendarId).addEventListener('click', this._SetYearLeft);
        document.getElementById("MonthRight" + this._CalendarId).addEventListener('click', this._SetMonthRight);
        document.getElementById("MonthLeft" + this._CalendarId).addEventListener('click', this._SetMonthLeft);
    }

    // Create second line
    newTr = document.createElement('tr');
    newTr.setAttribute('class', 'dayweek');
    newTr.innerHTML = '<td>ПН<td>ВТ' +
        '<td>Ср<td>Чт<td>Пт<td>Сб<td>Вс';
    newTr.style.textTransform = 'uppercase';
    this.Table.appendChild(newTr);
    // Create first rows
    dayPointer.dayTr = document.createElement('tr');
    this.Table.appendChild(dayPointer.dayTr);
    dayPointer.signTr = document.createElement('tr');
    this.Table.appendChild(dayPointer.signTr);
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
        dayPointer.dayTr = document.createElement('tr');
        this.Table.appendChild(dayPointer.dayTr);
        this.Table.appendChild(dayPointer.dayTr);
        dayPointer.signTr = document.createElement('tr');
        this.Table.appendChild(dayPointer.signTr);
    }
    // Create date sell
    var dateTd = document.createElement('td');
    if (!blanket) {
        dateTd.className = 'tdNumbers curDay';
        dateTd.dataset.time = dayPointer.Day.getTime();
        dateTd.dataset.lnkid = this._LnkId;
        var newSpan = document.createElement('span');
        newSpan.innerHTML = dayPointer.Day.getDate();
        dateTd.appendChild(newSpan);

        if (
            dayPointer.SalectedDay &&
            dayPointer.Day.getDate() === dayPointer.SalectedDay.getDate() &&
            dayPointer.Day.getMonth() === dayPointer.SalectedDay.getMonth() &&
            dayPointer.Day.getFullYear() === dayPointer.SalectedDay.getFullYear()
        ) {
            dateTd.className = 'tdDate';
            dateTd.innerHTML = '<span style="padding:10px 5px;font-weight: bold; color: #00ad27" >'
                + dateTd.innerHTML + '</span>';
        }
    }
    dayPointer.dayTr.appendChild(dateTd);
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
    dayPointer.signTr.appendChild(imageTd);
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
        //this._Input.value = month + '.' + day + '.' + year;
        this._Input.value = day + '.' + month + '.' + year;
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


var _WeekDaysNumber = 7;

var D = new Date();

var _dc_allLessonsDone = 0;
var _dc_allLessonsCanceled = 1;
var _dc_scheduledLessons = 3;
var _dc_scheduelChanged = 4;
var _dc_scheduledChange = 5;
var _dc_empty = 6;

var Days = {
    start_day: D.getTime(),
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
        _dc_scheduledChange

    ]
};

var CalendarLinks = [];
var CalendarIds = [];

function Obj_ChoosePeriod(htmlContainer) {
    // Make _mainDiv , and plase to the htmlContainer
    this._mainDiv = document.createElement('div');
    htmlContainer.appendChild(this._mainDiv);
    var newSpan = document.createElement('span');
    var newSpan1 = document.createElement('span');
    newSpan.innerHTML = '<span id="chooseSpan">Выбрать период</span> ' + '<br class="spanBr">' + 'с:&#8194';
    newSpan1.innerHTML = '&#8194 по: ';
    this._mainDiv.appendChild(newSpan);
    this._startDate = new Obj_ChooseDate(this._mainDiv);

    this._mainDiv.appendChild(newSpan1);
    // Make 'to' label, and plase to the _mainDiv


    this._stoptDate = new Obj_ChooseDate(this._mainDiv);
}

Obj_ChoosePeriod.prototype.setStartDate = function () {
    this._startDate.setDate();
};

Obj_ChoosePeriod.prototype.setStopDate = function (date) {
    this._stoptDate.setDate(date);
};

function Obj_ChooseDate(htmlContainer) {
    var self = this;

    window.addEventListener(
        'resize',
        function () {
            self.placeCalendar()
        },
        false
    );


    this._input = document.createElement('input');
    this._input.setAttribute('title', 'Формат даты - число.месяц.год');
    this._input.onkeyup = function (e) {
        e = e || window.event;
        if (e.keyCode === 13) {
            self._input.blur();
            var time = self._input.value;
            time = time.replace(/(\d+)\.(\d+)\.(\d+)/, '$2.$1.$3');
            self._calendar.setTime(time);
            self._calendar.ShowCalendar({start_day: time});
        }
    };
    this._img = document.createElement('img');
    this._img.setAttribute('src', 'Images/calend.png');
    this._img.style.cursor = 'pointer';
    this._img.style.position = 'relative';
    this._img.style.left = '4px';

    htmlContainer.appendChild(this._input);
    htmlContainer.appendChild(this._img);
    this._calendarDiv = document.createElement('div');
    this._calendarDiv.style.display = 'none';
    htmlContainer.appendChild(this._calendarDiv);
    this._calendarDiv.className = 'calendarDiv';
    this._calendar = new Obj_Calendar(
        this._calendarDiv,
        true,
        this._input
    );
    this._img.onclick = function () {
        self.placeCalendar();
//operations for correct work in ie
        var strTime = self._input.value;
        strTime = strTime.replace(/(\d+)\.(\d+)\.(\d+)/, '$2.$1.$3');
        var arrTime = strTime.split('.');
        var temp = arrTime[0] - 1;
        var arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug',
            'Sept', 'Oct', 'Nov'];
        arrTime.splice(0, 1, arrMonth[temp]);
        var strTimFun = arrTime.join(',');
        var time = Date.parse(strTimFun);
        self._calendar.setTime(time);
        self._calendar.ShowCalendar({start_day: time});

        if (self._calendarDiv.style.display === 'none') {
            self._calendarDiv.style.display = 'block';
        } else {
            self._calendarDiv.style.display = 'none';
        }

        document.onkeyup = function (e) {
            e = e || window.event;
            if (e.keyCode === 27) {
                self._calendarDiv.style.display = 'none';
            }
        };
    };
}

Obj_ChooseDate.prototype.placeCalendar = function () {
    var offLeft = this._input.offsetLeft;
    var offTop = this._input.offsetTop;
    this._calendarDiv.style.top = (offTop + 55) + 'px';
    console.log('topDiv=' + this._calendarDiv.style.top);
    if (screen.width <= '590' || document.body.clientWidth <= '590') {
        var chooseSpanLeft = document.getElementById('chooseSpan').offsetLeft;
        this._calendarDiv.style.left = (chooseSpanLeft - 50) + 'px';

    } else {
        this._calendarDiv.style.left = (offLeft + 10) + 'px';
        console.log('leftDiv=' + this._calendarDiv.style.left);

    }


};

Obj_ChooseDate.prototype.setDate = function () {
    var temp_date = new Date();
    var day = temp_date.getDate();
    var month = temp_date.getMonth() + 1;
    var year = temp_date.getFullYear();
    if (day < 10) {
        day = "0" + day;
    }
    if (month < 10) {
        month = "0" + month;
    }
    var curD = month + "." + day + "." + year;
    curD = curD.replace(/(\d+)\.(\d+)\.(\d+)/, '$2.$1.$3');
    console.log(curD);
    this._input.value = curD;

};

//функция для получения value из инпута
Obj_ChooseDate.prototype.TakeValueFromInput = function () {
    var valInput = this._input.value;
    console.log(valInput);
};

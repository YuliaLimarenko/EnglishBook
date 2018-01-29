var elem;

// Set append for IE
if (!Element.append) {
    Element.prototype.append = function () {
        for (i = 0; i < arguments.length; i++) {
            $(arguments[i]).appendTo(this);
        }
    }
}

// var ScheduleEmpty = {
//     Name: "EmptySchedule",
//     Days: [
//         // days of week
//         [], [], [], [], [], [], []
//     ]
//
// };




var Schedule = {
    Name: "Schedule 1",
    Days: [
        // Monday: Schedule.Days[0]
        [
            // Room 1: Schedule.Days[0][0]
            {
                Name: "Room 0.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },

            {
                Name: "Room 0.1",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            // Room 2 Schedule.Days[0][1]
            {
                Name: "Room 0.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            },
            {
                Name: "Room 0.3",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            }

        ],
        [
            // Room 1: Schedule.Days[0][0]
            {
                Name: "Room 1.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },

            {
                Name: "Room 1.1",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    },
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            // Room 2 Schedule.Days[0][1]
            {
                Name: "Room 1.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            },
            {
                Name: "Room 1.3",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            }

        ],

        [
            // Room 1: Schedule.Days[0][0]
            {
                Name: "Room 2.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            // Room 2 Schedule.Days[0][1]
            {
                Name: "Room 2.1",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            },
            {
                Name: "Room 2.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            }
        ],

        [
            // Room 1: Schedule.Days[0][0]
            {
                Name: "Room 3.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },

            {
                Name: "Room 3.1",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            // Room 2 Schedule.Days[0][1]
            {
                Name: "Room 3.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            }
        ],
        [
            // Room 1: Schedule.Days[0][0]
            {
                Name: "Room 4.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },

            {
                Name: "Room 4.1",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            // Room 2 Schedule.Days[0][1]
            {
                Name: "Room 4.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            }
        ],
        [
            // Room 1: Schedule.Days[0][0]
            {
                Name: "Room 5.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },

            {
                Name: "Room 5.1",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[0][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[0][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            // Room 2 Schedule.Days[0][1]
            {
                Name: "Room 5.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 15
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[0][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 45
                        },
                        Duration: 60
                    }
                ]
            }
        ],

        [
            // Room 1: Schedule.Days[1][0]
            {
                Name: "Room 6.0",
                Lessons: [
                    // Lessons 1 at the Room 1: Schedule.Days[1][0].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 12,
                            min: 30
                        },
                        Duration: 60
                    },
                    // Lessons 2 at the Room 1: Schedule.Days[1][0].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },

            //Room 2 Schedule.Days[1][1]
            {
                Name: "Room 6.1",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[1][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[1][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            },
            {
                Name: "Room 6.2",
                Lessons: [
                    // Lessons 1 at the Room 2: Schedule.Days[1][1].Lessons[0]
                    {
                        Name: "Lesson 1",
                        Start: {
                            hour: 8,
                            min: 30
                        },
                        Duration: 50
                    },
                    // Lessons 1 at the Room 2: Schedule.Days[1][1].Lessons[1]
                    {
                        Name: "Lesson 2",
                        Start: {
                            hour: 9,
                            min: 50
                        },
                        Duration: 60
                    }
                ]
            }
        ]

    ]
};

// var RoomPointers = [0,0,0,0,0,0,0];
var DayPointer = 0;
var RoomPointers = [
    // Day 0
    {
        'selected': 0,
        'ferst': 0
    },
    // Day 1
    {
        'selected': 0,
        'ferst': 0
    },
    // Day 2
    {
        'selected': 0,
        'ferst': 0
    },
    // Day 3
    {
        'selected': 0,
        'ferst': 0
    },
    // Day 4
    {
        'selected': 0,
        'ferst': 0
    },
    // Day 5
    {
        'selected': 0,
        'ferst': 0
    },
    // Day 6
    {
        'selected': 0,
        'ferst': 0
    }
];


$(document).ready( function () {

        SituateElement('#btnGoTo', '#mainDate');

        // creating and adding main div for name scchedule
        var SchNameCell = document.createElement('div');
        SchNameCell.className = 'ScheduleName';

        $(SchNameCell).insertBefore('#t_schedule');

        // creating and adding children div into main div of shedule name
        var SchNameArLeft = document.createElement('div');
        SchNameArLeft.className = 'SchNameArLeft';
        var SchName = document.createElement('div');
        SchName.className = 'SchName';
        var SchNameArRight = document.createElement('div');
        SchNameArRight.className = 'SchNameArRight';
        $(SchNameArLeft).appendTo(SchNameCell);
        $(SchName).appendTo(SchNameCell);
        $(SchNameArRight).appendTo(SchNameCell);

        //put info info children's div
        SchNameArLeft.innerHTML = '<button class="btn-name" id="btn-name-Left">' +
            '<img src="Images/arrowLeft1.png" width="20px" height="10px" alt="arrow left">' +
            '</button>';

        SchName.innerHTML = '<label><input type="text" id="inputScheduleName"  ></label>';
        document.getElementById('inputScheduleName').value = Schedule.Name;



        SchNameArRight.innerHTML = '<button class="btn-name" id="btn-name-Right">' +
            '<img src="Images/arrowRight.png" width="20px" height="10px" alt="arrow right">' +
            '</button>';

        // function for change name schedule
        document.getElementById("inputScheduleName").addEventListener("change", myFunction);

        function myFunction() {
            var inputValName = document.getElementById('inputScheduleName').value;
            Schedule.Name = inputValName;
            //send new name to server


        }


        $(window).resize(
            function () {
                ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);
            }
        );


        ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);

    }
);


/**
 *
 * @param Row - link to the HTML row
 * @param ColsNumber - needed number of cals at the row
 * @param Span - colspan for the col
 * @param LessonRow - lesson row describer
 *     {
 *           Time: - time for the row (Hour*60 + min)
 *           tr: - link to the HTML row element
 *           columnNumber: - number of columns at the row
 *       }
 * @param DaysReff - array with day number for every col
 * @param ClassReff - array with room number for every col
 * @return void
 */
function AddDummyCols(Row, ColsNumber, Span, LessonRow, DaysReff, ClassReff) {
    // Create columns
    for (var ColCounter = 0; ColCounter < ColsNumber; ColCounter++) {
        var newColumn = document.createElement('td');
        newColumn.setAttribute('colspan', Span);
        AddCol(Row, newColumn, Span, LessonRow, DaysReff, ClassReff);
    }
}

function AddCol(Row, Column, Span, LessonRow, DaysReff, ClassReff) {
    // var RoomNumber = Math.trunc(LessonRow.columnNumber/2); // do not work at IE
    var RoomNumber = parseInt(LessonRow.columnNumber / 2);
    Column.setAttribute('class', CreateToggleRoomClassName(DaysReff[RoomNumber], ClassReff[RoomNumber]) +
        ' ' + CreateToggleDayClassName(DaysReff[RoomNumber])
    );
    Row.append(Column);
    LessonRow.columnNumber += Span;
}


/**
 * @param {number} VisibleColsNumber
 * @param {number} StartDay Day of week from 0 to 6
 * @param {Array} DayInnerPointers
 * @return void
 */
function ShowTablePart(VisibleColsNumber, StartDay, DayInnerPointers) {
    var DayPointer = StartDay;
    // Here will be lesson row descripotion records ranged by time
    /* {
            Time: - time for the row (Hour*60 + min)
            tr: - link to the HTML row element
            columnNumber: - number of columns at the row
        }
    */
    var Counters = {
        'LessonRows': [],
        // Here will be day number for class column
        'DaysRefArray': [],
        // Here will be class number for class column
        'ClassReffArray': [],
        // Caunter of created columns
        'ColumnsCounter': 0
    };


    // Refrash table
    document.getElementById('t_schedule').innerHTML =
        '<tr class="tr-day-of-week" id="tr-day-of-week"></tr>' +
        '<tr class="tr-name-of-class" id="tr-name-of-class"></tr>';

    // Show columns
    for (
        var ColCounter = 0;
        ColCounter < VisibleColsNumber;
    ) {
        var ColsNumber = Schedule.Days[DayPointer].length;
        var ColsToShow = (ColsNumber <= VisibleColsNumber - ColCounter ? ColsNumber : VisibleColsNumber - ColCounter);
        var TempDayPointer = DayPointer;

        // Increase columns counter
        ColCounter += ColsNumber;
        if (++DayPointer >= Schedule.Days.length) {
            DayPointer = 0;
        }
        if (DayPointer === StartDay) {
            ColCounter = VisibleColsNumber;
        }
        // Show day
        ShowDay(
            TempDayPointer,
            DayInnerPointers[TempDayPointer].selected,
            ColsToShow,
            Counters,
            // Here we increase columns counter and make check if is it last shown day to show right shift button
            !(ColCounter < VisibleColsNumber)
        );
    }

    // Add day roll right button
    // LastDaySell.innerHTML +=
    //     '<button class="btn-Day-Rightslide"  id="btn-Day-Rightslide' + StartDay + '" >' +
    //     '<img class="img-btn img-bn-right" src="Images/arrowRight.png">' +
    //     '</button>';
}

/**
 *
 * @param {number|string} DayNumber
 * @param {number|string}RoomNumber
 * @return {string}
 */
function CreateToggleRoomClassName(DayNumber, RoomNumber) {
    return ('ToggleRoom_' + DayNumber + '_' + RoomNumber);
}

/**
 *
 * @param {number|string} DayNumber
 * @return {string}
 */
function CreateToggleDayClassName(DayNumber) {
    return ('ToggleDay_' + DayNumber);
}

/**
 *
 * @param DayNumber
 * @return {string}
 */
function CreateSlRoomLeftButId(DayNumber) {
    return ('SlRoomLeftButton_' + DayNumber);
}

/**
 *
 * @param DayNumber
 * @return {string}
 */
function CreateSlRoomRightButId(DayNumber) {
    return ('SlRoomRightButton_' + DayNumber);
}

/**
 *
 * @param DayNumber
 * @return {string}
 */
function CreateSlDayLeftButId(DayNumber) {
    return ('SlDayLeftButton_' + DayNumber);
}

/**
 *
 * @param DayNumber
 * @return {string}
 */
function CreateSlDayRightButId(DayNumber) {
    return ('SlDayRightButton_' + DayNumber);
}

/**
 *
 * @param DayNumber
 * @param RoomNumber
 * @return {string}
 */
function CreateRoomNameId(DayNumber, RoomNumber) {
    return ('RN_' + DayNumber + '_' + RoomNumber);
}

function ShowDay(DayNumber, StartCol, ColNumber, Counters, ShowRightButton) {
    // Days names refferens array
    var daysArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
        'Saturday', 'Sunday'];
    // Create cell for day of week

    var NewTdDay = document.createElement('td');
    //create div into day of week
    var newDivDyMain = document.createElement('div');
    newDivDyMain.className = 'newDivDyMain';
    var newHrDay = document.createElement('hr');
    var newDivDay = document.createElement('div');
    newDivDay.className = 'newDivDay';
    var newDivArLeft = document.createElement('div');
    newDivArLeft.className = 'newDivArLeft';
    var newDivNameDay = document.createElement('div');
    newDivNameDay.className = 'newDivNameDay';
    var newDivArRight = document.createElement('div');
    newDivArRight.className = 'newDivArRight';
    newDivDyMain.append(newDivDay, newHrDay);
    newDivDay.append(newDivArLeft, newDivNameDay, newDivArRight);
    NewTdDay.append(newDivDyMain);
    // Ferst room flag
    var FerstRoomFlag = true;
    // Number of rooms
    var ShowRoomsNumber = Schedule.Days[DayNumber].length;
    // Room cells
    var newTd;

    if (ShowRoomsNumber > ColNumber) {
        ShowRoomsNumber = ColNumber;
    }
    ;

//adding info into divs for day of week
    newDivArLeft.innerHTML = (
        // Add day roll left button, if needed
        Counters.ColumnsCounter === 0 ?
            '<button class="btn-Day-Leftslide btnDay"  id="' + CreateSlDayLeftButId(DayNumber) + '">' +
            '<img class="img-btn img-bn-left" src="Images/arrowLeft1.png">' +
            '</button>' : ''
    );
    newDivDyMain.style.marginTop = '-30px';
    newDivNameDay.innerHTML = '<span class="span-name-shedule">' + daysArray[DayNumber] + '</span>';
    newDivArRight.innerHTML = (
        ShowRightButton ? (
            '<button class="btn-Day-Rightslide btnDay"  id="' + CreateSlDayRightButId(DayNumber) + '" >' +
            '<img class="img-btn img-bn-right" src="Images/arrowRight.png">' +
            '</button>'
        ) : ''
    );


    // Span cell for number of rooms
    NewTdDay.setAttribute(
        'colspan',
        ShowRoomsNumber ? ShowRoomsNumber * 2 : "1"
    );
    NewTdDay.setAttribute('class', CreateToggleDayClassName(DayNumber) + ' ' + 'btn-schedule-name');
    // Fill day of week cell
    $('#tr-day-of-week').append(NewTdDay);
    // Set on button click events
    if (ShowRightButton) {
        document.getElementById(CreateSlDayRightButId(DayNumber)).onclick = SlideDayRight;
    }
    if (Counters.ColumnsCounter === 0) {
        temp =
            document.getElementById(CreateSlDayLeftButId(DayNumber));
        temp.onclick = SlideDayLeft;
    }

    // Get current day
    var Day = Schedule.Days[DayNumber];
    // Get start room number
    var RoomsCounter = StartCol;
    if (Schedule.Days[DayNumber].length - RoomsCounter < ShowRoomsNumber) {
        RoomsCounter = Schedule.Days[DayNumber].length - ShowRoomsNumber;
    }
    RoomPointers[DayNumber].ferst = RoomsCounter;
    var LastRoom = RoomsCounter + ShowRoomsNumber;
    var LeftButtonId = null;
    // Process avery room
    while (RoomsCounter < LastRoom) {
        // Get room data
        var Room = Day[RoomsCounter];
        // Create cell for room
        newTd = document.createElement('td');
        // Add day reference
        Counters.DaysRefArray.push(DayNumber);
        Counters.ClassReffArray.push(RoomsCounter);
        $('#tr-name-of-class').append(newTd);

        var newDivMainRoom = document.createElement('td');
        newDivMainRoom.className = 'newDivMainRoom';
        var newDivRoom = document.createElement('td');
        newDivRoom.className = 'newDivRoom';
        var newDivRoomArLeft = document.createElement('td');
        newDivRoomArLeft.className = 'newDivRoomArLeft';
        var newDivRoomName = document.createElement('td');
        newDivRoomName.className = 'newDivRoomName';
        var newDivRoomArRight = document.createElement('td');
        newDivRoomArRight.className = 'newDivRoomArRight';
        var newDivRoomFixed = document.createElement('td');
        newDivRoomFixed.className = 'newDivRoomFixed';
        var newInput = document.createElement('input');
        var newHrRoom = document.createElement('hr');

        newDivRoomName.append(newInput);
        newInput.value = Room.Name;
        newInput.className = 'InputNameRoom';
        newDivMainRoom.append(newDivRoom, newHrRoom);
        newDivRoom.append(newDivRoomArLeft, newDivRoomName, newDivRoomArRight, newDivRoomFixed);
        newTd.append(newDivMainRoom);


        newDivRoomFixed.innerHTML = '<img class="imgFixed"  src="' +
            'Images/Thumbtack.png' +
            '">';
        newDivRoomFixed.style.borderLeft = '2px solid #0bc129';

        $(".newDivRoomFixed").click(function FixRoom() {
            this.innerHTML = '<img class="imgFixed" src="' +
                'Images/shutterstockredjpg.jpg' +
                '">';
        });


        // Will there be room scroll left button ?
        if (FerstRoomFlag)
        // Yes, there will be room scroll left button
        {
            // Is it active button ?
            if (RoomsCounter !== 0)
            // Yes, it is active button
            {
                LeftButtonId = CreateSlRoomLeftButId(DayNumber);
                //  btn-Room-slide
                newDivRoomArLeft.innerHTML =
                    '<button  class="" id="' + LeftButtonId + '">' +
                    '<img class="img-btn img-bn-left imgbtnVisible" src="' +
                    'Images/arrowLeft1.png' +
                    '">'
                    + '</button>';
                //newDivMainRoom.style.marginTop='-20px';

            }
            else
            // No, it isn't active button
            {

                newDivRoomArLeft.innerHTML =

                    '<button class=""><img  class="img-btn " src="' +
                    'Images/arrowLeftUnactive.png' +
                    '"></button>';

            }
        }
        else
        // No, there will not be room scroll left button
        {

        }

        // Will there be room scroll right button
        if (!(RoomsCounter + 1 < LastRoom))
        // Yes, there will be room scroll right button
        {
            // Add right rooms roll button
            // Will there bre active button
            if (!(RoomsCounter + 1 < Schedule.Days[DayNumber].length))
            // No, thehe will not be active button
            {
                newDivRoomArRight.innerHTML =
                    '<button class="btnimgDisabled"><img class="img-btn img-bn-right imgDisabled "  src="' +
                    'Images/arrowRightUnactive.png' +
                    '"></button>'
                ;


            }
            else
            // No, thehe will be active button
            {
                var buttonId = CreateSlRoomRightButId(DayNumber);

                newDivRoomArRight.innerHTML =
                    '<button class="btn-Room-slide" id="' + buttonId + '">' +
                    '<img class="img-btn img-bn-right imgbtnVisible" src="' + 'Images/arrowRight.png' +
                    '">' +
                    '</button>'
                ;

                document.getElementById(buttonId).addEventListener('click', SlideRoomRight);
            }
            // Set left button onclick event
            if (LeftButtonId) {
                document.getElementById(LeftButtonId).addEventListener('click', SlideRoomLeft);
            }

        }


        newTd.setAttribute('colspan', 2);
        newTd.setAttribute(
            'class',
            CreateToggleRoomClassName(DayNumber, RoomsCounter) + ' ' +
            CreateToggleDayClassName(DayNumber) + ' ' + 'Roomcontext'
        );

        // Creat lessons rows

        for (k = 0; k < Room.Lessons.length; k++) {
            var Lesson = Room.Lessons[k];
            var StartTime = Lesson.Start.hour + ':' + Lesson.Start.min;
            var newTrTime = document.getElementsByClassName(StartTime);
            var LessonRow;
            var Time = Lesson.Start.hour * 60 + Lesson.Start.min;

            // Is there needed row ?
            if (newTrTime.length === 0)
            // No, there isn't
            {
                // Create new row
                newTrTime = document.createElement('tr');
                newTrTime.setAttribute('class', StartTime + ' ' + 'StartTime');
                // Found insert point
                var i = 0;

                while (i < Counters.LessonRows.length && Time > Counters.LessonRows[i].Time) {
                    i++;
                }
                // Will we add element to the end?
                if (i >= Counters.LessonRows.length)
                // Yes, we will
                {
                    $('.table-shedule').append(newTrTime);
                }
                else
                // No, we will add element before another row Counters.LessonRows[i].tr
                {
                    $(newTrTime).insertBefore(Counters.LessonRows[i].tr);
                }
                // Save element at the lesson array
                Counters.LessonRows.splice(
                    i,
                    0,
                    {
                        Time: Time,
                        tr: newTrTime,
                        columnNumber: 0
                    }
                );
                // Create blanket sells
                LessonRow = Counters.LessonRows[i];
                AddDummyCols(newTrTime, Counters.ColumnsCounter, 2, LessonRow, Counters.DaysRefArray, Counters.ClassReffArray);
            }
            else
            // Yes, there is needed row
            {
                // Get row element from array returned by getElementsByClassName
                newTrTime = newTrTime[0];
                // Found lesson row
                var i = 0;
                while (i < Counters.LessonRows.length && Time !== Counters.LessonRows[i].Time) {
                    i++;
                }
                LessonRow = Counters.LessonRows[i];

            }
            // Create time sell
            var newTdStartTime = document.createElement('td');
            newTdStartTime.innerHTML = '<span>' + Lesson.Start.hour + ':' + Lesson.Start.min + '</span>';

            //create input for time of lesson
            var newInput = document.createElement('input');
            newInput.setAttribute('class', 'inputStartTimeLesson');
            newInput.dataset.time = k;
            newInput.dataset.room = RoomsCounter;
            newInput.dataset.day = DayNumber;
            newInput.dataset.room = RoomsCounter;

            newInput.value = Lesson.Start.hour + ':' + Lesson.Start.min;
            //add to newTdStartTime
            newTdStartTime.appendChild(newInput);
            newInput.addEventListener("change", onStartTimeInputChange);

            BgBlue(newTdStartTime, newInput);// background of time in table

            AddCol(newTrTime, newTdStartTime, 1, LessonRow, Counters.DaysRefArray, Counters.ClassReffArray);
            // Create description sell
            var newTdNameLesson = document.createElement('td');
            newTdNameLesson.innerHTML = '<span>' + Lesson.Name + '</span>';


            //create input for name of lesson
            var newInput = document.createElement('input');
            newInput.setAttribute('class', 'inputNameLessonRoom');
            newInput.dataset.lesson = k;
            newInput.dataset.room = RoomsCounter;
            newInput.dataset.day = DayNumber;
            newInput.dataset.room = RoomsCounter;

            //put value in input
            newInput.value = Lesson.Name;
            //add to newTdNameLesson
            newTdNameLesson.appendChild(newInput);


            BGandBorderLessonName(newInput);//background of nameLesson in table and border blue
            // change info about time  of rooms
            newInput.addEventListener("change", onNameLessonInputChange);


            // newTdNameLesson.setAttribute('class','ToggleDay'+[DaysCounter]);
            AddCol(newTrTime, newTdNameLesson, 1, LessonRow, Counters.DaysRefArray, Counters.ClassReffArray);
        }
        // Plane the table
        for (var RowsCounter = 0; RowsCounter < Counters.LessonRows.length; RowsCounter++) {
            AddDummyCols(
                Counters.LessonRows[RowsCounter].tr,
                Counters.ColumnsCounter + 1 - Counters.LessonRows[RowsCounter].columnNumber / 2,
                2,
                Counters.LessonRows[RowsCounter],
                Counters.DaysRefArray,
                Counters.ClassReffArray
            );
        }
        Counters.ColumnsCounter++;

        //create input for name of rooms
        // var newInput = document.createElement('input');
        var InputId = 'inputRoomId' + DayNumber + '_' + RoomsCounter;
        newInput.setAttribute('id', InputId);
        newInput.setAttribute('class', 'inputRoomClass');
        newInput.dataset.day = DayNumber;
        newInput.dataset.room = RoomsCounter;

        // newInput.value=Room.Name;
        //add to newTd
        // newTd.appendChild(newInput);
        // change name of rooms by enter
        newInput.addEventListener("change", onClassNameInputChange);

        // Procced to the next room
        RoomsCounter++;
        // Clear fers room flag
        FerstRoomFlag = false;

    }
}

function onClassNameInputChange() {
    var NewClasName = (this).value;
    var Day = this.dataset.day;
    var Room = this.dataset.room;

    Schedule.Days[Day][Room].Name = NewClasName;
    document.getElementById(CreateRoomNameId(Day, Room)).innerText = NewClasName;

}

function onNameLessonInputChange() {
    var newNameLesson = this.value;
    var Day = this.dataset.day;
    var Lesson = this.dataset.lesson;
    var Room = this.dataset.room;
    Schedule.Days[Day][Room].Lessons[Lesson].Name = newNameLesson;
}

function onStartTimeInputChange() {
    var newStartTime = this.value;
    var Day = this.dataset.day;
    var Time = this.dataset.time;
    var Room = this.dataset.room;
    var arrTime = newStartTime.split(':');
    var hour = arrTime[0];
    var min = arrTime[1];
    Schedule.Days[Day][Room].Lessons[Time].Start.hour = hour;
    Schedule.Days[Day][Room].Lessons[Time].Start.min = min;
}

function SlideRoomRight() {
    var Day = deriveIdFromClass(this.id);

    var selected = RoomPointers[Day].ferst;
    if (selected < Schedule.Days[Day].length) {
        selected++
    }

    RoomPointers[Day].selected = selected;
    ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);
}

function SlideRoomLeft() {
    var Day = deriveIdFromClass(this.id);

    var selected = RoomPointers[Day].ferst;
    if (selected > 0) {
        selected--
    }

    RoomPointers[Day].selected = selected;
    ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);
}

function SlideDayRight() {

    // Proceed to the next day
    if (++DayPointer >= Schedule.Days.length) {
        DayPointer = 0;
    }
    ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);

}

function SlideDayLeft() {
    // Proceed to the previous day
    if (DayPointer-- <= 0) {
        DayPointer = Schedule.Days.length - 1;
    }
    ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);
}

function GetColsNuber() {
    // Resolution must be ranged from less to bigger
    var resolutionReff = [
        {
            resolution: 380,
            colnumber: 1
        },
        {
            resolution: 544,
            colnumber: 2
        },
        {
            resolution: 768,
            colnumber: 3
        },
        {
            resolution: 992,
            colnumber: 4
        },
        {
            resolution: 1024,
            colnumber: 5
        }
    ];

    var WindowWidth = $(window).width();
    var searchPointer = 0;
    while (
        WindowWidth >= resolutionReff[searchPointer].resolution &&
        searchPointer < resolutionReff.length - 1
        ) {
        searchPointer++;
    }
    return (resolutionReff[searchPointer].colnumber);
}

function deriveIdFromClass(treeNodeKey) {
    var SeparatorPosition = treeNodeKey.search('_');

    return (
        SeparatorPosition >= 1 ? treeNodeKey.slice(SeparatorPosition + 1) : -1
    );
}

function ShowContextMenuRoom() {
    $('#menuRoom').show();
    // $('#menuLesson').show();
}

function HideContextMenu() {
    $('#menuRoom').hide();

}


document.oncontextmenu = ShowContextMenuRoom;
document.onclick = HideContextMenu;


function AddRoominObj() {
    for (var GoDay = 0; GoDay < Schedule.Days.length; GoDay++) {
        Schedule.Days[GoDay].push(
            {
                Name: 'New Room',
                Lessons: []
            }
        )
    }
    ShowTablePart(GetColsNuber(), DayPointer, RoomPointers);
}

function BgBlue() {
    for (i = 0; i < arguments.length; i++) {
        (arguments[i]).style = 'background-color:#55a4e0';
    }
}

function BGandBorderLessonName() {
    for (i = 0; i < arguments.length; i++) {
        (arguments[i]).style = 'background-color:#e3e5e8 ;' +
            'border-top:2px solid #55a4e0 ; ' +
            'border-bottom:2px solid #55a4e0';
    }
}



function SituateElement(element1, element2) {
    var elem2offset = $(element2).offset();
    $(element1).css({
        left: elem2offset.left-1070
    })
}

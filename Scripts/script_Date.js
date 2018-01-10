//todo: группы в фильтре

var dataArray = [
    {
        name: "Учителя",
        state: true,
        children: [
            {
                name: "Анна Валерьевна"
            },
            {
                name: "Инна Петровна"
            },
            {
                name: "Роман"
            }
        ]
    },
    {
        name: "Ученики",
        state: false,
        children: [
            {
                name: "Иванов "
            },
            {
                name: "Петров"
            },
            {
                name: "Роман"
            }
        ]
    },
    {
        name: "Группы",
        state: false,
        children: [
            {
                name: "Группа 1",
                state: false,
                children: [
                    {
                        name: "Иванов "
                    },
                    {
                        name: "Петров"
                    }
                ]
            },
            {
                name: "Группа 2",
                state: false,
                children: [
                    {
                        name: "Иванова "
                    },
                    {
                        name: "Петрова"
                    },
                    {
                        name: "Римма"
                    }
                ]
            }
        ]
    },
    {
        name: "Предметы",
        state: false,
        children: [
            {
                name: "Английский"
            },
            {
                name: "Математика"
            },
            {
                name: "Немецкий"
            }
        ]
    },
    {
        name: "Кабинеты",
        state: false,
        children: [
            {
                name: "Кабинет 1"
            },
            {
                name: "Кабинет 2"
            },
            {
                name: "Кабинет 3"
            }
        ]
    },
    {
        name: "Курсы",
        state: false,
        children: [
            {
                name: "Курс 1"
            },
            {
                name: "Курс 2"
            },
            {
                name: "Курс 3"
            }
        ]
    }

];


$(document).ready(function () {
    document.getElementById('inputFilter').onkeydown = function (e) {
        e = e || window.event;
        if (e.keyCode === 27) {
            document.getElementById('list-filter').style.display='none';



        }
    };
    // CloseByEscape('#list-filter');
    placeOfFilter();

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
    document.getElementById('mainDate').innerHTML =
        'Сегодня' + ' ' + ' ' + day + "." + month + "." + year;

    if ($("#StartPeriod").length) {
        document.getElementById('StartPeriod').value = month + '.' + day + '.' + year;
    }
    if ($("#FinishPeriod").length) {
        document.getElementById('FinishPeriod').value = month + '.' + day + '.' + year;
    }


    function ShowElement(element, parentDiv) {
        // var ch = element.children;

        if (!element.children)
        // if (ch === undefined)
        {
            $(parentDiv).append(element.name);

        }
        else {

            var newDetails = document.createElement('details');

            // if state true make open details
            if (element.state === true) {
                newDetails.setAttribute('open', 'true');
            }
            newDetails.innerHTML =
                '<summary >' + element.name + '</summary>';
            parentDiv.appendChild(newDetails);

            var newUlChildrens = document.createElement('ul');
            newUlChildrens.style = 'padding-left:20px';
            newUlChildrens.className = 'ul';

            newDetails.appendChild(newUlChildrens);


            for (var i = 0; i < element.children.length; i++) {

                var newLiChildrens = document.createElement('li');
                newLiChildrens.className = 'ChildrenLi';
                newUlChildrens.appendChild(newLiChildrens);

                ShowElement(element.children[i], newLiChildrens);

            }

// variable for convenience
            var inp = document.getElementById('inputFilter');

//put value from list to input and send to server

            $('.ChildrenLi').click(function PutMainValue() {
                var curLi = this.textContent;
                inp.value = curLi;
                document.getElementById('list-filter').style.display = 'none';
                CallArrayFilter();

//send value from list to server


            });


//function for call new array after filter's operation
            function CallArrayFilter() {
                let currVal = inp.value;
                var arrayAfterChange = AutocomplitFilter(dataArray, currVal);

                ShowList(arrayAfterChange, document.getElementById('acordeon-filter'));
                inp.style.background = 'none';

            }

//style and data for list when mouseout
            function MouseOut() {
                let currVal = inp.value;
                document.getElementById('list-filter').onmouseout = function () {
                    inp.style.background = 'none';
                    inp.value = currVal;
                };
            }


            inp.onfocus = function () {
                MouseOut();
            };

            inp.onkeyup = function () {
                CallArrayFilter();
                MouseOut();
            };

//style for list when mouseover
            $('.ChildrenLi').mouseover(function () {
                var curLi = this.textContent;
                inp.value = curLi;
                inp.style.background = '#f2f2f2';
            });

        }

    }

    function ShowList(listArray, container) {
        if (listArray[0] === false) {
            var newSpan = document.createElement('span');
            newSpan.className = 'spanNoInfo';
            document.getElementById('acordeon-filter').style.display = 'none';


            newSpan.innerHTML = 'По вашему ' +
                'запросу информация не найдена';
            document.getElementById('acordeon-span').appendChild(newSpan);
            document.getElementById('inputFilter').onkeyup = function (e) {
                e = e || window.event;
                if (e.keyCode === 8) {
                    document.getElementById('acordeon-filter').style.display = 'block';
                    document.getElementById('acordeon-span').style.display = 'none';

                }


            }
        }
        else {
            // Clear container
            container.innerHTML = '';
            container.className = 'container';
            //

            for (var i = 0; i < listArray.length; i++) {

                ShowElement(listArray[i], container)
            }
        }
    }

    ShowList(arrayByFilter, document.getElementById('acordeon-filter'));


    var winHeight = window.innerHeight;
    $('#list-filter').css({
        height: winHeight - 250
    })

});


$("#inputFilter").click(function () {
    $('#list-filter').slideToggle('normal');

});


function placeOfFilter() {
    var TopMainDate = $('#mainDate').offset();
    $('.main-filter').css({
        top: TopMainDate.top + 40,
        left: TopMainDate.left - 220
    });


}

$(window).resize(
    function () {
        //placeOfFilter();
        var TopMainDate = $('#mainDate').offset();
        $('.main-filter').css({
            top: TopMainDate.top + 40,
            left: TopMainDate.left - 90
        });
    }
);

//show mobile menu
document.getElementById('gumbMob').addEventListener('click', showMobMenu);

function showMobMenu() {
    $('.hideNav').slideToggle('fast');

}

// function, witch return array after filter's operations
function AutocomplitFilter(array, value) {
    //todo: указать правильные условия для возврата false
    if (value == 1) {
        return [false, array];
    } else {
        return array;
    }

}

var arrayByFilter = AutocomplitFilter(dataArray,
    document.getElementById('inputFilter').value);


//todo: группы в фильтре

var dataArray = [
    {
        name: "Учителя",
        // true - for opened UL
        // false - for closed UL
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
            document.getElementById('list-filter').style.display = 'none';


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


    function ShowElement(element, parentDiv) {

        if (!element.children)
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
                //var newSpanChild = document.createElement('span');
                // newSpanChild.className = 'spanChild';
                //newLiChildrens.appendChild(newSpanChild);
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
                var currVal = inp.value;
                var arrayAfterChange = AutoCompleteFilter(dataArray, currVal);
                ShowList(arrayAfterChange, document.getElementById('acordeon-filter'));
                inp.style.background = 'none';

            }

//style and data for list when mouseout
            function MouseOut() {
                var currVal = inp.value;
                document.getElementById('list-filter').onmouseout = function () {
                    inp.style.background = 'none';
                    inp.value = currVal;

                };
            }


            inp.onfocus = function () {
                MouseOut();
            };

            inp.onkeyup = function (e) {
                e = e || window.event;
                if (e.keyCode === 38 || e.keyCode === 40) {
                    //todo: другую функцию, переключать список
                    $('#list-filter').slideToggle('normal');
                } else {
                    CallArrayFilter();
                    MouseOut();
                }
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
        if (!listArray.length) {
            document.getElementById('acordeon-filter').style.display = 'none';
            document.getElementById('acordeon-span').style.display = 'block';
        }
        else {
            // Clear container
            container.innerHTML = '';
            container.className = 'container';
            //

            for (var i = 0; i < listArray.length; i++) {

                ShowElement(listArray[i], container)
            }

            document.getElementById('acordeon-filter').style.display = 'block';
            document.getElementById('acordeon-span').style.display = 'none';
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


$(window).resize(
    function () {
        placeOfFilter(90);
    }
);

//show mobile menu
document.getElementById('gumbMob').addEventListener('click', showMobMenu);

function showMobMenu() {
    $('.hideNav').slideToggle('fast');

}

/**
 * Returns array filtered by searchFor
 *
 * @param {Array} dataArray
 * @param {string} searchFor
 * @return {Array}
 */
function AutoCompleteFilter(dataArray, searchFor) {

    return GetFiltered(dataArray, searchFor.trim());

    /**
     *
     * @param {Array} levelArray
     * @param {string} searchFor
     * @return {Array}
     */
    function GetFiltered(levelArray, searchFor) {
        var resultArray = [];
        if (levelArray) {
            for (var i = 0; i < levelArray.length; i++) {
                var childrenArray = GetFiltered(levelArray[i].children, searchFor);
                var ResultName = Compliance(levelArray[i].name, searchFor);
                if (childrenArray.length && !ResultName) {
                    ResultName = levelArray[i].name;
                }
                if (ResultName) {
                    var item = {
                        name: ResultName
                    };
                    if (levelArray[i].children) {
                        item.children = childrenArray;
                        item.state = levelArray[i].state;
                    }
                    resultArray.push(item);
                }
            }
        }
        return resultArray;
    }

    /**
     * Returns name with selected pattern if found else null
     * @param {string} name
     * @param {string} pattern
     * @return {string|null}
     */
    function Compliance(name, pattern) {
        var Result = null;
        if (pattern) {
            var position = name.toLowerCase().search(pattern.toLowerCase());
            if (~position) {
                Result = name.substr(0, position) +
                    '<b style = "font-weight:bold;color:blue">' +
                    name.substr(position, pattern.length) +
                    '</b>' +
                    name.substr(position + pattern.length);
            }
        }
        else {
            Result = name;
        }
        return Result
    }


}


var arrayByFilter = AutoCompleteFilter(dataArray,
    document.getElementById('inputFilter').value);


function placeOfFilter(leftCount) {
    var TopMainDate = $('#mainDate').offset();
    $('.main-filter').css({
        left: TopMainDate.left - leftCount
    });
    if (screen.width <= '704' || document.body.clientWidth <= '704') {
        $('.main-filter').css({
            top: TopMainDate.top + 20
        });
    }
    else {
        $('.main-filter').css({
            top: TopMainDate.top + 40
        });
    }

}
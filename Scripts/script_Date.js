// Set append for IE
// if (!Element.append) {
//     Element.prototype.append = function () {
//         for (i = 0; i < arguments.length; i++) {
//             $(arguments[i]).appendTo(this);
//         }
//     }
// }

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



$( document ).ready(function() {
    placeOfFilter();

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

    if($("#StartPeriod").length) {
        document.getElementById('StartPeriod').value = month+'.'+day+'.'+year;
    }
    if($("#FinishPeriod").length) {
        document.getElementById('FinishPeriod').value = month+'.'+day+'.'+year;
    }


    function ShowElement(element, parentDiv) {
        if (!element.children)
        {
            parentDiv.append(element.name);

        }
        else
        {

            var newDetails = document.createElement('details');

            // if state true make open details
            if (element.state === true) {
                newDetails.setAttribute('open', 'true');
            }
            newDetails.innerHTML =
                '<summary >' + element.name + '</summary>';
            parentDiv.append(newDetails);

            var newUlChildrens = document.createElement('ul');
            newUlChildrens.style='padding-left:20px';
            newUlChildrens.className='ul';

            newDetails.append(newUlChildrens);



            for(var i= 0; i<element.children.length;i++) {

                var newLiChildrens = document.createElement('li');


                newUlChildrens.append(newLiChildrens);

                ShowElement(element.children[i], newLiChildrens);


            }
        }
    }




    function ShowList(listArray,container)
    {
        // Clear container
        container.innerHTML = '';
        //

        for (var i=0;i<listArray.length;i++)
        {

            ShowElement(listArray[i],container)
        }
    }

    ShowList(dataArray,document.getElementById('acordeon-filter'));


    var winHeight = window.innerHeight;
    $('#list-filter').css({
        height:winHeight-250
    })

   });


$("#inputFilter").click(function () {
    $('#list-filter').slideToggle('normal');

});


function placeOfFilter() {
        var TopMainDate = $('#mainDate').offset();
        $('.main-filter').css({
            top: TopMainDate.top+40,
            left: TopMainDate.left-220
        });


}
          $(window).resize(
             function () {
                //placeOfFilter();
                 var TopMainDate = $('#mainDate').offset();
                 $('.main-filter').css({
                     top: TopMainDate.top+40,
                     left: TopMainDate.left-90
                 });
            }
        );

document.getElementById('gumbMob').addEventListener('click', showMobMenu);

function showMobMenu() {
    $('.hideNav').slideToggle('fast');

}


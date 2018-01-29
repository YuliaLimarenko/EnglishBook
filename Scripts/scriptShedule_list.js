var ScheduleActive =
    [
        //четверти
        {
            Name: " 01 september-14 october 2017",
            id: "first",
            Date: " 08.05.2017"
        },
        {
            Name: " 01 july-14 july 2017",
            id: "second",
            Date: " 09.10.2017"
        },
        {
            Name: " 01 february-14 may 2017",
            id: "third",
            Date: " 28.01.2017"
        },
        {
            Name: " 01 february-14 may 2017",
            id: "third1",
            Date: " 28.01.2017"
        },
        {
            Name: " 01 february-14 may 2017",
            id: "third2",
            Date: " 28.01.2017"
        },
        {
            Name: " 01 february-14 may 2017",
            id: "third3",
            Date: " 28.01.2017"
        }
    ];

var ScheduleDraft =
    [
        //четверти
        {
            Name: " 15 september-30 october 2017",
            id: "first1",
            Date: " 20.05.2016"

        },
        {
            Name: " 26 july-31 july 2017",
            id: "second2",
            Date: " 09.10.2015"
        },
        {
            Name: " 11 february-14 may 2017",
            id: "third3",
            Date: " 28.01.2013"
        },
        {
            Name: " 11 february-14 may 2017",
            id: "third31",
            Date: " 28.01.2013"
        },
        {
            Name: " 11 february-14 may 2017",
            id: "third32",
            Date: " 28.01.2013"
        },
        {
            Name: " 11 february-14 may 2017",
            id: "third33",
            Date: " 28.01.2013"
        }
    ];


$(document).ready(function () {

    SituateElement('#btnCreate', '#mainDate');

    ShowActiveSchedule();
    ShowDraftSchedule();

    $('#btnCreate').click(function CreateSchedule() {
        alert('function CreateSchedule()');
    });

});

function SituateElement(element1, element2) {
    var elem2offset = $(element2).offset();
    $(element1).css({
        left: elem2offset.left - 935
    })
}

function ShowDraftSchedule() {

    document.getElementById('ulDraftSchedule').innerHTML = ' ';
    document.getElementById('ulDraftScheduleDate').innerHTML = ' ';
    document.getElementById('ulDraftRemove').innerHTML = ' ';

    for (var SchedulesCounter = 0;
         SchedulesCounter < ScheduleDraft.length;
         SchedulesCounter++) {

        var liDraftSchedule = document.createElement('a');
        var newLi = document.createElement('li');
        $(liDraftSchedule).appendTo(newLi);
        var newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.name = 'draftDays';
        $(newCheckbox).insertBefore(liDraftSchedule);
        liDraftSchedule.innerHTML = ScheduleDraft[SchedulesCounter].Name;
        liDraftSchedule.dataset.edit = 'true';
        liDraftSchedule.setAttribute('href', 'index.html');
        liDraftSchedule.setAttribute('id', ScheduleDraft[SchedulesCounter].id);
        liDraftSchedule.setAttribute('class', 'ScheduleDraftSend');
        $(newLi).appendTo('#ulDraftSchedule');
        var liDraftScheduleDate = document.createElement('a');
        var newLiDate = document.createElement('li');
        $(liDraftScheduleDate).appendTo(newLiDate);
        liDraftScheduleDate.innerHTML = ScheduleDraft[SchedulesCounter].Date;
        liDraftScheduleDate.setAttribute('href', '#');
        // liDraftScheduleDate.setAttribute('id', ScheduleDraft[SchedulesCounter].id);
        $(newLiDate).appendTo('#ulDraftScheduleDate');
        var newLiDelete = document.createElement('li');

        var newBtn = document.createElement('button');
        newBtn.className = 'btnImg';
        newBtn.id = 'btnR' + SchedulesCounter;
        newLiDelete.appendChild(newBtn);

        newBtn.innerHTML =
            '<img src="Images/delete.png" class="imgRemove" width="7%" alt="X" >';
        $(newLiDelete).appendTo('#ulDraftRemove');
    }
//delete draftSchedule
    var btnClasses = document.getElementsByClassName('btnImg');
    for (var i = 0; i < btnClasses.length; i++) {
        btnClasses[i].onclick = function () {
            alert('Подтвердите удаление шаблона');
            var idBtn = parseInt(this.id.replace(/\D+/g, ""));
            ScheduleDraft.splice(idBtn, 1);

            ShowDraftSchedule();

// todo: send new arr of draft shedules to server

        }
    }

    ScrollShedule("#ulDraftSchedule", '.info-about-draft-schedule-main');

}

function ShowActiveSchedule() {
    for (var SchedulesCounter = 0;
         SchedulesCounter < ScheduleActive.length;
         SchedulesCounter++) {
        var liActiveSchedule = document.createElement('a');
        var newLi = document.createElement('li');
        $(liActiveSchedule).appendTo(newLi);
        var newCheckbox = document.createElement('input');
        newCheckbox.type = 'checkbox';
        newCheckbox.name = 'ativeDays';
        $(newCheckbox).insertBefore(liActiveSchedule);
        liActiveSchedule.innerHTML = ScheduleActive[SchedulesCounter].Name;
        liActiveSchedule.dataset.edit = 'false';
        liActiveSchedule.setAttribute('href', 'index.html');
        liActiveSchedule.setAttribute('id', ScheduleActive[SchedulesCounter].id);
        liActiveSchedule.setAttribute('class', 'ScheduleActiveSend');
        $(newLi).appendTo('#ulActiveSchedule');
        var liActiveScheduleDate = document.createElement('a');
        var newLiDate = document.createElement('li');
        $(liActiveScheduleDate).appendTo(newLiDate);
        liActiveScheduleDate.innerHTML = ScheduleActive[SchedulesCounter].Date;
        liActiveScheduleDate.setAttribute('href', '#');
        //liActiveScheduleDate.setAttribute('id', ScheduleActive[SchedulesCounter].id);
        $(newLiDate).appendTo(('#ulActiveScheduleDate'));

    }

    ScrollShedule("#ulActiveSchedule", '.info-about-active-schedule');
}

function ScrollShedule(elem1, elem2) {
    var countLi = $(elem1).find("li").length;
    if (countLi > 5) {
        $(elem2).css({
            height: '200px',
            overflowY: 'auto'
        });
    }
}


var ScheduleActive =
    [
        //четверти
        {
            Name:" 01 september-14 october 2017",
            id:"first",
            Date:" 08.05.2017"
        },
    {
        Name:" 01 july-14 july 2017",
            id:"second",
        Date:" 09.10.2017"
        },
    {
        Name:" 01 february-14 may 2017",
            id:"third",
        Date:" 28.01.2017"
        },
        {
            Name:" 01 february-14 may 2017",
            id:"third",
            Date:" 28.01.2017"
        },
        {
            Name:" 01 february-14 may 2017",
            id:"third",
            Date:" 28.01.2017"
        },
        {
            Name:" 01 february-14 may 2017",
            id:"third",
            Date:" 28.01.2017"
        }
];

var ScheduleDraft =
    [
        //четверти
        {
            Name:" 15 september-30 october 2017",
            id:"first1",
            Date:" 20.05.2016"
        },
        {
            Name:" 26 july-31 july 2017",
            id:"second2",
            Date:" 09.10.2015"
        },
        {
            Name:" 11 february-14 may 2017",
            id:"third3",
            Date:" 28.01.2013"
        },
        {
            Name:" 11 february-14 may 2017",
            id:"third3",
            Date:" 28.01.2013"
        },
        {
            Name:" 11 february-14 may 2017",
            id:"third3",
            Date:" 28.01.2013"
        },
        {
            Name:" 11 february-14 may 2017",
            id:"third3",
            Date:" 28.01.2013"
        }
    ];


$( document ).ready(function() {

    ShowActiveSchedule();
    ShowDraftSchedule ();

    $('#btnCreate').click(function CreateSchedule(){
        alert('function CreateSchedule()');
    })


    $('.ScheduleActiveSend').click(function SendScheduleActive() {
        alert('function SendScheduleActive()');

    })

    $('.ScheduleDraftSend').click(function SendScheduleDraft() {
        alert('function SendScheduleDraft()');

    })

    $('.btnImg').click(function DeleteScheduleDraft() {
        alert('function DeleteScheduleDraft()');

    })



});



    function ShowDraftSchedule () {
        for(var SchedulesCounter=0;
            SchedulesCounter<ScheduleDraft.length;
            SchedulesCounter++)
        {
            var liDraftSchedule=document.createElement('a');
            var newLi= document.createElement('li');
            newLi.append(liDraftSchedule);
            liDraftSchedule.innerHTML= ScheduleDraft[SchedulesCounter].Name;
            liDraftSchedule.setAttribute('href', '#');
            liDraftSchedule.setAttribute('id', ScheduleDraft[SchedulesCounter].id);
            liDraftSchedule.setAttribute('class', 'ScheduleDraftSend');
            $('#ulDraftSchedule').append(newLi);
            var liDraftScheduleDate=document.createElement('a');
            var newLiDate= document.createElement('li');
            newLiDate.append(liDraftScheduleDate);
            liDraftScheduleDate.innerHTML= ScheduleDraft[SchedulesCounter].Date;
            liDraftScheduleDate.setAttribute('href', '#');
            // liDraftScheduleDate.setAttribute('id', ScheduleDraft[SchedulesCounter].id);
            $('#ulDraftScheduleDate').append(newLiDate);
            var newLiDelete=document.createElement('li');
            newLiDelete.innerHTML=
        '<button class="btnImg"><img src="Images/delete.png" class="imgRemove" width="10%" alt="X" ></button>';
            $('#ulDraftRemove').append(newLiDelete);
        }
        var countLi=$("#ulDraftSchedule").find("li").length;
        if(countLi>5){

            $('.info-about-draft-schedule-main').css({
                height:'200px',
                overflowY: 'auto'
            });

        }

    }

    function ShowActiveSchedule () {
        for(var SchedulesCounter=0;
            SchedulesCounter<ScheduleActive.length;
            SchedulesCounter++)
        {
            var liActiveSchedule=document.createElement('a');
            var newLi= document.createElement('li');
            newLi.append(liActiveSchedule);
            liActiveSchedule.innerHTML= ScheduleActive[SchedulesCounter].Name;
            liActiveSchedule.setAttribute('href', '#');
            liActiveSchedule.setAttribute('id', ScheduleActive[SchedulesCounter].id);
            liActiveSchedule.setAttribute('class', 'ScheduleActiveSend');
                $('#ulActiveSchedule').append(newLi);
                var liActiveScheduleDate=document.createElement('a');
                var newLiDate= document.createElement('li');
                newLiDate.append(liActiveScheduleDate);
                liActiveScheduleDate.innerHTML= ScheduleActive[SchedulesCounter].Date;
                liActiveScheduleDate.setAttribute('href', '#');
            //liActiveScheduleDate.setAttribute('id', ScheduleActive[SchedulesCounter].id);
                $('#ulActiveScheduleDate').append(newLiDate);

        }

        var countLi=$("#ulActiveSchedule").find("li").length;
        if(countLi>5){

            $('.info-about-active-schedule').css({
                height:'200px',
                overflowY: 'auto'
            });

        }

    }




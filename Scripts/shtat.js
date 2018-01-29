var ArrShtat = [
    {
        lastname: 'Глухова',
        name: 'Анна',
        middleName: 'Петровна',
        plan: 50,
        fact: 50,
        telephone: '+380503031111',
        address: 'Пр.Мира,3',
        dateBirthday: '26.03.1999',
        position: 'Учитель Английского',
        status: true
    },
    {
        lastname: 'Глухова',
        name: 'Анна',
        middleName: 'Петровна',
        plan: 48,
        fact: 48,
        telephone: '+548481',
        address: 'dfgf 5',
        dateBirthday: '26.03.1999',
        position: 'Учитель Русского',
        status: true
    },
    {
        lastname: 'Глухова',
        name: 'Анна',
        middleName: 'Петровна',
        plan: 30,
        fact: 10,
        telephone: '+3805555555',
        address: 'Пр.Мира,3',
        dateBirthday: '26.03.1999',
        position: 'Учитель Английского',
        status: true
    },
    {
        lastname: 'Глухова',
        name: 'Анна',
        middleName: 'Петровна',
        plan: 80,
        fact: 90,
        telephone: '+35555522',
        address: 'Пр.Мира,3',
        dateBirthday: '26.03.1999',
        position: 'Учитель Английского',
        status: true
    }
];


window.onload = function () {
    createTableShtat();
};


function createTableShtat() {
    for (var i = 0; i < ArrShtat.length; i++) {
        var newTrTeacher = document.createElement('tr');
        var newTdName = document.createElement('td');
        var newHref = document.createElement('a');
        newHref.setAttribute('href', 'shtatConcreticPerson.html');
        newTdName.className = 'Teachername';
        newTdName.appendChild(newHref);
        var newTdPlan = document.createElement('td');
        var newTdFact = document.createElement('td');
        newTrTeacher.appendChild(newTdName);
        var spanTitle = document.createElement('span');
        spanTitle.innerHTML = 'телефон:' + ArrShtat[i].telephone + ';' + '&#013;' +
            'адресс:' + ArrShtat[i].address + ';' + '&#013;' + 'дата рождения: '
            + ArrShtat[i].dateBirthday + ';' + '&#013;' + 'должность:'
            + ArrShtat[i].position;
        newTdName.setAttribute('title', spanTitle.textContent);
        newTrTeacher.appendChild(newTdPlan);
        newTrTeacher.appendChild(newTdFact);
        document.getElementById('tableShtat').appendChild(newTrTeacher);
        newHref.innerHTML = ArrShtat[i].lastname + ' ' + ArrShtat[i].name + ' '
            + ArrShtat[i].middleName;
        newTdPlan.innerHTML = ArrShtat[i].plan;
        newTdFact.innerHTML = ArrShtat[i].fact;
    }
}
var choosePeriod = new Obj_ChoosePeriod(document.getElementById('choosePeriod'));

choosePeriod.setStartDate(Date.now());
choosePeriod.setStopDate(Date.now());







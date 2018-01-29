var Teacher = {

    lastname: 'Глухова',
    name: 'Анна',
    middleName: 'Петровна',
    telephone: '+380503031111',
    address: 'Пр.Мира,3',
    dateBirthday: '26.03.1999',
    position: 'Учитель Английского',
    status: true

};

window.onload = function () {

    if (Teacher.status) {
        ShowWork();
    } else {
        ShowUnwork();
    }

    document.getElementById('btnWork').onclick = ClickWork;
    document.getElementById('btnUnwork').onclick = ClickUnWork;
    CreatePrivateInfo();
    document.getElementById('file').addEventListener('change', PrivewPhoto, false);


};

function ClickWork() {
    ShowWork();
    Teacher.status = true
//send Teacher obj to server

}

function ClickUnWork() {
    ShowUnwork();
    Teacher.status = false
//send Teacher obj to server

}

function ShowWork() {
    document.getElementById('btnUnwork').style.opacity = '0.3';
    document.getElementById('btnWork').style.opacity = '1'
}

function ShowUnwork() {
    document.getElementById('btnUnwork').style.opacity = '1';
    document.getElementById('btnWork').style.opacity = '0.3'
}

function CreatePrivateInfo() {
    var mainLastName = document.createElement('div');
    mainLastName.className = 'field';
    var labelLastName = document.createElement('label');
    var inputLastName = document.createElement('input');
    mainLastName.appendChild(labelLastName);
    mainLastName.appendChild(inputLastName);
    labelLastName.innerHTML = 'Фамилия';
    inputLastName.value = Teacher.lastname;
    inputLastName.className = 'inputClass';
    inputLastName.onkeyup = function () {
        Teacher.lastname = this.value;
//send to server Teacher

    };


    var mainName = document.createElement('div');
    mainName.className = 'field';
    var labelname = document.createElement('label');
    var inputName = document.createElement('input');
    mainName.appendChild(labelname);
    mainName.appendChild(inputName);
    labelname.innerHTML = 'Имя';
    inputName.value = Teacher.name;
    inputName.onkeyup = function () {
        Teacher.name = this.value
//send to server Teacher

    };

    var mainMiddleName = document.createElement('div');
    mainMiddleName.className = 'field';
    var labelMiddleName = document.createElement('label');
    var inputMiddleName = document.createElement('input');
    mainMiddleName.appendChild(labelMiddleName);
    mainMiddleName.appendChild(inputMiddleName);
    labelMiddleName.innerHTML = 'Отчество';
    inputMiddleName.value = Teacher.middleName;
    inputMiddleName.onkeyup = function () {
        Teacher.middleName = this.value
//send to server Teacher
    };

    var mainTel = document.createElement('div');
    mainTel.className = 'field';
    var labelTel = document.createElement('label');
    var inputTel = document.createElement('input');
    mainTel.appendChild(labelTel);
    mainTel.appendChild(inputTel);
    labelTel.innerHTML = 'Телефон';
    inputTel.value = Teacher.telephone;
    inputTel.onkeyup = function () {
        Teacher.telephone = this.value
//send to server Teacher
    };

    var mainAddress = document.createElement('div');
    mainAddress.className = 'field';
    var labelAddress = document.createElement('label');
    var inputAddress = document.createElement('input');
    mainAddress.appendChild(labelAddress);
    mainAddress.appendChild(inputAddress);
    labelAddress.innerHTML = 'Адресс';
    inputAddress.value = Teacher.address;
    inputAddress.onkeyup = function () {
        Teacher.address = this.value
//send to server Teacher
    };

    var maindateBirthday = document.createElement('div');
    maindateBirthday.className = 'field';
    var labeldateBirthday = document.createElement('label');
    var inputdateBirthday = document.createElement('input');
    maindateBirthday.appendChild(labeldateBirthday);
    maindateBirthday.appendChild(inputdateBirthday);
    labeldateBirthday.innerHTML = 'Дата рождения';
    inputdateBirthday.value = Teacher.dateBirthday;
    inputdateBirthday.onkeyup = function () {
        Teacher.dateBirthday = this.value
//send to server Teacher
    };

    var mainPosition = document.createElement('div');
    mainPosition.className = 'field';
    var labelPosition = document.createElement('label');
    var inputPosition = document.createElement('input');
    mainPosition.appendChild(labelPosition);
    mainPosition.appendChild(inputPosition);
    labelPosition.innerHTML = 'Должность';
    inputPosition.value = Teacher.position;
    inputPosition.onkeyup = function () {
        Teacher.position = this.value;
//send to server Teacher
    };

    document.getElementById('private-info').appendChild(mainLastName);
    document.getElementById('private-info').appendChild(mainName);
    document.getElementById('private-info').appendChild(mainMiddleName);
    document.getElementById('private-info').appendChild(mainTel);
    document.getElementById('private-info').appendChild(mainAddress);
    document.getElementById('private-info').appendChild(maindateBirthday);
    document.getElementById('private-info').appendChild(mainPosition);

}

//previw of photo in popUp
function PrivewPhoto(evt) {
    var file = evt.target.files;
    var f = file[0];
    if (!f.type.match('image.*')) {
        alert("Только изображения....");
    }

    var reader = new FileReader();

    //  the file information
    reader.onload = (function () {
        return function (e) {
            var span = document.createElement('span');
            span.innerHTML = ['<img class="img-thumbnail" src="', e.target.result,
                '" title="image"/>'].join('');
            document.getElementById('preview').innerHTML = "";
            document.getElementById('preview').insertBefore(span, null);
        };
    })(f);

// Read in the image file as a data URL.
    reader.readAsDataURL(f);
}


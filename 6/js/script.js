$(document).ready(function() {
    $('.bsuFaculties').hide();
    $('#university').change(function() {
        switch($(this).val()) {
            case 'BSU':
                $('.bsuFaculties').show();
                $('.bsuirFaculties').hide();
                $('#faculty').val('Faculty of Law');
                break;
            case 'BSUIR':
                $('.bsuFaculties').hide();
                $('.bsuirFaculties').show();
                $('#faculty').val('Faculty of Computer Systems and Networks');
                break;
        }
    });
});

getById('submit').onclick = () => {alert(createMessage())};

function getById(id) {
    return document.getElementById(id);
}

function getByName(name) {
    return document.getElementsByName(name);
}

function getByClass(name) {
    return document.getElementsByClassName(name);
}

function getCheckedItem(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].checked) {
            return array[i].value;
        }
    }
}

function getSex() {
    return getCheckedItem(getByName('sex'));
}

function getFullName() {
    let firstName = getById('firstName').value;
    let patronymic = getById('patronymic').value;
    let lastName = getById('lastName').value;
    return firstName + ' ' + patronymic + ' ' +
        lastName;
}

function getUniversityInfo() {
    let university = getById('university').value;
    let faculty = getById('faculty').value;
    let course = getById('course').value;
    let group = getById('group').value;
    let distanceEducation = getById('distanceEducation').checked;
    let universityInfo = university + ', ' + faculty + ', ' + 
        course + ' course, group: ' + group;
    if (distanceEducation) {
        universityInfo += ' on a distance education.';
    } else {
        universityInfo += ' regulary attend university.';
    }
    return universityInfo;
}

function createMessage() {
    let about = getById('about').value;
    let sex = getSex();
    let message = '';
    if (sex == 'male') {
        message += 'His name is ' + getFullName() + '.\nHe';
    } else {
        message += 'Her name is ' + getFullName() + '.\nShe';
    }
    message += ' study at ' + getUniversityInfo() + 
        '\nSome information about that person: ' + about; 
    return message;
}

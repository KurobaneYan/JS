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


getById('showForm').onclick = () => {
    getById('form').innerHTML = `<form class="form-horizontal">
            <div class="form-group">
                <label for="firstName" class="col-sm-2 control-label">First name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="firstName" placeholder="Richard">
                 </div>
            </div>
            <div class="form-group">
                <label for="patronymic" class="col-sm-2 control-label">Patronymic</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="patronymic" placeholder="Matthew">
                </div>
            </div>
            <div class="form-group">
                <label for="lastName" class="col-sm-2 control-label">Last name</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="lastName" placeholder="Stallman">
                 </div>
            </div>
            <div class="form-group">
                <label class="col-sm-2 control-label">Sex</label>
                <div class="col-sm-10">
                    <label class="radio-inline">
                        <input type="radio" name="sex" id="male" value="male" checked="true">
                        male
                    </label>
                    <label class="radio-inline">
                        <input type="radio" name="sex" id="female" value="female">
                        female
                    </label>
                </div>
            </div>



            <div class="form-group">
                <label for="university" class="col-sm-2 control-label">University</label>
                <div class="col-sm-10">
                    <select id="university" class="form-control">
                        <option selected="selected">BSUIR</option>
                        <option>BSU</option>
                    </select>
                 </div>
            </div>
            <div class="form-group">
                <label for="faculty" class="col-sm-2 control-label">Faculty</label>
                <div class="col-sm-10">
                    <select id="faculty" class="form-control">
                        <option class="bsuFaculties">Faculty of Law</option>
                        <option class="bsuFaculties">Faculty of Applied Mathematics and Computer Science</option>
                        <option class="bsuFaculties">Faculty of Physics</option>
                        <option class="bsuirFaculties" selected="selected">Faculty of Computer Systems and Networks</option>
                        <option class="bsuirFaculties">Faculty of Engineering and Economics</option>
                        <option class="bsuirFaculties">Faculty of Computer-Aided Design</option>
                    </select>
                 </div>
            </div>
            <div class="form-group">
                <label for="course" class="col-sm-2 control-label">Course</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="course" placeholder="3">
                 </div>
            </div>
            <div class="form-group">
                <label for="group" class="col-sm-2 control-label">Group</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="group" placeholder="453502">
                 </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                        <label>
                            <input id="distanceEducation" type="checkbox">Distance education
                        </label>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="about" class="col-sm-2 control-label">About you</label>
                <div class="col-sm-10">
                    <textarea id="about" class="form-control" rows="5" placeholder="Discribe yourself here..."></textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                    <button id="submit" type="submit" class="btn btn-default">Submit</button>
                </div>
            </div>
        </form>`;
    getById('submit').onclick = () => {alert(createMessage())};
};

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

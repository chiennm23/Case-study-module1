let fullName = document.getElementById("full-name");
let anotherName = document.getElementById("another-name");
let dob = document.getElementById("birth");
let gender = document.getElementsByName('gender');
let address = document.getElementById("address");
let nationality = document.getElementById("nationality");
let height = document.getElementById("height");
let marital = document.getElementById("marital");
let idolSelected = -1;
function save() {
    let idol = new Idol(1, fullName.value, anotherName.value, dob.value, getGender(), address.value, nationality.value, height.value, marital.value);
    idolManage.addIdol(idol);
    idolManage.display();
}

function getGender() {
    console.log(gender);
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
    }
}
function deleteIdol(index) {
    idolManage.deleteIdol(index);
    idolManage.display();
}

function editIdol(index) {
    let id = index-1;
    fullName.value = idolManage.idols[id].fullname;
    anotherName.value =idolManage.idols[id].anothername;
    dob.value =idolManage.idols[id].birth;
    address.value =idolManage.idols[id].address;
    nationality.value =idolManage.idols[id].nationality;
    height.value =idolManage.idols[id].height;
    marital.value =idolManage.idols[id].marital;
    idolSelected = id;
}

function updateIdol() {
    idolManage.idols[idolSelected].editIdol(fullName.value, anotherName.value, dob.value, getGender(), address.value, nationality.value, height.value, marital.value);
    idolManage.display();
}

function clean() {
    fullName.value = "";
    anotherName.value = "";
    dob.value = "";
    address.value = "";
    nationality.value = "";
    height.value = "";
    marital.value ="";
}

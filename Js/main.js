let fullName = document.getElementById("full-name");
let anotherName = document.getElementById("another-name");
let dob = document.getElementById("birth");
let gender = document.getElementsByName('gender');
let address = document.getElementById("address");
let nationality = document.getElementById("nationality");
let height = document.getElementById("height");
let avatar = document.getElementById("avatar");
let idolSelected = -1;

function save() {
    let idol = new Idol(1, fullName.value, anotherName.value, dob.value, getGender(), address.value, nationality.value, height.value, avatar.value);
    idolManage.addIdol(idol);
    saveData();
    idolManage.display();
}

function getGender() {
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            return gender[i].value;
        }
    }
}

function deleteIdol(index) {
    idolManage.deleteIdol(index);
    saveData();
    idolManage.display();
}

function editIdol(index) {
    let id = index - 1;
    fullName.value = idolManage.idols[id].fullname;
    anotherName.value = idolManage.idols[id].anothername;
    dob.value = idolManage.idols[id].birth;
    address.value = idolManage.idols[id].address;
    nationality.value = idolManage.idols[id].nationality;
    height.value = idolManage.idols[id].height;
    avatar.value = idolManage.idols[id].avatar;
    idolSelected = id;
}

function updateIdol() {
    idolManage.idols[idolSelected].editIdol(fullName.value, anotherName.value, dob.value, getGender(), address.value, nationality.value, height.value, avatar.value);
    saveData();
    idolManage.display();
}

function saveData() {
    localStorage.setItem("id", JSON.stringify(idolManage.idols));
}

function loadData() {
    if (localStorage.getItem("id") !== null) {
        let arr = JSON.parse(localStorage.getItem("id"));
        for (let i = 0; i < arr.length; i++) {
            let idol = new Idol(arr[i].id, arr[i].fullname, arr[i].anothername, arr[i].birth, arr[i].gender, arr[i].address, arr[i].nationality, arr[i].heights, arr[i].avatar);
            idolManage.addIdol(idol);
        }

    }
}

loadData();
idolManage.display();
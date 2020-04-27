function save() {
    let fullName = document.getElementById("full-name").value;
    let anotherName = document.getElementById("another-name").value;
    let dob = document.getElementById("birth").value;
    let gender = '';
        if(document.getElementById("male").checked) {
            gender = document.getElementById("male").value;
        }else if(document.getElementById("female").checked) {
            gender = document.getElementById("female").value;
        }
    let address = document.getElementById("address").value;
    let nationality = document.getElementById("nationality").value;
    let height = document.getElementById("height").value;
    let marital = document.getElementById("marital").value;
    let idol = new Idol(1, fullName, anotherName, dob, gender, address, nationality, height, marital);
    idolManager.addIdol(idol);
    idolManager.display();
}
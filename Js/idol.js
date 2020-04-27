class Idol {
    constructor(fullname, anothername, birth, gender, address, nationality, heights, mrital) {
        this.fullname = fullname;
        this.anothername = anothername;
        this.birth = birth;
        this.gender = '';
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.mrital = mrital;

        this.getGender = function () {
            let gender;
            if (document.getElementById("male").checked) {
                gender = document.getElementById("male").value;
            } else if (document.getElementById("female").checked) {
                gender = document.getElementById("female").value;
            }
            let displaygender = parseInt(gender) === 0 ? "Nữ" : "Nam";
            return this.gender = displaygender;
        }
    }
}
let idol = new Idol();
console.log(idol.getGender);
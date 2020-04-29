class IdolManage {
    constructor() {
        this.idols = [];
    }

    addIdol(idol) {
        this.idols.push(idol);
    }

    display() {
        let str = '';
        this.idols.forEach((idol, index) => {
            index++;
            idol.setId(index);
            str += idol.getHtml();
        })
        document.getElementById("list-idol").innerHTML = this.getTitle() + str;
    }

    getTitle() {
        let title = `<tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Another Name</th>
                        <th>Date of Birth</th>
                        <th>Gender</th>
                        <th>Address</th>
                        <th>Nationality</th>
                        <th>Height</th>
                        <th>Avatar</th>
                        <th>Act</th>
                    </tr>`
        return title;
    }

    deleteIdol(id) {
        this.idols.splice(id - 1, 1);
    }

    displayIndex(idols) {
        let str = '';
        idols.forEach((idol, index) => {
            index++;
            idol.setId(index);
            str += idol.getIdol();
        })
        document.getElementById("list-idol").innerHTML = str;
    }
}

let idolManage = new IdolManage();



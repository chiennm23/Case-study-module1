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
                        <th>Marital Status</th>
                        <th>Act</th>
                    </tr>`
        return title;
    }
}

let idolManage = new IdolManage();
idolManage.addIdol(idol);
idolManage.addIdol(idol2);
idolManage.addIdol(idol3);
idolManage.display();
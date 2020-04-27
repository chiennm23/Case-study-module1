class Idol {
    constructor(id, fullname, anothername, birth, gender, address, nationality, heights, mrital) {
        this.id = id;
        this.fullname = fullname;
        this.anothername = anothername;
        this.birth = birth;
        this.gender = 0;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.mrital = mrital;
    }

    getHtml() {
        let str = `<tr>
                <th>${this.id}</th>
                <th>${this.fullname}</th>
                <th>${this.anothername}</th>
                <th>${this.birth}</th>
                <th>${this.gender}</th>
                <th>${this.address}</th>
                <th>${this.nationality}</th>
                <th>${this.heights}</th>
                <th>${this.mrital}</th>
                <th>
                    <button id="edit">Edit</button> | <button id="delete">Delete</button>
               </th>
                </tr>`
        return str;
    }
}
let idol = new Idol(1,"Tran Thanh", "Xin","12/08/1986", "0", "TPHCM", "Viet Nam", "176","Da ket hon");
idol.getHtml();
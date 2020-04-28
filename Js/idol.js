class Idol {
    constructor(id, fullName, anotherName, birth, gender, address, nationality, heights, marital) {
        this.id = id;
        this.fullname = fullName;
        this.anothername = anotherName;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.marital = marital;
    }

    setId(id) {
        this.id = id;
    }

    getGender() {
        return parseInt(this.gender) === 0 ? "Nữ" : "Nam";
    }

    getHtml() {
        let str = `<tr>
               <th>${this.id}</th>
               <th>${this.fullname}</th>
               <th>${this.anothername}</th>
               <th>${this.birth}</th>
               <th>${this.getGender()}</th>
               <th>${this.address}</th>
               <th>${this.nationality}</th>
               <th>${this.heights}</th>
               <th>${this.marital}</th>
               <th>
                    <button id="edit" onclick="editIdol(${this.id});">Edit</button> | <button id="delete" onclick="deleteIdol(${this.id});">Delete</button>
               </th>
               </tr>`;
        return str;
    }
    editIdol(fullName, anotherName, birth, gender, address, nationality, heights, marital){
        this.fullname = fullName;
        this.anothername = anotherName;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.marital = marital;
    }
}

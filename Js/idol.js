class Idol {
    constructor(id, fullname, anothername, birth, gender, address, nationality, heights, marital) {
        this.id = id;
        this.fullname = fullname;
        this.anothername = anothername;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.marital = marital;
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
                    <button id="edit">Edit</button> | <button id="delete">Delete</button>
               </th>
               </tr>`;
        return str;
    }
    setId (id){
        this.id = id;
    }

    getGender(){
        return parseInt(this.gender) === 0 ? "Nữ" : "Nam";
    }

}

let idol = new Idol(1, "fafa", 'afaf',"afa", 1,'afaf',"ag",'a', 'g');
let idol2 = new Idol(1, "fafa", 'afaf',"afa", 1,'afaf',"ag",'a', 'g');
let idol3 = new Idol(1, "fafa", 'afaf',"afa", 0,'afaf',"ag",'a', 'g');

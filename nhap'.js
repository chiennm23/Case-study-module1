class Idol {
    constructor(fullname, anothername, birth, gender, address, nationality, heights, mrital) {
        this.fullname = fullname;
        this.anothername = anothername;
        this.birth = birth;
        this.gender = gender;
        this.address = address;
        this.nationality = nationality;
        this.heights = heights;
        this.mrital = mrital;
    }

    display() {
        let idol = {
            fullname: fullname,
            anothername: anothername,
            birth: birth,
            gender: gender,
            address: address,
            nationality: nationality,
            heights: heights,
            mrital: mrital,
        }
        let idols = [];
        idols.push(idol);
        let str = "<table>"
            +"<tr>"
            +"<th>#</th>"
            +"<th>Full Name</th>"
            +"<th>Another Name</th>"
            +"<th>Date of Birth</th>"
            +"<th>Gender</th>"
            +"<th>Address</th>"
            +"<th>Nationality</th>"
            +"<th>Height</th>"
            +"<th>Mrital Status</th>"
            +"<th>Act</th>"
            +"</tr>"
           idols.forEach((idol, index) =>{
               index++;
               let displaygender = parseInt(idol.gender) === 0 ? "Nữ" : "Nam";
               str += `<tr>
               <th>${index}</th>
               <th>${idol.fullname}</th>
               <th>${idol.anothername}</th>
               <th>${idol.birth}</th>
               <th>${displaygender}</th>
               <th>${idol.address}</th>
               <th>${idol.nationality}</th>
               <th>${idol.heights}</th>
               <th>${idol.mrital}</th>
               <th>
                    <button id="edit">Edit</button> | <button id="delete">Delete</button>
               </th>
               </tr>`;
           })
        str += "</table>";
        document.getElementById("list-idol").innerHTML = str;
    }
}
let idol = new Idol(tranthanh,acna,f,1,gg,agag,asd,g,);
idol.display();
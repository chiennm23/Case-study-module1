function save() {
    let fullname = document.getElementById("fullname").value;
    let anothername = document.getElementById("anothername").value;
    let birth = document.getElementById("birth").value;
    let gender = '';
    if (document.getElementById("male").checked) {
        gender = document.getElementById("male").value;
    } else if (document.getElementById("female").checked) {
        gender = document.getElementById("female").value;
    }
    let address = document.getElementById("address").value;
    let nationality = document.getElementById("nationality").value;
    let heights = document.getElementById("height").value;
    let mrital = document.getElementById("mrital").value;

    // console.log(fullname, anothername, birth,gender, address, nationality, height, mrital );
    if (fullname && anothername && birth && gender && address && nationality && heights && mrital) {
        // luu thong tin idol
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
        let tableContent = `<tr>
        <th>#</th>
        <th>Full Name</th>
        <th>Another Name</th>
        <th>Date of Birth</th>
        <th>Gender</th>
        <th>Address</th>
        <th>Nationality</th>
        <th>Height</th>
        <th>Mrital Status</th>
        <th>Act</th>
    </tr>`;
        idols.forEach((idol, index) => {
            index++;
            let displaygender = parseInt(idol.gender) === 0 ? "Nữ" : "Nam";
            tableContent += `<tr>
        <td>${index}</td>
        <td>${idol.fullname}</td>
        <td>${idol.anothername}</td>
        <td>${idol.birth}</td>
        <td>${displaygender}</td>
        <td>${idol.address}</td>
        <td>${idol.nationality}</td>
        <td>${idol.heights}</td>
        <td>${idol.mrital}</td>
        <td>
            <button id="edit">Edit</button> | <button id="delete">Delete</button>
        </td>
    </tr>`;
        })
        document.getElementById("displaytable").innerHTML = tableContent;
    }
}
document.getElementById("button").addEventListener('click', loadText);

// get data
function loadText() {
    console.log("đã vào đây");
    // tạp object
    const xhr = new XMLHttpRequest();
    // console.log(xhr);
    // opne - type, url/file, async/await 
    xhr.open('GET', '../data/Box_Data.txt', true);

    // // sử dụng onload() cách 1
    xhr.onload = function () {
        if (this.status == 200) {
            console.log(this.responseText);
            document.getElementById("text").innerHTML = this.responseText
        } else if (this.status == 404) {
            console.log("Repuest Error.... Not Found");
        }
    }
    // cách 2 sử dụng onreadystatechange
    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    }

    // send repuest
    xhr.send(); // => gửi request

    // get data to file.json
}

document.getElementById("button1").addEventListener('click', loadText1);
function loadText1() {
    const xhr1 = new XMLHttpRequest();
    xhr1.open('GET', '../data/data.json', true)

    xhr1.onload = function () {
        if (this.status == 200) {
            const user = JSON.parse(this.responseText);
            console.log(user);
            let output = "";
            output = `
            <ul>
                <li>ID: ${user.id}</li>
                <li>Name: ${user.name}</li>
                <li>Email: ${user.email}</li>
            </ul>
            `;
            document.getElementById('data').innerHTML = output;
        } else if (this.status == 404) {
            console.log("Not Found");
        }
    }
    xhr1.send(); // => gửi request
}

document.getElementById("button2").addEventListener('click', loadText2);
function loadText2() {
    const xhr2 = new XMLHttpRequest();
    xhr2.open('GET', '../data/datas.json', true);
    xhr2.onload = function () {
        if (this.status === 200) {
            const listUser = JSON.parse(this.responseText);
            let output2 = '';
            for (let i in listUser) {
                output2 += `
                <ul>
                    <li>ID: ${listUser[i].id}</li>
                    <li>Name: ${listUser[i].name}</li>
                    <li>Email: ${listUser[i].email}</li>
                </ul>
                `;
            }
            document.getElementById("datas").innerHTML = output2;

        } else if (this.status == 404) {
            console.log("Not Found");
        }
    }
    xhr2.send(); // => gửi request
}



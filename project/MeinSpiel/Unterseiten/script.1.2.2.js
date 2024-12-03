let mitarbeiters = JSON.parse(localStorage['personen'] ?? '[]');
console.log(mitarbeiters);

let html_code2  = ``;

html_code2 +=
    `<div id="dele" onclick="del">
        <p></p>
        <p></p>
    </div>`;

    function delePer(pernum) {
        console.log("Hello" + pernum)

        let mitarbeiters = JSON.parse(localStorage['personen'] ?? '[]');
        mitarbeiters.splice(pernum, 1)   

        localStorage['personen'] = JSON.stringify(mitarbeiters);
        location.reload();
    }

for (let i = 0; i < mitarbeiters.length; i++) {
    html_code2 +=
    `<div id="dele" onclick="delePer(${i})">
        <p>${i} ${mitarbeiters[i].name}</p>
        <p></p>
    </div>`;
}

document.getElementById('dele1').innerHTML = html_code2;


let mitarbeiters = JSON.parse(localStorage['personen'] ?? '[]');
console.log(mitarbeiters);

let html_code = ``;

html_code +=
    `<div id="einzPers">
        <p></p>
        <p></p>
        <p></p>
    </div>`;



for (let i = 0; i < mitarbeiters.length; i++) {
    html_code +=
    `<div id="einzPers">
        <p>${mitarbeiters[i].name}</p>
        <p>${mitarbeiters[i].ausbildung}</p>
        <p>${mitarbeiters[i].arbeitszeit}</p>
    </div>`;
}

document.getElementById('mehr').innerHTML = html_code;


function del() {
    console.log("HAllo")
}
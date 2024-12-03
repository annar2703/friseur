
function hinz() {

    let mitarbeiter = {
        'name': document.getElementById('name').value,
        'ausbildung': document.getElementById('ausb').value,
        'arbeitszeit': document.getElementById('arb').value,
        'weiteres': document.getElementById('wei').value
    }

    let mitarbeiters = JSON.parse( localStorage['personen'] ?? '[]' );

    mitarbeiters.push(mitarbeiter);

    localStorage['personen'] = JSON.stringify(mitarbeiters);
}


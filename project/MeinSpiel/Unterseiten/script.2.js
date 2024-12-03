

let bookedDays = [];

function terminBuchenAll(elem) {
    
    let termin = {
        'date': elem.id
    }

    console.log(elem.id)

    elem.style.backgroundColor = '#af2020';

    bookedDays = JSON.parse(localStorage['termine'] ?? '[]');
    
    // Neuen Eintrag hinzufügen
    bookedDays.push(termin);
    console.log(bookedDays)
    // Update localStorage
    localStorage['termine'] = JSON.stringify(bookedDays);

   

}

checkStatus();
function checkStatus() {
    bookedDays = JSON.parse(localStorage['termine'] ?? '[]');
    if (bookedDays != [])
        {
            for (let i = 0; i < bookedDays.length; i++) {
                console.log(bookedDays[i].date)
                document.getElementById(bookedDays[i].date).style.backgroundColor = '#af2020';
            }
        }
   
}



// function terminBuchenb(i) {

//     document.getElementById(`tag${i}b`).style.backgroundColor = 'red';
//     document.getElementById(`tag${i}b`).classList.add = 'red';

// }

// function terminBuchen0(i) {

//     document.getElementById(`tag0${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen1(i) {

//     document.getElementById(`tag1${i}`).style.backgroundColor = 'red';
//     document.getElementById(`tag1${i}`).classList.add = 'red';
// }

// function terminBuchen2(i) {

//     document.getElementById(`tag2${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen3(i) {

//     document.getElementById(`tag3${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen4(i) {

//     document.getElementById(`tag4${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen5(i) {

//     document.getElementById(`tag5${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen6(i) {

//     document.getElementById(`tag6${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen7(i) {

//     document.getElementById(`tag7${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen8(i) {

//     document.getElementById(`tag8${i}`).style.backgroundColor = 'red';
// }

// function terminBuchen9(i) {

//     document.getElementById(`tag9${i}`).style.backgroundColor = 'red';
// }

// function terminBuchena(i) {

//     document.getElementById(`taga${i}`).style.backgroundColor = 'red';
// }


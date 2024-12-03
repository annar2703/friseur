 

 let images = document.getElementById('pictures')
 let directionRight = true
 let myInterval
 let currentPosition = 0

 let source = [
     './Bilder/startsBild1.png',
     './Bilder/startsBild2.png',
     './Bilder/startsBild3.png',
     './Bilder/startsBild4.png',
     './Bilder/startsBild5.png',
     './Bilder/startsBild6.png'
 ]

 function interval() {
     if(directionRight) {
         myInterval = setInterval(goRight, 5000)
     } else {
         myInterval = setInterval(goLeft, 5000)
     }
 }

 interval()

 function generateImages() {
     let i = currentPosition - 1

     if (i >= source.length || i < 0) {
         i = 0
     }
     images.innerHTML =`<img id="habilder" src="${source[currentPosition]}">`
     i++
 }

 function goLeft() {
     if(currentPosition < 1) {
         currentPosition = source.length
     } else {
         currentPosition--
     }
     generateImages();
     directionRight = false
     clearInterval(myInterval)
     interval()
 }

 function goRight() {
     if(currentPosition == source.length - 1) {
         currentPosition = 0
     } else {
         currentPosition++
     }
     generateImages()
     directionRight = true
     clearInterval(myInterval)
     interval()
 }

 goRight()

 

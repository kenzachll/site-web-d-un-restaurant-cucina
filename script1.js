// A propos
document.addEventListener("DOMContentLoaded", function() { /* the DOMContentLoaded event is fired when the initial HTML document has been completely loaded and parsed, 
without waiting for stylesheets, images*/

    var textArray = ["Buon Appetito!", "Bonne Appétit!", "Enjoy your meal!"];
    function changeText() {
    var elem = 
    document.querySelector("#textTochange");
    elem.innerHTML = textArray[counter];
    counter++;
    if (counter >= textArray.length) {
    counter = 0; // Reset counter to loop the text
    }
    }

    var counter = 0;
    document.querySelector("#textTochange").innerHTML = textArray[counter];
    counter++;


    setInterval(changeText, 2000);
    });

// Toggle menu

window.addEventListener('scroll', function(){
  const header =document.querySelector('header');
  header.classList.toggle("sticky", window.scrollY > 0 );
});

function toggleMenu(){
  const tmenuToggle = document.querySelector('.menuToggle');
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
  menuToggle.classList.toggle('active');
};
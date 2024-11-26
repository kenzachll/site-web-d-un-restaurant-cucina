const entreeLink = document.querySelector('.filter[data-filter=".entrées"]');
const platLink = document.querySelector('.filter[data-filter=".plats principaux"]');
const dessertLink = document.querySelector('.filter[data-filter=".desserts"]');
const allLink = document.querySelector('.filter[data-filter=".All"]');

// Assign the click event and execute the desired behavior
entreeLink.addEventListener('click', function() {
  // Find the element with the selected class
  const entreeSection = document.querySelector('.entrées');
  // Scroll to this element
  entreeSection.scrollIntoView();
});

platLink.addEventListener('click', function() {
  // Find the element with the selected class
  const platSection = document.querySelector('.plats principaux');
  // Scroll to this element
  platSection.scrollIntoView();
});

dessertLink.addEventListener('click', function() {
  // Find the element with the selected class
  const dessertSection = document.querySelector('.desserts');
  // Scroll to this element
  dessertSection.scrollIntoView();
});



document.addEventListener("DOMContentLoaded", function() {
  const button1 = document.querySelector(".button1");
  const entrees = document.querySelector(".entrées");
  const desserts = document.querySelector(".desserts");
  const platsPrincipaux = document.querySelector(".plats principaux");
  entrees.style.display = "none";
  desserts.style.display = "none";

  let showAllMenu = false;

  button1.addEventListener("click", function() {
    showAllMenu =!showAllMenu;

    if (showAllMenu) {
      entrees.style.display = "block";
      desserts.style.display = "block";
      platsPrincipaux.style.display = "block";
    } else {
      entrees.style.display = "none";
      desserts.style.display = "none";
      platsPrincipaux.style.display = "block";
    }
  });
});
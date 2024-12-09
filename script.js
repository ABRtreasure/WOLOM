// script.js
window.addEventListener("load", () => {
    const elementsToAnimate = document.querySelectorAll('.animate'); // Select elements with the class 'animate'
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in'); // Add the fade-in class to each element
    });
});
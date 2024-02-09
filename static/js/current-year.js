document.addEventListener("DOMContentLoaded", function() {
    console.log("Le script current-year.js est exécuté.");

    var currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        console.log("L'élément avec l'ID 'current-year' a été trouvé.");
        var currentYear = new Date().getFullYear();
        currentYearSpan.textContent = currentYear;
    } else {
        console.log("L'élément avec l'ID 'current-year' n'a pas été trouvé.");
    }
});

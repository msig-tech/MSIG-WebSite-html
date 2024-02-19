document.addEventListener("DOMContentLoaded", function() {
    function includeHTML(file, targetId) {
        return fetch(file)
            .then(response => response.text())
            .then(data => {
                document.getElementById(targetId).innerHTML = data;
            })
            .catch(error => console.error('Erreur de chargement du fichier:', error));
    }
    
    Promise.all([
        includeHTML('header.html', 'header'),
        includeHTML('footer.html', 'footer')
    ]).then(() => {
    }).catch(error => console.error('Erreur lors du chargement des fichiers HTML:', error));
});



function googleTranslateElementInit() {
    new google.translate.TranslateElement({
        pageLanguage: 'en', 
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        exclude: ['.notranslate']
    }, 'google_translate_element');
}
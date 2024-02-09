function includeHTML(file, targetId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(targetId).innerHTML = data;
        })
        .catch(error => console.error('Erreur de chargement du fichier:', error));
}

includeHTML('../../header-template.html', 'header');

includeHTML('../../footer-template.html', 'footer')
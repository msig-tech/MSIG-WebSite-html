document.addEventListener('DOMContentLoaded', function() {
    const langSelector = document.getElementById('lang');
    const contentContainer = document.getElementById('content');

    // Fonction pour traduire le contenu
    async function translateContent(targetLang) {
        const paragraphs = contentContainer.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, div');
        for (let paragraph of paragraphs) {
            const translation = await translateText(paragraph.textContent, targetLang);
            paragraph.textContent = translation;
        }
    }

    // Fonction pour traduire un texte
    async function translateText(text, targetLang) {
        const res = await fetch("https://libretranslate.com/translate", {
            method: "POST",
            body: JSON.stringify({
                q: text,
                source: "fr", // Langue source fixe (français)
                target: targetLang,
                format: "text" // Format de texte brut
            }),
            headers: { "Content-Type": "application/json" }
        });

        const data = await res.json();
        return data.translatedText;
    }

    // Écouteur d'événement pour le changement de langue
    langSelector.addEventListener('change', function() {
        const selectedLang = this.value;
        translateContent(selectedLang);
    });

    // Traduire le contenu initial au chargement de la page
    translateContent(langSelector.value);
});

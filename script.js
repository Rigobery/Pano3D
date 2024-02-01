document.addEventListener('DOMContentLoaded', function() {
    // Reemplaza 'URL_DE_TU_WEBHOOK' con la URL de tu webhook de Discord
    const webhookURL = 'https://discord.com/api/webhooks/1202299489625583687/NE41N7msOxQ43_0CWV0V7kf-_gv-CWG8mkZRLs2fDw5Kswb-qscPBIFMdLOcTSWDlctv';

    const suggestionButton = document.getElementById('sugerenciaBtn');

    suggestionButton.addEventListener('click', function() {
        // Puedes personalizar el mensaje de sugerencia
        const suggestionMessage = prompt('Ingresa tu sugerencia:');

        if (suggestionMessage) {
            // Enviar la sugerencia al webhook de Discord
            sendSuggestionToDiscord(suggestionMessage);
        }
    });

    function sendSuggestionToDiscord(message) {
        const payload = {
            content: `Nueva Sugerencia:\n${message}`
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(response => {
            if (!response.ok) {
                console.error('Error al enviar la sugerencia a Discord.');
            }
        })
        .catch(error => {
            console.error('Error de red:', error);
        });
    }
});

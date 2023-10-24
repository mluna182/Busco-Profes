
   
let isPWAInstalled = false;

    
    window.addEventListener('beforeinstallprompt', (event) => {
        event.preventDefault(); 
        const installButton = document.getElementById('installButton');

        
        if (!isPWAInstalled) {
            installButton.style.display = 'block';

         
            installButton.addEventListener('click', () => {
                event.prompt();
                event.userChoice.then((choiceResult) => {
                    if (choiceResult.outcome === 'accepted') {
                        console.log('La PWA se instaló correctamente.');
                        isPWAInstalled = true; 
                        installButton.style.display = 'none';
                    } else {
                        console.log('La instalación de la PWA fue cancelada.');
                    }
                });
            });
        }
    });

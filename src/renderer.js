 const { ipcRenderer } = require('electron');
        const slides = [
            { id: 1, text: "Bom dia a todos. xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
            { id: 2, text: "Nesta agenda, xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
            { id: 3, text: "O problema é grave: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
            { id: 4, text: "Base teórica: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx." },
            { id: 5, text: "A falha atual: xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" },
        ];

        let currentIndex = 0;
        function atualizaUI() {
            const current = slides[currentIndex];
            if (current) {
                document.getElementById('script-text').innerText = current.text;
                document.getElementById('slide-info').innerText = `Slide ${current.id} / ${slides.length}`;
            }
        }

        ipcRenderer.on('command', (event, action) => {
            if (action === 'next') {
                if (currentIndex < slides.length - 1) currentIndex++;
            } 
            else if (action === 'prev') {
                if (currentIndex > 0) currentIndex--;
            }
            atualizaUI();
        });

        atualizaUI();
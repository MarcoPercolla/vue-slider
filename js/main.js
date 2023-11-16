const { createApp } = Vue;

const opzioni = {

    data: function () {
        return {
            slides : [
                {
                    immagine: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg',
                    titolo: 'Tramonto sulla spiaggia',
                    descrizione: 'Un meraviglioso tramonto con colori caldi che si riflettono sull\'acqua.'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/beautiful-shot-mountains-trees-covered-snow-fog_181624-17590.jpg',
                    titolo: 'Montagne innevate',
                    descrizione: 'Un panorama mozzafiato delle montagne coperte di neve.'
                },
                {
                    immagine: 'https://img.freepik.com/free-photo/countryside-field-sunny-day-countryside_181624-24010.jpg',
                    titolo: 'Campi verdi',
                    descrizione: 'Vaste distese di campi verdi che si estendono all\'orizzonte.'
                },
            ],

            slideNumber : 0,
            autoCount : 0,
            


        }
    },
    methods: {
        back() {
            let indiceUltimaImg = this.slides.length-1;

            if(this.slideNumber > 0) {
                this.slideNumber--;
            } else {
                this.slideNumber = indiceUltimaImg;
            }
        },
        next() {
            let indiceUltimaImg = this.slides.length-1;

            if(this.slideNumber < indiceUltimaImg) {
                this.slideNumber++;
            } else {
                this.slideNumber = 0;
            }
        },
        stopAuto() {
            if (this.autoCount == 0) {
                this.autoCount= 1;
                document.getElementById(`startStop`).innerHTML= "start";
                clearInterval(this.auto);
                
                
                
            } else {
                this.autoCount= 0;
                document.getElementById(`startStop`).innerHTML= "stop";
                this.auto = setInterval(this.next, 3000);
                

            }

            
        }

    },
    mounted(){
        this.auto = setInterval(this.next, 3000);
    }
};

createApp(opzioni).mount(`#app`)







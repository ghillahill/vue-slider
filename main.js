var app = new Vue({
    el: '#root',
    data: {
        //Creo proprietà che memorizza index di partenza
        current_index: 0,
        //Creo array con immagini
        immagini:[
            'img/city_one.jpg',
            'img/city_two.jpg',
            'img/city_three.jpg',
            'img/city_four.jpg'
        ],
        //Stabilisco una proprietà per inizializzare il timer su funzione resetPlay() e Play()
        timer: 0
    },
    methods: {
        //Creo funzione per passare ad immagine successiva da un index ad un'altro.
        next_image(){
            this.current_index += 1;
            //Se l'index corrente è maggiore di 4 allora al prossimo click riparte dall'index 0
            if (this.current_index == 4) {
                this.current_index = 0;
            }
            //Se clicco invoco la funzione resetPlay()
            this.resetPlay();
        },
        //Creo funzione per passare ad immagine precedente da un index ad un'altro.
        prev_image(){
            this.current_index -= 1;
            //Se l'index corrente è minore di 0 allora al prossimo click riparte dall'index 3 (ovvero l'ultima immagine dell'array)
            if (this.current_index < 0) {
                this.current_index = 3;
            }
            //Se clicco invoco la funzione resetPlay()
            this.resetPlay();
        },
        //Creo funzione per resettare il timer a 0
        resetPlay: function() {
            clearInterval(this.timer);
            this.play();
        },
        //Creo funzione Play per far partire un timer che cambia immagine ogni 2 secondi
        play: function() {
            //creo una variabile che contiene this
            let mytimer = this;
            //setto il timer che cambierà l'immagine successiva ogni due secondi
            this.timer = setInterval(function() {
                mytimer.next_image();
            }, 2000);
        }
    },

    //Utilizzo un Instance Lifecycle Hooks, in questo caso created, che una volta che la pagina è completamente caricata chiamerà la funzione play.
    created: function () {
        this.play();
    }

});

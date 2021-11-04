Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        allUsers: [
            {
                name: "Michele",
                avatar: "img/avatar_1.jpg",
                visible: true,
                messagges: [
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Ricordati di dargli da mangiare?",
                        status: "sent"
                    },
                    {
                        date: "10/01/2020 16:15:22",
                        text: "Tutto Fatto!",
                        status: "received"
                    }
                ]
            },
            {
                name: "Fabio",
                avatar: "img/avatar_2.jpg",
                visible: true,
                messagges: [
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Ciao come stai?",
                        status: "sent"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Bene grazie! Stasera ci vediamo?",
                        status: "received"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Mi piacerebbe ma devo andare a fare la spesa",
                        status: "received"
                    },
                ]
            },
            {
                name: "Samuele",
                avatar: "img/avatar_3.jpg",
                visible: true,
                messagges: [

                    {
                        date: "28/03/2020 16:15:22",
                        text: "La Marianna va in campagna",
                        status: "received"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Sicuro di non aver sbagliato chat?",
                        status: "sent"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Ah scusa!",
                        status: "received"
                    },
                ]
            },
            {
                name: "Luisa",
                avatar: "img/avatar_4.jpg",
                visible: true,
                messagges: [

                    {
                        date: "10/01/2020 15:50:00",
                        text: "Lo sai che ha aperto una nuova pizzeria?",
                        status: "sent"
                    },
                    {
                        date: "20/03/2020 16:35:00",
                        text: "Si, ma preferirei andare al cinema",
                        status: "received"
                    }
                ]
            },
        ],
        chatCliccata: {}

    },
    methods: {
        chatSelected(chiaviDellaChat) {
            this.chatCliccata = chiaviDellaChat;
            console.log(this.chatCliccata);
        },
        /**
         * Creo la funzione per verificare che ci sia almeno un messaggio
         *  e per poter stampara l'ultimo messaggio
         * Passo come parametro l'array dentro allUsers cioè "messagges"
         */
        getMessage(messaggi) {
            // messaggi è un array quindi faccio un controllo se c'è almeno un messaggio
            if (messaggi.length === 0) {
                return "Nessun Messaggio";
            }
            return messaggi[messaggi.length - 1].text;
        }
    },
    mounted() {
        this.chatCliccata = this.allUsers[0];
    }

});

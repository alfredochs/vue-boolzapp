Vue.config.devtools = true;
new Vue({
    el: "#root",
    data: {
        allUsers: [
            {
                nome: "Michele",
                avatar: "img/avatar_1.jpg",
                messaggio: "Messaggio 1"
            },
            {
                nome: "Fabio",
                avatar: "img/avatar_2.jpg",
                messaggio: "Messaggio 2"
            },
            {
                nome: "Samuele",
                avatar: "img/avatar_3.jpg",
                messaggio: "Messaggio 3"
            },
            {
                nome: "Luisa",
                avatar: "img/avatar_4.jpg",
                messaggio: "Messaggio 4"
            },
        ]
    }
});
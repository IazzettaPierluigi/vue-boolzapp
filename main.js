const {
  createApp
} = Vue
createApp({
  data() {
      return {
          contacts: [{
                  name: 'Michele',
                  avatar: '_1',
                  visible: true,
                  messages: [{
                          date: '10/01/2020 15:30:55',
                          message: 'Hai portato a spasso il cane?',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Ricordati di dargli da mangiare',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 16:15:22',
                          message: 'Tutto fatto!',
                          status: 'received'
                      }
                  ],
              },
              {
                  name: 'Fabio',
                  avatar: '_2',
                  visible: true,
                  messages: [{
                          date: '20/03/2020 16:30:00',
                          message: 'Ciao come stai?',
                          status: 'sent'
                      },
                      {
                          date: '20/03/2020 16:30:55',
                          message: 'Bene grazie! Stasera ci vediamo?',
                          status: 'received'
                      },
                      {
                          date: '20/03/2020 16:35:00',
                          message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                          status: 'received'
                      }
                  ],
              },
              {
                  name: 'Samuele',
                  avatar: '_3',
                  visible: true,
                  messages: [{
                          date: '28/03/2020 10:10:40',
                          message: 'La Marianna va in campagna',
                          status: 'received'
                      },
                      {
                          date: '28/03/2020 10:20:10',
                          message: 'Sicuro di non aver sbagliato chat?',
                          status: 'sent'
                      },
                      {
                          date: '28/03/2020 16:15:22',
                          message: 'Ah scusa!',
                          status: 'received'
                      }
                  ],
              },
              {
                  name: 'Luisa',
                  avatar: '_4',
                  visible: true,
                  messages: [{
                          date: '10/01/2020 15:30:55',
                          message: 'Lo sai che ha aperto una nuova pizzeria?',
                          status: 'sent'
                      },
                      {
                          date: '10/01/2020 15:50:00',
                          message: 'Si, ma preferirei andare al cinema',
                          status: 'received'
                      }
                  ],
              },
          ],
          activeChat: 0,
          newText: '',

      }

  },
  mounted() {
      // console.log('Hello');
  },
  methods: {
      selectChat(index){
        this.activeChat = index;
      },

      addMessage(){
        if (this.newText.trim() !== '') {
          const currentTime = new Date();
          const currentHour = currentTime.getHours();
          const currentMinutes = currentTime.getMinutes();
          const formattedTime = `${currentHour}:${currentMinutes}`;

          this.contacts[this.activeChat].messages.push({
            date: formattedTime,
            message: this.newText,
            status: 'sent'
            });
            this.newText = '';

            setTimeout(() => {
                this.contacts[this.activeChat].messages.push({
                    date: formattedTime,
                    message: 'Ok',
                    status: 'received'
                });
            }, 1000);

           
            
        }
    },

         //funzione per la searchbar 
         searchName() {
            if (this.searchText.trim() !== '') {
                this.contacts.forEach(element => {
                    if (element.name.toLowerCase().includes(this.searchText.toLowerCase())) {
                        element.visible = true;
                    } else {
                        element.visible = false;
                    }
                });
            } else {
                // Se la stringa di ricerca è vuota, mantieni tutti i contatti visibili
                this.contacts.forEach(element => {
                    element.visible = true;
                });
            }
        },
  }
}, ).mount('#app')
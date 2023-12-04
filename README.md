# Applicazione MaxCoach Vue.js

Il file principale è `App.vue` per la nostra applicazione Vue.js. L'applicazione è organizzata in tre componenti principali: l'header, il corpo centrale e il piè di pagina. Utilizziamo anche `reactive` per la gestione dello stato attraverso il nostro store.

## Struttura dei Componenti

### AppHeader.vue
Il componente `AppHeader` è responsabile per la visualizzazione dell'header dell'applicazione. Riceve i dati del menu dallo dallo store e passa al genitore `App.vue` una prop "menu" come Object per la visualizzazione. 

### AppMain.vue
Il componente `AppMain` rappresenta il corpo centrale dell'applicazione. Questo è il luogo dove verrà visualizzato il contenuto principale dell'applicazione.

### AppFooter.vue
Il componente `AppFooter` rappresenta il piè di pagina dell'applicazione. In questa sezione, possiamo inserire informazioni aggiuntive o collegamenti utili.

## Store
Utilizziamo `reactive` come gestore dello stato dell'applicazione. All'interno del nostro store, abbiamo un oggetto `menu` che contiene le informazioni necessarie per costruire il menu dell'header.

## Stili
Per quanto riguarda gli stili, stiamo utilizzando SCSS per mantenere il nostro codice CSS organizzato. Inoltre, abbiamo integrato Bootstrap versione 5.3.2 nel nostro progetto per sfruttare i componenti e gli stili predefiniti forniti dal framework.

Abbiamo anche importato FontAwesome per utilizzare icone nel nostro progetto. FontAwesome aggiunge una vasta gamma di icone scalabili, cioè ridimensionabili senza perdita di qualità, che possono essere facilmente integrate nei nostri componenti.





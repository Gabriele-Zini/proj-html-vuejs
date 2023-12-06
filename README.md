# Applicazione MaxCoach Vue.js

Il file principale è `App.vue` per la nostra applicazione Vue.js. L'applicazione è organizzata in tre componenti principali: l'header, il corpo centrale e il piè di pagina. Utilizziamo anche `reactive` per la gestione dello stato attraverso il nostro store.

## Struttura dei Componenti Principali


1. ### AppHeader.vue:
   Il componente AppHeader comprende la navbar che contiene il logo e gli elementi del menu. La sezione hero è anche inclusa nella parte superiore dell'header. Il componente utilizza props per ricevere dati dinamici come il menu e i dettagli hero dallo store.

2. ### AppMain.vue:
   Il componente `AppMain` rappresenta il corpo centrale dell'applicazione. Questo è il luogo dove verrà visualizzato il contenuto principale dell'applicazione.

3. ### AppFooter.vue
   Il componente `AppFooter` rappresenta il piè di pagina dell'applicazione. In questa sezione, possiamo inserire informazioni aggiuntive o collegamenti utili.

4. ### Componenti riutilizzati
   I componenti riutilizzati sono AppCard e AppButton e sono stati pensati per essere il più neutri possibili ai fini della riutilizzazione.
   - #### AppCard: 
        AppCard è stato riutilizzata in tre contesti di questa Vue app: nella `blog section`, nella `online courses section` e come sotto componente di `AppBook.vue`. Le criticità di poter adattare questo componente sono state risolte utilizzando, a seconda dei contesti e degli elementi dinamici della card, tre diverse soluzioni
          1. classi dinamiche con il v-bind `:class=""` per applicare dinamicamente gli stili.
          2. con la direttiva `v-if` per settare la condizione dell'elemento del template nel caso in cui esista (o meno) quell'elemento nella struttura dati richiamata.
          3. con una `props` booleana. 
   

```javascript
<script>


<template>
    <div v-for="(item, index) in appCard" :key="index" class="card col-3 p-0 ms_card-4"
        :class="{ 'ms_card col-md-4': item.price, 'd-none': item.title && shouldHide(item, index) }">

        <!-- Effetto hover con icone -->
        <div v-if="hasHover" class="ms_hover flex-column gap-3">
            <a href=""><i class="fa-solid fa-magnifying-glass"></i></a>
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
            <a href=""><i class="fa-regular fa-heart"></i></a>
            <a href=""><i class="fa-solid fa-signal"></i></a>
        </div>

        <!-- Immagine della card -->
        <img :src="getImage(item.imgPath)" class="card-img-top " alt="...">

        <!-- Contenuto della card -->
        <div class="card-body p-0 mt-4" :class="{ 'px-4': item.price }">
            <!-- Data della card -->
            <p class="ms_paragraph-color" v-if="item.date">
                <i class="fa-regular fa-calendar me-2 overtitle"></i>{{ item.date }}
            </p>

            <!-- Titolo della card -->
            <h5 class="card-title ms_title" v-if="item.title" :class="{ 'text-center ms_title-color': hasHover }">
                {{ item.title }}
            </h5>

            <!-- Prezzo della card -->
            <div v-if="item.price" :class="{ 'text-center mb-5': hasHover }">
                <span class="ms_price-before-decimal">{{ Math.floor(item.price) }}</span>
                <span class="ms_price-after-decimal">
                    .{{ (item.price % 1).toFixed(2).slice(2) }}
                </span>
            </div>

            <!-- Paragrafo della card -->
            <p v-if="item.paragraph" class="card-text ms_paragraph"
                :class="{'ms_paragraph-color mt-4': item.date}">
                {{ getShortenedParagraph(item.paragraph) }}
            </p>

            <!-- Informazioni aggiuntive sulla card -->
            <div v-if="item.numberLesson && item.numberStudent" class="d-flex justify-content-between">
                <p><i class="fa-regular fa-file-lines me-2"></i> {{ item.numberLesson }} Lessons</p>
                <p><i class="fa-regular fa-user me-2"></i> {{ item.numberStudent }} Students</p>
            </div>
        </div>
    </div>

    <!-- Bottone per mostrare/nascondere tutti i post: possiamo decidere se utilizzarlo o meno con la prop booleana hasButton -->
    <div v-if="hasButton">
        <div v-if="!showAllPosts" @click="toggleAllPosts(index)" class="ms_all-posts-button" href="">
            view all posts
        </div>
        <div v-else @click="toggleAllPosts(index)" class="ms_all-posts-button" href="">
            less posts
        </div>
    </div>
</template>
```
- #### AppButton:
    Il secondo elemento riutilizzabile è un `AppButton`. La riutilizzabilità è facilitata da tre `props`: 
    - buttonText per rendere dinamico e flessibile il testo del button, 
    -  href, nel caso in cui il button serva per accedere ad un altra area della applicazione web.
    -  isArrow, una props booleana per inserire o meno una freccia, con l'icona di fontawesome, all'interno del corpo del bottone.
   

## Store
Utilizziamo `reactive` come gestore dello stato dell'applicazione. La politica di storage dei dati globali è volta ad inserire nello store, oltre ai menu del footer e dell'header, solo i dati da stampare in pagina che, presumibilmente, saranno ottenuti con una richiesta al server. Ai fini della presentazione di questa Vue app i dati da stampare sono stati inseriti manualmente nello store e richiamati dai varii componenti tramite props da passare al componente genitore.


## Stili
Per quanto riguarda gli stili, stiamo utilizzando SCSS per mantenere il nostro codice CSS organizzato. Inoltre, abbiamo integrato Bootstrap versione 5.3.2 nel nostro progetto per sfruttare i componenti e gli stili predefiniti forniti dal framework.

Abbiamo anche importato FontAwesome per utilizzare icone nel nostro progetto. FontAwesome aggiunge una vasta gamma di icone scalabili, cioè ridimensionabili senza perdita di qualità, che possono essere facilmente integrate nei nostri componenti.





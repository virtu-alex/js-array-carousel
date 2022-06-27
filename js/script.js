/*Creato un array contenente una lista di cinque immagini tra quelle fornite, creare un carosello ispirandoci alle foto in allegato.
(non è necessario che la grafica sia IDENTICA alla traccia, non bloccatevi su questo, date un aspetto decente e concentriamoci sulla logica.
Cerchiamo di lavorare seguendo i seguenti step in ordine:

MILESTONE 1

Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

MILESTONE 2

Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for. Possiamo concatenare una stringa con un template literal oppure utilizzare gli altri metodi di manipolazione del DOM che abbiamo visto insieme. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

*/
// CREO UN ARRAY
const sources = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];
// prendo elemento carousel dal DOM
const carousel = document.getElementById('carousel');
// per ogni elemento nell array... 
const thumbnailContainer = document.getElementById('thumbnail');

for (let i = 0; i < sources.length; i++) {
    // creo un elemento con tag img
    const img = document.createElement('img');
    // assegno all 'attributo src dell'elemento i-esimo dell'array
    img.setAttribute('src', sources[i]);
    // inserisco nell'elemento carousel l'immagine appena creata
    carousel.append(img);

    const thumbImage = document.createElement('img');

    thumbImage.setAttribute('src', sources[i]);

    thumbnailContainer.append(thumbImage);
}







// AZIONE 1.1 CREO UN ARRAY CHE CONTENGA LE IMMAGINI


// AZIONE 1.2 RECUPERO TRAMITE QUERYSELECTOR LE IMMAGINI

const myImages = document.querySelectorAll('#gallery img');

const templateImg = `<img src="${sources[0]}"/>`

// AZIONE 2 CREO UNA VARIABILE D'APPOGGIO CHE VALUTI LA POSIZIONE ATTUALE

let currentActiveIndex = 0;

// AZIONE 3 TRAMITE CLASSLIST.ADD AGGIUNGO ACTIVE ALLA MIA PRIMA IMMAGINE

myImages[currentActiveIndex].classList.add('active');

// AZIONE 4 RECUPERO I BOTTONI DALL'HTML

const btnNext = document.getElementById('next');
const btnPrev = document.getElementById('previous');


/* MILESTONE 3

Al click dell'utente sulle frecce, l'immagine attiva cambia e diventa visibile nello slider, prendendo il posto della precedente. /*

/* AZIONE 5 EVENT LISTNER BOTTONE NEXT CON CONTROLLO A FINE GIRO*/

btnNext.addEventListener('click', function () {

    myImages[currentActiveIndex].classList.remove('active');

    currentActiveIndex++;
    // CONTROLLO
    if (currentActiveIndex > sources.length - 1) {

        currentActiveIndex = 0;
    }
    myImages[currentActiveIndex].classList.add('active');
});

// AZIONE 6 EVENT LISTNER BOTTONE PREVIOUS CON CONTROLLO A FINE GIRO

btnPrev.addEventListener('click', function () {
    myImages[currentActiveIndex].classList.remove('active');

    currentActiveIndex--;
    // CONTROLLO  
    if (currentActiveIndex < 0) {

        currentActiveIndex = sources.length - 1;
    }

    myImages[currentActiveIndex].classList.add('active');
});



/*



BONUS 1:

Aggiungere il ciclo infinito del carosello. Ovvero se l' immagine attiva è la prima e l'utente clicca la freccia per andare indietro, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso avanti, deve attivarsi la prima immgine.*/






//BONUS 2:

/*Creiamo delle miniature di tutte le immagni, in cui dovrà apparire in evidenza l’immagine equivalente a quella attiva, scegliete liberamente se scurire le altre immagini oppure se evidenziarla semplicemente con un bordo. Tra queste miniature, quella corrispondente all'immagine attiva deve evidenziarsi, scegliete voi l'effetto estetico, potete colorarla diversamente rispetto alle altre o aggiungere un semplice bordo.
Prima di partire a scrivere codice:
Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche settimana la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.

Consigli del giorno:

1. Costruiamo del carosello una versione statica contenente un'immagine grande con del testo ben posizionato e una miniatura. Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
2. Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
3. Al momento giusto (starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"*/


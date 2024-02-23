
let mailUtente = prompt('Inserisci qui la tua mail');
console.log('mailUtente'); /* stampa email inserita dall'utente */

/* esito della verifica */
let stampa = 'non sei in lista'


// array con mail in lista
let mailAccetate =['marco@gmail.com' ,'ugo@gmail.com' , 'mario@gmail.com'];
console.log(mailAccetate);
// console.log(mailAccetate[0]);
// console.log(mailAccetate[1]);
// console.log(mailAccetate[2]);

/* verifico se l'utente è in lista con un ciclo for */

for (let i = 0; i < mailAccetate.length; i++){
  if (mailUtente === mailAccetate[i]){
    stampa = 'benvenuto'
  }
}

document.querySelector('.container-a').innerHTML+=`
<div class= "container ${stampa}">${stampa} </div>`;




// variabili scope per verificare se utente è in lista
// if (mailUtente === mailAccettate[0]){ 
//   stampa = 'benvenuto';
// } 
// else {
//   stampa= 'non sei nella lista';
// }

// if (mailUtente === mailAccettate[1]){ 
//   stampa = 'benvenuto';
// } 
// else {
//   stampa= 'non sei nella lista';
// }

// if (mailUtente === mailAccettate[2]){ 
//   stampa = 'benvenuto';
// } 
// else {
//   stampa= 'non sei nella lista';
// }

// let mailAccetate = document.getElementById('mail-Accettate');
// for(let i = 0; i < 4; i++){
//   if(mailUtente === mailAccettate[ ]){ 
//     console.log(i)
//     stampa = 'benvenuto';
//     console.log(mailAccetate)
//   }
// }




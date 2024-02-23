const containerMail= document.getElementById('container-a');

let mailUtente = prompt('Inserisci qui la tua mail');
console.log('mailUtente');

const mailAccettate = document.getElementById('mail-Accettate');

let mailAccetate =['ciao@gmail.com' ,'ugo@gmail.com' , 'mario@gmail.com']
console.log(mail);

if (mailUtente === mailAccettate){ 
  stampa = 'benvenuto';
} 
else {
  stampa= 'non sei nella lista';
}

document.querySelector('container-a').innerHTML +=`
<div class="container ${}
`

// containerMail.innerHTML += `
// <div class="container ${stampa}">${stampa}</div>
// `

// let mailAccetate = document.getElementById ('mail')

// let mailUtente = prompt('inserisci la tua mail');
// console.log

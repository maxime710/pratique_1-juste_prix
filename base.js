

var nb1 = Math.floor(Math.random()*100 );

var nb2 = document.getElementById('nombre');

var result = document.getElementById('resultat');

var stocK = document.getElementById('stock');

var essaie = 10;

var compteur = document.getElementById('compteur');

console.log(nb1);

function P()
{
    var nomBressaie = document.createElement('p');
    stocK.appendChild(nomBressaie);
    nomBressaie.innerHTML = nb2.value;

    if (essaie === 0)
    {
        P();
    }

}

document.getElementById('btn').addEventListener('click' ,function C() {

    essaie = essaie-1;

    compteur.innerHTML= essaie;

     if (essaie=== 0)
     {
         alert('c est perdu trou du cul !');
         essaie = 10;
     }

     if (nb2.value < nb1)
    {
        result.innerHTML = 'trop chère pour toi !';
        alert('plus !');
        P();

    } else if (nb2.value == nb1)
    {
        result.innerHTML = 'bravo ta gagné le droit de rejoué !';
        alert('gagné !');
        P();


    } else  if (nb2.value > nb1)
    {
        result.innerHTML = 'tu vas te faire douillé !';
        alert('moins ! ');
       P();
    }



});




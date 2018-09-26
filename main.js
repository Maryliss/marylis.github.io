function mypopup() {
    alert('Hey le site xxxvidsxxx est trop bien. Viens dessus stp please');
    }
    setTimeout(mypopup, 10000);

//mon bouton
var mybutton = document.getElementById('bouton');
// récupération des paragraphes
var bluepara = document.getElementById('para');
//récupération des titres
var greenhead = document.getElementById('titres');

    mybutton.onclick = function psycho (){
//je veux que mon script modifie le style des paragraphes de cette façon:
bluepara.style.color = #0054E6;
bluepara.style.fontFamily = 'Papyrus';

//je veux que mon script modifie le style des paragraphes de cette façon:
greenhead.style.color = #00E673;
greenhead.style.fontFamily = 'Comic Sans';
}

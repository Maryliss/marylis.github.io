document.getElementById("bouton").onclick = function () {
    var headings1 = document.getElementsByTagName('h1');
    var i;
    for (i = 0; i < headings1.length; i++) {
    headings1[i].style.color = "#00FF00";
    headings1[i].style.fontFamily = 'comic_sans_msregular';
    }
    var headings2 = document.getElementsByTagName('h2');
    var i;
    for (i = 0; i < headings2.length; i++) {
    headings2[i].style.color = "#00FF00";
    headings2[i].style.fontFamily = 'comic_sans_msregular';
    }
    var headings3 = document.getElementsByTagName('h3');
    var i;
    for (i = 0; i < headings3.length; i++) {
    headings3[i].style.color = "#00FF00";
    headings3[i].style.fontFamily = 'comic_sans_msregular';
    }
    var paragraphes = document.getElementsByTagName('p');
    var i;
    for (i = 0; i < paragraphes.length; i++) {
    paragraphes[i].style.color = "#009fff";
    paragraphes[i].style.fontFamily = 'papyrus';
    }
    document.body.style.backgroundColor = "#FF00FF";
}

var xxx = 'Hey le site xxxvidsxxx est trop bien. Tu viens?';
var wtf = 'Are you crazy?';

function popUp() {
    if (confirm(xxx)) {
       window.open("http://www.youtube.com/watch?v=dQw4w9WgXcQ")
    } else {
        (alert(wtf));}
}
setTimeout(popUp,10000);
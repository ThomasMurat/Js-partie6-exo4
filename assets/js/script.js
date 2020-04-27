let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi','Dimanche'];
var y = days.length - 1;
for(i = 0; i <= y; i++) {
    if ((days[i] == 'Samedi') || (days[i] == 'Dimanche')) {
        var p = document.createElement('P');
        p.innerHTML = days[i];
        p.style.fontWeight = 'bold';
        document.body.appendChild(p);
    }else {
        var p = document.createElement('P');
        p.innerHTML = days[i];
        document.body.appendChild(p);
    }
}
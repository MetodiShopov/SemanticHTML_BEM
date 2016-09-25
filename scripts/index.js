function dropDown(clickedId){
    "use strict";
    document.getElementById(clickedId).classList.toggle('active');
    document.getElementById(clickedId).childNodes[1].classList.toggle('show');
}
window.onclick = function(e) {
    if (!e.target.matches('.dropDown')) {

        let dropdowns = document.getElementsByClassName("dropDown__content");
        for (let i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

function selectLang(id){
    "use strict";
    let languages = document.getElementById('lang-menu').getElementsByTagName('li');
    for (let i = 0; i < languages.length; i++) {
        languages[i].childNodes[0].style.opacity = '0.3';
    }
    document.getElementById(id).style.opacity = '1';
}
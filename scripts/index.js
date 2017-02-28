window.onload = function () {
    "use strict";

    // Navigation DropDown function
    let allDropDowns = document.querySelectorAll(".dropDown");
    allDropDowns.forEach(drops => drops.addEventListener('click', function(){
        this.classList.toggle("active");
        this.childNodes[1].classList.toggle('show');
    }));

    //Language selection function
    let allLanguageFlags = document.querySelectorAll('.nav__language > img');
    allLanguageFlags.forEach(element => element.addEventListener('click', function () {
            allLanguageFlags.forEach(img => img.classList.remove('selected'));
            this.classList.add('selected');
        })
    );
};
function openGallery(evt, galleryName) {
    // Declare all variables
    var i, gallery, tab;

    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
        tab[i].className = tab[i].className.replace(" active", "");
    }

    gallery = document.getElementsByClassName("gallery");
    for (i = 0; i < gallery.length; i++) {
        gallery[i].style.display = "none";
    }

    document.getElementById(galleryName).style.display = "flex";
    evt.currentTarget.className += " active";
}

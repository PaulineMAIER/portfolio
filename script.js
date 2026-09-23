function openTab(evt, tabName) {
    // 1. On cache tout le contenu des onglets
    let tabcontent = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // 2. On retire la couleur bleue (active) de tous les boutons
    let tablinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // 3. On affiche le contenu sélectionné et on allume le bouton cliqué
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

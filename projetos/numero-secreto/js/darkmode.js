const darkmodeButton = document.querySelector('[data-type=dark-mode')
var darkmode = JSON.parse(localStorage.getItem('darkmode')) || false

if (darkmode == true) {
    document.body.classList.add('dark-mode');
}

darkmodeButton.onclick = () => {
    document.body.classList.toggle('dark-mode')
    darkmode = !darkmode;
    localStorage.setItem("darkmode", JSON.stringify(darkmode));

}


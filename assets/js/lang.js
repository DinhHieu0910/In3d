function loadLanguage(lang) {
    document.body.lang = lang;
    localStorage.setItem('language', lang);

    let flagSrcEn = document.getElementById('flag-en').src;
    let flagSrcVi = document.getElementById('flag-vi').src;
    document.getElementById('current-flag').src = lang == 'en' ? flagSrcEn : flagSrcVi;
    document.getElementById('flag-options').style.display = 'none';
}

document.getElementById('current-flag').addEventListener('mouseover', () => {
    document.getElementById('flag-options').style.display = 'flex';
});

document.getElementById('languageSwitch').addEventListener('mouseleave', () => {
    document.getElementById('flag-options').style.display = 'none';
});

document.getElementById('flag-en').addEventListener('click', () => {
    loadLanguage('en');
});

document.getElementById('flag-vi').addEventListener('click', () => {
    loadLanguage('vi');
});

document.addEventListener('DOMContentLoaded', function() {
    let language = localStorage.getItem('language');
    if (language) loadLanguage(language);
});
function loadLanguage(lang, flagSrc) {
    document.body.lang = lang
    document.getElementById('current-flag').src = flagSrc;
    document.getElementById('flag-options').style.display = 'none';
}

document.getElementById('current-flag').addEventListener('mouseover', () => {
    document.getElementById('flag-options').style.display = 'flex';
});

document.getElementById('languageSwitch').addEventListener('mouseleave', () => {
    document.getElementById('flag-options').style.display = 'none';
});

document.getElementById('flag-en').addEventListener('click', () => {
    loadLanguage('en', 'assets/resource/img/lang_en.png');
});

document.getElementById('flag-vi').addEventListener('click', () => {
    loadLanguage('vi', 'assets/resource/img/lang_vi.png');
});
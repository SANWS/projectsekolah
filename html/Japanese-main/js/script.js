const hiraganaGroups = {
    a: ['あ', 'い', 'う', 'え', 'お'],
    ka: ['か', 'き', 'く', 'け', 'こ'],
    sa: ['さ', 'し', 'す', 'せ', 'そ'],
    ta: ['た', 'ち', 'つ', 'て', 'と'],
    na: ['な', 'に', 'ぬ', 'ね', 'の'],
    ha: ['は', 'ひ', 'ふ', 'へ', 'ほ'],
    ma: ['ま', 'み', 'む', 'め', 'も'],
    ya: ['や', 'ゆ', 'よ'],
    ra: ['ら', 'り', 'る', 'れ', 'ろ'],
    wa: ['わ', 'を']
};

document.getElementById('generate-button').addEventListener('click', function() {
    const selectedGroups = Array.from(document.querySelectorAll('input[name="group"]:checked')).map(el => el.value);
    const selectedLanguage = document.getElementById('language').value;

    let selectedHiragana = [];
    selectedGroups.forEach(group => {
        selectedHiragana = selectedHiragana.concat(hiraganaGroups[group]);
    });

    if (selectedHiragana.length === 0) {
        document.getElementById('result').innerText = 'Please select at least one group.';
        return;
    }

    const randomHiragana = selectedHiragana[Math.floor(Math.random() * selectedHiragana.length)];

    let result = randomHiragana;

    if (selectedLanguage === 'id') {
        result = translateToIndonesian(randomHiragana);
    }

    document.getElementById('result').innerText = result;
});

function translateToIndonesian(hiragana) {
    const translationMap = {
        'あ': 'a', 'い': 'i', 'う': 'u', 'え': 'e', 'お': 'o',
        'か': 'ka', 'き': 'ki', 'く': 'ku', 'け': 'ke', 'こ': 'ko',
        'さ': 'sa', 'し': 'shi', 'す': 'su', 'せ': 'se', 'そ': 'so',
        'た': 'ta', 'ち': 'chi', 'つ': 'tsu', 'て': 'te', 'と': 'to',
        'な': 'na', 'に': 'ni', 'ぬ': 'nu', 'ね': 'ne', 'の': 'no',
        'は': 'ha', 'ひ': 'hi', 'ふ': 'fu', 'へ': 'he', 'ほ': 'ho',
        'ま': 'ma', 'み': 'mi', 'む': 'mu', 'め': 'me', 'も': 'mo',
        'や': 'ya', 'ゆ': 'yu', 'よ': 'yo',
        'ら': 'ra', 'り': 'ri', 'る': 'ru', 'れ': 're', 'ろ': 'ro',
        'わ': 'wa', 'を': 'wo'
    };

    return hiragana.split(' ').map(h => translationMap[h] || h).join(' ');
}

//apa ya ini, kalau gak salah buat nandain navbar aktif
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-item');

    navLinks.forEach(link => {
        if (currentLocation.includes(link.getAttribute('href').split('.')[0])) {
            link.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const infoIcon = document.querySelector('.info-icon');
    const tooltip = document.querySelector('.tooltip');

    infoIcon.addEventListener('click', function(event) {
        event.stopPropagation();
        if (tooltip.style.display === 'block') {
            tooltip.style.display = 'none';
            infoIcon.classList.remove('active');
        } else {
            tooltip.style.display = 'block';
            infoIcon.classList.add('active');
        }
    });

    document.addEventListener('click', function() {
        if (tooltip.style.display === 'block') {
            tooltip.style.display = 'none';
            infoIcon.classList.remove('active');
        }
    });
});

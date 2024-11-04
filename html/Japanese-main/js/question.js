document.addEventListener('DOMContentLoaded', function() {
    const katakanaDatabase = [
        { character: 'ア', romaji: 'A' }, { character: 'イ', romaji: 'I' },
        { character: 'ウ', romaji: 'U' }, { character: 'エ', romaji: 'E' },
        { character: 'オ', romaji: 'O' }, { character: 'カ', romaji: 'Ka' },
        { character: 'キ', romaji: 'Ki' }, { character: 'ク', romaji: 'Ku' },
        { character: 'ケ', romaji: 'Ke' }, { character: 'コ', romaji: 'Ko' },
        { character: 'サ', romaji: 'Sa' }, { character: 'シ', romaji: 'Shi' },
        { character: 'ス', romaji: 'Su' }, { character: 'セ', romaji: 'Se' },
        { character: 'ソ', romaji: 'So' }, { character: 'タ', romaji: 'Ta' },
        { character: 'チ', romaji: 'Chi' }, { character: 'ツ', romaji: 'Tsu' },
        { character: 'テ', romaji: 'Te' }, { character: 'ト', romaji: 'To' },
        { character: 'ナ', romaji: 'Na' }, { character: 'ニ', romaji: 'Ni' },
        { character: 'ヌ', romaji: 'Nu' }, { character: 'ネ', romaji: 'Ne' },
        { character: 'ノ', romaji: 'No' }, { character: 'ハ', romaji: 'Ha' },
        { character: 'ヒ', romaji: 'Hi' }, { character: 'フ', romaji: 'Fu' },
        { character: 'ヘ', romaji: 'He' }, { character: 'ホ', romaji: 'Ho' },
        { character: 'マ', romaji: 'Ma' }, { character: 'ミ', romaji: 'Mi' },
        { character: 'ム', romaji: 'Mu' }, { character: 'メ', romaji: 'Me' },
        { character: 'モ', romaji: 'Mo' }, { character: 'ヤ', romaji: 'Ya' },
        { character: 'ユ', romaji: 'Yu' }, { character: 'ヨ', romaji: 'Yo' },
        { character: 'ラ', romaji: 'Ra' }, { character: 'リ', romaji: 'Ri' },
        { character: 'ル', romaji: 'Ru' }, { character: 'レ', romaji: 'Re' },
        { character: 'ロ', romaji: 'Ro' }, { character: 'ワ', romaji: 'Wa' },
        { character: 'ヲ', romaji: 'Wo' }, { character: 'ン', romaji: 'N' }
    ];

    const hiraganaDatabase = [
        { character: 'あ', romaji: 'A' }, { character: 'い', romaji: 'I' },
        { character: 'う', romaji: 'U' }, { character: 'え', romaji: 'E' },
        { character: 'お', romaji: 'O' }, { character: 'か', romaji: 'Ka' },
        { character: 'き', romaji: 'Ki' }, { character: 'く', romaji: 'Ku' },
        { character: 'け', romaji: 'Ke' }, { character: 'こ', romaji: 'Ko' },
        { character: 'さ', romaji: 'Sa' }, { character: 'し', romaji: 'Shi' },
        { character: 'す', romaji: 'Su' }, { character: 'せ', romaji: 'Se' },
        { character: 'そ', romaji: 'So' }, { character: 'た', romaji: 'Ta' },
        { character: 'ち', romaji: 'Chi' }, { character: 'つ', romaji: 'Tsu' },
        { character: 'て', romaji: 'Te' }, { character: 'と', romaji: 'To' },
        { character: 'な', romaji: 'Na' }, { character: 'に', romaji: 'Ni' },
        { character: 'ぬ', romaji: 'Nu' }, { character: 'ね', romaji: 'Ne' },
        { character: 'の', romaji: 'No' }, { character: 'は', romaji: 'Ha' },
        { character: 'ひ', romaji: 'Hi' }, { character: 'ふ', romaji: 'Fu' },
        { character: 'へ', romaji: 'He' }, { character: 'ほ', romaji: 'Ho' },
        { character: 'ま', romaji: 'Ma' }, { character: 'み', romaji: 'Mi' },
        { character: 'む', romaji: 'Mu' }, { character: 'め', romaji: 'Me' },
        { character: 'も', romaji: 'Mo' }, { character: 'や', romaji: 'Ya' },
        { character: 'ゆ', romaji: 'Yu' }, { character: 'よ', romaji: 'Yo' },
        { character: 'ら', romaji: 'Ra' }, { character: 'り', romaji: 'Ri' },
        { character: 'る', romaji: 'Ru' }, { character: 'れ', romaji: 'Re' },
        { character: 'ろ', romaji: 'Ro' }, { character: 'わ', romaji: 'Wa' },
        { character: 'を', romaji: 'Wo' }, { character: 'ん', romaji: 'N' }
    ];

    let currentCharacter = '';
    let currentAnswer = '';
    let countdownInterval;
    const countdownTime = 3;

    function getRandomElement(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    function generateQuestion() {
        const charType = document.getElementById('character-type').value;
        const questionType = document.getElementById('question-type').value;
        const database = charType === 'hiragana' ? hiraganaDatabase : katakanaDatabase;

        const item = getRandomElement(database);
        currentCharacter = item.character;
        currentAnswer = item.romaji;

        document.getElementById('character-display').textContent = currentCharacter;

        let options = [currentAnswer];
        while (options.length < 3) {
            const randomOption = getRandomElement(database).romaji;
            if (!options.includes(randomOption)) {
                options.push(randomOption);
            }
        }

        options = options.sort(() => Math.random() - 0.5); 

        document.getElementById('option1').textContent = options[0];
        document.getElementById('option2').textContent = options[1];
        document.getElementById('option3').textContent = options[2];

        document.querySelectorAll('.option-btn').forEach(button => {
            button.onclick = function() {
                if (this.textContent === currentAnswer) {
                    document.getElementById('feedback').textContent = 'Correct!';
                    document.getElementById('feedback').classList.add('correct');
                    startCountdown();
                } else {
                    document.getElementById('feedback').textContent = 'Wrong! Try again.';
                    document.getElementById('feedback').classList.remove('correct');
                }
                document.getElementById('feedback').classList.remove('hidden');
            };
        });
    }

    function startCountdown() {
        let timeLeft = countdownTime;
        document.getElementById('countdown').textContent = `Next question in ${timeLeft} seconds`;
        document.getElementById('countdown').classList.remove('hidden');

        countdownInterval = setInterval(() => {
            timeLeft -= 1;
            document.getElementById('countdown').textContent = `Next question in ${timeLeft} seconds`;
            if (timeLeft <= 0) {
                clearInterval(countdownInterval);
                document.getElementById('countdown').classList.add('hidden');
                generateQuestion();
            }
        }, 1000);
    }

    document.getElementById('next-question').addEventListener('click', generateQuestion);

    generateQuestion();
});

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');
const themeToggle = document.getElementById('theme-toggle');

// 다크모드 상태 복원
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';

    const numbers = new Set();
    while (numbers.size < 7) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const allNumbers = Array.from(numbers);
    const mainNumbers = allNumbers.slice(0, 6).sort((a, b) => a - b);
    const bonusNumber = allNumbers[6];

    // 메인 번호 6개 출력
    mainNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getColor(number);
        lottoNumbersContainer.appendChild(ball);
    });

    // 구분자
    const separator = document.createElement('div');
    separator.classList.add('separator');
    separator.textContent = '+';
    lottoNumbersContainer.appendChild(separator);

    // 보너스 번호
    const bonusWrapper = document.createElement('div');
    bonusWrapper.classList.add('bonus-wrapper');

    const bonusLabel = document.createElement('span');
    bonusLabel.classList.add('bonus-label');
    bonusLabel.textContent = '보너스';

    const bonusBall = document.createElement('div');
    bonusBall.classList.add('lotto-ball', 'bonus');
    bonusBall.textContent = bonusNumber;
    bonusBall.style.backgroundColor = getColor(bonusNumber);

    bonusWrapper.appendChild(bonusBall);
    bonusWrapper.appendChild(bonusLabel);
    lottoNumbersContainer.appendChild(bonusWrapper);
});

function getColor(number) {
    if (number <= 10) return '#f9c941';
    if (number <= 20) return '#2a9d8f';
    if (number <= 30) return '#e76f51';
    if (number <= 40) return '#f4a261';
    return '#6a11cb';
}

const generateBtn = document.getElementById('generate-btn');
const lottoNumbersContainer = document.getElementById('lotto-numbers');

generateBtn.addEventListener('click', () => {
    lottoNumbersContainer.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
        numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    sortedNumbers.forEach(number => {
        const ball = document.createElement('div');
        ball.classList.add('lotto-ball');
        ball.textContent = number;
        ball.style.backgroundColor = getColor(number);
        lottoNumbersContainer.appendChild(ball);
    });
});

function getColor(number) {
    if (number <= 10) return '#f9c941'; // yellow
    if (number <= 20) return '#2a9d8f'; // teal
    if (number <= 30) return '#e76f51'; // coral
    if (number <= 40) return '#f4a261'; // sandy brown
    return '#6a11cb'; // purple
}

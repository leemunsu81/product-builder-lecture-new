const MENUS = [
    { name: '삼겹살', emoji: '🥓', category: 'korean', situations: ['together', 'dine-out'], tags: ['한식', '구이', '회식'], desc: '두툼한 삼겹살에 쌈 채소, 된장찌개까지!' },
    { name: '치킨', emoji: '🍗', category: 'chicken', situations: ['solo', 'together', 'delivery'], tags: ['치킨', '배달', '야식'], desc: '바삭한 후라이드? 달콤한 양념? 선택은 자유!' },
    { name: '짜장면', emoji: '🍜', category: 'chinese', situations: ['solo', 'delivery'], tags: ['중식', '배달', '간편'], desc: '달짝지근한 짜장 소스가 생각나는 날!' },
    { name: '초밥', emoji: '🍣', category: 'japanese', situations: ['together', 'dine-out'], tags: ['일식', '신선', '특식'], desc: '신선한 회와 식초 밥의 환상적인 조화' },
    { name: '파스타', emoji: '🍝', category: 'western', situations: ['solo', 'together', 'dine-out'], tags: ['양식', '이탈리안', '로맨틱'], desc: '크리미한 까르보나라, 상큼한 토마토 중 선택!' },
    { name: '떡볶이', emoji: '🍢', category: 'snack', situations: ['solo', 'delivery', 'dine-out'], tags: ['분식', '매콤', '간식'], desc: '매콤달콤 빨간 소스에 쫄깃한 떡!' },
    { name: '라멘', emoji: '🍜', category: 'japanese', situations: ['solo', 'dine-out'], tags: ['일식', '국물', '야식'], desc: '진한 돈코츠 국물에 탱글탱글 면' },
    { name: '피자', emoji: '🍕', category: 'chicken', situations: ['together', 'delivery'], tags: ['피자', '배달', '파티'], desc: '치즈가 쭉 늘어나는 화덕 피자 어때요?' },
    { name: '갈비탕', emoji: '🍖', category: 'korean', situations: ['solo', 'dine-out'], tags: ['한식', '보양식', '국물'], desc: '진하고 구수한 갈비탕 한 그릇' },
    { name: '초밥', emoji: '🍱', category: 'japanese', situations: ['delivery', 'solo'], tags: ['일식', '배달', '간편'], desc: '깔끔하게 도시락 스시로!' },
    { name: '부대찌개', emoji: '🥘', category: 'korean', situations: ['together', 'dine-out'], tags: ['한식', '찌개', '회식'], desc: '햄, 소시지, 라면이 들어간 푸짐한 찌개' },
    { name: '우동', emoji: '🍜', category: 'japanese', situations: ['solo', 'dine-out'], tags: ['일식', '국물', '담백'], desc: '쫄깃한 면발에 담백한 우동 국물' },
    { name: '햄버거', emoji: '🍔', category: 'western', situations: ['solo', 'delivery', 'dine-out'], tags: ['양식', '패스트푸드', '간편'], desc: '두꺼운 패티가 들어간 수제 버거!' },
    { name: '순두부찌개', emoji: '🥣', category: 'korean', situations: ['solo', 'dine-out'], tags: ['한식', '찌개', '담백'], desc: '부드러운 순두부에 얼큰한 국물' },
    { name: '마라탕', emoji: '🌶️', category: 'chinese', situations: ['together', 'dine-out', 'delivery'], tags: ['중식', '마라', '매운맛'], desc: '저릿하고 얼얼한 마라 향이 중독적!' },
    { name: '돈가스', emoji: '🍱', category: 'japanese', situations: ['solo', 'dine-out'], tags: ['일식', '바삭', '정식'], desc: '두꺼운 돈가스에 소스 듬뿍!' },
    { name: '김치찌개', emoji: '🫕', category: 'korean', situations: ['solo', 'dine-out'], tags: ['한식', '찌개', '집밥'], desc: '묵은 김치로 끓인 구수한 찌개' },
    { name: '스테이크', emoji: '🥩', category: 'western', situations: ['together', 'dine-out'], tags: ['양식', '특식', '고기'], desc: '미디엄 레어로 구운 육즙 가득 스테이크' },
    { name: '쌀국수', emoji: '🍜', category: 'western', situations: ['solo', 'dine-out'], tags: ['쌀국수', '베트남', '담백'], desc: '깔끔한 쌀국수에 숙주와 라임을 곁들여' },
    { name: '족발', emoji: '🍖', category: 'korean', situations: ['together', 'delivery'], tags: ['한식', '야식', '배달'], desc: '쫄깃한 족발에 소주 한 잔!' },
    { name: '탄탄면', emoji: '🍜', category: 'chinese', situations: ['solo', 'dine-out'], tags: ['중식', '매운맛', '고소'], desc: '고소하고 매콤한 참깨 소스 탄탄면' },
    { name: '해산물파스타', emoji: '🦐', category: 'western', situations: ['together', 'dine-out'], tags: ['양식', '해산물', '데이트'], desc: '새우, 오징어가 가득한 봉골레 스타일' },
    { name: '냉면', emoji: '🍜', category: 'korean', situations: ['solo', 'dine-out'], tags: ['한식', '시원', '여름'], desc: '시원하고 새콤달콤한 물냉면' },
    { name: '비빔밥', emoji: '🥗', category: 'korean', situations: ['solo', 'dine-out'], tags: ['한식', '건강식', '간편'], desc: '고추장 쭉 넣고 쓱쓱 비벼먹는 비빔밥' },
];

let selectedCategory = 'all';
let selectedSituation = 'all';
const history = [];

const themeToggle = document.getElementById('theme-toggle');
const pickBtn = document.getElementById('pick-btn');
const rerollBtn = document.getElementById('reroll-btn');
const cardPlaceholder = document.getElementById('card-placeholder');
const cardResult = document.getElementById('card-result');
const resultCard = document.getElementById('result-card');
const historyEl = document.getElementById('history');
const historyList = document.getElementById('history-list');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.getElementById('category-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#category-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCategory = btn.dataset.value;
});

document.getElementById('situation-filters').addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    document.querySelectorAll('#situation-filters .filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedSituation = btn.dataset.value;
});

function getFiltered() {
    return MENUS.filter(m => {
        const catOk = selectedCategory === 'all' || m.category === selectedCategory;
        const sitOk = selectedSituation === 'all' || m.situations.includes(selectedSituation);
        return catOk && sitOk;
    });
}

function pickMenu() {
    const filtered = getFiltered();
    if (filtered.length === 0) {
        showResult({ name: '해당 없음', emoji: '😅', tags: [], desc: '조건을 바꿔서 다시 시도해보세요!' });
        return;
    }
    const menu = filtered[Math.floor(Math.random() * filtered.length)];
    showResult(menu);
    addHistory(menu);
}

function showResult(menu) {
    cardPlaceholder.classList.add('hidden');
    cardResult.classList.remove('hidden');
    resultCard.classList.add('revealed');

    cardResult.style.animation = 'none';
    void cardResult.offsetWidth;
    cardResult.style.animation = '';

    document.getElementById('food-emoji').textContent = menu.emoji;
    document.getElementById('food-name').textContent = menu.name;
    document.getElementById('food-tags').innerHTML = menu.tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('food-desc').textContent = menu.desc;

    rerollBtn.classList.remove('hidden');
}

function addHistory(menu) {
    if (history.length >= 5) history.shift();
    history.push(menu);
    historyEl.classList.remove('hidden');
    historyList.innerHTML = history.map(m =>
        `<span class="history-item">${m.emoji} ${m.name}</span>`
    ).join('');
}

pickBtn.addEventListener('click', pickMenu);
rerollBtn.addEventListener('click', pickMenu);

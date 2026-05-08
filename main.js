const STRINGS = {
    ko: {
        title: '🍽️ 오늘 저녁 뭐 먹지?',
        subtitle: '고민 끝! 메뉴를 골라드릴게요',
        categoryLabel: '카테고리',
        situationLabel: '상황',
        placeholderText: '버튼을 눌러<br>오늘 저녁을 결정하세요!',
        pickBtn: '🎲 메뉴 뽑기!',
        rerollBtn: '🔄 다시 뽑기',
        historyTitle: '최근 추천 기록',
        commentsTitle: '💬 댓글',
        rpsLinkTitle: '✊ 얼굴 가위바위보 테스트',
        rpsLinkDesc: 'AI로 내 얼굴상 분석하기 →',
        noResult: '해당 없음',
        noResultDesc: '조건을 바꿔서 다시 시도해보세요!',
        'cat.all': '전체', 'cat.korean': '한식 🇰🇷', 'cat.chinese': '중식 🥢',
        'cat.japanese': '일식 🍱', 'cat.western': '양식 🍝',
        'cat.snack': '분식 🍢', 'cat.chicken': '치킨/피자 🍕',
        'sit.all': '전체', 'sit.solo': '혼밥 🧍', 'sit.together': '같이 먹기 👨‍👩‍👧',
        'sit.delivery': '배달 🛵', 'sit.dineOut': '외식 🚶',
    },
    en: {
        title: '🍽️ What\'s for Dinner Tonight?',
        subtitle: 'No more indecision — let us pick your meal!',
        categoryLabel: 'Category',
        situationLabel: 'Situation',
        placeholderText: 'Press the button<br>to decide tonight\'s dinner!',
        pickBtn: '🎲 Pick a Meal!',
        rerollBtn: '🔄 Try Again',
        historyTitle: 'Recent Picks',
        commentsTitle: '💬 Comments',
        rpsLinkTitle: '✊ Rock Paper Scissors Face Test',
        rpsLinkDesc: 'Analyze your face vibe with AI →',
        noResult: 'No Match',
        noResultDesc: 'Try changing the filters!',
        'cat.all': 'All', 'cat.korean': 'Korean 🇰🇷', 'cat.chinese': 'Chinese 🥢',
        'cat.japanese': 'Japanese 🍱', 'cat.western': 'Western 🍝',
        'cat.snack': 'Street Food 🍢', 'cat.chicken': 'Chicken/Pizza 🍕',
        'sit.all': 'All', 'sit.solo': 'Solo 🧍', 'sit.together': 'Together 👨‍👩‍👧',
        'sit.delivery': 'Delivery 🛵', 'sit.dineOut': 'Dine Out 🚶',
    },
};

const MENUS = [
    {
        name: '삼겹살', nameEn: 'Samgyeopsal (Pork Belly BBQ)',
        emoji: '🥓', category: 'korean', situations: ['together', 'dine-out'],
        tags: ['한식', '구이', '회식'], tagsEn: ['Korean', 'BBQ', 'Social'],
        desc: '두툼한 삼겹살에 쌈 채소, 된장찌개까지!',
        descEn: 'Thick grilled pork belly with fresh wraps and doenjang jjigae!',
    },
    {
        name: '치킨', nameEn: 'Fried Chicken',
        emoji: '🍗', category: 'chicken', situations: ['solo', 'together', 'delivery'],
        tags: ['치킨', '배달', '야식'], tagsEn: ['Chicken', 'Delivery', 'Late Night'],
        desc: '바삭한 후라이드? 달콤한 양념? 선택은 자유!',
        descEn: 'Crispy fried or sweet glazed — the choice is yours!',
    },
    {
        name: '짜장면', nameEn: 'Jajangmyeon (Black Bean Noodles)',
        emoji: '🍜', category: 'chinese', situations: ['solo', 'delivery'],
        tags: ['중식', '배달', '간편'], tagsEn: ['Chinese', 'Delivery', 'Easy'],
        desc: '달짝지근한 짜장 소스가 생각나는 날!',
        descEn: 'Sweet savory black bean sauce over thick noodles.',
    },
    {
        name: '초밥', nameEn: 'Sushi',
        emoji: '🍣', category: 'japanese', situations: ['together', 'dine-out'],
        tags: ['일식', '신선', '특식'], tagsEn: ['Japanese', 'Fresh', 'Special'],
        desc: '신선한 회와 식초 밥의 환상적인 조화',
        descEn: 'Fresh fish over perfectly seasoned vinegar rice.',
    },
    {
        name: '파스타', nameEn: 'Pasta',
        emoji: '🍝', category: 'western', situations: ['solo', 'together', 'dine-out'],
        tags: ['양식', '이탈리안', '로맨틱'], tagsEn: ['Western', 'Italian', 'Romantic'],
        desc: '크리미한 까르보나라, 상큼한 토마토 중 선택!',
        descEn: 'Creamy carbonara or zesty tomato — pick your style!',
    },
    {
        name: '떡볶이', nameEn: 'Tteokbokki (Spicy Rice Cake)',
        emoji: '🍢', category: 'snack', situations: ['solo', 'delivery', 'dine-out'],
        tags: ['분식', '매콤', '간식'], tagsEn: ['Street Food', 'Spicy', 'Snack'],
        desc: '매콤달콤 빨간 소스에 쫄깃한 떡!',
        descEn: 'Chewy rice cakes in sweet and spicy red sauce.',
    },
    {
        name: '라멘', nameEn: 'Ramen',
        emoji: '🍜', category: 'japanese', situations: ['solo', 'dine-out'],
        tags: ['일식', '국물', '야식'], tagsEn: ['Japanese', 'Soup', 'Late Night'],
        desc: '진한 돈코츠 국물에 탱글탱글 면',
        descEn: 'Rich tonkotsu broth with springy noodles.',
    },
    {
        name: '피자', nameEn: 'Pizza',
        emoji: '🍕', category: 'chicken', situations: ['together', 'delivery'],
        tags: ['피자', '배달', '파티'], tagsEn: ['Pizza', 'Delivery', 'Party'],
        desc: '치즈가 쭉 늘어나는 화덕 피자 어때요?',
        descEn: 'Wood-fired pizza with gloriously stretchy cheese.',
    },
    {
        name: '갈비탕', nameEn: 'Galbitang (Short Rib Soup)',
        emoji: '🍖', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '보양식', '국물'], tagsEn: ['Korean', 'Hearty', 'Soup'],
        desc: '진하고 구수한 갈비탕 한 그릇',
        descEn: 'Rich, savory beef short rib soup.',
    },
    {
        name: '부대찌개', nameEn: 'Budae Jjigae (Army Stew)',
        emoji: '🥘', category: 'korean', situations: ['together', 'dine-out'],
        tags: ['한식', '찌개', '회식'], tagsEn: ['Korean', 'Stew', 'Social'],
        desc: '햄, 소시지, 라면이 들어간 푸짐한 찌개',
        descEn: 'Hearty stew loaded with ham, sausage, and instant noodles.',
    },
    {
        name: '우동', nameEn: 'Udon',
        emoji: '🍜', category: 'japanese', situations: ['solo', 'dine-out'],
        tags: ['일식', '국물', '담백'], tagsEn: ['Japanese', 'Soup', 'Mild'],
        desc: '쫄깃한 면발에 담백한 우동 국물',
        descEn: 'Thick chewy noodles in a light, clear broth.',
    },
    {
        name: '햄버거', nameEn: 'Hamburger',
        emoji: '🍔', category: 'western', situations: ['solo', 'delivery', 'dine-out'],
        tags: ['양식', '패스트푸드', '간편'], tagsEn: ['Western', 'Fast Food', 'Quick'],
        desc: '두꺼운 패티가 들어간 수제 버거!',
        descEn: 'Juicy thick patty in a handcrafted burger.',
    },
    {
        name: '순두부찌개', nameEn: 'Sundubu Jjigae (Soft Tofu Stew)',
        emoji: '🥣', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '찌개', '담백'], tagsEn: ['Korean', 'Stew', 'Comfort'],
        desc: '부드러운 순두부에 얼큰한 국물',
        descEn: 'Silky soft tofu in a spicy, comforting broth.',
    },
    {
        name: '마라탕', nameEn: 'Malatang (Spicy Hot Pot)',
        emoji: '🌶️', category: 'chinese', situations: ['together', 'dine-out', 'delivery'],
        tags: ['중식', '마라', '매운맛'], tagsEn: ['Chinese', 'Mala', 'Fiery'],
        desc: '저릿하고 얼얼한 마라 향이 중독적!',
        descEn: 'Numbing, tingling mala spice that keeps you coming back.',
    },
    {
        name: '돈가스', nameEn: 'Tonkatsu (Pork Cutlet)',
        emoji: '🍱', category: 'japanese', situations: ['solo', 'dine-out'],
        tags: ['일식', '바삭', '정식'], tagsEn: ['Japanese', 'Crispy', 'Set Meal'],
        desc: '두꺼운 돈가스에 소스 듬뿍!',
        descEn: 'Thick, crispy breaded pork cutlet with savory sauce.',
    },
    {
        name: '김치찌개', nameEn: 'Kimchi Jjigae (Kimchi Stew)',
        emoji: '🫕', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '찌개', '집밥'], tagsEn: ['Korean', 'Stew', 'Home Style'],
        desc: '묵은 김치로 끓인 구수한 찌개',
        descEn: 'Savory stew made with well-fermented kimchi.',
    },
    {
        name: '스테이크', nameEn: 'Steak',
        emoji: '🥩', category: 'western', situations: ['together', 'dine-out'],
        tags: ['양식', '특식', '고기'], tagsEn: ['Western', 'Special', 'Meat'],
        desc: '미디엄 레어로 구운 육즙 가득 스테이크',
        descEn: 'Juicy medium-rare steak seared to perfection.',
    },
    {
        name: '쌀국수', nameEn: 'Pho (Vietnamese Noodle Soup)',
        emoji: '🍜', category: 'western', situations: ['solo', 'dine-out'],
        tags: ['쌀국수', '베트남', '담백'], tagsEn: ['Vietnamese', 'Light', 'Noodles'],
        desc: '깔끔한 쌀국수에 숙주와 라임을 곁들여',
        descEn: 'Clean rice noodle soup with bean sprouts and lime.',
    },
    {
        name: '족발', nameEn: 'Jokbal (Braised Pork Hock)',
        emoji: '🍖', category: 'korean', situations: ['together', 'delivery'],
        tags: ['한식', '야식', '배달'], tagsEn: ['Korean', 'Late Night', 'Delivery'],
        desc: '쫄깃한 족발에 소주 한 잔!',
        descEn: 'Tender braised pork hock — pairs great with soju.',
    },
    {
        name: '탄탄면', nameEn: 'Dan Dan Noodles',
        emoji: '🍜', category: 'chinese', situations: ['solo', 'dine-out'],
        tags: ['중식', '매운맛', '고소'], tagsEn: ['Chinese', 'Spicy', 'Nutty'],
        desc: '고소하고 매콤한 참깨 소스 탄탄면',
        descEn: 'Nutty sesame sauce over noodles with a spicy kick.',
    },
    {
        name: '해산물파스타', nameEn: 'Seafood Pasta',
        emoji: '🦐', category: 'western', situations: ['together', 'dine-out'],
        tags: ['양식', '해산물', '데이트'], tagsEn: ['Western', 'Seafood', 'Date Night'],
        desc: '새우, 오징어가 가득한 봉골레 스타일',
        descEn: 'Shrimp and squid in a light white wine clam sauce.',
    },
    {
        name: '냉면', nameEn: 'Naengmyeon (Cold Noodles)',
        emoji: '🍜', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '시원', '여름'], tagsEn: ['Korean', 'Cold', 'Refreshing'],
        desc: '시원하고 새콤달콤한 물냉면',
        descEn: 'Icy cold noodles in a sweet and tangy broth.',
    },
    {
        name: '비빔밥', nameEn: 'Bibimbap (Mixed Rice Bowl)',
        emoji: '🥗', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '건강식', '간편'], tagsEn: ['Korean', 'Healthy', 'Bowl'],
        desc: '고추장 쭉 넣고 쓱쓱 비벼먹는 비빔밥',
        descEn: 'Colorful rice bowl mixed with gochujang — healthy and satisfying.',
    },
];

let selectedCategory = 'all';
let selectedSituation = 'all';
let lang = localStorage.getItem('lang') || 'ko';
let lastMenu = null;
const history = [];

const themeToggle = document.getElementById('theme-toggle');
const langToggle = document.getElementById('lang-toggle');
const pickBtn = document.getElementById('pick-btn');
const rerollBtn = document.getElementById('reroll-btn');
const cardPlaceholder = document.getElementById('card-placeholder');
const cardResult = document.getElementById('card-result');
const resultCard = document.getElementById('result-card');
const historyEl = document.getElementById('history');
const historyList = document.getElementById('history-list');

// --- Theme ---
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '☀️';
}
themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeToggle.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// --- Language ---
function applyLang() {
    const s = STRINGS[lang];
    document.documentElement.lang = lang;
    document.title = lang === 'ko' ? '오늘 저녁 뭐 먹지?' : "What's for Dinner?";
    langToggle.textContent = lang === 'ko' ? 'EN' : 'KO';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (s[key] !== undefined) el.innerHTML = s[key];
    });

    if (lastMenu) showResult(lastMenu, false);
    if (history.length) renderHistory();
}

langToggle.addEventListener('click', () => {
    lang = lang === 'ko' ? 'en' : 'ko';
    localStorage.setItem('lang', lang);
    applyLang();
});

// --- Filters ---
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

// --- Pick ---
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
        const s = STRINGS[lang];
        showResult({ name: s.noResult, nameEn: s.noResult, emoji: '😅', tags: [], tagsEn: [], desc: s.noResultDesc, descEn: s.noResultDesc }, false);
        return;
    }
    const menu = filtered[Math.floor(Math.random() * filtered.length)];
    showResult(menu, true);
    addHistory(menu);
}

function showResult(menu, animate) {
    lastMenu = menu;
    cardPlaceholder.classList.add('hidden');
    cardResult.classList.remove('hidden');
    resultCard.classList.add('revealed');

    if (animate) {
        cardResult.style.animation = 'none';
        void cardResult.offsetWidth;
        cardResult.style.animation = '';
    }

    const name = lang === 'ko' ? menu.name : menu.nameEn;
    const tags = lang === 'ko' ? menu.tags : menu.tagsEn;
    const desc = lang === 'ko' ? menu.desc : menu.descEn;

    document.getElementById('food-emoji').textContent = menu.emoji;
    document.getElementById('food-name').textContent = name;
    document.getElementById('food-tags').innerHTML = tags.map(t => `<span class="tag">${t}</span>`).join('');
    document.getElementById('food-desc').textContent = desc;

    rerollBtn.classList.remove('hidden');
}

function renderHistory() {
    historyList.innerHTML = history.map(m =>
        `<span class="history-item">${m.emoji} ${lang === 'ko' ? m.name : m.nameEn}</span>`
    ).join('');
}

function addHistory(menu) {
    if (history.length >= 5) history.shift();
    history.push(menu);
    historyEl.classList.remove('hidden');
    renderHistory();
}

pickBtn.addEventListener('click', pickMenu);
rerollBtn.addEventListener('click', pickMenu);

applyLang();

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
        locationLabel: '📍 내 동네',
        locateBtn: '📍 현재 위치',
        detectingLocation: '📍 위치 감지 중...',
        restaurantBtn: '📍 근처 맛집 찾기',
        restaurantAlert: '동네를 입력하면 더 정확한 맛집을 찾을 수 있어요!\n(입력 없이도 검색됩니다)',
        recommendTitle: '✅ 이런 분들에게 추천해요',
        recommend1: '🤔 매일 저녁마다 "뭐 먹지?" 고민하는 분',
        recommend2: '👨‍👩‍👧 가족·친구와 메뉴 결정으로 실랑이하는 분',
        recommend3: '🛵 배달 앱 켜도 뭘 시킬지 모르겠는 분',
        recommend4: '🧍 혼밥 메뉴를 빠르게 정하고 싶은 분',
        howToTitle: '📖 사용 방법',
        howTo1: '원하는 <strong>카테고리</strong>(한식·중식 등)와 <strong>상황</strong>(혼밥·배달 등)을 선택하세요.',
        howTo2: '<strong>🎲 메뉴 뽑기!</strong> 버튼을 누르면 조건에 맞는 메뉴가 바로 나옵니다.',
        howTo3: '마음에 안 들면 <strong>🔄 다시 뽑기</strong>로 새 메뉴를 받으세요.',
        recipeTitle: '📋 만드는 방법',
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
        locationLabel: '📍 My Neighborhood',
        locateBtn: '📍 Use Location',
        detectingLocation: '📍 Detecting...',
        restaurantBtn: '📍 Find Nearby Restaurants',
        restaurantAlert: 'Enter your neighborhood for better results!\n(You can also search without it)',
        recommendTitle: '✅ Recommended For You',
        recommend1: '🤔 Anyone who asks "What\'s for dinner?" every single day',
        recommend2: '👨‍👩‍👧 Families or friends who can\'t agree on a meal',
        recommend3: '🛵 Anyone who opens a delivery app and still can\'t decide',
        recommend4: '🧍 Solo diners who want a quick, no-fuss decision',
        howToTitle: '📖 How to Use',
        howTo1: 'Select a <strong>Category</strong> (Korean, Chinese, etc.) and a <strong>Situation</strong> (Solo, Delivery, etc.).',
        howTo2: 'Press <strong>🎲 Pick a Meal!</strong> and a matching menu will appear instantly.',
        howTo3: 'Not feeling it? Hit <strong>🔄 Try Again</strong> for a new pick.',
        recipeTitle: '📋 How to Make',
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
        recipe: ['그릴 또는 불판을 충분히 달군다.', '삼겹살을 올려 앞뒤로 노릇하게 굽는다.', '상추·깻잎에 마늘, 쌈장과 함께 싸서 먹는다.', '된장찌개를 곁들이면 금상첨화!'],
        recipeEn: ['Heat a grill pan or tabletop grill until very hot.', 'Cook pork belly slices until golden brown on both sides.', 'Wrap in lettuce or perilla with garlic and ssamjang.', 'Serve with doenjang jjigae for a complete meal!'],
    },
    {
        name: '치킨', nameEn: 'Fried Chicken',
        emoji: '🍗', category: 'chicken', situations: ['solo', 'together', 'delivery'],
        tags: ['치킨', '배달', '야식'], tagsEn: ['Chicken', 'Delivery', 'Late Night'],
        desc: '바삭한 후라이드? 달콤한 양념? 선택은 자유!',
        descEn: 'Crispy fried or sweet glazed — the choice is yours!',
        recipe: ['닭을 한입 크기로 잘라 소금·후추로 밑간한다.', '전분과 밀가루를 1:1로 섞어 튀김옷을 입힌다.', '170°C 기름에 두 번 튀겨 바삭하게 만든다.', '양념치킨은 고추장·간장·물엿 소스에 버무린다.'],
        recipeEn: ['Cut chicken into pieces and season with salt and pepper.', 'Coat with a 1:1 mix of starch and flour.', 'Double-fry in 170°C oil for maximum crispiness.', 'For glazed chicken, toss in gochujang, soy sauce, and corn syrup sauce.'],
    },
    {
        name: '짜장면', nameEn: 'Jajangmyeon (Black Bean Noodles)',
        emoji: '🍜', category: 'chinese', situations: ['solo', 'delivery'],
        tags: ['중식', '배달', '간편'], tagsEn: ['Chinese', 'Delivery', 'Easy'],
        desc: '달짝지근한 짜장 소스가 생각나는 날!',
        descEn: 'Sweet savory black bean sauce over thick noodles.',
        recipe: ['돼지고기·양파·감자를 깍둑썰기한다.', '기름에 춘장을 먼저 볶다가 재료를 넣어 함께 볶는다.', '물을 넣고 끓인 후 전분물로 농도를 조절한다.', '삶은 중면 위에 올리고 오이채를 얹어 낸다.'],
        recipeEn: ['Dice pork, onion, and potato into small cubes.', 'Stir-fry chunjang (black bean paste) in oil, then add ingredients.', 'Add water, bring to a boil, and thicken with a starch slurry.', 'Serve over boiled noodles topped with julienned cucumber.'],
    },
    {
        name: '초밥', nameEn: 'Sushi',
        emoji: '🍣', category: 'japanese', situations: ['together', 'dine-out'],
        tags: ['일식', '신선', '특식'], tagsEn: ['Japanese', 'Fresh', 'Special'],
        desc: '신선한 회와 식초 밥의 환상적인 조화',
        descEn: 'Fresh fish over perfectly seasoned vinegar rice.',
        recipe: ['밥에 식초·설탕·소금을 섞어 식초밥을 만든다.', '생선을 결 반대로 얇게 저며 썬다.', '손에 물을 묻혀 밥을 타원형으로 꼭 쥔다.', '생선을 올리고 와사비·간장을 곁들여 낸다.'],
        recipeEn: ['Mix cooked rice with rice vinegar, sugar, and salt.', 'Slice fish thinly against the grain.', 'Wet your hands and shape rice into small oval mounds.', 'Top with fish and serve with wasabi and soy sauce.'],
    },
    {
        name: '파스타', nameEn: 'Pasta',
        emoji: '🍝', category: 'western', situations: ['solo', 'together', 'dine-out'],
        tags: ['양식', '이탈리안', '로맨틱'], tagsEn: ['Western', 'Italian', 'Romantic'],
        desc: '크리미한 까르보나라, 상큼한 토마토 중 선택!',
        descEn: 'Creamy carbonara or zesty tomato — pick your style!',
        recipe: ['소금 넣은 끓는 물에 면을 알 덴테(약간 단단하게)로 삶는다.', '팬에 올리브오일과 다진 마늘을 향이 날 때까지 볶는다.', '크림소스: 생크림+파마산치즈 / 토마토소스: 토마토+바질로 만든다.', '면과 소스를 함께 볶으며 면수로 농도를 맞춘다.'],
        recipeEn: ['Boil pasta in well-salted water until al dente.', 'Sauté minced garlic in olive oil until fragrant.', 'Cream sauce: heavy cream + parmesan / Tomato: crushed tomatoes + basil.', 'Toss pasta with sauce, using pasta water to adjust consistency.'],
    },
    {
        name: '떡볶이', nameEn: 'Tteokbokki (Spicy Rice Cake)',
        emoji: '🍢', category: 'snack', situations: ['solo', 'delivery', 'dine-out'],
        tags: ['분식', '매콤', '간식'], tagsEn: ['Street Food', 'Spicy', 'Snack'],
        desc: '매콤달콤 빨간 소스에 쫄깃한 떡!',
        descEn: 'Chewy rice cakes in sweet and spicy red sauce.',
        recipe: ['멸치·다시마로 육수를 낸다.', '고추장·고춧가루·설탕·간장으로 양념장을 만든다.', '육수에 양념을 풀고 떡과 어묵을 넣어 끓인다.', '떡이 말랑해지고 소스가 걸쭉해지면 완성!'],
        recipeEn: ['Make a broth with dried anchovies and kelp.', 'Mix gochujang, chili flakes, sugar, and soy sauce for the sauce.', 'Dissolve sauce in broth, add rice cakes and fish cakes, and boil.', 'Cook until rice cakes are soft and sauce thickens — done!'],
    },
    {
        name: '라멘', nameEn: 'Ramen',
        emoji: '🍜', category: 'japanese', situations: ['solo', 'dine-out'],
        tags: ['일식', '국물', '야식'], tagsEn: ['Japanese', 'Soup', 'Late Night'],
        desc: '진한 돈코츠 국물에 탱글탱글 면',
        descEn: 'Rich tonkotsu broth with springy noodles.',
        recipe: ['돼지 뼈를 수시간 끓여 진한 돈코츠 육수를 낸다.', '간장·미림·사케로 타레(양념장)를 만든다.', '그릇에 타레를 먼저 담고 육수를 붓는다.', '삶은 면 위에 차슈·달걀·김·파를 올린다.'],
        recipeEn: ['Boil pork bones for hours to make a rich tonkotsu broth.', 'Make tare (seasoning base) with soy sauce, mirin, and sake.', 'Pour tare into a bowl first, then ladle in the hot broth.', 'Add noodles and top with chashu, soft-boiled egg, nori, and scallions.'],
    },
    {
        name: '피자', nameEn: 'Pizza',
        emoji: '🍕', category: 'chicken', situations: ['together', 'delivery'],
        tags: ['피자', '배달', '파티'], tagsEn: ['Pizza', 'Delivery', 'Party'],
        desc: '치즈가 쭉 늘어나는 화덕 피자 어때요?',
        descEn: 'Wood-fired pizza with gloriously stretchy cheese.',
        recipe: ['밀가루·이스트·소금·올리브오일로 도우를 반죽해 1시간 발효한다.', '도우를 얇게 펴고 토마토소스를 바른다.', '모차렐라 치즈와 원하는 토핑을 올린다.', '220°C 오븐에서 12~15분 굽는다.'],
        recipeEn: ['Make dough with flour, yeast, salt, and olive oil; let it rise 1 hour.', 'Roll dough thin and spread tomato sauce evenly.', 'Add mozzarella and your favorite toppings.', 'Bake at 220°C for 12–15 minutes until golden.'],
    },
    {
        name: '갈비탕', nameEn: 'Galbitang (Short Rib Soup)',
        emoji: '🍖', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '보양식', '국물'], tagsEn: ['Korean', 'Hearty', 'Soup'],
        desc: '진하고 구수한 갈비탕 한 그릇',
        descEn: 'Rich, savory beef short rib soup.',
        recipe: ['소갈비를 찬물에 1시간 담가 핏물을 뺀다.', '끓는 물에 한번 데쳐 불순물을 제거한다.', '새 물에 갈비·무·대파·마늘 넣고 1~2시간 끓인다.', '소금·후추로 간하고 대파·당면을 넣어 마무리한다.'],
        recipeEn: ['Soak beef short ribs in cold water for 1 hour to remove blood.', 'Blanch in boiling water, then discard the water.', 'Simmer ribs with radish, green onion, and garlic in fresh water for 1–2 hours.', 'Season with salt and pepper; add glass noodles to finish.'],
    },
    {
        name: '부대찌개', nameEn: 'Budae Jjigae (Army Stew)',
        emoji: '🥘', category: 'korean', situations: ['together', 'dine-out'],
        tags: ['한식', '찌개', '회식'], tagsEn: ['Korean', 'Stew', 'Social'],
        desc: '햄, 소시지, 라면이 들어간 푸짐한 찌개',
        descEn: 'Hearty stew loaded with ham, sausage, and instant noodles.',
        recipe: ['멸치 육수나 사골 육수를 준비한다.', '햄·소시지·김치·두부를 적당히 썬다.', '냄비에 육수를 붓고 고추장·고춧가루로 양념한다.', '모든 재료를 넣고 끓이다 라면 사리를 추가해 완성한다.'],
        recipeEn: ['Prepare anchovy or bone broth as the base.', 'Slice ham, sausage, kimchi, and tofu into pieces.', 'Season broth with gochujang and chili flakes, then bring to a boil.', 'Add all ingredients and finish with instant ramen noodles.'],
    },
    {
        name: '우동', nameEn: 'Udon',
        emoji: '🍜', category: 'japanese', situations: ['solo', 'dine-out'],
        tags: ['일식', '국물', '담백'], tagsEn: ['Japanese', 'Soup', 'Mild'],
        desc: '쫄깃한 면발에 담백한 우동 국물',
        descEn: 'Thick chewy noodles in a light, clear broth.',
        recipe: ['다시마와 가쓰오부시로 다시 육수를 낸다.', '간장·미림·소금으로 간을 맞춘다.', '굵은 우동 면을 끓는 물에 충분히 삶는다.', '면을 그릇에 담고 육수를 부어 파·튀김을 얹는다.'],
        recipeEn: ['Make dashi broth with kombu and bonito flakes.', 'Season with soy sauce, mirin, and salt.', 'Boil thick udon noodles until tender.', 'Place noodles in a bowl, pour broth over, and top with scallions and tempura.'],
    },
    {
        name: '햄버거', nameEn: 'Hamburger',
        emoji: '🍔', category: 'western', situations: ['solo', 'delivery', 'dine-out'],
        tags: ['양식', '패스트푸드', '간편'], tagsEn: ['Western', 'Fast Food', 'Quick'],
        desc: '두꺼운 패티가 들어간 수제 버거!',
        descEn: 'Juicy thick patty in a handcrafted burger.',
        recipe: ['다진 소고기에 소금·후추를 넣어 패티를 만든다.', '팬을 강불로 달궈 패티를 앞뒤로 굽는다.', '빵을 살짝 구워 소스·채소·패티 순으로 쌓는다.', '치즈를 패티 위에 올리면 치즈버거 완성!'],
        recipeEn: ['Mix ground beef with salt and pepper, then shape into patties.', 'Sear patties in a very hot pan until cooked through.', 'Toast bun, then layer sauce, veggies, and the patty.', 'Add a cheese slice while the patty is hot for a cheeseburger!'],
    },
    {
        name: '순두부찌개', nameEn: 'Sundubu Jjigae (Soft Tofu Stew)',
        emoji: '🥣', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '찌개', '담백'], tagsEn: ['Korean', 'Stew', 'Comfort'],
        desc: '부드러운 순두부에 얼큰한 국물',
        descEn: 'Silky soft tofu in a spicy, comforting broth.',
        recipe: ['멸치·다시마로 육수를 낸다.', '다진 돼지고기나 해산물에 고춧가루를 넣어 볶는다.', '육수를 붓고 끓기 시작하면 순두부를 숟가락으로 떠 넣는다.', '달걀을 깨 넣고 파를 올려 완성한다.'],
        recipeEn: ['Make an anchovy and kelp broth.', 'Stir-fry minced pork or seafood with chili flakes.', 'Add broth, bring to a boil, then spoon in soft tofu gently.', 'Crack in an egg and top with scallions to finish.'],
    },
    {
        name: '마라탕', nameEn: 'Malatang (Spicy Hot Pot)',
        emoji: '🌶️', category: 'chinese', situations: ['together', 'dine-out', 'delivery'],
        tags: ['중식', '마라', '매운맛'], tagsEn: ['Chinese', 'Mala', 'Fiery'],
        desc: '저릿하고 얼얼한 마라 향이 중독적!',
        descEn: 'Numbing, tingling mala spice that keeps you coming back.',
        recipe: ['두반장·화자오·고추를 기름에 볶아 마라 소스를 만든다.', '닭 육수나 사골 육수를 부어 끓인다.', '두부·어묵·버섯·채소 등 원하는 재료를 넣어 익힌다.', '땅콩소스를 곁들이면 더욱 풍부한 맛!'],
        recipeEn: ['Stir-fry doubanjiang, Sichuan peppercorn, and chili in oil.', 'Add chicken or bone broth and bring to a boil.', 'Add tofu, fish cakes, mushrooms, and vegetables of your choice.', 'Serve with a peanut dipping sauce for extra depth.'],
    },
    {
        name: '돈가스', nameEn: 'Tonkatsu (Pork Cutlet)',
        emoji: '🍱', category: 'japanese', situations: ['solo', 'dine-out'],
        tags: ['일식', '바삭', '정식'], tagsEn: ['Japanese', 'Crispy', 'Set Meal'],
        desc: '두꺼운 돈가스에 소스 듬뿍!',
        descEn: 'Thick, crispy breaded pork cutlet with savory sauce.',
        recipe: ['돼지 등심을 두드려 균일한 두께로 편다.', '밀가루 → 달걀물 → 빵가루 순으로 튀김옷을 입힌다.', '170°C 기름에 앞뒤로 노릇하게 튀긴다.', '돈가스 소스 또는 데미글라스 소스를 뿌려 낸다.'],
        recipeEn: ['Pound pork loin to an even thickness.', 'Coat in flour → beaten egg → panko breadcrumbs.', 'Deep-fry in 170°C oil until golden on both sides.', 'Serve with tonkatsu sauce or demi-glace sauce.'],
    },
    {
        name: '김치찌개', nameEn: 'Kimchi Jjigae (Kimchi Stew)',
        emoji: '🫕', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '찌개', '집밥'], tagsEn: ['Korean', 'Stew', 'Home Style'],
        desc: '묵은 김치로 끓인 구수한 찌개',
        descEn: 'Savory stew made with well-fermented kimchi.',
        recipe: ['묵은 김치를 송송 썬다.', '냄비에 참기름을 두르고 돼지고기와 김치를 볶는다.', '물을 부어 끓이다가 두부를 넣는다.', '고추장·고춧가루로 간하고 파를 올려 완성한다.'],
        recipeEn: ['Slice aged kimchi into bite-size pieces.', 'Stir-fry pork and kimchi in sesame oil.', 'Add water, bring to a boil, then add tofu.', 'Season with gochujang and chili flakes; top with scallions.'],
    },
    {
        name: '스테이크', nameEn: 'Steak',
        emoji: '🥩', category: 'western', situations: ['together', 'dine-out'],
        tags: ['양식', '특식', '고기'], tagsEn: ['Western', 'Special', 'Meat'],
        desc: '미디엄 레어로 구운 육즙 가득 스테이크',
        descEn: 'Juicy medium-rare steak seared to perfection.',
        recipe: ['스테이크를 실온에 30분 꺼내두어 온도를 올린다.', '팬을 강불로 달군 후 소금·후추를 뿌린 스테이크를 올린다.', '각 면을 2~3분씩 구워 미디엄 레어로 만든다.', '버터·마늘·로즈마리를 넣어 아로제하며 마무리한다.'],
        recipeEn: ['Bring steak to room temperature 30 minutes before cooking.', 'Heat pan over high heat; season steak with salt and pepper.', 'Sear 2–3 minutes per side for medium-rare.', 'Baste with butter, garlic, and rosemary to finish.'],
    },
    {
        name: '쌀국수', nameEn: 'Pho (Vietnamese Noodle Soup)',
        emoji: '🍜', category: 'western', situations: ['solo', 'dine-out'],
        tags: ['쌀국수', '베트남', '담백'], tagsEn: ['Vietnamese', 'Light', 'Noodles'],
        desc: '깔끔한 쌀국수에 숙주와 라임을 곁들여',
        descEn: 'Clean rice noodle soup with bean sprouts and lime.',
        recipe: ['소뼈나 닭뼈를 장시간 끓여 육수를 낸다.', '팔각·계피·생강을 넣어 향을 더한다.', '피시소스와 소금으로 간을 맞춘다.', '불린 쌀국수에 육수를 붓고 숙주·라임·고추를 곁들인다.'],
        recipeEn: ['Simmer beef or chicken bones for hours to build a deep broth.', 'Add star anise, cinnamon, and ginger for aroma.', 'Season with fish sauce and salt.', 'Pour hot broth over soaked rice noodles; serve with bean sprouts, lime, and chili.'],
    },
    {
        name: '족발', nameEn: 'Jokbal (Braised Pork Hock)',
        emoji: '🍖', category: 'korean', situations: ['together', 'delivery'],
        tags: ['한식', '야식', '배달'], tagsEn: ['Korean', 'Late Night', 'Delivery'],
        desc: '쫄깃한 족발에 소주 한 잔!',
        descEn: 'Tender braised pork hock — pairs great with soju.',
        recipe: ['돼지 족발을 깨끗이 씻어 핏물을 뺀다.', '간장·설탕·마늘·생강·팔각으로 양념 국물을 만든다.', '강불로 끓이다 약불로 줄여 1~2시간 조린다.', '한 김 식힌 후 썰어 새우젓·쌈 채소와 함께 낸다.'],
        recipeEn: ['Clean pork hocks thoroughly and soak to remove blood.', 'Make braising liquid with soy sauce, sugar, garlic, ginger, and star anise.', 'Bring to a boil, reduce heat, and braise for 1–2 hours.', 'Cool slightly, slice, and serve with salted shrimp dip and vegetables.'],
    },
    {
        name: '탄탄면', nameEn: 'Dan Dan Noodles',
        emoji: '🍜', category: 'chinese', situations: ['solo', 'dine-out'],
        tags: ['중식', '매운맛', '고소'], tagsEn: ['Chinese', 'Spicy', 'Nutty'],
        desc: '고소하고 매콤한 참깨 소스 탄탄면',
        descEn: 'Nutty sesame sauce over noodles with a spicy kick.',
        recipe: ['참깨 페이스트·간장·식초·고춧기름을 섞어 소스를 만든다.', '돼지 다짐육을 두반장과 함께 볶는다.', '면을 삶아 그릇에 담고 소스와 볶은 고기를 올린다.', '뜨거운 닭 육수를 붓고 잘 비벼 먹는다.'],
        recipeEn: ['Mix sesame paste, soy sauce, vinegar, and chili oil for the sauce.', 'Stir-fry ground pork with doubanjiang until fragrant.', 'Boil noodles, place in bowl, top with sauce and meat.', 'Pour hot chicken broth over and mix well before eating.'],
    },
    {
        name: '해산물파스타', nameEn: 'Seafood Pasta',
        emoji: '🦐', category: 'western', situations: ['together', 'dine-out'],
        tags: ['양식', '해산물', '데이트'], tagsEn: ['Western', 'Seafood', 'Date Night'],
        desc: '새우, 오징어가 가득한 봉골레 스타일',
        descEn: 'Shrimp and squid in a light white wine clam sauce.',
        recipe: ['마늘을 올리브오일에 볶다가 새우·오징어를 넣는다.', '화이트 와인을 넣어 잡내를 날린다.', '조개 육수나 면 삶은 물을 넣어 소스를 만든다.', '삶은 링귀니와 함께 볶아 파슬리를 뿌려 낸다.'],
        recipeEn: ['Sauté garlic in olive oil, then add shrimp and squid.', 'Deglaze with white wine to remove any fishiness.', 'Add clam broth or pasta water to build the sauce.', 'Toss with cooked linguine and finish with fresh parsley.'],
    },
    {
        name: '냉면', nameEn: 'Naengmyeon (Cold Noodles)',
        emoji: '🍜', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '시원', '여름'], tagsEn: ['Korean', 'Cold', 'Refreshing'],
        recipe: ['사골 또는 동치미 국물로 육수를 만들어 차갑게 식힌다.', '식초·겨자·설탕으로 새콤달콤하게 간한다.', '냉면 면을 삶아 찬물에 헹궈 쫄깃하게 만든다.', '육수를 붓고 수육·오이·달걀을 올려 낸다.'],
        recipeEn: ['Make cold broth from bone or dongchimi (radish) stock and chill well.', 'Season with vinegar, mustard, and sugar for a tangy balance.', 'Boil naengmyeon noodles and rinse in cold water for chewiness.', 'Pour broth over noodles and top with brisket, cucumber, and egg.'],
        desc: '시원하고 새콤달콤한 물냉면',
        descEn: 'Icy cold noodles in a sweet and tangy broth.',
    },
    {
        name: '비빔밥', nameEn: 'Bibimbap (Mixed Rice Bowl)',
        emoji: '🥗', category: 'korean', situations: ['solo', 'dine-out'],
        tags: ['한식', '건강식', '간편'], tagsEn: ['Korean', 'Healthy', 'Bowl'],
        desc: '고추장 쭉 넣고 쓱쓱 비벼먹는 비빔밥',
        descEn: 'Colorful rice bowl mixed with gochujang — healthy and satisfying.',
        recipe: ['시금치·콩나물·당근·버섯 등 나물을 각각 볶거나 무친다.', '소고기 다짐육을 간장·참기름으로 양념해 볶는다.', '그릇에 밥을 담고 나물·고기를 색깔별로 둘러 얹는다.', '달걀 프라이·고추장·참기름을 올리고 비벼 먹는다.'],
        recipeEn: ['Cook or season each vegetable (spinach, bean sprouts, carrot, mushrooms) separately.', 'Stir-fry ground beef seasoned with soy sauce and sesame oil.', 'Place rice in a bowl and arrange toppings colorfully around it.', 'Top with a fried egg, gochujang, and sesame oil; mix well and enjoy.'],
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
const restaurantBtn = document.getElementById('restaurant-btn');
const locationInput = document.getElementById('location-input');
const locateBtn = document.getElementById('locate-btn');
const cardPlaceholder = document.getElementById('card-placeholder');
const cardResult = document.getElementById('card-result');
const resultCard = document.getElementById('result-card');
const historyEl = document.getElementById('history');
const historyList = document.getElementById('history-list');

// persist location across sessions
if (localStorage.getItem('location')) {
    locationInput.value = localStorage.getItem('location');
}
locationInput.addEventListener('input', () => {
    localStorage.setItem('location', locationInput.value);
});

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
    document.title = lang === 'ko'
        ? '오늘 저녁 뭐 먹지? — 저녁 메뉴 추천 | 오늘의 선택'
        : "What's for Dinner Tonight? — Meal Recommendation | Today's Choice";
    langToggle.textContent = lang === 'ko' ? 'EN' : 'KO';

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (s[key] !== undefined) el.innerHTML = s[key];
    });

    const phKo = locationInput.dataset.placeholderKo;
    const phEn = locationInput.dataset.placeholderEn;
    locationInput.placeholder = lang === 'ko' ? phKo : phEn;

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

    const steps = lang === 'ko' ? menu.recipe : menu.recipeEn;
    const recipeSection = document.getElementById('recipe-section');
    const recipeSteps = document.getElementById('recipe-steps');
    if (steps && steps.length) {
        recipeSteps.innerHTML = steps.map(s => `<li><span>${s}</span></li>`).join('');
        recipeSection.style.display = '';
    } else {
        recipeSection.style.display = 'none';
    }

    restaurantBtn.classList.remove('hidden');
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

async function getNeighborhood() {
    return new Promise((resolve) => {
        if (!navigator.geolocation) { resolve(''); return; }
        navigator.geolocation.getCurrentPosition(
            async (pos) => {
                try {
                    const { latitude: lat, longitude: lng } = pos.coords;
                    const res = await fetch(
                        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=ko`,
                        { headers: { 'Accept-Language': 'ko' } }
                    );
                    const data = await res.json();
                    const addr = data.address || {};
                    const area = addr.suburb || addr.city_district || addr.borough || addr.town || addr.city || '';
                    resolve(area);
                } catch { resolve(''); }
            },
            () => resolve(''),
            { timeout: 8000 }
        );
    });
}

pickBtn.addEventListener('click', pickMenu);

locateBtn.addEventListener('click', async () => {
    const s = STRINGS[lang];
    locateBtn.textContent = s.detectingLocation;
    locateBtn.disabled = true;
    const area = await getNeighborhood();
    if (area) {
        locationInput.value = area;
        localStorage.setItem('location', area);
    }
    locateBtn.innerHTML = s.locateBtn;
    locateBtn.disabled = false;
});

restaurantBtn.addEventListener('click', async () => {
    if (!lastMenu) return;
    const menuName = lang === 'ko' ? lastMenu.name : lastMenu.nameEn;
    let location = locationInput.value.trim();

    if (!location) {
        const s = STRINGS[lang];
        restaurantBtn.textContent = s.detectingLocation;
        restaurantBtn.disabled = true;
        location = await getNeighborhood();
        if (location) {
            locationInput.value = location;
            localStorage.setItem('location', location);
        }
        restaurantBtn.innerHTML = s.restaurantBtn;
        restaurantBtn.disabled = false;
    }

    const query = location ? `${location} ${menuName} 맛집` : `${menuName} 맛집`;
    window.open(`https://map.naver.com/p/search/${encodeURIComponent(query)}`, '_blank');
});

applyLang();

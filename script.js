// 상품 데이터
const products = [
    // 하의 - 스커트
    {
        id: 1,
        name: '귀여운 플리츠 스커트',
        description: '사랑스러운 플리츠 디자인의 스커트예요',
        price: 39000,
        originalPrice: 59000,
        image: '👗',
        category: '의류',
        subCategory: '하의',
        subType: '스커트',
        badge: 'NEW'
    },
    {
        id: 13,
        name: '미니 플리츠 스커트',
        description: '짧고 귀여운 미니 플리츠 스커트',
        price: 35000,
        originalPrice: 55000,
        image: '👗',
        category: '의류',
        subCategory: '하의',
        subType: '스커트',
        badge: 'HOT'
    },
    {
        id: 14,
        name: 'A라인 스커트',
        description: '여성스러운 A라인 실루엣의 스커트',
        price: 45000,
        originalPrice: 69000,
        image: '👗',
        category: '의류',
        subCategory: '하의',
        subType: '스커트',
        badge: null
    },
    {
        id: 15,
        name: '체크 패턴 스커트',
        description: '트렌디한 체크 패턴이 들어간 스커트',
        price: 42000,
        originalPrice: 65000,
        image: '👗',
        category: '의류',
        subCategory: '하의',
        subType: '스커트',
        badge: 'SALE'
    },
    {
        id: 16,
        name: '플라워 프린트 스커트',
        description: '예쁜 꽃무늬가 프린트된 스커트',
        price: 48000,
        originalPrice: 72000,
        image: '👗',
        category: '의류',
        subCategory: '하의',
        subType: '스커트',
        badge: 'NEW'
    },
    // 하의 - 바지
    {
        id: 17,
        name: '슬림핏 슬랙스',
        description: '깔끔한 슬림핏 슬랙스',
        price: 55000,
        originalPrice: 85000,
        image: '👖',
        category: '의류',
        subCategory: '하의',
        subType: '바지',
        badge: 'HOT'
    },
    {
        id: 18,
        name: '와이드 팬츠',
        description: '편안한 와이드 실루엣의 팬츠',
        price: 62000,
        originalPrice: 95000,
        image: '👖',
        category: '의류',
        subCategory: '하의',
        subType: '바지',
        badge: 'NEW'
    },
    {
        id: 19,
        name: '데님 팬츠',
        description: '클래식한 데님 팬츠',
        price: 59000,
        originalPrice: 89000,
        image: '👖',
        category: '의류',
        subCategory: '하의',
        subType: '바지',
        badge: null
    },
    {
        id: 20,
        name: '카고 팬츠',
        description: '캐주얼한 카고 팬츠',
        price: 65000,
        originalPrice: 99000,
        image: '👖',
        category: '의류',
        subCategory: '하의',
        subType: '바지',
        badge: 'HOT'
    },
    // 하의 - 반바지
    {
        id: 21,
        name: '데님 쇼츠',
        description: '시원한 데님 쇼츠',
        price: 39000,
        originalPrice: 59000,
        image: '🩳',
        category: '의류',
        subCategory: '하의',
        subType: '반바지',
        badge: 'SALE'
    },
    {
        id: 22,
        name: '코튼 쇼츠',
        description: '편안한 코튼 소재의 쇼츠',
        price: 35000,
        originalPrice: 55000,
        image: '🩳',
        category: '의류',
        subCategory: '하의',
        subType: '반바지',
        badge: null
    },
    // 하의 - 레깅스
    {
        id: 23,
        name: '요가 레깅스',
        description: '편안한 요가 레깅스',
        price: 32000,
        originalPrice: 49000,
        image: '🧘',
        category: '의류',
        subCategory: '하의',
        subType: '레깅스',
        badge: 'HOT'
    },
    {
        id: 24,
        name: '하이웨이스트 레깅스',
        description: '배꼽까지 올라오는 하이웨이스트 레깅스',
        price: 38000,
        originalPrice: 58000,
        image: '🧘',
        category: '의류',
        subCategory: '하의',
        subType: '레깅스',
        badge: 'NEW'
    },
    // 상의 - 티셔츠
    {
        id: 25,
        name: '베이직 티셔츠',
        description: '심플한 베이직 티셔츠',
        price: 25000,
        originalPrice: 39000,
        image: 'tshirt-basic',
        category: '의류',
        subCategory: '상의',
        subType: '티셔츠',
        badge: 'SALE'
    },
    {
        id: 26,
        name: '그래픽 티셔츠',
        description: '귀여운 그래픽이 프린트된 티셔츠',
        price: 32000,
        originalPrice: 49000,
        image: 'tshirt-tank',
        category: '의류',
        subCategory: '상의',
        subType: '티셔츠',
        badge: 'HOT'
    },
    {
        id: 27,
        name: '스트라이프 티셔츠',
        description: '클래식한 스트라이프 패턴 티셔츠',
        price: 28000,
        originalPrice: 45000,
        image: 'tshirt-vneck',
        category: '의류',
        subCategory: '상의',
        subType: '티셔츠',
        badge: null
    },
    {
        id: 28,
        name: '오버핏 티셔츠',
        description: '넉넉한 오버핏 실루엣의 티셔츠',
        price: 35000,
        originalPrice: 55000,
        image: 'tshirt-oversized',
        category: '의류',
        subCategory: '상의',
        subType: '티셔츠',
        badge: 'NEW'
    },
    // 상의 - 블라우스
    {
        id: 7,
        name: '플라워 프린트 블라우스',
        description: '예쁜 꽃무늬가 들어간 블라우스',
        price: 55000,
        originalPrice: 79000,
        image: '👔',
        category: '의류',
        subCategory: '상의',
        subType: '블라우스',
        badge: 'SALE'
    },
    {
        id: 29,
        name: '셔링 블라우스',
        description: '여성스러운 셔링 디테일 블라우스',
        price: 62000,
        originalPrice: 95000,
        image: '👔',
        category: '의류',
        subCategory: '상의',
        subType: '블라우스',
        badge: 'HOT'
    },
    {
        id: 30,
        name: '린넨 블라우스',
        description: '시원한 린넨 소재의 블라우스',
        price: 58000,
        originalPrice: 89000,
        image: '👔',
        category: '의류',
        subCategory: '상의',
        subType: '블라우스',
        badge: null
    },
    {
        id: 31,
        name: '리본 블라우스',
        description: '귀여운 리본 장식이 있는 블라우스',
        price: 65000,
        originalPrice: 99000,
        image: '👔',
        category: '의류',
        subCategory: '상의',
        subType: '블라우스',
        badge: 'NEW'
    },
    // 상의 - 셔츠
    {
        id: 32,
        name: '베이직 셔츠',
        description: '클래식한 베이직 셔츠',
        price: 45000,
        originalPrice: 69000,
        image: '👔',
        category: '의류',
        subCategory: '상의',
        subType: '셔츠',
        badge: null
    },
    {
        id: 33,
        name: '체크 셔츠',
        description: '트렌디한 체크 패턴 셔츠',
        price: 48000,
        originalPrice: 75000,
        image: '👔',
        category: '의류',
        subCategory: '상의',
        subType: '셔츠',
        badge: 'HOT'
    },
    // 상의 - 후드티
    {
        id: 34,
        name: '베이직 후드티',
        description: '편안한 베이직 후드티',
        price: 55000,
        originalPrice: 85000,
        image: '🧥',
        category: '의류',
        subCategory: '상의',
        subType: '후드티',
        badge: 'SALE'
    },
    {
        id: 35,
        name: '오버핏 후드티',
        description: '넉넉한 오버핏 후드티',
        price: 62000,
        originalPrice: 95000,
        image: '🧥',
        category: '의류',
        subCategory: '상의',
        subType: '후드티',
        badge: 'NEW'
    },
    // 상의 - 니트
    {
        id: 36,
        name: '베이직 니트',
        description: '부드러운 니트 소재의 베이직 니트',
        price: 65000,
        originalPrice: 99000,
        image: '🧶',
        category: '의류',
        subCategory: '상의',
        subType: '니트',
        badge: 'HOT'
    },
    {
        id: 37,
        name: '터틀넥 니트',
        description: '따뜻한 터틀넥 니트',
        price: 72000,
        originalPrice: 109000,
        image: '🧶',
        category: '의류',
        subCategory: '상의',
        subType: '니트',
        badge: null
    },
    {
        id: 38,
        name: '카디건',
        description: '편안한 카디건',
        price: 68000,
        originalPrice: 105000,
        image: '🧶',
        category: '의류',
        subCategory: '상의',
        subType: '니트',
        badge: 'NEW'
    },
    // 원피스 - 미니원피스
    {
        id: 39,
        name: '미니 플라워 원피스',
        description: '귀여운 미니 플라워 원피스',
        price: 75000,
        originalPrice: 115000,
        image: 'dress-mini-a',
        category: '의류',
        subCategory: '원피스',
        subType: '미니원피스',
        badge: 'HOT'
    },
    {
        id: 40,
        name: '미니 체크 원피스',
        description: '트렌디한 미니 체크 원피스',
        price: 72000,
        originalPrice: 110000,
        image: 'dress-mini-fit',
        category: '의류',
        subCategory: '원피스',
        subType: '미니원피스',
        badge: 'NEW'
    },
    {
        id: 41,
        name: '미니 플리츠 원피스',
        description: '사랑스러운 미니 플리츠 원피스',
        price: 78000,
        originalPrice: 120000,
        image: 'dress-mini-flare',
        category: '의류',
        subCategory: '원피스',
        subType: '미니원피스',
        badge: null
    },
    // 원피스 - 롱원피스
    {
        id: 2,
        name: '파스텔 원피스',
        description: '부드러운 파스텔 톤의 귀여운 원피스',
        price: 69000,
        originalPrice: 99000,
        image: 'dress-long-slim',
        category: '의류',
        subCategory: '원피스',
        subType: '롱원피스',
        badge: 'HOT'
    },
    {
        id: 42,
        name: '롱 플라워 원피스',
        description: '우아한 롱 플라워 원피스',
        price: 85000,
        originalPrice: 129000,
        image: 'dress-long-a',
        category: '의류',
        subCategory: '원피스',
        subType: '롱원피스',
        badge: 'NEW'
    },
    {
        id: 43,
        name: '롱 맥시 원피스',
        description: '여성스러운 롱 맥시 원피스',
        price: 92000,
        originalPrice: 139000,
        image: 'dress-long-maxi',
        category: '의류',
        subCategory: '원피스',
        subType: '롱원피스',
        badge: 'HOT'
    },
    {
        id: 44,
        name: '롱 슬림 원피스',
        description: '슬림한 실루엣의 롱 원피스',
        price: 88000,
        originalPrice: 135000,
        image: 'dress-long-tube',
        category: '의류',
        subCategory: '원피스',
        subType: '롱원피스',
        badge: null
    },
    // 원피스 - 플레어원피스
    {
        id: 45,
        name: '플레어 원피스',
        description: '우아한 플레어 실루엣의 원피스',
        price: 95000,
        originalPrice: 145000,
        image: 'dress-flare',
        category: '의류',
        subCategory: '원피스',
        subType: '플레어원피스',
        badge: 'NEW'
    },
    {
        id: 46,
        name: 'A라인 플레어 원피스',
        description: '여성스러운 A라인 플레어 원피스',
        price: 98000,
        originalPrice: 149000,
        image: 'dress-a-flare',
        category: '의류',
        subCategory: '원피스',
        subType: '플레어원피스',
        badge: 'HOT'
    },
    {
        id: 3,
        name: '리본 헤어핀 세트',
        description: '귀여운 리본 장식 헤어핀 3종 세트',
        price: 15000,
        originalPrice: 25000,
        image: '🎀',
        category: '악세서리',
        badge: 'SALE'
    },
    {
        id: 4,
        name: '하트 귀걸이',
        description: '사랑스러운 하트 모양 귀걸이',
        price: 25000,
        originalPrice: 35000,
        image: '💍',
        category: '악세서리',
        badge: null
    },
    {
        id: 5,
        name: '컬러풀 스니커즈',
        description: '밝고 귀여운 컬러의 스니커즈',
        price: 89000,
        originalPrice: 129000,
        image: '👟',
        category: '신발',
        badge: 'HOT'
    },
    {
        id: 6,
        name: '파스텔 토트백',
        description: '큰 용량의 귀여운 토트백',
        price: 45000,
        originalPrice: 65000,
        image: '👜',
        category: '가방',
        badge: 'HOT'
    },
    {
        id: 7,
        name: '플라워 프린트 블라우스',
        description: '예쁜 꽃무늬가 들어간 블라우스',
        price: 55000,
        originalPrice: 79000,
        image: '👔',
        category: '의류',
        badge: 'SALE'
    },
    {
        id: 8,
        name: '스타일리시 워치',
        description: '트렌디한 디자인의 시계',
        price: 79000,
        originalPrice: 119000,
        image: '⌚',
        category: '악세서리',
        badge: 'NEW'
    },
    {
        id: 9,
        name: '컬러풀 양말 세트',
        description: '다양한 컬러의 귀여운 양말 5켤레',
        price: 12000,
        originalPrice: 20000,
        image: '🧦',
        category: '소품',
        badge: 'SALE'
    },
    {
        id: 10,
        name: '미니 백팩',
        description: '작고 귀여운 미니 백팩',
        price: 35000,
        originalPrice: 55000,
        image: '🎒',
        category: '가방',
        badge: null
    },
    {
        id: 11,
        name: '리본 샌들',
        description: '귀여운 리본 장식이 있는 샌들',
        price: 45000,
        originalPrice: 69000,
        image: '👡',
        category: '신발',
        badge: 'HOT'
    },
    {
        id: 12,
        name: '스위트 하트 목걸이',
        description: '달콤한 하트 모양 목걸이',
        price: 32000,
        originalPrice: 48000,
        image: '💎',
        category: '악세서리',
        badge: 'NEW'
    },
    // 모자 - 비니
    {
        id: 47,
        name: '베이직 비니',
        description: '심플하고 편안한 베이직 비니',
        price: 25000,
        originalPrice: 39000,
        image: '🧢',
        category: '모자',
        subCategory: '비니',
        badge: 'HOT'
    },
    {
        id: 48,
        name: '컬러풀 비니',
        description: '밝고 귀여운 컬러의 비니',
        price: 28000,
        originalPrice: 45000,
        image: '🧢',
        category: '모자',
        subCategory: '비니',
        badge: 'NEW'
    },
    {
        id: 49,
        name: '스트라이프 비니',
        description: '트렌디한 스트라이프 패턴 비니',
        price: 30000,
        originalPrice: 48000,
        image: '🧢',
        category: '모자',
        subCategory: '비니',
        badge: null
    },
    {
        id: 50,
        name: '리본 비니',
        description: '귀여운 리본 장식이 있는 비니',
        price: 32000,
        originalPrice: 50000,
        image: '🧢',
        category: '모자',
        subCategory: '비니',
        badge: 'HOT'
    },
    {
        id: 51,
        name: '플라워 비니',
        description: '예쁜 꽃무늬가 프린트된 비니',
        price: 29000,
        originalPrice: 46000,
        image: '🧢',
        category: '모자',
        subCategory: '비니',
        badge: 'SALE'
    },
    {
        id: 52,
        name: '오버핏 비니',
        description: '넉넉한 오버핏 실루엣의 비니',
        price: 31000,
        originalPrice: 49000,
        image: '🧢',
        category: '모자',
        subCategory: '비니',
        badge: 'NEW'
    },
    // 모자 - 볼캡
    {
        id: 53,
        name: '베이직 볼캡',
        description: '클래식한 베이직 볼캡',
        price: 35000,
        originalPrice: 55000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: 'HOT'
    },
    {
        id: 54,
        name: '로고 볼캡',
        description: '트렌디한 로고가 새겨진 볼캡',
        price: 42000,
        originalPrice: 65000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: 'NEW'
    },
    {
        id: 55,
        name: '컬러풀 볼캡',
        description: '밝고 화사한 컬러의 볼캡',
        price: 38000,
        originalPrice: 60000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: null
    },
    {
        id: 56,
        name: '체크 볼캡',
        description: '트렌디한 체크 패턴 볼캡',
        price: 40000,
        originalPrice: 63000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: 'HOT'
    },
    {
        id: 57,
        name: '플라워 볼캡',
        description: '예쁜 플라워 프린트 볼캡',
        price: 39000,
        originalPrice: 62000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: 'SALE'
    },
    {
        id: 58,
        name: '스냅백 볼캡',
        description: '조절 가능한 스냅백 볼캡',
        price: 45000,
        originalPrice: 70000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: 'NEW'
    },
    {
        id: 59,
        name: '플랫 브림 볼캡',
        description: '플랫한 브림이 있는 볼캡',
        price: 43000,
        originalPrice: 68000,
        image: '🧢',
        category: '모자',
        subCategory: '볼캡',
        badge: null
    },
    // 모자 - 베레모
    {
        id: 60,
        name: '클래식 베레모',
        description: '우아한 클래식 베레모',
        price: 38000,
        originalPrice: 60000,
        image: '👒',
        category: '모자',
        subCategory: '베레모',
        badge: 'HOT'
    },
    {
        id: 61,
        name: '컬러 베레모',
        description: '다양한 컬러의 베레모',
        price: 40000,
        originalPrice: 65000,
        image: '👒',
        category: '모자',
        subCategory: '베레모',
        badge: 'NEW'
    },
    {
        id: 62,
        name: '플라워 베레모',
        description: '예쁜 꽃 장식이 있는 베레모',
        price: 42000,
        originalPrice: 68000,
        image: '👒',
        category: '모자',
        subCategory: '베레모',
        badge: null
    },
    {
        id: 63,
        name: '리본 베레모',
        description: '귀여운 리본이 달린 베레모',
        price: 45000,
        originalPrice: 72000,
        image: '👒',
        category: '모자',
        subCategory: '베레모',
        badge: 'HOT'
    },
    {
        id: 64,
        name: '체크 베레모',
        description: '트렌디한 체크 패턴 베레모',
        price: 41000,
        originalPrice: 67000,
        image: '👒',
        category: '모자',
        subCategory: '베레모',
        badge: 'SALE'
    },
    {
        id: 65,
        name: '프린트 베레모',
        description: '예쁜 프린트가 들어간 베레모',
        price: 43000,
        originalPrice: 70000,
        image: '👒',
        category: '모자',
        subCategory: '베레모',
        badge: 'NEW'
    },
    // 모자 - 기타
    {
        id: 66,
        name: '버킷햇',
        description: '트렌디한 버킷햇',
        price: 35000,
        originalPrice: 55000,
        image: '🎩',
        category: '모자',
        subCategory: '기타',
        badge: 'HOT'
    },
    {
        id: 67,
        name: '트럭커 햇',
        description: '캐주얼한 트럭커 햇',
        price: 32000,
        originalPrice: 50000,
        image: '🎩',
        category: '모자',
        subCategory: '기타',
        badge: null
    },
    {
        id: 68,
        name: '플로피 햇',
        description: '여성스러운 플로피 햇',
        price: 48000,
        originalPrice: 75000,
        image: '👒',
        category: '모자',
        subCategory: '기타',
        badge: 'NEW'
    }
];

// 장바구니
let cart = [];

// DOM 요소
const productGrid = document.getElementById('productGrid');
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
const searchInput = document.getElementById('searchInput');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const totalPrice = document.getElementById('totalPrice');
const checkoutBtn = document.getElementById('checkoutBtn');

// 상품 표시
function displayProducts(productsToShow = products) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        // 각 상품에 고유한 디자인 클래스 추가
        const designClass = `product-design-${product.id}`;
        let extraElements = '';
        
        // 그래픽 티셔츠에 이모지 추가
        if (product.id === 26) {
            extraElements = '<span class="emoji-sparkle">✨</span><span class="emoji-heart">💕</span>';
        }
        // 오버핏 티셔츠에 별 추가
        if (product.id === 28) {
            extraElements = '<span class="emoji-star">★</span>';
        }
        // 플라워 프린트 블라우스에 꽃 추가
        if (product.id === 7) {
            extraElements = '<span class="emoji-flower1">🌸</span><span class="emoji-flower2">🌺</span>';
        }
        // 셔링 블라우스에 장식 추가
        if (product.id === 29) {
            extraElements = '<span class="emoji-diamond">💎</span><span class="emoji-sparkle">✨</span>';
        }
        // 리본 블라우스에 리본 추가
        if (product.id === 31) {
            extraElements = '<span class="emoji-bow">🎀</span><span class="emoji-gift">💝</span>';
        }
        
        // 이모지인 경우 그대로 표시, CSS 클래스인 경우 div로 표시
        const iconElement = product.image.startsWith('tshirt-') || product.image.startsWith('dress-') 
            ? `<div class="${product.image}"></div>` 
            : `<span class="product-icon">${product.image}</span>`;
        
        productCard.innerHTML = `
            <div class="product-image ${designClass}">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                ${iconElement}
                ${extraElements}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-footer">
                    <div class="product-price">
                        ${product.originalPrice ? `<span class="original">${product.originalPrice.toLocaleString()}원</span>` : ''}
                        ${product.price.toLocaleString()}원
                    </div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        🛒 담기
                    </button>
                </div>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// 장바구니에 추가
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartUI();
    showNotification(`${product.name}이(가) 장바구니에 추가되었어요! 💕`);
}

// 장바구니에서 제거
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

// 수량 변경
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;

    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        updateCartUI();
    }
}

// 장바구니 UI 업데이트
function updateCartUI() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <div class="empty-icon">😢</div>
                <p>장바구니가 비어있어요</p>
            </div>
        `;
        totalPrice.textContent = '0';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${item.image}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()}원</div>
                </div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">삭제</button>
            </div>
        `).join('');
        
        const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        totalPrice.textContent = total.toLocaleString();
    }
}

// 알림 표시
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #B8A9D9;
        color: white;
        padding: 15px 25px;
        border-radius: 20px;
        box-shadow: 0 4px 0px #8B7AB8;
        z-index: 2000;
        animation: slideInRight 0.3s;
        font-weight: normal;
        font-family: 'DungGeunMo', 'Pixelify Sans', monospace;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// 현재 필터 상태
let currentCategory = '';
let currentSubCategory = '';
let currentSubType = '';

// 필터링된 상품 표시
function filterAndDisplayProducts() {
    let filtered = products;

    // 카테고리 필터
    if (currentCategory && currentCategory !== '특가') {
        filtered = filtered.filter(p => p.category === currentCategory);
    } else if (currentCategory === '특가') {
        filtered = filtered.filter(p => p.badge === 'SALE' || p.originalPrice);
    }

    // 하위 카테고리 필터 (의류, 모자만, subCategory가 있는 경우만)
    if ((currentCategory === '의류' || currentCategory === '모자') && currentSubCategory && currentSubCategory !== 'all') {
        filtered = filtered.filter(p => p.subCategory && p.subCategory === currentSubCategory);
    }

    // 하위 종류 필터 (의류만, subType이 있는 경우만)
    if (currentCategory === '의류' && currentSubType && currentSubType !== 'all') {
        filtered = filtered.filter(p => p.subType && p.subType === currentSubType);
    }

    displayProducts(filtered);
    
    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #999;">
                <div style="font-size: 60px; margin-bottom: 20px;">😔</div>
                <p style="font-size: 18px;">상품이 없어요</p>
            </div>
        `;
    }
}

// 검색 기능
function searchProducts(query) {
    if (!query.trim()) {
        filterAndDisplayProducts();
        return;
    }

    let filtered = products;

    // 현재 필터 적용
    if (currentCategory && currentCategory !== '특가') {
        filtered = filtered.filter(p => p.category === currentCategory);
    } else if (currentCategory === '특가') {
        filtered = filtered.filter(p => p.badge === 'SALE' || p.originalPrice);
    }

    if ((currentCategory === '의류' || currentCategory === '모자') && currentSubCategory && currentSubCategory !== 'all') {
        filtered = filtered.filter(p => p.subCategory && p.subCategory === currentSubCategory);
    }

    if (currentCategory === '의류' && currentSubType && currentSubType !== 'all') {
        filtered = filtered.filter(p => p.subType && p.subType === currentSubType);
    }

    // 검색어 필터
    filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        (product.category && product.category.toLowerCase().includes(query.toLowerCase())) ||
        (product.subCategory && product.subCategory.toLowerCase().includes(query.toLowerCase())) ||
        (product.subType && product.subType.toLowerCase().includes(query.toLowerCase()))
    );

    displayProducts(filtered);
    
    if (filtered.length === 0) {
        productGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #999;">
                <div style="font-size: 60px; margin-bottom: 20px;">😔</div>
                <p style="font-size: 18px;">검색 결과가 없어요</p>
            </div>
        `;
    }
}

// 이벤트 리스너
searchBtn.addEventListener('click', () => {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
        searchInput.focus();
    }
});

searchInput.addEventListener('input', (e) => {
    searchProducts(e.target.value);
});

searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchProducts(e.target.value);
    }
});

cartBtn.addEventListener('click', () => {
    cartModal.classList.add('active');
});

closeCart.addEventListener('click', () => {
    cartModal.classList.remove('active');
});

cartModal.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.remove('active');
    }
});

checkoutBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showNotification('장바구니가 비어있어요! 😢');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    showNotification(`결제가 완료되었어요! 총 ${total.toLocaleString()}원 💕`);
    cart = [];
    updateCartUI();
    cartModal.classList.remove('active');
});

// 하위 카테고리 필터 표시/숨김
function showSubcategoryFilter(category) {
    const clothingFilter = document.getElementById('clothingSubcategory');
    const hatFilter = document.getElementById('hatSubcategory');
    
    if (category === '의류') {
        clothingFilter.style.display = 'block';
        hatFilter.style.display = 'none';
    } else if (category === '모자') {
        clothingFilter.style.display = 'none';
        hatFilter.style.display = 'block';
        // 의류 하위 종류 필터 숨김
        document.getElementById('bottomSubtype').style.display = 'none';
        document.getElementById('topSubtype').style.display = 'none';
        document.getElementById('dressSubtype').style.display = 'none';
    } else {
        clothingFilter.style.display = 'none';
        hatFilter.style.display = 'none';
        // 하위 종류 필터도 숨김
        document.getElementById('bottomSubtype').style.display = 'none';
        document.getElementById('topSubtype').style.display = 'none';
        document.getElementById('dressSubtype').style.display = 'none';
    }
}

// 카테고리 클릭
document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('click', () => {
        const category = card.getAttribute('data-category');
        currentCategory = category;
        currentSubCategory = '';
        currentSubType = '';
        
        // 하위 카테고리 필터 초기화
        document.querySelectorAll('.subcategory-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-subcategory') === 'all') {
                btn.classList.add('active');
            }
        });
        document.querySelectorAll('.subtype-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-subtype') === 'all') {
                btn.classList.add('active');
            }
        });
        
        showSubcategoryFilter(category);
        filterAndDisplayProducts();
        
        // 네비게이션 활성화
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // 스크롤 이동
        productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// 하위 카테고리 버튼 클릭
document.querySelectorAll('.subcategory-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subCategory = btn.getAttribute('data-subcategory');
        currentSubCategory = subCategory;
        currentSubType = '';
        
        // 같은 그룹의 버튼만 활성화
        const parent = btn.closest('.subcategory-filter');
        parent.querySelectorAll('.subcategory-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        // 하위 종류 필터 표시/숨김 (의류만)
        if (currentCategory === '의류') {
            document.getElementById('bottomSubtype').style.display = subCategory === '하의' ? 'block' : 'none';
            document.getElementById('topSubtype').style.display = subCategory === '상의' ? 'block' : 'none';
            document.getElementById('dressSubtype').style.display = subCategory === '원피스' ? 'block' : 'none';
            
            // 하위 종류 필터 초기화
            document.querySelectorAll('.subtype-btn').forEach(b => {
                b.classList.remove('active');
                if (b.getAttribute('data-subtype') === 'all') {
                    b.classList.add('active');
                }
            });
        }
        
        filterAndDisplayProducts();
    });
});

// 하위 종류 버튼 클릭
document.querySelectorAll('.subtype-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const subType = btn.getAttribute('data-subtype');
        currentSubType = subType;
        
        // 같은 그룹의 버튼만 활성화
        const parent = btn.closest('.subtype-filter');
        parent.querySelectorAll('.subtype-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        filterAndDisplayProducts();
    });
});

// 네비게이션 클릭
document.querySelectorAll('.nav-item').forEach((item, index) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        document.querySelectorAll('.nav-item').forEach(nav => nav.classList.remove('active'));
        item.classList.add('active');
        
        const navCategories = ['', '의류', '악세서리', '신발', '가방', '모자', '특가'];
        const category = navCategories[index];
        
        currentCategory = category || '';
        currentSubCategory = '';
        currentSubType = '';
        
        // 하위 카테고리 필터 초기화
        document.querySelectorAll('.subcategory-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-subcategory') === 'all') {
                btn.classList.add('active');
            }
        });
        document.querySelectorAll('.subtype-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-subtype') === 'all') {
                btn.classList.add('active');
            }
        });
        
        showSubcategoryFilter(category);
        filterAndDisplayProducts();
        
        productGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// CSS 애니메이션 추가
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// 초기화
filterAndDisplayProducts();
updateCartUI();

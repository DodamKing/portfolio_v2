// src/data/projects.js
export const projects = [
    {
        id: 5,
        title: '최고의 계산기 모음',
        type: 'Side',
        category: 'Web Application',
        period: '2024.10 - 2024.10',
        shortDescription: '일상생활의 다양한 분야에서 필요한 계산기들을 한 곳에 모은 종합 계산기 웹 서비스',
        fullDescription: `
            React를 활용하여 개발한 금융 계산기 모음 웹 애플리케이션입니다.
            일상생활의 여러 분야에서 필요한 계산 기능을 카테고리별로 제공합니다.

            카테고리별 주요 계산기:
            • 건강 - 칼로리, BMR, BMI, 체지방률, 체수분량, 심박수, 운동칼로리, 허리-엉덩이 비율, 단백질 섭취량 계산
            • 부동산 - 주택담보대출, 임대료 대비 구매 가격, 부동산 투자 수익률, 부동산 보유세 계산
            • 재정 - 대출 상환, 적금/예금, 연금, 부가가치세, 월급 실수령액 계산
            • 취미 - 여행 경비, 사진 용량, 음악 BPM 계산
            
            주요 특징:
            • 직관적인 카테고리 분류 시스템
            • 모바일 최적화 반응형 디자인
            • 실시간 계산 결과 제공
            • 사용자 친화적 인터페이스
            • 정확한 수식과 알고리즘 적용
            • 깔끔한 결과 포맷팅
        `,
        image: '/src/assets/images/calculator.png',
        screenshots: [
            '/src/assets/images/calculator.png',
            '/src/assets/images/calculator_1.png',
            '/src/assets/images/calculator_2.png',
            '/src/assets/images/calculator_3.png',
        ],
        technologies: ['React', 'TailwindCSS', 'React Router', 'GitHub Pages'],
        features: [
            '주요 카테고리별 계산기 제공',
            '20개 이상의 다양한 계산기 구현',
            '카테고리별 직관적 네비게이션',
            '모바일 최적화 UI/UX',
            '정확한 계산 알고리즘',
            '사용자 친화적 입력 폼',
            '실시간 계산 결과 업데이트'
        ],
        demoLink: 'https://dodamking.github.io/calculator/',
        githubLink: 'https://github.com/dodamking/calculator'
    },
    {
        id: 4,
        title: 'DIBE2',
        type: 'Side',
        category: 'Music Streaming Service',
        period: '2024.08 - ',
        shortDescription: '실시간 음원 스트리밍 서비스',
        fullDescription: `
            Vue.js와 Node.js 기반의 음원 스트리밍 서비스입니다. 자체 제작한 웹 플레이어를 통해 실시간 음원 스트리밍을 제공하며, 사용자 경험에 중점을 둔 UI/UX를 구현했습니다.
            
            주요 개발 내용:
            • Custom Media Session API를 활용한 웹 플레이어 구현
            • PM2와 Nginx를 활용한 서버 관리 및 보안 설정
            • MongoDB Atlas를 활용한 데이터베이스 설계 및 최적화
            • JWT 기반 인증 및 소셜 로그인(Google, Kakao) 구현
            • 관리자 대시보드를 통한 사용자/음원 관리 시스템
            
            기술적 성과:
            • Nginx GeoIP 모듈을 활용한 해외 IP 차단 및 악성 트래픽 대응
            • DB Connection Pool 최적화로 메모리 누수 현상 해결
            • 자동화된 음원 차트 업데이트 시스템 구축
        `,
        image: 'https://picsum.photos/800/400',
        screenshots: [
            'https://picsum.photos/800/400',
            'https://picsum.photos/800/400',
            'https://picsum.photos/800/400',
            'https://picsum.photos/800/400',
            // '/src/assets/images/stock_2.jpg',
        ],
        technologies: ['Vue.js', 'Node.js', 'Express.js', 'MongoDB Atlas', 'AWS EC2', 'Nginx'],
        features: [
            '커스텀 미디어 컨트롤러가 적용된 웹 플레이어',
            '실시간 음원 차트 자동 업데이트',
            '개인화된 플레이리스트 관리',
            '소셜 로그인(Google, Kakao) 지원',
            '관리자 대시보드(음원/사용자 관리, 통계)',
            '방문자 통계 및 스트리밍 분석'
        ],
        demoLink: 'https://dibe2.dimad.site',
        githubLink: 'https://github.com/dodamking/dibe2'
    },
    {
        id: 3,
        title: 'StockMaster',
        type: 'Side',
        category: 'Financial Tech',
        period: '2024.06 - 2024.06',
        shortDescription: '포트폴리오 모니터링 및 리밸런싱 자동화 앱',
        fullDescription: `
            투자자들의 포트폴리오 관리 효율성을 높이기 위한 종합 자산관리 플랫폼입니다.
            
            • 실시간 주식 데이터 연동으로 정확한 포트폴리오 가치 평가
            • 목표 비중 설정 시 자동 리밸런싱 계산 알고리즘 구현
            • Flutter를 활용한 크로스 플랫폼 지원으로 접근성 향상
            • AWS 인프라 구축으로 안정적인 서비스 제공
        `,
        image: '/src/assets/images/stock.jpg',
        screenshots: [
            '/src/assets/images/stock.jpg',
            '/src/assets/images/stock_1.jpg',
            '/src/assets/images/stock_2.jpg',
        ],
        technologies: ['Flutter', 'Flask', 'AWS', 'Hive'],
        features: [
            '실시간 포트폴리오 모니터링',
            '자동 리밸런싱 계산',
            '포트폴리오 관리',
            '투자 히스토리 트래킹'
        ],
        githubLink: 'https://github.com/dodamking/stock-master'
    },
    {
        id: 2,
        title: 'HeadlineHub',
        type: 'Side',
        category: 'Content Platform',
        period: '2024.01 - 2024.01',
        shortDescription: '실시간 뉴스 통합 및 개인화 서비스 플랫폼',
        fullDescription: `
            다양한 뉴스 소스를 통합하여 사용자 맞춤형 뉴스 서비스를 제공하는 플랫폼입니다.
            
            • 주요 언론사 실시간 뉴스 수집 및 분류
            • 키워드 기반 검색 및 필터링 시스템 구현
            • Redis 캐싱을 통한 응답 속도 최적화
            • FastAPI를 이용한 크롤링으로 응답 속도 최적화
            • MongoDB를 활용한 효율적인 데이터 관리
            
            Spring Boot와 Vue.js를 활용한 풀스택 개발로,
            안정적이고 사용자 친화적인 서비스를 구현했습니다.
        `,
        image: '/src/assets/images/headlineHub.png',
        screenshots: [
            '/src/assets/images/headlineHub.png',
        ],
        technologies: ['Vue.js', 'FastAPI', 'Spring Boot', 'MongoDB'],
        features: [
            '실시간 뉴스 집계',
            '키워드 기반 검색',
            '개인화 추천',
            '뉴스 스크랩'
        ],
        githubLink: 'https://github.com/dodamking/headlineHub'
    },
    {
        id: 1,
        title: 'DDMusic',
        type: 'Side',
        category: 'Streaming Service',
        period: '2022.01 - 2022.05',
        shortDescription: '실시간 차트 기반 음원 스트리밍 서비스',
        fullDescription: `
            최신 음원 차트를 자동으로 수집하고 스트리밍 서비스를 제공하는 플랫폼입니다.
            
            • Python과 Selenium을 활용한 실시간 TOP 100 차트 수집
            • 자체 개발 웹 플레이어로 끊김 없는 스트리밍 제공
            • 소셜 로그인 및 회원 관리 시스템 구현
            • Local Storage를 활용한 재생 기록 관리
            
            JSP와 Spring Framework를 기반으로 개발되었으며,
            사용자별 플레이리스트 기능으로 개인화된 음악 경험을 제공합니다.
        `,
        image: '/src/assets/images/ddmusic.png',
        screenshots: [
            '/src/assets/images/ddmusic.png',
            '/src/assets/images/ddmusic_1.png',
            '/src/assets/images/ddmusic_2.png',
            '/src/assets/images/ddmusic_3.png',
        ],
        technologies: ['Java', 'Spring', 'MySQL', 'JSP'],
        features: [
            '실시간 음원 차트',
            '커스텀 웹 플레이어',
            '플레이리스트 관리',
            '소셜 로그인'
        ],
        demoLink: 'http://49.142.157.251:9090/cjs2108_kdd',
        githubLink: 'https://github.com/DodamKing/DDMusic'
    }
];
// src/data/projects.js
export const projects = [
    {
        id: 1,
        title: 'StockMaster',
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
        demoLink: 'https://stockmaster.example.com',
        githubLink: 'https://github.com/dodamking/stock-master'
    },
    {
        id: 2,
        title: 'HeadlineHub',
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
        id: 3,
        title: 'DDMusic',
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
    },
    // ... 추가 프로젝트
];
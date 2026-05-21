# Portfolio v2

개인 포트폴리오 웹사이트. Vue 3 + Tailwind CSS, GitHub Pages 배포.
실제 운영 중인 사이트이므로 변경 시 빌드/배포 흐름까지 고려할 것.

**완전 정적 프론트엔드**: 백엔드/외부 API 호출 없음, `.env` 불필요, 모든 데이터는 `src/data/projects.js`에 하드코딩. 환경변수 도입 제안 금지 (구조상 필요 없음).

---

## 진입 순서 (토큰 절약)

작업 시 무조건 전체를 읽지 말고 아래 순서로 필요한 것만 읽기.

1. **이 문서** — 프로젝트 개요, 구조, 규칙 확인
2. **변경 대상 섹션/컴포넌트만** — 예: 프로젝트 카드 손볼 거면 `src/components/sections/Projects.vue` + `src/data/projects.js`만
3. **공통 컴포넌트는 필요할 때만** — `src/components/common/` 아래 모달/슬라이더 등
4. **데이터만 추가/수정하는 작업**(프로젝트 추가, 문구 변경)이면 `src/data/projects.js`만 열기. 컴포넌트는 건드릴 필요 없음.

전체 트리 훑기(`ls -R`, 광범위 grep)는 첫 진입 시 한 번이면 충분. 두 번째부터는 이 문서를 인덱스로 사용.

---

## 디렉토리 구조

```
src/
  App.vue                  # 루트, 다크모드 토글
  main.js                  # 부트스트랩
  router.js                # 단일 라우트(/ → Home)
  style.css, assets/base.css
  assets/images/           # 프로젝트 스크린샷 (폴더당 1프로젝트)
  components/
    sections/              # 페이지 섹션 (Hero/Projects/Skills/About/Contact/Home)
    common/                # 재사용 컴포넌트 (ImageModal, ImageSlider, Modal, ScrollToTop, FloatingActions)
    composables/           # 컴포넌트 로컬 훅 (useModal, useScrollLock)
  composables/             # 글로벌 훅 (useDarkMode)
  data/projects.js         # 모든 프로젝트 데이터 (단일 소스)
public/portfolio.webp      # favicon
```

라우트는 사실상 `/` 하나. Home.vue가 모든 섹션을 한 페이지에 세로 배치하는 SPA-as-landing 구조.

---

## 핵심 파일과 책임

| 파일 | 책임 |
|---|---|
| [src/data/projects.js](src/data/projects.js) | 포트폴리오에 노출되는 모든 프로젝트 메타데이터. id 내림차순 = 최신순 |
| [src/components/sections/Projects.vue](src/components/sections/Projects.vue) | 프로젝트 카드 그리드, 페이지네이션, 모달 트리거 |
| [src/components/common/ImageModal.vue](src/components/common/ImageModal.vue) | 상세보기 모달 (스크린샷 슬라이드 + 설명) |
| [src/components/common/FloatingActions.vue](src/components/common/FloatingActions.vue) | 우측 하단 떠 있는 액션 (연락처/카카오 QR 등) |
| [src/composables/useDarkMode.js](src/composables/useDarkMode.js) | 다크모드 전역 상태 (localStorage 연동) |
| [vite.config.js](vite.config.js) | `base: '/portfolio_v2/'` — gh-pages 서브경로. 수정 시 배포 경로 깨짐 주의 |
| [tailwind.config.js](tailwind.config.js) | `darkMode: 'class'` |

---

## 자주 하는 작업 가이드

### 새 프로젝트 추가
1. 스크린샷을 `src/assets/images/<프로젝트키>/` 에 넣기 (메인 1장 + 상세 N장)
2. `src/data/projects.js` 맨 위에 새 객체 추가 (`id`는 기존 최대값 + 1)
3. 필수 필드: `id, title, type, category, period, shortDescription, fullDescription, image, screenshots, technologies, features`
4. 선택 필드: `liveLink, githubLink`
5. 컴포넌트 수정 불필요

### 기존 프로젝트 문구/링크 수정
- `projects.js`만 수정. 다른 곳 안 건드림. (최근 커밋 흐름도 이 패턴)

### 다크모드 관련 수정
- 토글 동작은 `App.vue`와 `useDarkMode.js` 양쪽에 흩어져 있음. 다크모드 로직 손볼 때는 둘 다 확인.

### 빌드/배포
```
npm run dev       # 로컬 개발
npm run build     # dist 생성
npm run deploy    # gh-pages로 배포 (predeploy가 build 자동 실행)
```
배포는 사용자에게 명시적 요청을 받았을 때만 실행.

---

## 작업 방향 / 지켜야 할 것

- **데이터와 UI 분리 유지**: 프로젝트 정보는 무조건 `projects.js`. 컴포넌트 안에 하드코딩 금지.
- **다크모드 클래스 항상 동반**: 새 UI 작성 시 `bg-X dark:bg-Y`, `text-X dark:text-Y` 짝으로. 라이트 전용 색만 쓰면 다크모드에서 깨짐.
- **이미지 경로**: `getImageUrl()` 헬퍼 사용. 직접 `import.meta.url` 쓰지 말 것.
- **반응형 우선**: 모바일 뷰가 메인 사용처. 모바일에서 깨지지 않는지 항상 확인.
- **`base` 경로 보존**: `vite.config.js`의 `base: '/portfolio_v2/'`는 gh-pages 배포 경로. 절대 경로로 자원 직접 참조하지 말고 import / `getImageUrl` 사용.
- **불필요한 라이브러리 추가 자제**: 단순 정적 사이트. 무거운 의존성 들이지 말 것.
- **커밋 메시지는 한국어**, 간결하게. (최근 커밋: "프로틴프라이스 추가", "dibe2 도메인으로 다시 수정" 등) Co-Authored-By 태그 넣지 않음.

---

## 알려진 특이사항

- `src/components/sections/Hero_v1.vue` — Hero의 이전 버전. **의도적으로 방치된 레거시**. 사용자가 명시적으로 삭제 요청하기 전까지 건드리지 말 것.
- `src/components/composables/` 와 `src/composables/` 두 위치에 composables가 분산. 컴포넌트 종속적인 건 `components/composables`, 전역적인 건 `composables` 로 보임.
- 단일 라우트라 `router.js`가 거의 형식적. 페이지가 늘면 그때 분리.

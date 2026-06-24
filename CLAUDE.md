# Portfolio v2

개인 포트폴리오 웹사이트. Vue 3 + Tailwind CSS, GitHub Pages 배포.
실제 운영 중인 사이트이므로 변경 시 빌드/배포 흐름까지 고려할 것.

**완전 정적 프론트엔드**: 백엔드/외부 API 호출 없음, `.env` 불필요, 모든 데이터는 `src/data/projects.js`에 하드코딩. 환경변수 도입 제안 금지 (구조상 필요 없음).

> 2026-06 전면 리디자인 완료. 포지셔닝: "작은 회사에서 도움 없이 맨바닥(0→1)부터 만들어 운영까지" + 풀스택 / 모바일(Flutter는 사이드 수준). 이직 지원용. 실명 노출 안 함.

---

## 진입 순서 (토큰 절약)

작업 시 무조건 전체를 읽지 말고 아래 순서로 필요한 것만 읽기.

1. **이 문서** — 프로젝트 개요, 구조, 규칙 확인
2. **변경 대상 섹션/컴포넌트만** — 예: 프로젝트 카드 손볼 거면 `src/components/sections/Projects.vue` + `src/data/projects.js`만
3. **공통 컴포넌트는 필요할 때만** — `src/components/common/` 아래 모달/슬라이더 등
4. **데이터만 추가/수정하는 작업**(프로젝트 추가, 문구 변경)이면 `src/data/projects.js`만 열기.

전체 트리 훑기는 첫 진입 시 한 번이면 충분. 두 번째부터는 이 문서를 인덱스로 사용.

---

## 디렉토리 구조

```
src/
  App.vue                  # 루트 (Header + Home 조립)
  main.js                  # 부트스트랩
  router.js                # 단일 라우트(/ → Home)
  style.css(미사용 잔재), assets/base.css
  assets/images/           # 프로젝트 스크린샷 (폴더당 1프로젝트)
  components/
    sections/              # 페이지 섹션 (Hero, About, Projects, Skills, Home / Contact는 미렌더)
    common/                # 재사용 (Header, Footer, ProjectCard, ImageModal, ImageSlider, Modal / ScrollToTop·FloatingActions 미사용)
    composables/           # 컴포넌트 로컬 훅 (useModal, useScrollLock)
  composables/             # 글로벌 훅 (useDarkMode — 현재 미사용, 토글은 Header.vue)
  data/projects.js         # 모든 프로젝트 데이터 (단일 소스)
public/portfolio.webp      # favicon
```

라우트는 사실상 `/` 하나. Home.vue가 한 페이지에 세로 배치: **Hero → About → Projects → Skills → Footer**. 상단 고정 헤더(Header.vue)가 내비/다크토글 담당.

---

## 핵심 파일과 책임

| 파일 | 책임 |
|---|---|
| [src/data/projects.js](src/data/projects.js) | 노출되는 모든 프로젝트 메타데이터. id 내림차순 = 최신순 |
| [src/components/common/Header.vue](src/components/common/Header.vue) | 상단 고정 네비(Work·Projects·Skills, scrollspy 하이라이트) + 다크토글. 로고는 익명 `0→1` |
| [src/components/sections/Hero.vue](src/components/sections/Hero.vue) | 히어로 (좌: 논지·CTA·지표 / 우: 현재 작업 NOW 패널) |
| [src/components/sections/About.vue](src/components/sections/About.vue) | 실무 경력 (신뢰도 본체). `experiences` 배열 데이터화 |
| [src/components/sections/Projects.vue](src/components/sections/Projects.vue) | 개인 사이드 프로젝트. 그리드·캐러셀·필터(All/Web/Mobile)·페이지네이션·모달 |
| [src/components/common/ProjectCard.vue](src/components/common/ProjectCard.vue) | 프로젝트 카드 (캐러셀·그리드 공용) |
| [src/components/sections/Skills.vue](src/components/sections/Skills.vue) | Domain Expertise(강조) + Tech Stack. `domains`·`stack` 배열 |
| [src/components/common/Footer.vue](src/components/common/Footer.vue) | 미니멀 푸터(GitHub·©). Contact 흡수, `id="contact"` |
| [vite.config.js](vite.config.js) | `base: '/portfolio_v2/'` gh-pages 서브경로 + `server.host:true`(같은망 접속) |
| [tailwind.config.js](tailwind.config.js) | `darkMode:'class'` + 팔레트·폰트 토큰 |

---

## 디자인 시스템 (2026 리디자인)

- **폰트**: Pretendard(제목·본문, index.html CDN) + IBM Plex Mono(라벨·숫자·상태). `font-display`/`font-sans`=Pretendard, `font-mono`=Plex Mono.
- **팔레트(프레시 웜, tailwind.config.js)**: paper/charcoal 배경, **amber=만들다/강조**, **teal=운영/구조/상태**. 이 색 역할을 일관 유지.
- **레이아웃 문법**: 섹션 eyebrow는 mono(`// WORK` 등), 배경 리듬 paper↔paper-dim 교차, 카드 rounded-2xl, 푸터는 어두운 charcoal 띠.
- **익명성**: 실명 노출 안 함(로고 `0→1`, `<title>` 역할기반). 연락은 footer의 GitHub + 이력서가 담당.
- 새 섹션/UI는 위 토큰·역할을 따를 것.

---

## 자주 하는 작업 가이드

### 새 프로젝트 추가
1. 스크린샷을 `src/assets/images/<프로젝트키>/` 에 넣기 (메인 1장 + 상세 N장)
2. `src/data/projects.js` 맨 위에 새 객체 추가 (`id`는 기존 최대값 + 1)
3. 필수 필드: `id, title, type, category, period, shortDescription, fullDescription, image, screenshots, technologies, features`
4. 선택 필드: `liveLink, githubLink, platform('mobile'|'web')` — platform 없으면 Flutter/카테고리로 자동 추론(Mobile/Web 필터)
5. 컴포넌트 수정 불필요

### 기존 프로젝트/경력/스킬 문구 수정
- 프로젝트는 `projects.js`. 경력은 `About.vue`의 `experiences`, 스킬·도메인은 `Skills.vue`의 `domains`/`stack` 배열만 수정.

### 다크모드 관련 수정
- 초기 클래스는 `index.html` 인라인 스크립트, 토글은 `Header.vue`(`documentElement.classList` + localStorage). `useDarkMode.js`는 현재 미사용.

### 빌드/배포
```
npm run dev       # 로컬 개발
npm run build     # dist 생성
npm run deploy    # gh-pages로 배포 (predeploy가 build 자동 실행)
```
배포는 사용자에게 명시적 요청을 받았을 때만 실행.

---

## 작업 방향 / 지켜야 할 것

- **데이터와 UI 분리 유지**: 정보는 데이터 배열(`projects.js` / `experiences` / `domains`·`stack`)에. 마크업에 새 콘텐츠 하드코딩 금지.
- **다크모드 클래스 항상 동반**: `bg-X dark:bg-Y`, `text-X dark:text-Y` 짝으로.
- **이미지 경로**: `getImageUrl()` 헬퍼 사용. 직접 `import.meta.url` 쓰지 말 것.
- **반응형 (PC도 1급)**: 채용자가 PC로 많이 봄 → 데스크톱 레이아웃이 인상적이어야 하고 모바일도 깔끔히 대응. 모바일 퍼스트 아님.
- **`base` 경로 보존**: `vite.config.js`의 `base: '/portfolio_v2/'`는 gh-pages 경로. 절대경로 직접 참조 말고 import / `getImageUrl`.
- **불필요한 라이브러리 추가 자제**: 단순 정적 사이트. 무거운 의존성 들이지 말 것.
- **커밋 메시지는 한국어**, 간결하게. Co-Authored-By 등 AI 태그 넣지 않음.

---

## 알려진 특이사항

- `src/components/sections/Hero_v1.vue` — Hero 이전 버전. **의도적 방치 레거시**. 명시적 삭제 요청 전까지 건드리지 말 것.
- **미사용(삭제 안 함) 컴포넌트**: `Contact.vue`(푸터로 흡수됨), `FloatingActions.vue`·`ScrollToTop.vue`(헤더로 대체), `useDarkMode.js`, `style.css`(Vite 스캐폴드 잔재). 되살릴 여지 있어 보존.
- `src/components/composables/` 와 `src/composables/` 두 위치에 composables 분산.
- 단일 라우트라 `router.js`가 거의 형식적. 페이지가 늘면 그때 분리.
```

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 프레시 웜: 따뜻한 정체성 유지 + 누런기 제거, 액센트 더 선명
        charcoal: {
          DEFAULT: '#15171B',
          light: '#1E2126',
        },
        paper: {
          DEFAULT: '#FAF8F4',
          dim: '#EFEBE3',
        },
        amber: {
          DEFAULT: '#F2911E',
          dark: '#C2730F',
        },
        teal: {
          DEFAULT: '#2FA39B',
          dark: '#21847D',
        },
        ink: {
          light: '#1A1C20',
          dark: '#ECEAE3',
        },
      },
      fontFamily: {
        // 주력: Pretendard (제목/본문). display는 같은 패밀리를 무거운 weight로 사용.
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', '"Segoe UI"', '"Apple SD Gothic Neo"', '"Noto Sans KR"', '"Malgun Gothic"', 'sans-serif'],
        display: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        // 유틸리티: 라벨·숫자·상태 텍스처 전용
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        // 큰 한글 디스플레이 헤딩용 (Pretendard는 음수 트래킹이 보기 좋음)
        tightest: '-0.045em',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}


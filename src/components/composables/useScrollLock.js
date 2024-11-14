// composables/useScrollLock.js
export function useScrollLock() {
    const lockScroll = () => {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
        document.body.style.overflow = 'hidden'
        document.body.style.paddingRight = `${scrollBarWidth}px`  // 스크롤바 너비만큼 패딩 추가하여 화면 흔들림 방지
    }

    const unlockScroll = () => {
        document.body.style.overflow = ''
        document.body.style.paddingRight = ''
    }

    return {
        lockScroll,
        unlockScroll
    }
}
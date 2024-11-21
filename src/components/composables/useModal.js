// useModal.js composable
import { ref, onMounted, onUnmounted } from 'vue'

export function useModalNavigation(isOpen, closeModal, modalType = 'default') {
    const modalId = ref(`modal-${Math.random().toString(36).substr(2, 9)}`)

    const handlePopState = (event) => {
        // 이전 상태
        const prevState = event.state
        // 현재 상태
        const currentState = window.history.state

        // 이미지 모달인 경우
        if (modalType === 'image' && isOpen.value) {
            closeModal()
        }
        // 프로젝트 상세 모달인 경우
        else if (modalType === 'project' && isOpen.value && (!currentState || !currentState.modalId)) {
            closeModal()
        }
    }

    const addModalToHistory = () => {
        // 현재 상태를 히스토리에 추가
        window.history.pushState(
            {
                modalId: modalId.value,
                modalType,
                timestamp: Date.now()
            },
            '',
            window.location.pathname
        )
    }

    const removeModalFromHistory = () => {
        // 모달이 프로그래밍적으로 닫힐 때 (뒤로가기가 아닌 경우)는
        // 현재 모달 타입이 일치할 때만 히스토리에서 제거
        const currentState = window.history.state
        if (currentState?.modalType === modalType) {
            window.history.back()
        }
    }

    onMounted(() => {
        window.addEventListener('popstate', handlePopState)
    })

    onUnmounted(() => {
        window.removeEventListener('popstate', handlePopState)
    })

    return {
        addModalToHistory,
        removeModalFromHistory
    }
}
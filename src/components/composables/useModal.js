// composables/useModal.js
import { ref } from 'vue'

export function useModal() {
    const isOpen = ref(false)
    const currentData = ref(null)

    const openModal = (data = null) => {
        currentData.value = data
        isOpen.value = true
    }

    const closeModal = () => {
        currentData.value = null
        isOpen.value = false
    }

    return {
        isOpen,
        currentData,
        openModal,
        closeModal
    }
}
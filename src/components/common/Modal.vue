<template>
    <transition name="modal">
        <div v-if="isOpen" class="fixed inset-0 z-[9999] overflow-y-auto" @click="closeModal">
            <div class="min-h-screen px-4 text-center">
                <!-- 배경 오버레이 -->
                <div class="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"></div>

                <!-- 모달 센터링을 위한 트릭 -->
                <span class="inline-block h-screen align-middle" aria-hidden="true">&#8203;</span>

                <!-- 모달 컨텐츠 -->
                <div class="inline-block w-full max-w-4xl p-6 my-8 text-left align-middle bg-white dark:bg-gray-800 rounded-2xl shadow-xl transform transition-all"
                    @click.stop>
                    <!-- 닫기 버튼 -->
                    <button
                        class="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
                        @click="closeModal">
                        <i class="fas fa-times text-xl"></i>
                    </button>

                    <!-- 스크롤 가능한 컨텐츠 영역 -->
                    <div class="mt-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { watch, onUnmounted } from 'vue'
import { useScrollLock } from '../composables/useScrollLock'

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
})

const emit = defineEmits(['close'])
const { lockScroll, unlockScroll } = useScrollLock()

const closeModal = () => {
    emit('close')
}

watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        lockScroll()
    } else {
        unlockScroll()
    }
})

// 컴포넌트가 언마운트될 때 스크롤 잠금 해제
onUnmounted(() => {
    unlockScroll()
})
</script>

<style scoped>
/* 트랜지션 애니메이션 */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.95);
}

/* 커스텀 스크롤바 */
.custom-scrollbar {
    scrollbar-width: thin;
    scrollbar-color: #CBD5E1 transparent;
}

.custom-scrollbar::-webkit-scrollbar {
    width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #CBD5E1;
    border-radius: 3px;
}

/* 다크모드 스크롤바 */
:global(.dark) .custom-scrollbar {
    scrollbar-color: #4B5563 transparent;
}

:global(.dark) .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: #4B5563;
}
</style>
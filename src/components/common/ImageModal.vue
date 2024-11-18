<!-- components/ImageModal.vue -->
<template>
    <Modal :is-open="isOpen" @close="$emit('close')" class="max-w-[90vw]">
        <div class="relative bg-black min-h-[80vh] flex items-center justify-center overflow-hidden">
            <!-- 메인 이미지 -->
            <div class="relative cursor-move"
                :style="{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)` }"
                @mousedown="startDrag" @mousemove="onDrag" @mouseup="stopDrag" @mouseleave="stopDrag"
                @wheel.prevent="handleWheel">
                <img :src="images[modelValue]" :alt="`${title} screenshot ${modelValue + 1}`"
                    class="max-h-[80vh] w-auto object-contain transition-transform" @click="toggleZoom" />
            </div>

            <!-- 네비게이션 화살표 -->
            <button @click="$emit('update:modelValue', previousIndex)"
                class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <i class="fas fa-chevron-left text-2xl"></i>
            </button>

            <button @click="$emit('update:modelValue', nextIndex)"
                class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <i class="fas fa-chevron-right text-2xl"></i>
            </button>

            <!-- 이미지 카운터 및 줌 컨트롤 -->
            <div class="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
                <div class="px-3 py-1 bg-black/50 text-white rounded-full">
                    {{ modelValue + 1 }} / {{ images.length }}
                </div>
                <div class="flex gap-2">
                    <button @click="zoomOut"
                        class="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        :disabled="scale <= 1">
                        <i class="fas fa-search-minus"></i>
                    </button>
                    <button @click="zoomIn"
                        class="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button @click="resetZoom"
                        class="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        :disabled="scale === 1">
                        <i class="fas fa-undo"></i>
                    </button>
                </div>
            </div>

            <!-- 닫기 버튼 -->
            <button @click="$emit('close')"
                class="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <i class="fas fa-times text-xl"></i>
            </button>
        </div>
    </Modal>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Modal from './Modal.vue'

const props = defineProps({
    isOpen: Boolean,
    images: Array,
    title: String,
    modelValue: Number
})

const emit = defineEmits(['close', 'update:modelValue'])

// 확대/축소 관련 상태
const scale = ref(1)
const position = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })

// 이미지 인덱스 계산
const nextIndex = computed(() =>
    props.modelValue === props.images.length - 1 ? 0 : props.modelValue + 1
)
const previousIndex = computed(() =>
    props.modelValue === 0 ? props.images.length - 1 : props.modelValue - 1
)

// 드래그 관련 함수
const startDrag = (e) => {
    if (scale.value > 1) {
        isDragging.value = true
        dragStart.value = {
            x: e.clientX - position.value.x,
            y: e.clientY - position.value.y
        }
    }
}

const onDrag = (e) => {
    if (isDragging.value && scale.value > 1) {
        position.value = {
            x: e.clientX - dragStart.value.x,
            y: e.clientY - dragStart.value.y
        }
    }
}

const stopDrag = () => {
    isDragging.value = false
}

// 줌 관련 함수
const MIN_SCALE = 1
const MAX_SCALE = 3
const SCALE_STEP = 0.5

const zoomIn = () => {
    if (scale.value < MAX_SCALE) {
        scale.value = Math.min(scale.value + SCALE_STEP, MAX_SCALE)
    }
}

const zoomOut = () => {
    if (scale.value > MIN_SCALE) {
        scale.value = Math.max(scale.value - SCALE_STEP, MIN_SCALE)
        if (scale.value === MIN_SCALE) {
            position.value = { x: 0, y: 0 }
        }
    }
}

const resetZoom = () => {
    scale.value = 1
    position.value = { x: 0, y: 0 }
}

// 마우스 휠 이벤트 처리
const handleWheel = (e) => {
    if (e.deltaY < 0) {
        zoomIn()
    } else {
        zoomOut()
    }
}

// 이미지 변경시 줌 리셋
watch(() => props.modelValue, () => {
    resetZoom()
})

// 키보드 네비게이션
const handleKeydown = (e) => {
    if (!props.isOpen) return

    if (e.key === 'ArrowLeft') {
        emit('update:modelValue', previousIndex.value)
    } else if (e.key === 'ArrowRight') {
        emit('update:modelValue', nextIndex.value)
    } else if (e.key === 'Escape') {
        emit('close')
    } else if (e.key === '=' || e.key === '+') {
        zoomIn()
    } else if (e.key === '-') {
        zoomOut()
    } else if (e.key === '0') {
        resetZoom()
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>
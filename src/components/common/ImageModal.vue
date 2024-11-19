<template>
    <Modal :is-open="isOpen" @close="$emit('close')" class="max-w-[90vw]">
        <div ref="containerRef" class="relative bg-black min-h-[80vh] flex items-center justify-center overflow-hidden">
            <!-- 메인 이미지 -->
            <div ref="dragArea" class="relative touch-none"
                :class="{ 'cursor-grab': scale > 1 && !isDragging, 'cursor-grabbing': isDragging }"
                :style="{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)` }"
                @mousedown.prevent="startDrag" @touchstart.prevent="startDrag" @wheel="handleWheel">
                <img ref="imageRef" :src="images[modelValue]" :alt="`${title} screenshot ${modelValue + 1}`"
                    class="max-h-[80vh] w-auto object-contain transition-transform duration-200 select-none"
                    @dblclick="toggleZoom" @load="onImageLoad" @dragstart.prevent />
            </div>

            <!-- 네비게이션 화살표 - 모바일에서는 스와이프로 대체 -->
            <template v-if="!isMobile">
                <button v-show="images.length > 1" @click="$emit('update:modelValue', previousIndex)"
                    class="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                    <i class="fas fa-chevron-left text-2xl"></i>
                </button>

                <button v-show="images.length > 1" @click="$emit('update:modelValue', nextIndex)"
                    class="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                    <i class="fas fa-chevron-right text-2xl"></i>
                </button>
            </template>

            <!-- 컨트롤 패널 -->
            <div class="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
                <div v-if="images.length > 1" class="px-3 py-1 bg-black/50 text-white rounded-full text-sm">
                    {{ modelValue + 1 }} / {{ images.length }}
                </div>
                <div class="flex gap-2">
                    <button @click="zoomOut"
                        class="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors disabled:opacity-50"
                        :disabled="scale <= 1">
                        <i class="fas fa-search-minus"></i>
                    </button>
                    <button @click="zoomIn"
                        class="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors disabled:opacity-50"
                        :disabled="scale >= MAX_SCALE">
                        <i class="fas fa-search-plus"></i>
                    </button>
                    <button @click="resetZoom"
                        class="p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors disabled:opacity-50"
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

// refs
const containerRef = ref(null)
const imageRef = ref(null)

// 상수
const MIN_SCALE = 1
const MAX_SCALE = 3
const SCALE_STEP = 0.5
const SWIPE_THRESHOLD = 50

// 상태
const scale = ref(1)
const position = ref({ x: 0, y: 0 })
const isDragging = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const startPosition = ref({ x: 0, y: 0 })
const isMobile = ref(window.innerWidth <= 768)
const imageSize = ref({ width: 0, height: 0 })
const containerSize = ref({ width: 0, height: 0 })

// 인덱스 계산
const nextIndex = computed(() =>
    props.modelValue === props.images.length - 1 ? 0 : props.modelValue + 1
)
const previousIndex = computed(() =>
    props.modelValue === 0 ? props.images.length - 1 : props.modelValue - 1
)

// 이미지 로드 핸들러
const onImageLoad = () => {
    if (imageRef.value && containerRef.value) {
        const imgRect = imageRef.value.getBoundingClientRect()
        const containerRect = containerRef.value.getBoundingClientRect()

        imageSize.value = {
            width: imgRect.width,
            height: imgRect.height
        }
        containerSize.value = {
            width: containerRect.width,
            height: containerRect.height
        }

        // 초기 상태 리셋
        resetZoom()
    }
}

// 드래그 범위 계산
const calculateBounds = () => {
    const scaledWidth = imageSize.value.width * scale.value
    const scaledHeight = imageSize.value.height * scale.value

    return {
        left: Math.min(0, (containerSize.value.width - scaledWidth) / 2),
        right: Math.max(0, (scaledWidth - containerSize.value.width) / 2),
        top: Math.min(0, (containerSize.value.height - scaledHeight) / 2),
        bottom: Math.max(0, (scaledHeight - containerSize.value.height) / 2)
    }
}

// 드래그 관련 함수
const startDrag = (e) => {
    if (scale.value <= 1) return
    e.preventDefault()

    isDragging.value = true
    const pos = e.touches ? e.touches[0] : e

    dragStart.value = {
        x: pos.clientX,
        y: pos.clientY
    }

    startPosition.value = {
        x: position.value.x,
        y: position.value.y
    }

    // 마우스 이벤트 리스너 등록
    if (e.type === 'mousedown') {
        document.addEventListener('mousemove', onDrag)
        document.addEventListener('mouseup', stopDrag)
    } else {
        document.addEventListener('touchmove', onDrag, { passive: false })
        document.addEventListener('touchend', stopDrag)
    }
}

const onDrag = (e) => {
    if (!isDragging.value) return
    e.preventDefault()

    const pos = e.touches ? e.touches[0] : e
    const dx = pos.clientX - dragStart.value.x
    const dy = pos.clientY - dragStart.value.y

    const bounds = calculateBounds()

    position.value = {
        x: Math.max(Math.min(startPosition.value.x + dx / scale.value, bounds.right), -bounds.right),
        y: Math.max(Math.min(startPosition.value.y + dy / scale.value, bounds.bottom), -bounds.bottom)
    }
}

const stopDrag = (e) => {
    if (!isDragging.value) return

    isDragging.value = false

    // 이벤트 리스너 제거
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchmove', onDrag)
    document.removeEventListener('touchend', stopDrag)
}

// 줌 관련 함수
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

const toggleZoom = () => {
    if (scale.value > 1) {
        resetZoom()
    } else {
        scale.value = 2
    }
}

// 마우스 휠 이벤트 처리
const handleWheel = (e) => {
    e.preventDefault()
    if (e.deltaY < 0) {
        zoomIn()
    } else {
        zoomOut()
    }
}

// 이벤트 리스너
const handleResize = () => {
    isMobile.value = window.innerWidth <= 768
    onImageLoad()
}

const handleKeydown = (e) => {
    if (!props.isOpen) return

    switch (e.key) {
        case 'ArrowLeft':
            emit('update:modelValue', previousIndex.value)
            break
        case 'ArrowRight':
            emit('update:modelValue', nextIndex.value)
            break
        case 'Escape':
            emit('close')
            break
        case '=':
        case '+':
            zoomIn()
            break
        case '-':
            zoomOut()
            break
        case '0':
            resetZoom()
            break
    }
}

// 이미지 변경시 줌 리셋
watch(() => props.modelValue, () => {
    resetZoom()
})

// 라이프사이클 훅
onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
    window.addEventListener('resize', handleResize)
    onImageLoad()
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    window.removeEventListener('resize', handleResize)
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
    document.removeEventListener('touchmove', onDrag)
    document.removeEventListener('touchend', stopDrag)
})

</script>
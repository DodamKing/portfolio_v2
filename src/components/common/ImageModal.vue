<template>
    <transition name="fade">
        <div v-if="isOpen" class="fixed inset-0 z-[9999] bg-black">
            <!-- 이미지 뷰어 영역 -->
            <div ref="containerRef" class="relative w-full h-full flex items-center justify-center">
                <!-- 로딩 인디케이터 -->
                <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center">
                    <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>

                <!-- 메인 이미지 -->
                <div ref="dragArea" class="relative touch-none"
                    :class="{ 'cursor-grab': scale > 1 && !isDragging, 'cursor-grabbing': isDragging }"
                    :style="{ transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)` }"
                    @mousedown.prevent="startDrag" 
                    @touchstart.prevent="handleTouchStart">
                    <img ref="imageRef" 
                        :src="images[modelValue]" 
                        :alt="`${title} screenshot ${modelValue + 1}`"
                        class="max-w-[100vw] max-h-[100vh] w-auto h-auto object-contain select-none"
                        @dblclick="toggleZoom" 
                        @load="onImageLoad" 
                        @dragstart.prevent />
                </div>

                <!-- 네비게이션 화살표 - 모바일에서는 스와이프로 대체 -->
                <template v-if="!isMobile && images.length > 1">
                    <button @click="$emit('update:modelValue', previousIndex)"
                        class="absolute left-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                        <i class="fas fa-chevron-left text-2xl"></i>
                    </button>

                    <button @click="$emit('update:modelValue', nextIndex)"
                        class="absolute right-4 top-1/2 -translate-y-1/2 p-4 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                        <i class="fas fa-chevron-right text-2xl"></i>
                    </button>
                </template>

                <!-- 상단 컨트롤 -->
                <div class="absolute top-0 left-0 right-0 p-4 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
                    <div class="text-white text-sm">
                        <span v-if="title" class="mr-4">{{ title }}</span>
                        <span v-if="images.length > 1">{{ modelValue + 1 }} / {{ images.length }}</span>
                    </div>
                    <button @click="$emit('close')"
                        class="p-2 text-white hover:text-gray-300 transition-colors">
                        <i class="fas fa-times text-xl"></i>
                    </button>
                </div>

                <!-- 하단 컨트롤 -->
                <div class="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center bg-gradient-to-t from-black/50 to-transparent">
                    <div class="flex gap-4">
                        <button @click="zoomOut"
                            class="p-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
                            :disabled="scale <= 1">
                            <i class="fas fa-search-minus text-xl"></i>
                        </button>
                        <button @click="zoomIn"
                            class="p-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
                            :disabled="scale >= MAX_SCALE">
                            <i class="fas fa-search-plus text-xl"></i>
                        </button>
                        <button @click="resetZoom"
                            class="p-2 text-white hover:text-gray-300 transition-colors disabled:opacity-50"
                            :disabled="scale === 1">
                            <i class="fas fa-undo text-xl"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useModalNavigation } from '../composables/useModal';

const props = defineProps({
    isOpen: Boolean,
    images: Array,
    title: String,
    modelValue: Number
})

const emit = defineEmits(['close', 'update:modelValue'])

// 모달 네비게이션 설정
const { addModalToHistory, removeModalFromHistory } = useModalNavigation(
    computed(() => props.isOpen),
    () => emit('close'), 'image'
)

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

// 터치 관련 상태
const initialPinchDistance = ref(0)
const initialScale = ref(1)
const lastTouchTime = ref(0)
const pinchCenter = ref({ x: 0, y: 0 })
const initialTouchDistance = ref(0)
const initialTouchCenter = ref({ x: 0, y: 0 })

const isLoading = ref(false)

// 인덱스 계산
const nextIndex = computed(() =>
    props.modelValue === props.images.length - 1 ? 0 : props.modelValue + 1
)
const previousIndex = computed(() =>
    props.modelValue === 0 ? props.images.length - 1 : props.modelValue - 1
)

// 이미지 프리로딩
const preloadImages = () => {
    const nextImg = new Image()
    const prevImg = new Image()
    
    if (props.images[nextIndex.value]) {
        nextImg.src = props.images[nextIndex.value]
    }
    if (props.images[previousIndex.value]) {
        prevImg.src = props.images[previousIndex.value]
    }
}

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
        
        isLoading.value = false
        resetZoom()
        preloadImages() // 다음/이전 이미지 프리로드
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

// 터치 이벤트 핸들러
const handleTouchStart = (e) => {
    e.preventDefault()
    const now = Date.now()
    const timeDiff = now - lastTouchTime.value

    if (timeDiff < 300) {  // 더블 탭 감지
        toggleZoom()
        e.preventDefault()
        lastTouchTime.value = 0
        return
    }
    lastTouchTime.value = now

    if (e.touches.length === 2) {
        // 핀치 줌 시작 시 중심점 계산
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        
        initialTouchDistance.value = getPinchDistance(e.touches)
        initialTouchCenter.value = {
            x: (touch1.clientX + touch2.clientX) / 2,
            y: (touch1.clientY + touch2.clientY) / 2
        }
        initialScale.value = scale.value
        
        // 컨테이너 기준 상대 위치 계산
        const rect = containerRef.value.getBoundingClientRect()
        pinchCenter.value = {
            x: (initialTouchCenter.value.x - rect.left) / scale.value,
            y: (initialTouchCenter.value.y - rect.top) / scale.value
        }
        
        return
    }

    // 단일 터치 (드래그 또는 스와이프)
    const touch = e.touches[0]
    dragStart.value = {
        x: touch.clientX,
        y: touch.clientY
    }
    startPosition.value = {
        x: position.value.x,
        y: position.value.y
    }
    isDragging.value = true

    document.addEventListener('touchmove', handleTouchMove, { passive: false })
    document.addEventListener('touchend', handleTouchEnd)
}

const handleTouchMove = (e) => {
    e.preventDefault()

    if (e.touches.length === 2) {
        const touch1 = e.touches[0]
        const touch2 = e.touches[1]
        const currentDistance = getPinchDistance(e.touches)
        const currentCenter = {
            x: (touch1.clientX + touch2.clientX) / 2,
            y: (touch1.clientY + touch2.clientY) / 2
        }
        
        // 스케일 변화량 계산
        const scaleDelta = currentDistance / initialTouchDistance.value
        const newScale = Math.min(Math.max(initialScale.value * scaleDelta, MIN_SCALE), MAX_SCALE)
        
        if (newScale !== scale.value) {
            // 핀치 중심점 기준으로 위치 조정
            const rect = containerRef.value.getBoundingClientRect()
            const dx = (currentCenter.x - initialTouchCenter.value.x) / newScale
            const dy = (currentCenter.y - initialTouchCenter.value.y) / newScale
            
            scale.value = newScale
            
            const bounds = calculateBounds()
            position.value = {
                x: Math.max(Math.min(startPosition.value.x + dx, bounds.right), -bounds.right),
                y: Math.max(Math.min(startPosition.value.y + dy, bounds.bottom), -bounds.bottom)
            }
        }
        return
    }

    if (!isDragging.value || scale.value <= 1) return

    const touch = e.touches[0]
    const dx = touch.clientX - dragStart.value.x
    const dy = touch.clientY - dragStart.value.y

    const bounds = calculateBounds()
    position.value = {
        x: Math.max(Math.min(startPosition.value.x + dx / scale.value, bounds.right), -bounds.right),
        y: Math.max(Math.min(startPosition.value.y + dy / scale.value, bounds.bottom), -bounds.bottom)
    }
}

const handleTouchEnd = (e) => {
    if (!isDragging.value) return

    const touch = e.changedTouches[0]
    const dx = touch.clientX - dragStart.value.x
    const dy = Math.abs(touch.clientY - dragStart.value.y)

    // 수평 스와이프가 수직 이동보다 크고, 확대되지 않은 상태일 때만 이미지 전환
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > dy && scale.value === 1) {
        if (dx > 0) {
            emit('update:modelValue', previousIndex.value)
        } else {
            emit('update:modelValue', nextIndex.value)
        }
    }

    isDragging.value = false
    initialPinchDistance.value = 0
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
}

// 마우스 드래그 핸들러 (데스크톱)
const startDrag = (e) => {
    if (scale.value <= 1 || e.touches) return
    e.preventDefault()

    isDragging.value = true
    dragStart.value = {
        x: e.clientX,
        y: e.clientY
    }
    startPosition.value = {
        x: position.value.x,
        y: position.value.y
    }

    document.addEventListener('mousemove', onDrag)
    document.addEventListener('mouseup', stopDrag)
}

const onDrag = (e) => {
    if (!isDragging.value) return
    e.preventDefault()

    const dx = e.clientX - dragStart.value.x
    const dy = e.clientY - dragStart.value.y

    const bounds = calculateBounds()
    position.value = {
        x: Math.max(Math.min(startPosition.value.x + dx / scale.value, bounds.right), -bounds.right),
        y: Math.max(Math.min(startPosition.value.y + dy / scale.value, bounds.bottom), -bounds.bottom)
    }
}

const stopDrag = () => {
    if (!isDragging.value) return
    isDragging.value = false
    document.removeEventListener('mousemove', onDrag)
    document.removeEventListener('mouseup', stopDrag)
}

// 핀치 거리 계산
const getPinchDistance = (touches) => {
    return Math.hypot(
        touches[1].clientX - touches[0].clientX,
        touches[1].clientY - touches[0].clientY
    )
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
    }
}

watch([() => props.modelValue, () => props.isOpen], ([newModelValue, newIsOpen], [oldModelValue, oldIsOpen]) => {
    // 이미지가 변경될 때
    if (newModelValue !== oldModelValue) {
        resetZoom()
    }

    // 모달이 열리고 닫힐 때
    if (newIsOpen !== oldIsOpen) {
        if (newIsOpen) {
            addModalToHistory()
        } else {
            removeModalFromHistory()
        }
    }
})

// 이미지 전환 시 로딩 상태 처리
watch(() => props.modelValue, (newVal, oldVal) => {
    if (newVal !== oldVal) {
        isLoading.value = true
        resetZoom()
    }
})

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
    document.removeEventListener('touchmove', handleTouchMove)
    document.removeEventListener('touchend', handleTouchEnd)
    if (props.isOpen) {
        removeModalFromHistory()
    }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

img {
    transition: opacity 0.2s ease;
}
</style>
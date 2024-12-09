<!-- components/ImageSlider.vue -->
<template>
    <div @touchstart="handleTouchStart" @touchend="handleTouchEnd" class="relative w-full max-w-4xl mx-auto">
        <!-- 메인 이미지 컨테이너 -->
        <div class="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            <!-- 로딩 인디케이터 -->
            <div v-if="isLoading" class="absolute inset-0 z-10 flex items-center justify-center bg-black/30">
                <div class="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>

            <img :src="images[currentIndex]" :alt="`${title} screenshot ${currentIndex + 1}`"
                class="w-full h-full object-contain cursor-pointer transition-opacity duration-200"
                :class="{ 'opacity-0': isLoading }" @click="$emit('openModal', currentIndex)" @load="handleImageLoad" />

            <!-- 네비게이션 화살표 -->
            <button @click.stop="goToPrevious"
                class="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <i class="fas fa-chevron-left text-xl"></i>
            </button>

            <button @click.stop="goToNext"
                class="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                <i class="fas fa-chevron-right text-xl"></i>
            </button>

            <!-- 이미지 카운터 -->
            <div class="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-black/50 text-white text-sm">
                {{ currentIndex + 1 }} / {{ images.length }}
            </div>

            <!-- 확대 아이콘 -->
            <div class="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white cursor-pointer hover:bg-black/70"
                @click="$emit('openModal', currentIndex)">
                <i class="fas fa-expand text-xl"></i>
            </div>
        </div>

        <!-- 썸네일 인디케이터 -->
        <div class="mt-4 flex gap-2 justify-center">
            <button v-for="(_, index) in images" :key="index" @click="goToIndex(index)"
                class="w-2 h-2 rounded-full transition-all" :class="[
                    currentIndex === index
                        ? 'bg-blue-600 w-4'
                        : 'bg-gray-300 hover:bg-gray-400'
                ]" :aria-label="`Go to image ${index + 1}`" />
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'

const touchStartX = ref(0)
const touchEndX = ref(0)
const isLoading = ref(true)
const loadedImages = ref(new Set())

const props = defineProps({
    images: {
        type: Array,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    modelValue: {
        type: Number,
        required: true
    }
})

const emit = defineEmits(['openModal', 'update:modelValue'])

const currentIndex = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
})

const goToNext = () => {
    isLoading.value = !loadedImages.value.has(props.images[
        (currentIndex.value + 1) % props.images.length
    ])
    currentIndex.value = currentIndex.value === props.images.length - 1
        ? 0
        : currentIndex.value + 1
}

const goToPrevious = () => {
    isLoading.value = !loadedImages.value.has(props.images[
        currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
    ])
    currentIndex.value = currentIndex.value === 0
        ? props.images.length - 1
        : currentIndex.value - 1
}

const goToIndex = (index) => {
    if (index !== currentIndex.value) {
        isLoading.value = !loadedImages.value.has(props.images[index])
        currentIndex.value = index
    }
}

// 키보드 네비게이션
const handleKeydown = (e) => {
    if (e.key === 'ArrowLeft') {
        goToPrevious()
    } else if (e.key === 'ArrowRight') {
        goToNext()
    }
}

// 터치 이벤트 핸들러 추가
const handleTouchStart = (e) => {
    touchStartX.value = e.touches[0].clientX
}

const handleTouchEnd = (e) => {
    touchEndX.value = e.changedTouches[0].clientX
    const swipeDistance = touchEndX.value - touchStartX.value

    if (Math.abs(swipeDistance) > 50) { // 최소 스와이프 거리
        if (swipeDistance > 0) {
            goToPrevious()
        } else {
            goToNext()
        }
    }
}

// 이미지 프리로딩
const preloadNextImage = () => {
    const nextIndex = (currentIndex.value + 1) % props.images.length
    const prevIndex = currentIndex.value === 0 ? props.images.length - 1 : currentIndex.value - 1
    
    ;[nextIndex, prevIndex].forEach(index => {
        if (!loadedImages.value.has(props.images[index])) {
            const img = new Image()
            img.src = props.images[index]
        }
    })
}

// 이미지 로드 핸들러
const handleImageLoad = () => {
    loadedImages.value.add(props.images[currentIndex.value])
    isLoading.value = false
    preloadNextImage()
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
    isLoading.value = !loadedImages.value.has(props.images[currentIndex.value])
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
})
</script>
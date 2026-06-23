<template>
    <section id="projects"
        class="py-12 sm:py-20 px-4 bg-paper-dim dark:bg-charcoal-light">
        <div class="max-w-6xl mx-auto">
            <h2 class="font-display text-2xl sm:text-3xl font-bold text-center mb-4 text-ink-light dark:text-ink-dark">Projects</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">최근 진행한 주요 프로젝트입니다.</p>

            <!-- 모바일: 스와이프 캐러셀 -->
            <div class="md:hidden">
                <div ref="carouselRef" class="overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                    @scroll.passive="handleScroll">
                    <div class="flex gap-4">
                        <div v-for="project in projects" :key="project.id"
                            :style="{ width: cardWidth + 'px' }"
                            class="snap-start flex-shrink-0 bg-white dark:bg-charcoal rounded-lg shadow-sm border border-ink-light/10 dark:border-ink-dark/10 overflow-hidden">
                            <!-- 이미지 섹션 -->
                            <div class="relative overflow-hidden h-48 cursor-pointer"
                                @click="showProjectDetails(project)">
                                <img :src="project.image" :alt="project.title"
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity">
                                </div>

                                <div
                                    class="absolute bottom-0 left-0 right-0 p-2 px-3 bg-gradient-to-t from-black/60 to-transparent flex items-center gap-2">
                                    <span class="relative flex h-1.5 w-1.5">
                                        <span v-if="project.liveLink" class="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping"></span>
                                        <span class="relative inline-flex h-1.5 w-1.5 rounded-full" :class="project.liveLink ? 'bg-teal' : 'bg-gray-400'"></span>
                                    </span>
                                    <span class="font-mono text-xs text-white tracking-wide">
                                        {{ project.liveLink ? 'LIVE' : 'ARCHIVED' }} · REC#{{ String(project.id).padStart(2, '0') }} · {{ project.period }}
                                    </span>
                                </div>
                            </div>

                            <div class="p-6">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        {{ project.title }}
                                    </h3>
                                    <span
                                        class="text-xs px-2 py-1 border border-amber/40 text-amber rounded-full">
                                        {{ project.category }}
                                    </span>
                                </div>

                                <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                    {{ project.shortDescription }}
                                </p>

                                <div class="flex flex-wrap gap-2 mb-4">
                                    <span v-for="tech in project.technologies" :key="tech"
                                        class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                        {{ tech }}
                                    </span>
                                </div>

                                <div class="flex justify-between items-center mt-4">
                                    <button @click="showProjectDetails(project)"
                                        class="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                                        <i class="fas fa-search"></i>
                                        자세히 보기
                                    </button>
                                    <div class="flex gap-3">
                                        <a v-if="project.liveLink" :href="project.liveLink" target="_blank"
                                            class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-amber transition-colors"
                                            @click.stop>
                                            <i class="fas fa-external-link-alt"></i>
                                        </a>
                                        <a :href="project.githubLink" target="_blank"
                                            class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-amber transition-colors"
                                            @click.stop>
                                            <i class="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-shrink-0" :style="{ width: trailingSpace + 'px' }" aria-hidden="true"></div>
                    </div>
                </div>

                <div class="flex justify-center mt-6 gap-2">
                    <div v-for="(_, index) in projects" :key="index"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        :class="[currentSlide === index ? 'w-6 bg-amber' : 'bg-gray-300 dark:bg-gray-600']">
                    </div>
                </div>
            </div>

            <!-- 데스크탑: 그리드 레이아웃 -->
            <div class="hidden md:block">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div v-for="project in displayedProjects" :key="project.id"
                        class="bg-white dark:bg-charcoal rounded-lg shadow-sm border border-ink-light/10 dark:border-ink-dark/10 overflow-hidden group hover:border-amber/50 transition-all duration-300">
                        <div class="relative overflow-hidden h-48 cursor-pointer" @click="showProjectDetails(project)">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>

                            <div
                                class="absolute bottom-0 left-0 right-0 p-2 px-3 bg-gradient-to-t from-black/60 to-transparent flex items-center gap-2">
                                <span class="relative flex h-1.5 w-1.5">
                                    <span v-if="project.liveLink" class="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping"></span>
                                    <span class="relative inline-flex h-1.5 w-1.5 rounded-full" :class="project.liveLink ? 'bg-teal' : 'bg-gray-400'"></span>
                                </span>
                                <span class="font-mono text-xs text-white tracking-wide">
                                    {{ project.liveLink ? 'LIVE' : 'ARCHIVED' }} · REC#{{ String(project.id).padStart(2, '0') }} · {{ project.period }}
                                </span>
                            </div>
                        </div>

                        <div class="p-6">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    {{ project.title }}
                                </h3>
                                <span
                                    class="text-xs px-2 py-1 border border-amber/40 text-amber rounded-full">
                                    {{ project.category }}
                                </span>
                            </div>

                            <p class="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                                {{ project.shortDescription }}
                            </p>

                            <div class="flex flex-wrap gap-2 mb-4">
                                <span v-for="tech in project.technologies" :key="tech"
                                    class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                    {{ tech }}
                                </span>
                            </div>

                            <div class="flex justify-between items-center mt-4">
                                <button @click="showProjectDetails(project)"
                                    class="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                                    <i class="fas fa-search"></i>
                                    자세히 보기
                                </button>
                                <div class="flex gap-3">
                                    <a v-if="project.liveLink" :href="project.liveLink" target="_blank"
                                        class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-amber transition-colors"
                                        @click.stop>
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                    <a :href="project.githubLink" target="_blank"
                                        class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-amber transition-colors"
                                        @click.stop>
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div v-if="totalPages > 1" class="flex justify-center items-center gap-4">
                    <!-- 이전 버튼 -->
                    <button @click="prevPage" :disabled="currentPage === 1"
                        class="flex items-center text-gray-600 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
                        <i class="fas fa-chevron-left text-lg"></i>
                    </button>

                    <!-- 페이지 표시 -->
                    <span class="text-gray-600 dark:text-gray-300">
                        {{ currentPage }} / {{ totalPages }}
                    </span>

                    <!-- 다음 버튼 -->
                    <button @click="nextPage" :disabled="currentPage === totalPages"
                        class="flex items-center text-gray-600 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed">
                        <i class="fas fa-chevron-right text-lg"></i>
                    </button>
                </div>
            </div>

            <!-- 프로젝트 상세 모달 -->
            <Modal :is-open="isModalOpen" @close="closeModal">
                <div v-if="selectedProject" class="w-full max-w-4xl mx-auto text-gray-900 dark:text-white">
                    <!-- 모달 헤더 -->
                    <div class="mb-6 sm:mb-8 border-b dark:border-gray-700 pb-4 sm:pb-6">
                        <h3 class="text-2xl sm:text-3xl font-bold mb-2">{{ selectedProject.title }}</h3>
                        <div
                            class="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <span class="flex items-center gap-2">
                                <i class="far fa-calendar"></i>
                                {{ selectedProject.period }}
                            </span>
                            <span class="flex items-center gap-2">
                                <i class="fas fa-tag"></i>
                                {{ selectedProject.category }}
                            </span>
                        </div>
                    </div>

                    <!-- 이미지 슬라이더 -->
                    <div class="mb-6 sm:mb-8">
                        <ImageSlider :images="selectedProject.screenshots" :title="selectedProject.title"
                            v-model="currentImageIndex" @open-modal="openImageModal"
                            class="max-h-[300px] sm:max-h-[400px] rounded-lg overflow-hidden" />
                    </div>

                    <!-- 프로젝트 설명 -->
                    <div class="bg-paper-dim dark:bg-charcoal-light rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                        <p class="whitespace-pre-line text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {{ selectedProject.fullDescription }}
                        </p>
                    </div>

                    <!-- 주요 기능 & 사용 기술 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                        <!-- 주요 기능 -->
                        <div class="bg-white dark:bg-charcoal rounded-xl p-4 sm:p-6 shadow-sm border border-ink-light/10 dark:border-ink-dark/10">
                            <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                                <i class="fas fa-list text-amber"></i>
                                주요 기능
                            </h4>
                            <ul class="space-y-2 sm:space-y-3">
                                <li v-for="feature in selectedProject.features" :key="feature"
                                    class="flex items-start text-sm sm:text-base">
                                    <span class="text-teal mr-2">›</span>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- 사용 기술 -->
                        <div class="bg-white dark:bg-charcoal rounded-xl p-4 sm:p-6 shadow-sm border border-ink-light/10 dark:border-ink-dark/10">
                            <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                                <i class="fas fa-code text-amber"></i>
                                사용 기술
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in selectedProject.technologies" :key="tech"
                                    class="px-2 sm:px-3 py-1 sm:py-1.5 font-mono border border-teal/40 text-teal-dark dark:text-teal rounded-full text-xs sm:text-sm">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- 버튼 그룹 -->
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t dark:border-gray-700">
                        <a v-if="selectedProject.liveLink" :href="selectedProject.liveLink" target="_blank"
                            class="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-amber text-charcoal font-medium rounded-lg hover:bg-amber-dark hover:text-paper transition-colors text-sm sm:text-base">
                            <i class="fas fa-external-link-alt"></i>
                            Live
                        </a>
                        <a :href="selectedProject.githubLink" target="_blank"
                            class="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-teal text-teal-dark dark:text-teal rounded-lg hover:bg-teal/10 transition-colors text-sm sm:text-base">
                            <i class="fab fa-github"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </Modal>

            <ImageModal :is-open="isImageModalOpen" :images="selectedProject?.screenshots || []"
                :title="selectedProject?.title" v-model="currentImageIndex" @close="closeImageModal" />
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import Modal from '../common/Modal.vue'
import ImageModal from '../common/ImageModal.vue';
import ImageSlider from '../common/ImageSlider.vue';
import { projects } from '@/data/projects';

const carouselRef = ref(null)
const currentSlide = ref(0)
const containerWidth = ref(0)

const SLIDE_GAP = 16 // tailwind gap-4
const CARD_RATIO = 0.85

const cardWidth = computed(() => containerWidth.value * CARD_RATIO)
const slideStep = computed(() => cardWidth.value + SLIDE_GAP)
const trailingSpace = computed(() => Math.max(0, containerWidth.value - cardWidth.value))

const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 2;  // 모바일
    if (window.innerWidth < 1024) return 4; // 태블릿
    return 6; // 데스크톱
}

const ITEMS_PER_PAGE = ref(getItemsPerPage())
const currentPage = ref(1)
const isModalOpen = ref(false)
const selectedProject = ref(null)
const totalPages = computed(() => Math.ceil(projects.length / ITEMS_PER_PAGE.value))
const isImageModalOpen = ref(false)
const currentImageIndex = ref(0)

const displayedProjects = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE.value
    return projects.slice(start, start + ITEMS_PER_PAGE.value)
})

const measureContainer = () => {
    if (carouselRef.value) {
        containerWidth.value = carouselRef.value.offsetWidth
    }
}

const handleScroll = () => {
    if (!slideStep.value || !carouselRef.value) return
    const index = Math.round(carouselRef.value.scrollLeft / slideStep.value)
    currentSlide.value = Math.max(0, Math.min(index, projects.length - 1))
}

const showProjectDetails = (project) => {
    selectedProject.value = project
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedProject.value = null
}

const openImageModal = (index) => {
    isImageModalOpen.value = true
}

const closeImageModal = () => {
    isImageModalOpen.value = false
}

const prevPage = () => {
    if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
    if (currentPage.value < totalPages.value) currentPage.value++
}

let resizeObserver = null

const handleResize = () => {
    measureContainer()
    ITEMS_PER_PAGE.value = getItemsPerPage()
}

onMounted(() => {
    measureContainer()
    window.addEventListener('resize', handleResize)
    if (typeof ResizeObserver !== 'undefined' && carouselRef.value) {
        resizeObserver = new ResizeObserver(measureContainer)
        resizeObserver.observe(carouselRef.value)
    }
})

onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
    if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
    }
})

// 프로젝트가 변경될 때도 초기화
watch(() => selectedProject.value, () => {
    currentImageIndex.value = 0
    isImageModalOpen.value = false
})
</script>

<style scoped>
.hide-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
}

.hide-scrollbar::-webkit-scrollbar {
    display: none;
}
</style>
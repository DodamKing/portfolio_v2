<template>
    <section id="projects"
        class="py-12 sm:py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-2xl sm:text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Projects</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">최근 진행한 주요 프로젝트입니다.</p>

            <!-- 모바일: 스와이프 캐러셀 -->
            <div class="md:hidden">
                <div ref="carouselRef" class="overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                    @touchstart="handleTouchStart" @touchmove="handleTouchMove" @touchend="handleTouchEnd">
                    <div class="flex gap-4">
                        <div v-for="project in projects" :key="project.id"
                            class="snap-start w-[85vw] flex-shrink-0 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <!-- 이미지 섹션 -->
                            <div class="relative overflow-hidden h-48 cursor-pointer"
                                @click="showProjectDetails(project)">
                                <img :src="project.image" :alt="project.title"
                                    class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                                <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity">
                                </div>

                                <div class="absolute top-3 left-3">
                                    <span :class="[
                                        'text-xs px-3 py-1.5 rounded-full font-medium',
                                        project.type === 'Work'
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-purple-500 text-white'
                                    ]">
                                        {{ project.type }} Project
                                    </span>
                                </div>

                                <div
                                    class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                                    <span class="text-sm text-white">{{ project.period }}</span>
                                </div>
                            </div>

                            <div class="p-6">
                                <div class="flex justify-between items-start mb-3">
                                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                        {{ project.title }}
                                    </h3>
                                    <span
                                        class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
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
                                            class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                                            @click.stop>
                                            <i class="fas fa-external-link-alt"></i>
                                        </a>
                                        <a :href="project.githubLink" target="_blank"
                                            class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                                            @click.stop>
                                            <i class="fab fa-github"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center mt-6 gap-2">
                    <div v-for="(_, index) in projects" :key="index"
                        class="w-2 h-2 rounded-full transition-all duration-300"
                        :class="[currentSlide === index ? 'w-6 bg-blue-600' : 'bg-gray-300 dark:bg-gray-600']">
                    </div>
                </div>
            </div>

            <!-- 데스크탑: 그리드 레이아웃 -->
            <div class="hidden md:block">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <div v-for="project in displayedProjects" :key="project.id"
                        class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                        <div class="relative overflow-hidden h-48 cursor-pointer" @click="showProjectDetails(project)">
                            <img :src="project.image" :alt="project.title"
                                class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                            <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>

                            <div class="absolute top-3 left-3">
                                <span :class="[
                                    'text-xs px-3 py-1.5 rounded-full font-medium',
                                    project.type === 'Work'
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-purple-500 text-white'
                                ]">
                                    {{ project.type }} Project
                                </span>
                            </div>

                            <div
                                class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                                <span class="text-sm text-white">{{ project.period }}</span>
                            </div>
                        </div>

                        <div class="p-6">
                            <div class="flex justify-between items-start mb-3">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    {{ project.title }}
                                </h3>
                                <span
                                    class="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
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
                                        class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
                                        @click.stop>
                                        <i class="fas fa-external-link-alt"></i>
                                    </a>
                                    <a :href="project.githubLink" target="_blank"
                                        class="text-sm px-3 py-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 transition-colors"
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
                    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                        <p class="whitespace-pre-line text-sm sm:text-base text-gray-600 dark:text-gray-300">
                            {{ selectedProject.fullDescription }}
                        </p>
                    </div>

                    <!-- 주요 기능 & 사용 기술 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                        <!-- 주요 기능 -->
                        <div class="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm">
                            <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                                <i class="fas fa-list text-blue-600"></i>
                                주요 기능
                            </h4>
                            <ul class="space-y-2 sm:space-y-3">
                                <li v-for="feature in selectedProject.features" :key="feature"
                                    class="flex items-start text-sm sm:text-base">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- 사용 기술 -->
                        <div class="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-sm">
                            <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                                <i class="fas fa-code text-blue-600"></i>
                                사용 기술
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in selectedProject.technologies" :key="tech"
                                    class="px-2 sm:px-3 py-1 sm:py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- 버튼 그룹 -->
                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t dark:border-gray-700">
                        <a v-if="selectedProject.liveLink" :href="selectedProject.liveLink" target="_blank"
                            class="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base">
                            <i class="fas fa-external-link-alt"></i>
                            Live
                        </a>
                        <a :href="selectedProject.githubLink" target="_blank"
                            class="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm sm:text-base">
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
const touchStart = ref(0)
const touchStartY = ref(0)

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

const handleTouchStart = (e) => {
    touchStart.value = e.touches[0].clientX
    touchStartY.value = e.touches[0].clientY
}

const handleTouchMove = (e) => {
    if (!touchStart.value) return

    // 현재 터치 위치
    const touchX = e.touches[0].clientX
    const touchY = e.touches[0].clientY
    const deltaX = touchStart.value - touchX
    const deltaY = Math.abs(e.touches[0].clientY - touchStartY.value)

    // 수평 스와이프가 수직 이동보다 큰 경우에만 preventDefault
    if (Math.abs(deltaX) > deltaY) {
        e.preventDefault()
    }
}

const handleTouchEnd = (e) => {
    if (!touchStart.value) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart.value - touchEnd

    if (Math.abs(diff) > 50) { // 최소 스와이프 거리
        if (diff > 0 && currentSlide.value < projects.length - 1) {
            currentSlide.value++
        } else if (diff < 0 && currentSlide.value > 0) {
            currentSlide.value--
        }
    }

    touchStart.value = 0
    scrollToSlide()
}

const scrollToSlide = () => {
    if (carouselRef.value) {
        const slideWidth = carouselRef.value.offsetWidth * 0.85 + 16 // width + gap
        carouselRef.value.scrollTo({
            left: slideWidth * currentSlide.value,
            behavior: 'smooth'
        })
    }
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

onMounted(() => {
    window.addEventListener('resize', () => {
        ITEMS_PER_PAGE.value = getItemsPerPage();
    });
});

onUnmounted(() => {
    window.removeEventListener('resize', () => {
        ITEMS_PER_PAGE.value = getItemsPerPage();
    });
});

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
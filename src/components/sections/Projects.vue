<!-- components/sections/Projects.vue : 개인 사이드 프로젝트 -->
<template>
    <section id="projects" class="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-paper dark:bg-charcoal">
        <div class="max-w-6xl mx-auto">
            <!-- 섹션 헤더 -->
            <p class="font-mono text-xs tracking-[0.25em] text-teal-dark dark:text-teal">// SIDE PROJECTS</p>
            <h2 class="mt-4 font-display font-extrabold tracking-tightest text-ink-light dark:text-ink-dark text-3xl sm:text-4xl lg:text-5xl">
                개인적으로 만든 것들
            </h2>
            <p class="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-light/60 dark:text-ink-dark/60">
                업무 외에 직접 기획하고 만든 사이드 프로젝트입니다. 일부는 지금도 라이브로 운영 중입니다.
            </p>

            <!-- 필터 -->
            <div class="mt-8 flex flex-wrap items-center gap-2">
                <button v-for="f in filterTabs" :key="f.value" @click="setFilter(f.value)"
                    :class="['font-mono text-sm px-3.5 py-1.5 rounded-lg border transition-colors',
                        filter === f.value
                            ? 'border-amber bg-amber/10 text-amber-dark dark:text-amber'
                            : 'border-ink-light/15 dark:border-ink-dark/15 text-ink-light/60 dark:text-ink-dark/60 hover:border-amber/40']">
                    {{ f.label }} <span class="text-ink-light/35 dark:text-ink-dark/35">{{ f.count }}</span>
                </button>
            </div>

            <!-- 모바일: 스와이프 캐러셀 -->
            <div class="md:hidden mt-8">
                <div ref="carouselRef" class="overflow-x-auto snap-x snap-mandatory hide-scrollbar"
                    @scroll.passive="handleScroll">
                    <div class="flex gap-4">
                        <div v-for="project in filteredProjects" :key="project.id" :style="{ width: cardWidth + 'px' }"
                            class="snap-start flex-shrink-0">
                            <ProjectCard :project="project" @open="showProjectDetails" />
                        </div>
                        <div class="flex-shrink-0" :style="{ width: trailingSpace + 'px' }" aria-hidden="true"></div>
                    </div>
                </div>

                <div class="flex justify-center mt-6 gap-2">
                    <div v-for="(_, index) in filteredProjects" :key="index"
                        class="h-2 rounded-full transition-all duration-300"
                        :class="currentSlide === index ? 'w-6 bg-amber' : 'w-2 bg-ink-light/20 dark:bg-ink-dark/20'"></div>
                </div>
            </div>

            <!-- 데스크톱: 그리드 -->
            <div class="hidden md:block mt-10">
                <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    <ProjectCard v-for="project in displayedProjects" :key="project.id" :project="project"
                        @open="showProjectDetails" />
                </div>

                <div v-if="totalPages > 1" class="mt-10 flex justify-center items-center gap-5">
                    <button @click="prevPage" :disabled="currentPage === 1" aria-label="이전"
                        class="grid place-items-center h-9 w-9 rounded-lg text-ink-light/70 dark:text-ink-dark/70
                        hover:bg-paper-dim dark:hover:bg-charcoal-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <span class="font-mono text-sm text-ink-light/60 dark:text-ink-dark/60">
                        {{ String(currentPage).padStart(2, '0') }} / {{ String(totalPages).padStart(2, '0') }}
                    </span>
                    <button @click="nextPage" :disabled="currentPage === totalPages" aria-label="다음"
                        class="grid place-items-center h-9 w-9 rounded-lg text-ink-light/70 dark:text-ink-dark/70
                        hover:bg-paper-dim dark:hover:bg-charcoal-light disabled:opacity-40 disabled:cursor-not-allowed transition-colors">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>

            <!-- 프로젝트 상세 모달 -->
            <Modal :is-open="isModalOpen" @close="closeModal">
                <div v-if="selectedProject" class="w-full max-w-4xl mx-auto text-ink-light dark:text-ink-dark">
                    <div class="mb-6 sm:mb-8 border-b border-ink-light/10 dark:border-ink-dark/10 pb-4 sm:pb-6">
                        <h3 class="font-display text-2xl sm:text-3xl font-bold mb-2">{{ selectedProject.title }}</h3>
                        <div class="flex flex-wrap items-center gap-3 sm:gap-4 font-mono text-sm text-ink-light/55 dark:text-ink-dark/55">
                            <span class="flex items-center gap-2"><i class="far fa-calendar"></i>{{ selectedProject.period }}</span>
                            <span class="flex items-center gap-2"><i class="fas fa-tag"></i>{{ selectedProject.category }}</span>
                        </div>
                    </div>

                    <div class="mb-6 sm:mb-8">
                        <ImageSlider :images="selectedProject.screenshots" :title="selectedProject.title"
                            v-model="currentImageIndex" @open-modal="openImageModal"
                            class="max-h-[300px] sm:max-h-[400px] rounded-lg overflow-hidden" />
                    </div>

                    <div class="bg-paper-dim dark:bg-charcoal-light rounded-xl p-4 sm:p-6 mb-6 sm:mb-8">
                        <p class="whitespace-pre-line text-sm sm:text-base leading-relaxed text-ink-light/75 dark:text-ink-dark/75">
                            {{ selectedProject.fullDescription }}
                        </p>
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 mb-6 sm:mb-8">
                        <div class="bg-paper dark:bg-charcoal rounded-xl p-4 sm:p-6 border border-ink-light/10 dark:border-ink-dark/10">
                            <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                                <i class="fas fa-list text-amber-dark dark:text-amber"></i>주요 기능
                            </h4>
                            <ul class="space-y-2 sm:space-y-3">
                                <li v-for="feature in selectedProject.features" :key="feature"
                                    class="flex items-start gap-2 text-sm sm:text-base text-ink-light/75 dark:text-ink-dark/75">
                                    <span class="text-teal-dark dark:text-teal">›</span>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
                        </div>

                        <div class="bg-paper dark:bg-charcoal rounded-xl p-4 sm:p-6 border border-ink-light/10 dark:border-ink-dark/10">
                            <h4 class="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                                <i class="fas fa-code text-amber-dark dark:text-amber"></i>사용 기술
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in selectedProject.technologies" :key="tech"
                                    class="px-2 sm:px-3 py-1 sm:py-1.5 font-mono border border-teal/40 text-teal-dark dark:text-teal rounded-full text-xs sm:text-sm">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-ink-light/10 dark:border-ink-dark/10">
                        <a v-if="selectedProject.liveLink" :href="selectedProject.liveLink" target="_blank" rel="noopener"
                            class="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-amber text-charcoal font-medium rounded-lg hover:bg-amber-dark hover:text-paper transition-colors text-sm sm:text-base">
                            <i class="fas fa-arrow-up-right-from-square"></i>Live
                        </a>
                        <a v-if="selectedProject.githubLink" :href="selectedProject.githubLink" target="_blank" rel="noopener"
                            class="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-teal text-teal-dark dark:text-teal rounded-lg hover:bg-teal/10 transition-colors text-sm sm:text-base">
                            <i class="fab fa-github"></i>GitHub
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
import ProjectCard from '../common/ProjectCard.vue';
import { projects } from '@/data/projects';

// 플랫폼 판별 (platform 필드 우선, 없으면 Flutter/카테고리로 추론)
const isMobile = (p) => p.platform === 'mobile'
    || p.technologies?.includes('Flutter')
    || /mobile/i.test(p.category || '')

const filter = ref('all')
const filteredProjects = computed(() => {
    if (filter.value === 'all') return projects
    if (filter.value === 'mobile') return projects.filter(isMobile)
    return projects.filter(p => !isMobile(p))
})
const filterTabs = computed(() => ([
    { label: 'All', value: 'all', count: projects.length },
    { label: 'Web', value: 'web', count: projects.filter(p => !isMobile(p)).length },
    { label: 'Mobile', value: 'mobile', count: projects.filter(isMobile).length },
]))

const carouselRef = ref(null)
const currentSlide = ref(0)
const containerWidth = ref(0)

const SLIDE_GAP = 16 // tailwind gap-4
const CARD_RATIO = 0.85

const cardWidth = computed(() => containerWidth.value * CARD_RATIO)
const slideStep = computed(() => cardWidth.value + SLIDE_GAP)
const trailingSpace = computed(() => Math.max(0, containerWidth.value - cardWidth.value))

const getItemsPerPage = () => {
    if (window.innerWidth < 1024) return 4; // 태블릿
    return 6; // 데스크톱
}

const ITEMS_PER_PAGE = ref(getItemsPerPage())
const currentPage = ref(1)
const isModalOpen = ref(false)
const selectedProject = ref(null)
const totalPages = computed(() => Math.ceil(filteredProjects.value.length / ITEMS_PER_PAGE.value))
const isImageModalOpen = ref(false)
const currentImageIndex = ref(0)

const displayedProjects = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE.value
    return filteredProjects.value.slice(start, start + ITEMS_PER_PAGE.value)
})

const setFilter = (value) => {
    filter.value = value
    currentPage.value = 1
    currentSlide.value = 0
    if (carouselRef.value) carouselRef.value.scrollLeft = 0
}

const measureContainer = () => {
    if (carouselRef.value) {
        containerWidth.value = carouselRef.value.offsetWidth
    }
}

const handleScroll = () => {
    if (!slideStep.value || !carouselRef.value) return
    const index = Math.round(carouselRef.value.scrollLeft / slideStep.value)
    currentSlide.value = Math.max(0, Math.min(index, filteredProjects.value.length - 1))
}

const showProjectDetails = (project) => {
    selectedProject.value = project
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedProject.value = null
}

const openImageModal = () => {
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

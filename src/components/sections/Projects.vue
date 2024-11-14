<template>
    <section id="projects" class="py-20 px-4">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Projects</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-12">최근 진행한 주요 프로젝트입니다.</p>

            <!-- 프로젝트 그리드 -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                <div v-for="project in displayedProjects" :key="project.id"
                    class="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300">
                    <!-- 이미지 섹션 - 클릭 가능 -->
                    <div class="relative overflow-hidden h-48 cursor-pointer" @click="showProjectDetails(project)">
                        <img :src="project.image" :alt="project.title"
                            class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        <div class="absolute inset-0 bg-black opacity-0 hover:opacity-20 transition-opacity"></div>
                        <div class="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/50 to-transparent">
                            <span class="text-sm text-white">{{ project.period }}</span>
                        </div>
                    </div>

                    <!-- 컨텐츠 섹션 -->
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

                        <!-- 기술 스택 -->
                        <div class="flex flex-wrap gap-2 mb-4">
                            <span v-for="tech in project.technologies" :key="tech"
                                class="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                                {{ tech }}
                            </span>
                        </div>

                        <!-- 액션 버튼 -->
                        <div class="flex justify-between items-center mt-4">
                            <button @click="showProjectDetails(project)"
                                class="text-sm px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center gap-2">
                                <i class="fas fa-search"></i>
                                자세히 보기
                            </button>
                            <div class="flex gap-3">
                                <a v-if="project.demoLink" :href="project.demoLink" target="_blank"
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

            <!-- 페이지네이션 -->
            <div v-if="totalPages > 1" class="flex justify-center space-x-2">
                <button v-for="page in totalPages" :key="page" @click="currentPage = page"
                    class="px-4 py-2 rounded-lg transition-colors" :class="[
                        currentPage === page
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                    ]">
                    {{ page }}
                </button>
            </div>

            <!-- 프로젝트 상세 모달 -->
            <Modal :is-open="isModalOpen" @close="closeModal">
                <div v-if="selectedProject" class="max-w-4xl text-gray-900 dark:text-white">
                    <!-- 헤더 섹션 -->
                    <div class="mb-8 border-b dark:border-gray-700 pb-6">
                        <h3 class="text-3xl font-bold mb-2">{{ selectedProject.title }}</h3>
                        <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
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

                    <!-- 이미지 갤러리 -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        <div v-for="(screenshot, index) in selectedProject.screenshots" :key="index"
                            class="relative group cursor-pointer overflow-hidden rounded-lg"
                            @click="openImageModal(screenshot)">
                            <img :src="screenshot" :alt="`${selectedProject.title} screenshot ${index + 1}`"
                                class="w-full h-48 object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" />
                            <div
                                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <i class="fas fa-search-plus text-white text-2xl"></i>
                            </div>
                        </div>
                    </div>

                    <!-- 프로젝트 설명 -->
                    <div class="bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6 mb-8">
                        <p class="whitespace-pre-line text-gray-600 dark:text-gray-300">
                            {{ selectedProject.fullDescription }}
                        </p>
                    </div>

                    <div class="grid md:grid-cols-2 gap-8 mb-8">
                        <!-- 주요 기능 -->
                        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                            <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
                                <i class="fas fa-list text-blue-600"></i>
                                주요 기능
                            </h4>
                            <ul class="space-y-3">
                                <li v-for="feature in selectedProject.features" :key="feature" class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>{{ feature }}</span>
                                </li>
                            </ul>
                        </div>

                        <!-- 기술 스택 -->
                        <div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                            <h4 class="text-lg font-semibold mb-4 flex items-center gap-2">
                                <i class="fas fa-code text-blue-600"></i>
                                사용 기술
                            </h4>
                            <div class="flex flex-wrap gap-2">
                                <span v-for="tech in selectedProject.technologies" :key="tech"
                                    class="px-3 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-sm">
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>

                    <!-- 링크 -->
                    <div class="flex gap-4 pt-6 border-t dark:border-gray-700">
                        <a v-if="selectedProject.demoLink" :href="selectedProject.demoLink" target="_blank"
                            class="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                            <i class="fas fa-external-link-alt"></i>
                            Demo
                        </a>
                        <a :href="selectedProject.githubLink" target="_blank"
                            class="flex items-center gap-2 px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                            <i class="fab fa-github"></i>
                            GitHub
                        </a>
                    </div>
                </div>
            </Modal>

            <!-- 이미지 확대 모달 추가 -->
            <ImageModal :is-open="isImageModalOpen" :image-src="selectedImage" :image-alt="selectedProject?.title || ''"
                @close="closeImageModal" />
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import Modal from '../common/Modal.vue'
import ImageModal from '../common/ImageModal.vue';
import { projects } from '@/data/projects';

const getItemsPerPage = () => {
    if (window.innerWidth < 640) return 2;  // 모바일
    if (window.innerWidth < 1024) return 4; // 태블릿
    return 6; // 데스크톱
}

const ITEMS_PER_PAGE = ref(getItemsPerPage())
// const ITEMS_PER_PAGE = 6
const currentPage = ref(1)
const isModalOpen = ref(false)
const selectedProject = ref(null)
const totalPages = computed(() => Math.ceil(projects.length / ITEMS_PER_PAGE.value))
const isImageModalOpen = ref(false)
const selectedImage = ref(null)

const displayedProjects = computed(() => {
    const start = (currentPage.value - 1) * ITEMS_PER_PAGE.value
    return projects.slice(start, start + ITEMS_PER_PAGE.value)
})

const showProjectDetails = (project) => {
    selectedProject.value = project
    isModalOpen.value = true
}

const closeModal = () => {
    isModalOpen.value = false
    selectedProject.value = null
}

const openImageModal = (imageSrc) => {
    selectedImage.value = imageSrc
    isImageModalOpen.value = true
}

const closeImageModal = () => {
    isImageModalOpen.value = false
    selectedImage.value = null
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
</script>
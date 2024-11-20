<!-- components/common/FloatingActions.vue -->
<template>
    <div class="fixed bottom-6 left-6 flex flex-col gap-3 z-50">
        <!-- 프로젝트 보기 버튼 -->
        <button @click="scrollToProjects"
            class="group  w-12 h-12 flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
            <i class="fas fa-eye text-lg"></i>
            <span
                class="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                프로젝트 보기
            </span>
        </button>

        <!-- 문의하기 버튼 -->
        <button @click="scrollToContact"
            class="group  w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-blue-600 dark:text-blue-400 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-blue-600 dark:border-blue-400">
            <i class="fas fa-paper-plane text-lg"></i>
            <span
                class="absolute left-14 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1.5 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                문의하기
            </span>
        </button>
    </div>
</template>

<script setup>
const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({
        behavior: 'smooth'
    })
}

const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
        behavior: 'smooth'
    })
}
</script>

<style scoped>
/* 모바일에서는 버튼 크기 조정 */
@media (max-width: 640px) {
    .fixed {
        bottom: 4;
        left: 1rem;
    }
}
</style>
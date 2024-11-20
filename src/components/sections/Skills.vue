<template>
    <section id="skills" class="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Technical Skills</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-12">프로젝트에 실제 활용한 기술 스택입니다</p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Development Stack -->
                <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <i class="fas fa-code"></i>
                        Development
                    </h3>

                    <!-- Backend -->
                    <div class="mb-6">
                        <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Backend</h4>
                        <div class="flex flex-wrap gap-2">
                            <span :class="skillTagClasses">Node.js</span>
                            <span :class="skillTagClasses">Express.js</span>
                            <span :class="skillTagClasses">Java</span>
                            <span :class="skillTagClasses">Spring</span>
                            <span :class="skillTagClasses">Python</span>
                            <span :class="skillTagClasses">Flask</span>
                            <span :class="skillTagClasses">FastAPI</span>
                            <span :class="skillTagClasses">Supabase</span>
                        </div>
                    </div>

                    <!-- Frontend -->
                    <div class="mb-6">
                        <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Frontend</h4>
                        <div class="flex flex-wrap gap-2">
                            <span :class="skillTagClasses">Vue.js</span>
                            <span :class="skillTagClasses">React</span>
                            <span :class="skillTagClasses">Flutter</span>
                        </div>
                    </div>

                    <!-- Database -->
                    <div>
                        <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Database</h4>
                        <div class="flex flex-wrap gap-2">
                            <span :class="skillTagClasses">MySQL</span>
                            <span :class="skillTagClasses">MongoDB</span>
                            <span :class="skillTagClasses">MariaDB</span>
                            <span :class="skillTagClasses">Postgresql</span>
                            <span :class="skillTagClasses">Hive</span>
                        </div>
                    </div>
                </div>

                <!-- Infrastructure & Tools -->
                <div class="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                    <h3 class="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400 flex items-center gap-2">
                        <i class="fas fa-server"></i>
                        Infrastructure & Tools
                    </h3>

                    <!-- Cloud & DevOps -->
                    <div class="mb-6">
                        <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Cloud & DevOps</h4>
                        <div class="flex flex-wrap gap-2">
                            <span :class="skillTagClasses">AWS EC2</span>
                            <span :class="skillTagClasses">Docker</span>
                            <span :class="skillTagClasses">Nginx</span>
                            <span :class="skillTagClasses">Git</span>
                        </div>
                    </div>

                    <!-- Domain Expertise -->
                    <div>
                        <h4 class="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Domain Expertise</h4>
                        <div class="flex flex-wrap gap-2">
                            <span :class="skillTagClasses">의료정보시스템</span>
                            <span :class="skillTagClasses">ERP</span>
                            <span :class="skillTagClasses">모니터링 시스템</span>
                            <span :class="skillTagClasses">데이터 파이프라인</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script setup>
import { computed } from 'vue'

const skillTagClasses = computed(() => [
    'px-3',
    'py-1.5',
    'bg-gray-100',
    'dark:bg-gray-800',
    'text-gray-700',
    'dark:text-gray-300',
    'rounded-lg',
    'text-sm',
    'font-medium',
    'transition-colors',
    'duration-200',
    'cursor-default',
    'hover:bg-blue-50',
    'dark:hover:bg-blue-900/30'
])
</script>
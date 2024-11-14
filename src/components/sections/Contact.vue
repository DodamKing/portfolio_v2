<template>
    <section id="contact" class="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Let's Connect</h2>
            <p class="text-center text-gray-600 dark:text-gray-400 mb-12">
                새로운 기회나 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- 왼쪽: 주요 연락처 정보 -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                    <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Info</h3>

                    <div class="space-y-6">
                        <!-- 이메일 -->
                        <div
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-envelope text-2xl text-blue-600"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                <p class="text-gray-800 dark:text-gray-200">ddpower6120@gmail.com</p>
                            </div>
                        </div>

                        <!-- 카카오톡 -->
                        <div
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-comment text-2xl text-yellow-500"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Contact</p>
                                <!-- <p class="text-gray-800 dark:text-gray-200">ID: your_kakao_id</p> -->
                                <p class="text-gray-800 dark:text-gray-200">비즈니스 채널 준비중</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
                                    평일 10:00 - 18:00 답변 가능
                                </p>
                            </div>
                        </div>

                        <!-- 위치 -->
                        <div
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-map-marker-alt text-2xl text-blue-600"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                <p class="text-gray-800 dark:text-gray-200">Cheongju, South Korea</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 오른쪽: 프로필 링크 -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-8">
                    <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Professional Profiles</h3>

                    <div class="space-y-8">
                        <!-- GitHub -->
                        <a href="https://github.com/dodamking" target="_blank"
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                                <i class="fab fa-github text-2xl text-gray-700 dark:text-gray-300"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">GitHub</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">개발 프로젝트 및 코드</p>
                            </div>
                        </a>

                        <!-- LinkedIn -->
                        <a href="https://linkedin.com/in/yourusername" target="_blank"
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fab fa-linkedin-in text-xl text-blue-600"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">LinkedIn</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">채용 및 협업 문의</p>
                            </div>
                        </a>

                        <!-- 기술 블로그 -->
                        <a href="https://blog.naver.com/power6120" target="_blank"
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                            <div
                                class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-pencil-alt text-2xl text-gray-700 dark:text-gray-300"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">개발 블로그</p>
                                <p class="text-sm text-gray-500 dark:text-gray-400">학습 기록과 경험 공유</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
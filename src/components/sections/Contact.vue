<template>
    <section id="contact"
        class="py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div class="max-w-4xl mx-auto">
            <h2 class="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white">Contact</h2>
            <p class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
                새로운 기회나 프로젝트 의뢰 및 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- 왼쪽: 연락처 정보 -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-8">
                    <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
                    <div class="space-y-6">
                        <!-- 이메일 -->
                        <div
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                            <div
                                class="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-3 sm:mr-4">
                                <i class="fas fa-envelope text-2xl text-blue-600 dark:text-blue-400"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">Email</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">ddpower6120@gmail.com</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">24시간 내 답변 드리겠습니다</p>
                            </div>
                        </div>

                        <!-- 카카오톡 -->
                        <div
                            class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                            <div
                                class="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-comment text-2xl text-yellow-500 dark:text-yellow-400"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">카카오톡 1:1 문의</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">오픈채팅 준비중</p>
                                <!-- <p class="text-sm text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors cursor-pointer"
                                    @click="openLink('https://open.kakao.com/o/s3KZK40g', '_blank')">
                                    <span
                                        class="text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors border-b border-yellow-400 hover:border-yellow-500">
                                        <i class="fas fa-comment"></i> 오픈채팅 바로가기
                                    </span>
                                    <i
                                        class="fas fa-external-link-alt text-xs text-yellow-400 group-hover:translate-x-0.5 transition-transform"></i>
                                </p> -->
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">평일 10:00 - 19:00 답변 가능</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 오른쪽: 링크 모음 -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 sm:p-8">
                    <h3 class="text-xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Links & Profiles</h3>
                    <div class="space-y-6">
                        <!-- GitHub -->
                        <div class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                            @click="openLink('https://github.com/dodamking', '_blank')">
                            <div
                                class="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center mr-4">
                                <i class="fab fa-github text-2xl text-gray-700 dark:text-gray-300"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">GitHub</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">프로젝트 소스 코드</p>
                            </div>
                        </div>

                        <!-- LinkedIn -->
                        <div class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                            @click="openLink('https://linkedin.com/in/6b0401231', '_blank')">
                            <div
                                class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fab fa-linkedin-in text-2xl text-blue-600 dark:text-blue-400"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">LinkedIn</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">프로페셔널 네트워크</p>
                            </div>
                        </div>

                        <!-- 네이버 블로그 -->
                        <div class="flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 cursor-pointer"
                            @click="openLink('https://blog.naver.com/power6120', '_blank')">
                            <div
                                class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-pencil-alt text-2xl text-green-600 dark:text-green-400"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">네이버 블로그</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">개발 경험과 기술 공유</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const openLink = (url) => {
    try {
        window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('링크 열기 실패:', error);
        // 필요한 경우 대체 동작
        window.location.href = url;
    }
}
</script>
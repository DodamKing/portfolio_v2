<template>
    <section id="contact"
        class="py-12 sm:py-20 px-4 sm:px-6 bg-paper dark:bg-charcoal">
        <div class="max-w-4xl mx-auto">
            <h2 class="font-display text-3xl font-bold text-center mb-4 text-ink-light dark:text-ink-dark">Contact</h2>
            <p class="text-center text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-8 sm:mb-12">
                새로운 기회나 프로젝트 의뢰 및 협업에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>

            <div class="max-w-2xl mx-auto">
                <!-- 연락처 정보 -->
                <div class="bg-white dark:bg-charcoal-light rounded-xl shadow-sm border border-ink-light/10 dark:border-ink-dark/10">
                    <h3 class="text-xl font-semibold p-6 text-gray-800 dark:text-gray-200">Contact Information</h3>
                    <div class="space-y-6 p-6">
                        <!-- 이메일 -->
                        <div
                            class="flex items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                            <div
                                class="w-10 h-10 bg-amber/10 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-envelope text-lg text-amber"></i>
                            </div>
                            <div>
                                <p class="font-medium text-gray-800 dark:text-gray-200">Email</p>
                                <p class="text-sm text-gray-600 dark:text-gray-400">{{ contactInfo.email }}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">24시간 내 답변 드리겠습니다</p>
                            </div>
                        </div>

                        <!-- 카카오톡 -->
                        <div
                            class="flex items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200">
                            <div
                                class="w-10 h-10 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mr-4">
                                <i class="fas fa-comment text-lg text-yellow-500 dark:text-yellow-400"></i>
                            </div>
                            <div class="flex-grow">
                                <p class="font-medium text-gray-800 dark:text-gray-200">카카오톡 1:1 문의</p>
                                <p class="text-sm text-yellow-500 dark:text-yellow-400 hover:text-yellow-600 dark:hover:text-yellow-300 transition-colors cursor-pointer"
                                    @click="openLink(contactInfo.kakaoUrl)">
                                    <i class="fas fa-comment"></i> 오픈채팅 바로가기
                                    <i class="fas fa-external-link-alt text-xs ml-1"></i>
                                </p>
                                <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">평일 10:00 - 19:00 답변 가능</p>
                            </div>
                            <!-- QR 코드 - PC에서만 표시 -->
                            <div class="hidden md:block">
                                <QRCode :value="contactInfo.kakaoUrl" :options="{
                                    width: 64,
                                    margin: 2,
                                    color: {
                                        dark: '#000000',
                                        light: '#FFFFFF'
                                    }
                                }" class="bg-white rounded-md p-1" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import QRCode from 'qrcode.vue';

const props = defineProps({
    contactInfo: {
        type: Object,
        default: () => ({
            email: 'ddpower6120@gmail.com',
            kakaoUrl: 'https://open.kakao.com/o/s3KZK40g'
        })
    }
});

const openLink = (url) => {
    try {
        window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
        console.error('링크 열기 실패:', error);
        window.location.href = url;
    }
};
</script>
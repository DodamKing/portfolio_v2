<!-- components/sections/Hero.vue -->
<template>
	<section class="min-h-screen flex items-center justify-center px-4 md:px-6 pt-12 sm:pt-0">
		<div class="max-w-4xl mx-auto">
			<div class="text-center space-y-8">
				<!-- 메인 타이틀 -->
				<h1 class="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">
					안녕하세요,
					<span class="text-blue-600 dark:text-blue-400 block mt-2">김도담입니다</span>
				</h1>

				<!-- 핵심 가치 제안 -->
				<h2 class="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
					<span class="text-blue-600 dark:text-blue-400 font-semibold">서비스의 시작부터 운영까지</span><br />
					모든 개발 과정을 함께합니다
				</h2>

				<!-- 핵심 메시지 -->
				<div class="space-y-4 max-w-2xl mx-auto">
					<p class="text-gray-700 dark:text-gray-300">
						기획부터 배포, 운영까지 전체 개발 사이클을 이해하고<br />
						효율적인 웹 서비스를 구축합니다.
					</p>
				</div>

				<!-- 핵심 역량 -->
				<div class="grid md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-12">
					<div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
						<i class="fas fa-server text-2xl text-blue-600 mb-4"></i>
						<h3 class="font-semibold mb-2">백엔드</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							안정적인 서버<br />시스템 구축
						</p>
					</div>
					<div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
						<i class="fas fa-desktop text-2xl text-blue-600 mb-4"></i>
						<h3 class="font-semibold mb-2">프론트엔드</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							반응형 웹<br />사용자 경험 최적화
						</p>
					</div>
					<div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
						<i class="fas fa-mobile-alt text-2xl text-blue-600 mb-4"></i>
						<h3 class="font-semibold mb-2">앱 개발</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							크로스플랫폼<br />앱 서비스 구현
						</p>
					</div>
					<div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
						<i class="fas fa-cogs text-2xl text-blue-600 mb-4"></i>
						<h3 class="font-semibold mb-2">DevOps</h3>
						<p class="text-sm text-gray-600 dark:text-gray-400">
							배포 자동화와<br />안정적인 운영
						</p>
					</div>
				</div>

				<!-- 개발 프로세스 -->
				<div class="mt-16">
					<h3 class="text-lg font-semibold mb-6 text-gray-800 dark:text-gray-200">
						전체 개발 프로세스를 책임집니다
					</h3>
					<div class="flex justify-center items-center gap-4 flex-wrap">
						<div class="flex items-center">
							<span
								class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
								기획/분석
							</span>
							<i class="fas fa-chevron-right mx-2 text-gray-400"></i>
						</div>
						<div class="flex items-center">
							<span
								class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
								설계/개발
							</span>
							<i class="fas fa-chevron-right mx-2 text-gray-400"></i>
						</div>
						<div class="flex items-center">
							<span
								class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
								테스트/배포
							</span>
							<i class="fas fa-chevron-right mx-2 text-gray-400"></i>
						</div>
						<div class="flex items-center">
							<span
								class="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full">
								운영/개선
							</span>
						</div>
					</div>
				</div>

				<!-- 연락하기 버튼 -->
				<div class="mt-12">
					<button @click="scrollToContact" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                        transform hover:-translate-y-0.5 transition-all duration-200
                        shadow-md hover:shadow-lg">
						프로젝트 문의하기
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const scrollToContact = () => {
	document.getElementById('contact')?.scrollIntoView({
		behavior: 'smooth'
	})
}
</script>

<style scoped>
.hero {
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1rem;
}

.hero-content {
	text-align: center;
}

.title {
	font-size: 2.25rem;
	line-height: 2.5rem;
	font-weight: bold;
	margin-bottom: 1.5rem;
}

.description {
	color: #4B5563;
	font-size: 1.125rem;
	line-height: 1.75rem;
	max-width: 42rem;
	margin: 0 auto 2rem;
}

.button-wrapper {
	display: flex;
	gap: 1rem;
	justify-content: center;
}

.primary-button {
	background-color: #2563EB;
	color: white;
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	font-weight: 500;
	transition: background-color 0.2s;
}

.primary-button:hover {
	background-color: #1D4ED8;
}

.secondary-button {
	border: 1px solid #2563EB;
	color: #2563EB;
	padding: 0.75rem 1.5rem;
	border-radius: 0.5rem;
	font-weight: 500;
	transition: background-color 0.2s;
}

.secondary-button:hover {
	background-color: #EFF6FF;
}

@media (min-width: 768px) {
	.title {
		font-size: 3rem;
		line-height: 1;
	}
}
</style>
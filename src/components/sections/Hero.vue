<!-- components/sections/Hero.vue -->
<template>
	<section class="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
		<div class="max-w-6xl w-full mx-auto">
			<div class="max-w-4xl mx-auto">
				<div class="text-center space-y-12 sm:space-y-16">
					<!-- 메인 타이틀 -->
					<div class="space-y-6">
						<!-- 메인 메시지 분리 및 강조 -->
						<h1
							class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
							당신의 아이디어를<br />
							<span class="text-blue-600 dark:text-blue-400">현실로 만듭니다</span>
						</h1>

						<!-- 서브 메시지 -->
						<div class="space-y-3">
							<p class="text-lg sm:text-xl text-gray-600 dark:text-gray-400">
								사용자 경험을 최우선으로,<br class="sm:hidden" />
								가치 있는 해결책을 제시합니다
							</p>
							<p class="text-base sm:text-lg text-gray-600 dark:text-gray-400">
								<span class="text-blue-600 dark:text-blue-400 font-semibold">Full Stack Developer</span>
								김도담입니다
							</p>
						</div>
					</div>

					<!-- 버튼 섹션 -->
					<div class="flex flex-col sm:flex-row gap-4 justify-center">
						<button @click="scrollToProjects"
							class="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg text-base">
							<i class="fas fa-eye mr-2"></i>
							프로젝트 보기
						</button>
						<button @click="scrollToContact"
							class="w-full sm:w-auto px-8 py-4 sm:py-3.5 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200 text-base">
							<i class="fas fa-paper-plane mr-2"></i>
							프로젝트 문의하기
						</button>
					</div>

					<!-- 전문 분야 -->
					<div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mx-auto">
						<div
							class="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
							<i class="fas fa-laptop-code text-2xl text-blue-600 dark:text-blue-400 mb-4"></i>
							<h3 class="font-semibold mb-2 text-gray-900 dark:text-gray-100">웹 서비스</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								반응형 웹<br />풀스택 개발
							</p>
						</div>
						<div
							class="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
							<i class="fas fa-mobile-alt text-2xl text-blue-600 dark:text-blue-400 mb-4"></i>
							<h3 class="font-semibold mb-2 text-gray-900 dark:text-gray-100">앱 개발</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								Android/iOS<br />크로스플랫폼
							</p>
						</div>
						<div
							class="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
							<i class="fas fa-server text-2xl text-blue-600 dark:text-blue-400 mb-4"></i>
							<h3 class="font-semibold mb-2 text-gray-900 dark:text-gray-100">API 개발</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								REST API<br />시스템 설계
							</p>
						</div>
						<div
							class="p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-200">
							<i class="fas fa-shield-alt text-2xl text-blue-600 dark:text-blue-400 mb-4"></i>
							<h3 class="font-semibold mb-2 text-gray-900 dark:text-gray-100">유지보수</h3>
							<p class="text-sm text-gray-600 dark:text-gray-400">
								성능 최적화<br />보안 강화
							</p>
						</div>
					</div>

					<!-- 핵심 가치 제안 -->
					<div class="grid sm:grid-cols-3 gap-5 sm:gap-6 mt-8 text-left">
						<div
							class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
							<div class="flex items-center gap-4 mb-4">
								<span
									class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
									<i class="fas fa-comments text-xl text-blue-600 dark:text-blue-400"></i>
								</span>
								<h3 class="font-semibold text-lg dark:text-gray-100">소통과 공감</h3>
							</div>
							<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								비즈니스 요구사항을 정확히 이해하고,
								명확한 소통으로 최적의 해결책을 제시합니다.
							</p>
						</div>

						<div
							class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
							<div class="flex items-center gap-4 mb-4">
								<span
									class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
									<i class="fas fa-lightbulb text-xl text-blue-600 dark:text-blue-400"></i>
								</span>
								<h3 class="font-semibold text-lg dark:text-gray-100">문제 해결</h3>
							</div>
							<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								실무 개발 경험을 바탕으로
								효율적이고 안정적인 솔루션을 구현합니다.
							</p>
						</div>

						<div
							class="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl hover:shadow-md transition-all duration-200">
							<div class="flex items-center gap-4 mb-4">
								<span
									class="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center shrink-0">
									<i class="fas fa-rocket text-xl text-blue-600 dark:text-blue-400"></i>
								</span>
								<h3 class="font-semibold text-lg dark:text-gray-100">지속적 성장</h3>
							</div>
							<p class="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
								새로운 기술과 트렌드를 학습하며
								더 나은 서비스를 만들기 위해 노력합니다.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
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
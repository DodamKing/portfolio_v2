<!-- components/sections/Hero.vue -->
<template>
	<section class="min-h-screen flex items-center justify-center px-4 md:px-6">
		<div class="max-w-4xl mx-auto text-center">
			<!-- 주요 소개 -->
			<h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
				안녕하세요,
				<span class="text-blue-600 dark:text-blue-400 block mt-2">김도담입니다</span>
			</h1>

			<!-- 부제목 - 역할 소개 -->
			<h2 class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8">
				백엔드 개발을 중심으로 풀스택 역량을 키워가는 개발자
			</h2>

			<!-- 소개 문구 -->
			<div class="space-y-6 mb-12 text-lg">
				<p class="text-gray-700 dark:text-gray-300">
					<span class="text-blue-600 dark:text-blue-400 font-medium">끊임없는 호기심과 열정</span>으로
					소프트웨어를 개발합니다.
				</p>

				<p class="text-gray-700 dark:text-gray-300">
					기술로 우리의 일상을 더 편리하게 만들 수 있다는 믿음으로
					매일 성장하고 있습니다.
				</p>

				<p class="text-gray-700 dark:text-gray-300 font-medium">
					"기술로 세상을 조금 더 나은 곳으로 만들기"
				</p>
			</div>

			<!-- CTA 버튼 -->
			<div class="flex justify-center space-x-4">
				<button @click="scrollToProjects" class="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 
                 transform hover:-translate-y-0.5 transition-all duration-200
                 shadow-md hover:shadow-lg">
					프로젝트 보기
				</button>
				<button @click="scrollToContact" class="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg 
                 hover:bg-blue-50 dark:hover:bg-blue-900/20 
                 transform hover:-translate-y-0.5 transition-all duration-200
                 shadow-md hover:shadow-lg">
					연락하기
				</button>
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
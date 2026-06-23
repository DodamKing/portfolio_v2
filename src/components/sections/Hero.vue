<!-- components/sections/Hero.vue -->
<template>
	<section class="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 sm:py-0 bg-paper dark:bg-charcoal">
		<div class="max-w-4xl w-full mx-auto text-center space-y-10 sm:space-y-12">
			<!-- 메인 타이틀 -->
			<div class="space-y-6">
				<h1
					class="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-ink-light dark:text-ink-dark leading-tight">
					당신의 아이디어를<br />
					<span class="text-amber">현실로 만듭니다</span>
				</h1>

				<div class="space-y-3">
					<p class="text-lg sm:text-xl text-ink-light/70 dark:text-ink-dark/70">
						사용자 경험을 최우선으로,<br class="sm:hidden" />
						가치 있는 해결책을 제시합니다.
					</p>
					<p class="text-base sm:text-lg text-ink-light/70 dark:text-ink-dark/70">
						<span class="text-amber font-semibold">Full Stack Developer</span>
						김도담입니다
					</p>
				</div>
			</div>

			<!-- 버튼 섹션 -->
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<button @click="scrollToProjects"
					class="w-full sm:w-auto px-8 py-4 sm:py-3.5 bg-amber text-charcoal font-medium rounded-lg hover:bg-amber-dark hover:text-paper transition-all duration-200 shadow-md hover:shadow-lg text-base">
					<i class="fas fa-eye mr-2"></i>
					프로젝트 보기
				</button>
				<button @click="scrollToContact"
					class="w-full sm:w-auto px-8 py-4 sm:py-3.5 border-2 border-teal text-teal-dark dark:text-teal rounded-lg hover:bg-teal/10 transition-all duration-200 text-base">
					<i class="fas fa-paper-plane mr-2"></i>
					프로젝트 문의하기
				</button>
			</div>

			<!-- 경력 요약 (mono) -->
			<div
				class="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 font-mono text-xs sm:text-sm tracking-wide text-ink-light/60 dark:text-ink-dark/60 border-y border-ink-light/10 dark:border-ink-dark/10 py-4">
				<!-- <span>SINCE <span class="text-ink-light dark:text-ink-dark font-medium">2022</span></span> -->
				<span>CORE STACK <span class="text-ink-light dark:text-ink-dark font-medium">Next.js · Node.js · PostgerSQL</span></span>
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

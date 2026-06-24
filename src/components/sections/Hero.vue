<!-- components/sections/Hero.vue -->
<template>
	<section
		class="relative min-h-screen flex items-center px-5 sm:px-8 lg:px-12 py-28 sm:py-24 bg-paper dark:bg-charcoal overflow-hidden">
		<div
			class="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.12fr_0.88fr] gap-12 lg:gap-16 items-center">

			<!-- 좌: 논지 + 정체성 + CTA + 지표 -->
			<div>
				<p class="font-mono text-xs sm:text-sm tracking-[0.25em] text-teal-dark dark:text-teal anim" style="--d:0s">
					// FULL-STACK ENGINEER
				</p>

				<h1 class="anim mt-6 font-display font-extrabold tracking-tightest text-ink-light dark:text-ink-dark
					text-[2.7rem] leading-[1.08] sm:text-6xl lg:text-[4.25rem]" style="--d:.05s">
					<span class="text-amber-dark dark:text-amber">맨바닥에서 시작</span>해,<br />
					끝까지 살아남는 서비스로.
				</h1>

				<p class="anim mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-ink-light/70 dark:text-ink-dark/70"
					style="--d:.1s">
					작은 팀에서 인프라·서버·배포부터 프론트까지, 도움 없이 혼자.
					<span class="font-semibold text-ink-light dark:text-ink-dark">기술로 없던 가치를 만들고</span>, 멈추지 않게 운영해왔습니다.
					의료영상(PACS)·태양광 관제·AI 데이터센터·ERP — 매번 새 분야를, 처음부터.
				</p>

				<div class="anim mt-9" style="--d:.15s">
					<button @click="scrollTo('projects')"
						class="inline-flex items-center px-7 py-3.5 rounded-xl bg-amber text-charcoal font-semibold shadow-sm
						hover:bg-amber-dark hover:text-paper transition-colors
						focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-charcoal">
						<i class="fas fa-arrow-down mr-2 text-sm"></i>프로젝트 보기
					</button>
				</div>

				<dl class="anim mt-10 flex flex-wrap gap-x-9 gap-y-4 font-mono text-xs sm:text-sm
					border-t border-ink-light/10 dark:border-ink-dark/10 pt-6" style="--d:.2s">
					<div v-for="stat in stats" :key="stat.label">
						<dt class="text-ink-light/45 dark:text-ink-dark/45 tracking-wide">{{ stat.label }}</dt>
						<dd class="mt-1 text-ink-light dark:text-ink-dark font-medium tracking-wide">{{ stat.value }}</dd>
					</div>
				</dl>
			</div>

			<!-- 우: 지금 운영중(NOW) 패널 — shipped & running 시그니처 -->
			<div class="anim" style="--d:.28s">
				<div class="rounded-2xl border border-ink-light/10 dark:border-ink-dark/10
					bg-paper-dim dark:bg-charcoal-light p-6 sm:p-7 shadow-sm">
					<div class="flex items-center justify-between">
						<span class="font-mono text-[11px] tracking-[0.22em] text-ink-light/45 dark:text-ink-dark/45">// NOW</span>
						<span class="font-mono text-[11px] tracking-[0.22em] text-teal-dark dark:text-teal flex items-center gap-1.5">
							<span class="relative flex h-2 w-2">
								<span class="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping"></span>
								<span class="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
							</span>
							OPERATIONAL
						</span>
					</div>

					<div class="mt-5">
						<p class="font-semibold text-ink-light dark:text-ink-dark">AI 데이터센터 모니터링 인프라</p>
						<p class="mt-0.5 text-sm text-ink-light/55 dark:text-ink-dark/55">
							Full-Stack · 에쓰씨에스
						</p>
					</div>

					<p class="mt-4 text-sm leading-relaxed text-ink-light/65 dark:text-ink-dark/65">
						실시간 데이터 수집부터 모니터링 대시보드, 내부 네트워크 인프라까지
						직접 설계·구축하고 운영하고 있습니다.
					</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
const stats = [
	{ label: 'DOMAINS', value: '의료 · 에너지 · AI 인프라' },
	{ label: 'SCOPE', value: '인프라 ~ 프론트' },
	{ label: 'STATUS', value: '실서비스 운영중' },
]

const scrollTo = (id) => {
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.anim {
	opacity: 0;
	transform: translateY(14px);
	animation: rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
	animation-delay: var(--d, 0s);
}

@keyframes rise {
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

@media (prefers-reduced-motion: reduce) {
	.anim {
		opacity: 1;
		transform: none;
		animation: none;
	}
}
</style>

<!-- components/common/Footer.vue : 미니멀 푸터 (어두운 띠로 본문과 분리) -->
<template>
	<footer id="contact" class="bg-charcoal border-t border-ink-dark/10">
		<div class="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-8
			flex flex-col sm:flex-row items-center justify-between gap-5">
			<!-- 로고 -->
			<div class="flex items-center gap-2.5">
				<span class="grid place-items-center h-7 px-2 rounded-md bg-amber text-charcoal font-mono text-xs font-extrabold tracking-tight">0→1</span>
				<span class="font-mono text-[11px] tracking-[0.22em] text-ink-dark/45">FULL—STACK ENGINEER</span>
			</div>

			<!-- GitHub + 카피라이트 -->
			<div class="flex items-center gap-4 sm:gap-5">
				<a :href="github" target="_blank" rel="noopener" aria-label="GitHub"
					class="text-ink-dark/55 hover:text-amber transition-colors">
					<i class="fab fa-github text-lg"></i>
				</a>
				<span class="hidden sm:inline-block h-3.5 w-px bg-ink-dark/15"></span>
				<p class="font-mono text-[11px] tracking-wide text-ink-dark/40">© 2026</p>
			</div>
		</div>
	</footer>
</template>

<script setup>
const github = 'https://github.com/DodamKing'
</script>

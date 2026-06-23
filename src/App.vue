<template>
	<div class="min-h-screen bg-paper dark:bg-charcoal">
		<!-- 다크모드 토글 버튼 -->
		<button @click="toggleDarkMode"
			class="fixed top-4 right-4 z-50 p-2 rounded-lg bg-paper-dim dark:bg-charcoal-light text-ink-light dark:text-ink-dark">
			<span v-if="isDark">🌞</span>
			<span v-else>🌙</span>
		</button>
		<Home />
		<ScrollToTop />
		<FloatingActions />
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Home from './components/sections/Home.vue'
import ScrollToTop from './components/common/ScrollToTop.vue';
import FloatingActions from './components/common/FloatingActions.vue';

const isDark = ref(false)

const toggleDarkMode = () => {
	isDark.value = !isDark.value
	document.documentElement.classList.toggle('dark')
	localStorage.setItem('darkMode', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
	// 저장된 다크모드 설정이나 시스템 설정 확인
	if (
		localStorage.getItem('darkMode') === 'dark' ||
		(!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)
	) {
		isDark.value = true
		document.documentElement.classList.add('dark')
	}
})
</script>
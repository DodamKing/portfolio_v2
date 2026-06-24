<!-- components/common/Header.vue : 스티키 네비 + 다크토글 (로고는 익명 모노그램) -->
<template>
	<header :class="['fixed top-0 inset-x-0 z-40 transition-colors duration-300',
		scrolled
			? 'bg-paper/85 dark:bg-charcoal/85 backdrop-blur-md border-b border-ink-light/10 dark:border-ink-dark/10'
			: 'bg-transparent border-b border-transparent']">
		<nav class="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
			<!-- 로고 마크 (실명 아님, 역할 모노그램) -->
			<a href="#" @click.prevent="scrollTop" class="flex items-center gap-2.5" aria-label="맨 위로">
				<span class="grid place-items-center h-8 px-2.5 rounded-lg bg-amber text-charcoal font-mono text-[15px] font-extrabold tracking-tight shadow-sm">0→1</span>
				<span class="hidden sm:inline font-mono text-[11px] tracking-[0.22em] text-ink-light/50 dark:text-ink-dark/50">FULL—STACK</span>
			</a>

			<!-- 데스크톱 네비 -->
			<div class="hidden md:flex items-center gap-8">
				<button v-for="link in links" :key="link.id" @click="scrollTo(link.id)"
					:class="['font-mono text-sm transition-colors focus-visible:outline-none',
						activeId === link.id
							? 'text-amber-dark dark:text-amber'
							: 'text-ink-light/70 dark:text-ink-dark/70 hover:text-amber-dark dark:hover:text-amber']">
					{{ link.label }}
				</button>
				<button @click="toggleDark" :aria-label="isDark ? '라이트 모드' : '다크 모드'"
					class="grid place-items-center h-9 w-9 rounded-lg text-ink-light/70 dark:text-ink-dark/70
					hover:bg-paper-dim dark:hover:bg-charcoal-light transition-colors">
					<i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
				</button>
			</div>

			<!-- 모바일: 다크토글 + 햄버거 -->
			<div class="flex md:hidden items-center gap-1">
				<button @click="toggleDark" :aria-label="isDark ? '라이트 모드' : '다크 모드'"
					class="grid place-items-center h-9 w-9 rounded-lg text-ink-light/70 dark:text-ink-dark/70
					hover:bg-paper-dim dark:hover:bg-charcoal-light transition-colors">
					<i :class="isDark ? 'fas fa-sun' : 'fas fa-moon'"></i>
				</button>
				<button @click="menuOpen = !menuOpen" :aria-expanded="menuOpen" aria-label="메뉴"
					class="grid place-items-center h-9 w-9 rounded-lg text-ink-light/80 dark:text-ink-dark/80
					hover:bg-paper-dim dark:hover:bg-charcoal-light transition-colors">
					<i :class="menuOpen ? 'fas fa-xmark' : 'fas fa-bars'"></i>
				</button>
			</div>
		</nav>

		<!-- 모바일 드롭다운 -->
		<transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
			leave-active-class="transition duration-150 ease-in" leave-to-class="opacity-0 -translate-y-2">
			<div v-show="menuOpen"
				class="md:hidden bg-paper dark:bg-charcoal border-b border-ink-light/10 dark:border-ink-dark/10">
				<button v-for="link in links" :key="link.id" @click="scrollTo(link.id); menuOpen = false"
					:class="['block w-full text-left px-5 py-3.5 font-mono text-sm transition-colors hover:bg-paper-dim dark:hover:bg-charcoal-light',
						activeId === link.id ? 'text-amber-dark dark:text-amber' : 'text-ink-light/80 dark:text-ink-dark/80']">
					{{ link.label }}
				</button>
			</div>
		</transition>
	</header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const links = [
	{ label: 'Work', id: 'about' },
	{ label: 'Projects', id: 'projects' },
	{ label: 'Skills', id: 'skills' },
]

const scrolled = ref(false)
const menuOpen = ref(false)
const activeId = ref('')
const isDark = ref(document.documentElement.classList.contains('dark'))

const onScroll = () => { scrolled.value = window.scrollY > 8 }

const toggleDark = () => {
	isDark.value = !isDark.value
	document.documentElement.classList.toggle('dark')
	localStorage.setItem('darkMode', isDark.value ? 'dark' : 'light')
}

const scrollTo = (id) => {
	document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

const scrollTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' })
}

let sectionObserver = null

onMounted(() => {
	onScroll()
	window.addEventListener('scroll', onScroll, { passive: true })

	// scrollspy: 현재 보고 있는 섹션을 nav에 amber로 표시
	const sections = links
		.map((l) => document.getElementById(l.id))
		.filter(Boolean)
	sectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((e) => {
				if (e.isIntersecting) activeId.value = e.target.id
			})
		},
		{ rootMargin: '-45% 0px -50% 0px', threshold: 0 }
	)
	sections.forEach((s) => sectionObserver.observe(s))
})

onUnmounted(() => {
	window.removeEventListener('scroll', onScroll)
	if (sectionObserver) sectionObserver.disconnect()
})
</script>

<!-- components/common/ProjectCard.vue : 프로젝트 카드 (모바일 캐러셀·데스크톱 그리드 공용) -->
<template>
	<article class="group h-full flex flex-col rounded-2xl overflow-hidden border border-ink-light/10 dark:border-ink-dark/10
		bg-paper-dim dark:bg-charcoal-light transition-all duration-300 hover:border-amber/50 hover:shadow-lg">
		<!-- 썸네일 -->
		<div class="relative h-48 overflow-hidden cursor-pointer" @click="$emit('open', project)">
			<img :src="project.image" :alt="project.title"
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
			<div class="absolute bottom-0 inset-x-0 px-3 py-2 bg-gradient-to-t from-black/65 to-transparent flex items-center gap-2">
				<span class="relative flex h-1.5 w-1.5">
					<span v-if="project.liveLink"
						class="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping"></span>
					<span class="relative inline-flex h-1.5 w-1.5 rounded-full"
						:class="project.liveLink ? 'bg-teal' : 'bg-white/40'"></span>
				</span>
				<span class="font-mono text-[11px] tracking-wide text-white/90">
					{{ project.liveLink ? 'LIVE' : 'ARCHIVED' }} · {{ project.period }}
				</span>
				<span class="ml-auto font-mono text-[10px] tracking-[0.15em] px-1.5 py-0.5 rounded bg-white/15 text-white/85">
					{{ platform }}
				</span>
			</div>
		</div>

		<!-- 본문 -->
		<div class="flex flex-col flex-1 p-5">
			<div class="flex items-start justify-between gap-2">
				<h3 class="font-bold text-ink-light dark:text-ink-dark">{{ project.title }}</h3>
				<span class="shrink-0 font-mono text-[11px] px-2 py-0.5 rounded-full border border-amber/40 text-amber-dark dark:text-amber">
					{{ project.category }}
				</span>
			</div>

			<p class="mt-2 text-sm leading-relaxed text-ink-light/65 dark:text-ink-dark/65 line-clamp-2">
				{{ project.shortDescription }}
			</p>

			<div class="mt-4 flex flex-wrap gap-1.5">
				<span v-for="tech in project.technologies.slice(0, 4)" :key="tech"
					class="font-mono text-[11px] px-2 py-0.5 rounded border border-ink-light/15 dark:border-ink-dark/15 text-ink-light/60 dark:text-ink-dark/60">
					{{ tech }}
				</span>
				<span v-if="project.technologies.length > 4"
					class="font-mono text-[11px] px-1 py-0.5 text-ink-light/40 dark:text-ink-dark/40">
					+{{ project.technologies.length - 4 }}
				</span>
			</div>

			<div class="mt-auto pt-4 flex items-center justify-between border-t border-ink-light/10 dark:border-ink-dark/10">
				<button @click="$emit('open', project)"
					class="font-mono text-sm text-ink-light/70 dark:text-ink-dark/70 hover:text-amber-dark dark:hover:text-amber transition-colors inline-flex items-center gap-1.5">
					자세히 <i class="fas fa-arrow-right text-xs"></i>
				</button>
				<div class="flex items-center gap-1">
					<a v-if="project.liveLink" :href="project.liveLink" target="_blank" rel="noopener" @click.stop
						aria-label="라이브 사이트"
						class="grid place-items-center h-8 w-8 rounded-lg text-ink-light/55 dark:text-ink-dark/55 hover:text-amber-dark dark:hover:text-amber hover:bg-paper dark:hover:bg-charcoal transition-colors">
						<i class="fas fa-arrow-up-right-from-square text-sm"></i>
					</a>
					<a v-if="project.githubLink" :href="project.githubLink" target="_blank" rel="noopener" @click.stop
						aria-label="GitHub"
						class="grid place-items-center h-8 w-8 rounded-lg text-ink-light/55 dark:text-ink-dark/55 hover:text-amber-dark dark:hover:text-amber hover:bg-paper dark:hover:bg-charcoal transition-colors">
						<i class="fab fa-github text-sm"></i>
					</a>
				</div>
			</div>
		</div>
	</article>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
	project: { type: Object, required: true },
})
defineEmits(['open'])

const platform = computed(() =>
	(props.project.platform === 'mobile'
		|| props.project.technologies?.includes('Flutter')
		|| /mobile/i.test(props.project.category || ''))
		? 'MOBILE' : 'WEB'
)
</script>

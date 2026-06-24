<!-- components/sections/Skills.vue : 도메인 전문성 + 기술 스택 -->
<template>
    <section id="skills" class="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-paper-dim dark:bg-charcoal-light">
        <div class="max-w-5xl mx-auto">
            <!-- 섹션 헤더 -->
            <p class="font-mono text-xs tracking-[0.25em] text-teal-dark dark:text-teal">// SKILLS</p>
            <h2 class="mt-4 font-display font-extrabold tracking-tightest text-ink-light dark:text-ink-dark text-3xl sm:text-4xl lg:text-5xl">
                도메인과 기술
            </h2>
            <p class="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-light/60 dark:text-ink-dark/60">
                프로젝트에서 실제로 다뤄온 것들입니다.
            </p>

            <!-- Domain Expertise (전면 강조) -->
            <p class="mt-12 font-mono text-[11px] tracking-[0.22em] text-ink-light/45 dark:text-ink-dark/45">
                DOMAIN EXPERTISE
            </p>
            <div class="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div v-for="d in domains" :key="d.name"
                    class="rounded-xl border border-ink-light/10 dark:border-ink-dark/10 bg-paper dark:bg-charcoal
                    px-4 py-3.5 transition-colors hover:border-amber/45">
                    <div class="flex items-center gap-2.5">
                        <i :class="d.icon" class="text-amber-dark dark:text-amber"></i>
                        <p class="font-semibold text-sm text-ink-light dark:text-ink-dark">{{ d.name }}</p>
                    </div>
                    <p class="mt-1.5 font-mono text-[11px] tracking-wide text-ink-light/45 dark:text-ink-dark/45">
                        {{ d.tag }}
                    </p>
                </div>
            </div>

            <!-- Tech Stack (보조, 스캔용) -->
            <p class="mt-12 font-mono text-[11px] tracking-[0.22em] text-ink-light/45 dark:text-ink-dark/45">
                TECH STACK
            </p>
            <div class="mt-4 grid sm:grid-cols-2 gap-x-10 gap-y-6">
                <div v-for="g in stack" :key="g.label">
                    <p class="text-sm font-medium text-ink-light/70 dark:text-ink-dark/70 mb-2.5">{{ g.label }}</p>
                    <div class="flex flex-wrap gap-2">
                        <span v-for="t in g.items" :key="t"
                            class="font-mono text-xs px-2.5 py-1 rounded-md border border-ink-light/15 dark:border-ink-dark/15
                            text-ink-light/65 dark:text-ink-dark/65 hover:border-amber/50 hover:text-amber-dark dark:hover:text-amber
                            transition-colors cursor-default">
                            {{ t }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const domains = [
    { name: '의료영상 정보 시스템', tag: 'PACS · 피부과·성형외과', icon: 'fas fa-x-ray' },
    { name: 'ERP 시스템', tag: '구매 · 자재 · 자산', icon: 'fas fa-boxes-stacked' },
    { name: '데이터 파이프라인', tag: '수집 · 연동 · 크롤링', icon: 'fas fa-diagram-project' },
    { name: '태양광 발전 관제', tag: 'EMS · Huawei 인버터·SmartLogger · API 연동', icon: 'fas fa-solar-panel' },
    { name: 'AI 데이터센터 열관리', tag: 'TMS · GPU·CDU·PDU · Modbus · PUE', icon: 'fas fa-temperature-half' },
]

const stack = [
    { label: 'Backend', items: ['Node.js', 'Express.js', 'Java', 'Spring', 'Python', 'Flask', 'FastAPI', 'Supabase', 'JWT', 'OAuth'] },
    { label: 'Frontend', items: ['Vue.js', 'Nuxt.js', 'React', 'Flutter', 'TailwindCSS', 'Vite'] },
    { label: 'Database', items: ['MySQL', 'MongoDB', 'PostgreSQL', 'Redis'] },
    { label: 'Cloud & DevOps', items: ['AWS', 'NCP', 'Docker', 'Nginx', 'PM2'] },
]
</script>

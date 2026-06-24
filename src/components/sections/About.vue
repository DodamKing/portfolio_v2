<!-- components/sections/About.vue : 실무 경력 (신뢰도 본체) -->
<template>
	<section id="about" class="py-20 sm:py-28 px-5 sm:px-8 lg:px-12 bg-paper-dim dark:bg-charcoal-light">
		<div class="max-w-5xl mx-auto">
			<!-- 섹션 헤더 -->
			<p class="font-mono text-xs tracking-[0.25em] text-teal-dark dark:text-teal">// WORK EXPERIENCE</p>
			<h2 class="mt-4 font-display font-extrabold tracking-tightest text-ink-light dark:text-ink-dark text-3xl sm:text-4xl lg:text-5xl">
				회사에서 만들고, 운영한 일
			</h2>
			<p class="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-ink-light/60 dark:text-ink-dark/60">
				들어간 도메인마다 직접 설계하고, 실제 운영까지 책임졌습니다.
			</p>

			<!-- 경력 카드 -->
			<div class="mt-12 sm:mt-14 space-y-6">
				<article v-for="exp in experiences" :key="exp.company"
					class="rounded-2xl border border-ink-light/10 dark:border-ink-dark/10 bg-paper dark:bg-charcoal
					p-6 sm:p-8 transition-shadow duration-300 hover:shadow-lg">
					<!-- 회사 헤더 -->
					<header class="flex flex-wrap items-start justify-between gap-x-4 gap-y-3
						pb-6 border-b border-ink-light/10 dark:border-ink-dark/10">
						<div>
							<h3 class="text-xl font-bold text-ink-light dark:text-ink-dark">{{ exp.company }}</h3>
							<p class="mt-1 font-mono text-sm text-ink-light/55 dark:text-ink-dark/55">{{ exp.role }}</p>
						</div>
						<div class="flex flex-col items-start sm:items-end gap-2">
							<span class="font-mono text-sm text-ink-light/55 dark:text-ink-dark/55">{{ exp.period }}</span>
							<span v-if="exp.current"
								class="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.18em] text-teal-dark dark:text-teal">
								<span class="relative flex h-2 w-2">
									<span class="absolute inline-flex h-full w-full rounded-full bg-teal opacity-75 animate-ping"></span>
									<span class="relative inline-flex h-2 w-2 rounded-full bg-teal"></span>
								</span>
								CURRENT
							</span>
						</div>
					</header>

					<!-- 프로젝트 타임라인 -->
					<div class="mt-7 space-y-7">
						<div v-for="proj in exp.projects" :key="proj.title" class="relative pl-5 border-l-2 border-teal/40">
							<span class="absolute -left-[5px] top-[7px] h-2 w-2 rounded-full bg-teal"></span>

							<div class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
								<h4 class="font-semibold text-ink-light dark:text-ink-dark">{{ proj.title }}</h4>
								<span v-if="proj.period"
									class="font-mono text-xs text-ink-light/45 dark:text-ink-dark/45 whitespace-nowrap">
									{{ proj.period }}
								</span>
							</div>

							<ul class="mt-3 space-y-2">
								<li v-for="(pt, i) in proj.points" :key="i"
									class="flex gap-2.5 text-sm leading-relaxed text-ink-light/75 dark:text-ink-dark/75">
									<span class="text-teal-dark dark:text-teal select-none">›</span>
									<span>{{ pt }}</span>
								</li>
							</ul>

							<!-- 주요 성과 (amber 칩) -->
							<div v-if="proj.metrics" class="mt-4 flex flex-wrap gap-2">
								<span v-for="m in proj.metrics" :key="m.label"
									class="inline-flex items-center gap-1.5 rounded-md bg-amber/10 px-2.5 py-1
									text-xs font-medium text-amber-dark dark:text-amber">
									<i :class="m.icon"></i>{{ m.label }}
								</span>
							</div>
						</div>
					</div>
				</article>
			</div>
		</div>
	</section>
</template>

<script setup>
const experiences = [
	{
		company: '(주)에쓰씨에스',
		role: 'Full-Stack Developer',
		period: '2024.03 — 현재',
		current: true,
		projects: [
			{
				title: 'AI 데이터센터 열관리 모니터링 인프라 구축',
				period: '2026.03 — 현재',
				points: [
					'PDU·CDU·칠러·서버 GPU/CPU 데이터를 Modbus(RTU·TCP)로 실시간 수집하는 파이프라인 및 저장 DB 설계·구축',
					'하이브리드 칠러(외기 Free Cooling·냉매 열교환) → CDU 냉각 계통 상태 실시간 모니터링',
					'PUE·전력 사용량 기반 전기요금 산출 등 핵심 운영 지표 대시보드 개발',
					'시스템 구축에 필요한 내부 네트워크 등 인프라 구축',
				],
			},
			{
				title: '사내 포털 시스템 구축',
				period: '2025.09 — 2026.02',
				points: [
					'도메인·서버·배포 환경 등 사내 포털 초기 인프라 전반 구축',
					'사내 Google Workspace 계정 기반 OAuth 로그인 연동',
					'Google Workspace Collaboration 연동 기반 구성',
					'공인 IP·포트 포워딩 기반 외부망 접근 환경 구성',
				],
			},
			{
				title: '사내 ERP 시스템 개발',
				period: '2025.01 — 2025.08',
				points: [
					'구매/자재/자산 관리 전체 프로세스 디지털화',
					'BOM 관리, 구매 신청, 입/출고, 자산 관리 등 전체 프로세스 자동화',
					'MongoDB를 활용한 확장 가능한 데이터베이스 설계',
				],
			},
			{
				title: '열관리 시스템(TMS) 개발',
				period: '2024.09 — 2024.12',
				points: [
					'AI 모델과 연동된 RESTful API 설계 및 개발',
					'실시간 데이터 시각화 대시보드 구현',
					'AI 학습 결과 데이터 저장 및 조회 시스템 구축',
				],
			},
			{
				title: '태양광 발전 모니터링 시스템',
				period: '2024.03 — 2024.09',
				points: [
					'Huawei 인버터·SmartLogger 연동 — Huawei API 및 외부 API를 엮어 발전 데이터 수집 파이프라인 구축',
					'발전 현황 실시간 모니터링 대시보드 및 이상 알림 시스템 구현',
				],
			},
		],
	},
	{
		company: '(주)에프앤디파트너스',
		role: 'Full-Stack Developer',
		period: '2022.06 — 2023.12',
		projects: [
			{
				title: '의료영상정보 관리 시스템(PACS)',
				points: [
					'피부과·성형외과 등 병원별 맞춤형 PACS 시스템 설계 및 개발',
					'앱에서 촬영·업로드한 의료영상을 서버로 수신·저장·관리하는 시스템 구현',
					'앱 개발자와 협업 — 모바일 앱 연동 RESTful API 설계·제공 및 문서화',
					'Naver Cloud 기반 의료영상 저장소 구축',
					'현장 의료진 요구사항 분석 및 기능 개발',
				],
				metrics: [
					{ icon: 'fas fa-hospital-user', label: '10개+ 의료기관 납품' },
					{ icon: 'fas fa-database', label: '1TB+ 의료영상 관리' },
				],
			},
		],
	},
	{
		company: '(주)이안시스템',
		role: 'Backend Developer',
		period: '2022.02 — 2022.05',
		projects: [
			{
				title: '정부 시스템 유지보수 및 개선',
				points: [
					'전자정부 표준프레임워크 기반 시스템 개선',
					'통계청 경지관리 시스템 성능 최적화 및 안정화',
					'행정안전부 디엠지기 시스템 기능 개발',
				],
			},
		],
	},
]
</script>

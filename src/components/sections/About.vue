<template>
    <section id="about" class="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
                Work Experience
            </h2>

            <!-- 경력 카드들 -->
            <div class="space-y-12">
                <!-- SCS -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700
                      transform transition-all duration-300 hover:shadow-2xl">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                (주)에쓰씨에스
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400 mt-1">2024.03 ~ Present | Full Stack Developer
                            </p>
                        </div>
                        <span class="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 
                         text-sm rounded-full font-medium">Current</span>
                    </div>

                    <div class="space-y-8">
                        <!-- ERP 시스템 -->
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    사내 ERP 시스템 개발
                                </h4>
                            </div>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>구매/자재/자산 관리 전체 프로세스 디지털화</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>BOM 관리, 구매 신청, 입/출고, 자산 관리 등 전체 프로세스 자동화</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>MongoDB를 활용한 확장 가능한 데이터베이스 설계</span>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">성과 및 규모:</div>
                                <div class="flex flex-wrap gap-4">
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-users text-blue-500 dark:text-blue-400"></i>
                                        <span class="text-sm text-gray-600 dark:text-gray-400">전사 임직원 활용</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-check text-blue-500 dark:text-blue-400"></i>
                                        <span class="text-sm text-gray-600 dark:text-gray-400">수기 문서 작업 자동화</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 태양광 모니터링 -->
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    태양광 발전 모니터링 시스템
                                </h4>
                            </div>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>실시간 데이터 수집 및 처리 파이프라인 구축</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>실시간 모니터링 대시보드 개발 및 알림 시스템 구현</span>
                                </li>
                            </ul>
                        </div>

                        <!-- TMS -->
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    열관리 시스템(TMS) 개발
                                </h4>
                                <!-- <span class="text-sm text-blue-600 dark:text-blue-400">Full Stack Developer</span> -->
                            </div>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>AI 모델과 연동된 RESTful API 설계 및 개발</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>실시간 데이터 시각화 대시보드 구현</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 dark:text-blue-400 mr-2">›</span>
                                    <span>AI 학습 결과 데이터 저장 및 조회 시스템 구축</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- F&D Partners -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700
                      transform transition-all duration-300 hover:shadow-2xl">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                (주)에프앤디파트너스
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400 mt-1">2022.06 ~ 2023.12 | Full Stack Developer
                            </p>
                        </div>
                    </div>

                    <div class="space-y-8">
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <div class="flex justify-between items-start mb-3">
                                <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                    의료영상정보 관리 시스템(PACS)
                                </h4>
                            </div>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>병원별 맞춤형 PACS 시스템 설계 및 개발</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>의료영상 실시간 수집 및 자동 동기화 시스템 구현</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>현장 의료진 요구사항 분석 및 기능 개발</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>Naver Cloud 기반 의료 영상 저장소 구축</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>모바일 앱 연동을 위한 RESTful API 개발 및 문서화</span>
                                </li>
                            </ul>
                            <div class="mt-4">
                                <div class="text-sm text-gray-500 dark:text-gray-400 mb-2">주요 성과:</div>
                                <div class="flex flex-wrap gap-4">
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-hospital-user text-blue-500 dark:text-blue-400"></i>
                                        <span class="text-sm text-gray-600 dark:text-gray-400">10개+ 의료기관에 납품</span>
                                    </div>
                                    <div class="flex items-center gap-2">
                                        <i class="fas fa-database text-blue-500 dark:text-blue-400"></i>
                                        <span class="text-sm text-gray-600 dark:text-gray-400">1TB+ 의료영상 관리</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ian System -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700
                      transform transition-all duration-300 hover:shadow-2xl">
                    <div class="flex justify-between items-start mb-6">
                        <div>
                            <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                (주)이안시스템
                            </h3>
                            <p class="text-gray-500 dark:text-gray-400 mt-1">2022.02 ~ 2023.05 | Backend Developer</p>
                        </div>
                    </div>

                    <div class="relative pl-4 border-l-2 border-blue-500">
                        <div class="flex justify-between items-start mb-3">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                                정부 시스템 유지보수 및 개선
                            </h4>
                        </div>
                        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>전자정부 표준프레임워크 기반 시스템 개선</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>통계청 경지관리 시스템 성능 최적화 및 안정화</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>행정안전부 디엠지기 시스템 기능 개발</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
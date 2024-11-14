<template>
    <section id="about" class="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
                Professional Experience
            </h2>

            <!-- 소개 섹션 -->
            <div class="mb-16 text-center">
                <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                    모니터링 시스템, 의료 정보 시스템, ERP 등 다양한 분야의 시스템 개발 경험을 보유하고 있습니다.
                    특히 데이터 파이프라인 구축과 시스템 설계에 강점이 있습니다.
                </p>
            </div>

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
                            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">2024.03 ~ Present</p>
                        </div>
                        <span class="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 
                         text-sm rounded-full font-medium">Current</span>
                    </div>

                    <div class="space-y-8">
                        <!-- ERP 시스템 -->
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                사내 ERP 시스템 개발
                            </h4>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>구매, 자재, 자산 관리를 위한 종합 ERP 시스템 설계 및 구축</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>BOM 관리, 구매 신청, 입/출고, 자산 관리 등 전체 프로세스 구현</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>데이터베이스 설계부터 프론트엔드까지 전체 시스템 개발</span>
                                </li>
                            </ul>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">Node.js</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">EJS</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">MongoDB</span>
                            </div>
                        </div>

                        <!-- 태양광 모니터링 -->
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                태양광 발전 모니터링 시스템 구축
                            </h4>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>실시간 발전 데이터 수집 및 저장 파이프라인 구축</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>효율적인 데이터 처리 및 모니터링 시스템 개발</span>
                                </li>
                            </ul>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">Node.js</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">EJS</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">MariaDB</span>
                            </div>
                        </div>

                        <!-- TMS -->
                        <div class="relative pl-4 border-l-2 border-blue-500">
                            <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                                열관리 시스템(TMS) 개발
                            </h4>
                            <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>AI 모델 결과 데이터 저장 및 관리 API 개발</span>
                                </li>
                                <li class="flex items-start">
                                    <span class="text-blue-500 mr-2">›</span>
                                    <span>학습 결과 데이터 시각화 대시보드 구현</span>
                                </li>
                            </ul>
                            <div class="mt-3 flex flex-wrap gap-2">
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">Node.js</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">EJS</span>
                                <span
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded">MariaDB</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- F&D Partners 섹션 -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700
            transform transition-all duration-300 hover:shadow-2xl">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            (주)에프앤디파트너스
                        </h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">2022.06 ~ 2023.12</p>
                    </div>

                    <div class="relative pl-4 border-l-2 border-blue-500">
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            의료영상정보 관리 시스템(PACS) 개발
                        </h4>
                        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>멀티 테넌트 구조의 PACS 시스템 설계 및 개발</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>의료 영상 실시간 수집 및 자동 동기화 기능 구현</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>Naver Cloud Platform 기반 의료 영상 저장소 구축 (Object/Archive Storage)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>3차 병원 및 개인병원용 맞춤형 시스템 구축 (30여 개 기관)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>모바일 앱 연동을 위한 RESTful API 개발 및 문서화</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>현장 방문 설치 및 네트워크 환경 구성 (DNS, 무선 네트워크)</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>기존 시스템 유지보수 및 신규 기능 개발</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Ian System -->
                <div class="bg-white dark:bg-gray-900 rounded-xl shadow-xl p-8 border border-gray-100 dark:border-gray-700
                      transform transition-all duration-300 hover:shadow-2xl">
                    <div class="mb-6">
                        <h3 class="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            (주)이안시스템
                        </h3>
                        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">2022.02 ~ 2023.05</p>
                    </div>

                    <div class="relative pl-4 border-l-2 border-blue-500">
                        <h4 class="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3">
                            정부 시스템 유지보수
                        </h4>
                        <ul class="space-y-3 text-gray-600 dark:text-gray-300">
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>전자정부 표준프레임워크 기반 시스템 유지보수</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>통계청 경지관리 시스템 안정화 및 성능 개선</span>
                            </li>
                            <li class="flex items-start">
                                <span class="text-blue-500 mr-2">›</span>
                                <span>행정안전부 디엠지기 시스템 기능 개선</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
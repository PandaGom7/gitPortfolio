export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Team' | 'Personal';
  period: string;
  teamSize: string;
  role: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  videoUrl?: string;
  summary: string;
  problem: string;
  solution: string;
  result: string;
}

export const projectsData: Project[] = [
  {
    id: 'nexus',
    title: 'Nexus (창업 AI 올인원 플랫폼)',
    subtitle: '소상공인 및 예비 창업자를 위한 제로샷 시계열 매출 예측 지원 플랫폼',
    category: 'Team',
    period: '2026.03.27 ~ 2026.05.15',
    teamSize: '5명 (AI / 백엔드 담당)',
    role: 'FastAPI 서버 구축, Google TimesFM 기반 매출 예측 및 시계열 파이프라인 E2E 설계',
    tags: ['FastAPI', 'TimesFM', 'PostgreSQL', 'Next.js', 'Spring Boot', 'Docker'],
    githubUrl: 'https://github.com/human13th2team/nexus',
    videoUrl: `${import.meta.env.BASE_URL}videos/nexus-demo.mp4`,
    summary: '창업자의 제한적인 데이터 환경에서도 신뢰성 높은 매출 추이를 예측할 수 있도록 사전 학습 파운데이션 모델(TimesFM)을 서빙하고 DB와 백엔드를 연동한 플랫폼입니다.',
    problem: '초기 창업자의 데이터 세트 부족(콜드 스타트)으로 일반 모델 훈련이 불가능했고, 실서비스 연동 시 최소 데이터 해석 구간(Burn-in) 부족으로 무한 로딩이 발생했습니다.',
    solution: '방대한 시계열 데이터로 사전 학습된 TimesFM을 도입하여 제로샷(Zero-shot) 추론 환경을 구축하고, 30일 이상 데이터 수집 여부를 판별하는 조건부 라우팅 아키텍처를 설계했습니다.',
    result: '자체 데이터 수집 리소스를 대폭 절감하고, 불완전 데이터 호출로 인한 런타임 오류와 무한 로딩을 원천 차단하여 안정적인 서빙 환경을 완성했습니다.'
  },
  {
    id: 'stocklab',
    title: 'StockLab (주식 투자 성향 AI 분석 및 모의투자 플랫폼)',
    subtitle: 'Flask 모듈형 아키텍처와 Gemini API 기반의 맞춤형 투자 조언 및 자산 분석 시스템',
    category: 'Team',
    period: '2026.03.20 ~ 2026.03.27',
    teamSize: '6명 (AI / 백엔드 엔지니어)',
    role: 'Gemini API 연동 맞춤형 종목 추천 로직 개발, 자산 수익률 분석 대시보드 구축, 백그라운드 정기 자금 지급 스케줄러 설계',
    tags: ['Flask', 'Python', 'Gemini API', 'LangChain', 'MariaDB', 'Redis', 'Pydantic'],
    githubUrl: 'https://github.com/human13th2team/StockLab',
    summary: '사용자의 거래 이력과 보유 자산 데이터를 분석하여 맞춤형 투자 조언을 생성하고, 기간별 자산 추이 대시보드와 자동 시드머니 지급 배치를 제공하는 모의투자 서비스입니다.',
    problem: '체결 내역 및 보유 자산의 다각도 집계 연산과 주기적인 자금 지급 배치 작업이 웹 서버 요청 처리와 결합될 경우 발생할 수 있는 지연 및 시스템 불안정성 위험이 있었습니다.',
   solution: 'Flask 기반의 모듈화된 계층 설계를 도입하여 비즈니스 로직을 분리하고, Redis 캐싱 및 백그라운드 스케줄러를 적용해 거래 데이터 집계와 자금 지급 로직이 주 서비스 응답에 영향을 주지 않도록 구현했습니다.',
    result: '복잡한 투자 집계 연산과 LLM 연동 환경에서도 지연 없는 안정적인 서비스 응답을 달성하고, 신뢰성 높은 모의투자 및 AI 맞춤 조언 인터페이스를 제공했습니다.'
  },
  {
    id: 'pearl-abyss-rag',
    title: '펄어비스 주가 사후 분석 리포트 시스템',
    subtitle: '시계열 주가 예측 모델과 텍스트 LLM(RAG)을 결합한 설명 가능한 AI 리포팅',
    category: 'Personal',
    period: '2026.04.10 ~ 2026.04.17',
    teamSize: '1명 (개인 프로젝트)',
    role: '전체 시스템 기획, GRU 예측 모델링, 비정형 뉴스 크롤링, LangChain RAG 파이프라인 구축',
    tags: ['TensorFlow', 'GRU', 'LangChain', 'Ollama', 'ChromaDB', 'Gradio'],
    summary: '시계열 예측 수치에 기업 공시, 뉴스 등의 비정형 텍스트를 결합하여 모델의 예측 근거를 자동으로 설명해 주는 사후 검증 리포트 자동화 파이프라인입니다.',
    problem: '외부 뉴스 수집 시 웹페이지마다 상이한 동적 스크립트와 로딩 구조로 인해 정제된 텍스트 크롤링에 실패하는 문제가 있었습니다.',
    solution: '정적/동적 구조를 분석하여 수집 파이프라인을 분리하고, 뉴스 요약과 본문 크롤링을 단계별로 독립 처리한 후 ChromaDB에 임베딩 인덱싱했습니다. Ollama Gemma 모델에 Few-shot 프롬프팅을 적용했습니다.',
    result: '고품질의 벡터 DB를 기반으로 할루시네이션(환각) 없이 예측의 논리적 근거를 설명하는 신뢰도 높은 XAI 대시보드를 구현했습니다.'
  },
  {
    id: 'salary-prediction',
    title: 'IT 개발직군 연봉 예측 머신러닝',
    subtitle: 'Kaggle 25만 건 데이터를 활용한 회귀 분석 최적화 및 시뮬레이션 배포',
    category: 'Personal',
    period: '2026.03.27 ~ 2026.04.03',
    teamSize: '1명 (개인 프로젝트)',
    role: '데이터 전처리, 회귀 모델 튜닝, Streamlit 웹 서빙 프로토타입 구현',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'GridSearchCV', 'Streamlit'],
    githubUrl: "https://github.com/PandaGom7/jobsalarypred",
    videoUrl: `${import.meta.env.BASE_URL}videos/salary-prediction-demo.mp4`,
    summary: '개발 직무 데이터를 기반으로 학력, 경력, 기술 스택에 따른 예상 연봉을 산출해 주는 머신러닝 시뮬레이터입니다.',
    problem: '이상치 및 다중공선성으로 인해 단순 선형 회귀 모델 적용 시 예측 오차가 크게 발생했습니다.',
    solution: '이상치 제거 및 상관관계 분석 후 Linear Regression, Random Forest, XGBoost를 비교 평가하였으며, GridSearchCV를 통해 최적 하이퍼파라미터를 도출했습니다.',
    result: '결정계수 R² = 0.9792 수준의 고성능 XGBoost 모델을 확보하고 Streamlit을 통해 직관적인 웹 시뮬레이션 서비스로 배포했습니다.'
  },
  {
    id: 'msft-stock-prediction',
    title: 'MSFT 주가 종가 예측 딥러닝 모델',
    subtitle: 'LSTM 및 GRU 순환신경망을 활용한 비선형 시계열 예측 파이프라인',
    category: 'Personal',
    period: '2026.04.03 ~ 2026.04.10',
    teamSize: '1명 (개인 프로젝트)',
    role: 'yfinance 데이터 수집, 시계열 피처 엔지니어링, 순환신경망 모델링, Plotly 시각화',
    tags: ['TensorFlow', 'LSTM', 'GRU', 'Plotly', 'Streamlit', 'Python'],
    githubUrl: "https://github.com/PandaGom7/stockprediction",
    videoUrl: `${import.meta.env.BASE_URL}videos/msft-stock-demo.mp4`,
    summary: '기술주 주가 데이터와 VIX 변동성 지수를 결합하여 주가 종가 패턴을 예측하고 잔차를 분석하는 프로젝트입니다.',
    problem: '시계열 금융 데이터의 비선형성과 노이즈로 인해 학습 시 과적합(Overfitting)이 발생하기 쉬웠습니다.',
    solution: 'Sliding Window 기법으로 시차(Lag) 데이터를 추출하고, Dropout 레이어 및 조기 종료(Early Stopping)를 적용해 모델을 안정화했습니다.',
    result: 'LSTM과 GRU의 잔차 분포 및 MSE 지표를 비교하여 더 안정적인 모델을 선별하고, 인터랙티브 차트가 포함된 대시보드로 서빙했습니다.'
  },
  {
    id: 'timesfm-graphrag-decision-system',
    title: 'TimesFM × GraphRAG 지능형 매출 예측 및 의사결정 지원 시스템',
    subtitle: 'Google TimesFM 2.5 시계열 파운데이션 모델과 Neo4j 기반 GraphRAG 인과 추론 파이프라인',
    category: 'Personal',
    period: '2026.05.19 ~ 2026.05.20',
    teamSize: '1명 (개인 프로젝트)',
    role: 'Zero-shot 시계열 예측 파이프라인 설계, Neo4j 시계열 지식 그래프 모델링, Custom GraphRAG 및 Fallback 질의 엔진 구현, Streamlit 대시보드 구축',
    tags: ['Python', 'TimesFM', 'Neo4j', 'GraphRAG', 'LangChain', 'Ollama', 'Docker', 'Streamlit'],
    videoUrl: `${import.meta.env.BASE_URL}videos/timesfm-graphrag-demo.mp4`,
    summary: '정량적 시계열 예측(TimesFM 2.5)과 정성적 비즈니스 맥락(Neo4j 지식 그래프)을 융합하여 단순 수치 예측을 넘어 "왜 변동하는가"에 대한 인과적 원인과 전략을 자연어로 도출하는 의사결정 시뮬레이터입니다.',
    problem: '전통적 시계열 모델은 예측 수치는 제공하지만 변동 원인을 설명하지 못하고, 일반 텍스트 기반 RAG는 수치 트렌드와 복잡한 비즈니스 엔티티 간의 유기적 상관관계를 분석하는 데 한계가 있었습니다.',
    solution: 'TimesFM 2.5로 상·하한 신뢰구간(10%~90%)을 포함한 확률론적 매출 전망치를 생성하고, 제품·리뷰·리스크 이벤트를 시간축 기반 Neo4j 시계열 그래프로 구조화했습니다. 이후 로컬 LLM(Ollama)과 Cypher 기반 Custom GraphRAG 파이프라인을 구축하고 예외 대응용 Fallback 메커니즘을 적용했습니다.',
    result: '외부 클라우드 비용 없이 100% 온디바이스/오픈소스 스택 기반의 XAI(설명 가능한 인공지능) 의사결정 시스템을 완성했으며, Docker 기반 인프라 격리와 온디맨드 추론 설계를 통해 대시보드 렌더링 성능 및 환경 재현성을 확보했습니다.'
  },
  {
    id: 'library-lounge',
    title: 'Library Lounge (도서관 통합 관리 및 커뮤니티 웹 서비스)',
    subtitle: 'Spring Boot 기반 3단계 통합 제재 엔진 및 다중 시트 엑셀 리포팅 웹 플랫폼',
    category: 'Team',
    period: '2026.10.13 ~ 2026.11.06',
    teamSize: '4명 (백엔드 / 프론트엔드 / Git 병합 총괄)',
    role: '회원·3단계 통합 제재(MemberSuspense) 전 계층 구현, 실시간 권한 판별 및 FK 안전 강제 삭제, Apache POI 다중 시트 엑셀 다운로드 2종 개발, 전역 디자인 시스템·반응형 UI 구축 및 PR 병합(42건)',
    tags: ['Java', 'Spring Boot', 'Thymeleaf', 'MySQL', 'Apache POI', 'Summernote', 'CSS3', 'Git'],
    githubUrl: 'https://github.com/human0622java3team/librarylounge',
    summary: '도서 대출·반납과 커뮤니티를 아우르는 통합 도서관 웹 서비스로, 회원 및 3단계 누적 차등 제재 도메인 전 계층과 실시간 권한 판별, 관리자 다중 시트 엑셀 리포트(.xlsx), 반응형 웹 UI를 설계·구현한 프로젝트입니다.',
    problem: '연체·파손·커뮤니티 위반 등 복합 사유에 따른 실시간 권한(대출·글쓰기·댓글) 제어와 탈퇴 회원 이력 보존이 필요했으며, 제재가 연결된 게시글 강제 삭제 시 외래키(FK) 제약조건 위반 오류 및 모바일 뷰·Summernote 에디터 호환성 문제가 발생했습니다.',
    solution: '계정 상태와 활성 제재 이력을 조합한 실시간 권한 검증 쿼리와 3단계 누적 차등 제재·탈퇴 마스킹 백업(member_deleted)을 구현했습니다. 또한 FK 참조를 선행 분리(null)하는 관리자 안전 삭제와 Apache POI(XSSFWorkbook) 다중 시트 엑셀 리포트 2종을 개발하고, 모바일 카드형 뷰 전환 및 에디터 유튜브 정규식 패치·빈 게시글 이중 검증을 적용했습니다.',
    result: '외래키 충돌 없는 데이터 정합성과 실시간 도메인 권한 통제를 확보하고, 관리자 리포팅 자동화 및 브레이크포인트별 반응형 UI/UX 완성을 통해 총 63개 커밋(기능·수정 21건, PR 병합·충돌 해결 42건)으로 팀 프로덕션 완성도를 견인했습니다.'
  }
];

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
    summary: '창업자의 제한적인 데이터 환경에서도 신뢰성 높은 매출 추이를 예측할 수 있도록 사전 학습 파운데이션 모델(TimesFM)을 서빙하고 DB와 백엔드를 연동한 플랫폼입니다.',
    problem: '초기 창업자의 데이터 세트 부족(콜드 스타트)으로 일반 모델 훈련이 불가능했고, 실서비스 연동 시 최소 데이터 해석 구간(Burn-in) 부족으로 무한 로딩이 발생했습니다.',
    solution: '방대한 시계열 데이터로 사전 학습된 TimesFM을 도입하여 제로샷(Zero-shot) 추론 환경을 구축하고, 30일 이상 데이터 수집 여부를 판별하는 조건부 라우팅 아키텍처를 설계했습니다.',
    result: '자체 데이터 수집 리소스를 대폭 절감하고, 불완전 데이터 호출로 인한 런타임 오류와 무한 로딩을 원천 차단하여 안정적인 서빙 환경을 완성했습니다.'
  },
  {
    id: 'stocklab',
    title: 'StockLab (주식 성향 AI 분석 및 모의투자)',
    subtitle: '모듈형 아키텍처 기반의 금융 시계열 데이터 수집 및 투자 성향 분석 플랫폼',
    category: 'Team',
    period: '2026.03.20 ~ 2026.03.27',
    teamSize: '6명 (AI / 백엔드 담당)',
    role: 'Flask 기반 API 서버 구축, 금융 API 연동, DB 스키마 설계 및 대규모 시계열 데이터 처리',
    tags: ['Flask', 'MariaDB', 'Redis', 'LangChain', 'Python', 'Pydantic'],
    githubUrl: 'https://github.com/human13th2team/StockLab',
    summary: '실시간 시장 데이터와 주요 투자 지표를 안정적으로 가공하고 사용자 투자 성향 맞춤형 분석 알고리즘을 제공하는 서비스입니다.',
    problem: '실시간 금융 시계열 데이터가 대량으로 유입될 때 연산 병목 및 조회 지연이 발생할 위험이 있었습니다.',
    solution: '모듈화된 API 아키텍처를 도입하고, Redis 캐싱 계층과 MariaDB 인덱스 설계를 최적화하여 쿼리 처리 성능을 향상시켰습니다.',
    result: '복잡한 주식 데이터 연산 중에도 서버 지연을 방지하고 신뢰도 높은 모의투자 환경을 구축했습니다.'
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
    summary: '기술주 주가 데이터와 VIX 변동성 지수를 결합하여 주가 종가 패턴을 예측하고 잔차를 분석하는 프로젝트입니다.',
    problem: '시계열 금융 데이터의 비선형성과 노이즈로 인해 학습 시 과적합(Overfitting)이 발생하기 쉬웠습니다.',
    solution: 'Sliding Window 기법으로 시차(Lag) 데이터를 추출하고, Dropout 레이어 및 조기 종료(Early Stopping)를 적용해 모델을 안정화했습니다.',
    result: 'LSTM과 GRU의 잔차 분포 및 MSE 지표를 비교하여 더 안정적인 모델을 선별하고, 인터랙티브 차트가 포함된 대시보드로 서빙했습니다.'
  },
  {
    id: 'java-crud-board',
    title: 'Java CLI 게시판 및 MySQL 연동 애플리케이션',
    subtitle: '계층형 아키텍처(Layered Architecture)와 JDBC를 활용한 CRUD 시스템',
    category: 'Personal',
    period: '2026.08 ~ 2026.09',
    teamSize: '1명 (개인 프로젝트)',
    role: 'DB 스키마 모델링, Java OOP 기반 계층 분리, JDBC 데이터 액세스 로직 개발',
    tags: ['Java', 'MySQL', 'JDBC', 'DBeaver', 'OOP'],
    summary: '순수 Java 객체지향 설계 원칙을 적용하여 게시글 및 댓글의 전체 라이프사이클을 관리하는 콘솔 기반 백엔드 애플리케이션입니다.',
    problem: '비즈니스 로직과 데이터베이스 접근 로직이 혼재될 경우 유지보수성과 트랜잭션 관리가 저하되는 구조적 문제가 있었습니다.',
    solution: 'Controller - Service - Repository 계층형 아키텍처를 도입하고, PreparedStatement를 활용해 SQL Injection을 방지하며 커넥션 자원 누수를 철저히 차단했습니다.',
    result: '안정적인 데이터 정합성을 보장하는 모듈형 CRUD 기반을 완성하고, 관계형 데이터베이스 모델링 역량을 입증했습니다.'
  }
];
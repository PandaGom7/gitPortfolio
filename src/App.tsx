import { useState, useEffect } from 'react';
import { projectsData, type Project } from './data/projects';
import { ProjectThumbnail } from './components/ProjectThumbnail';
import {
  Brain,
  Server,
  Database,
  Terminal,
  Sun,
  Moon,
  ExternalLink,
  ChevronRight,
  Calendar,
  Users,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  X,
  Code2,
  ArrowRight
} from 'lucide-react';

export default function App() {
  const [filter, setFilter] = useState<'All' | 'Team' | 'Personal'>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Theme state: default to dark mode for tech portfolio, sync with localStorage
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'All') return true;
    return p.category === filter;
  });

  const skillsData = [
  {
    category: 'AI & Data Modeling',
    icon: Brain,
    color: 'from-purple-500 to-indigo-500',
    iconBg: 'bg-purple-100 dark:bg-purple-950/60 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/60',
    description: '사전학습 파운데이션 모델 및 시계열/RAG 아키텍처 설계',
    skills: ['PyTorch', 'TensorFlow', 'TimesFM', 'Transformer', 'sLLM (Gemma, Solar)', 'Ollama', 'Hugging Face', 'LangChain', 'RAG (ChromaDB)', 'Scikit-Learn', 'XGBoost', 'LSTM / GRU', 'CNN']
  },
  {
    category: 'Backend & Server',
    icon: Server,
    color: 'from-blue-500 to-cyan-500',
    iconBg: 'bg-blue-100 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/60',
    description: 'RESTful API 및 고성능 비동기 서빙 아키텍처',
    skills: ['Python (FastAPI, Flask)', 'Java (Spring Boot)', 'Next.js / React', 'JavaScript', 'RESTful API', 'Pydantic', '비동기 파이프라인', 'OOP 계층 아키텍처']
  },
  {
    category: 'Database & Storage',
    icon: Database,
    color: 'from-emerald-500 to-teal-500',
    iconBg: 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/60',
    description: '관계형 데이터베이스 모델링 및 캐시/벡터 인덱싱',
    skills: ['PostgreSQL', 'MariaDB', 'OracleDB', 'Neo4j (Graph DB)', 'Supabase', 'Redis', 'ChromaDB (Vector)', 'JDBC', 'ERD 모델링', '쿼리 최적화']
  },
  {
    category: 'DevOps & Tools',
    icon: Terminal,
    color: 'from-amber-500 to-orange-500',
    iconBg: 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-800/60',
    description: '컨테이너 가상화, 협업 툴 및 대시보드 프로토타이핑',
    skills: ['Docker', 'Linux', 'Git / GitHub', 'Streamlit', 'Gradio', 'DBeaver', 'Jira / Slack / Notion']
  }
];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      
      {/* 1. Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-6 py-3.5 transition-colors">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <a href="#about" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 dark:bg-indigo-400 group-hover:scale-125 transition-transform" />
            <span className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
              Minjae Kang
            </span>
            <span className="text-xs font-medium px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-800/50 hidden sm:inline-block">
              Portfolio
            </span>
          </a>

          {/* Navigation Links */}
          <nav className="flex items-center gap-6 sm:gap-8 text-sm font-medium text-slate-600 dark:text-slate-300">
            <a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Skills
            </a>
            <a href="#projects" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Contact
            </a>

            {/* Dark Mode Toggle */}
            <button
              type="button"
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition cursor-pointer"
              title={isDark ? '라이트 모드로 전환' : '다크 모드로 전환'}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
            </button>
          </nav>
        </div>
      </header>

      {/* 2. Hero Section */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20 sm:py-28 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="max-w-3xl">
          {/* Role badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs sm:text-sm font-semibold border border-indigo-200 dark:border-indigo-500/20">
            <span className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-indigo-400 animate-pulse" />
            AI &amp; Backend Software Engineer
          </div>

          {/* Slogan title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight md:leading-tight mb-6">
            수학적 사고를 기반으로<br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-500 bg-clip-text text-transparent">
              {' '}안정적인 E2E 데이터 파이프라인
            </span>을 구축합니다.
          </h1>

          {/* Subtext description */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
            수학을 전공하며 키워온 논리적 알고리즘 설계 능력과 머신러닝·딥러닝·LLM(RAG) 기술을 결합하여,
            단순한 모델 개발을 넘어 실무 비즈니스 로직과 웹 서버로 서빙되는 풀스택 아키텍처를 만듭니다.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>프로젝트 살펴보기</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/PandaGom7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 font-semibold text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub 방문</span>
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-200 dark:border-slate-800/80 text-left">
            <div>
              <div className="text-2xl font-black text-indigo-600 dark:text-indigo-400">6건</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">완성 프로젝트 (팀 2 / 개인 4)</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100">E2E</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">FastAPI &amp; Spring Boot 서빙</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-slate-100">XAI &amp; RAG</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">설명 가능한 AI 파이프라인</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Skills Section */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-20 border-b border-slate-200 dark:border-slate-800 scroll-mt-20">
        <div className="mb-10">
          <div className="inline-block px-2.5 py-1 mb-2 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase">
            Tech Stack
          </div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">핵심 기술 역량</h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            수학적 이론을 구현하고 실제 프로덕션 레벨의 API 및 파이프라인으로 서빙하는 기술 스택입니다.
          </p>
        </div>

        {/* 2x2 Wide Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="bg-white dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-indigo-400/50 dark:hover:border-indigo-500/50 transition duration-200 flex flex-col justify-start"
              >
                <div>
                  {/* Card Header with Icon */}
                  <div className="flex items-center gap-3.5 mb-3">
                    <div className={`p-2.5 rounded-xl border ${category.iconBg}`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-slate-100 text-lg">
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-5 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-full text-xs font-medium border border-slate-200/80 dark:border-slate-700/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/40 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-300 dark:hover:border-indigo-700 transition"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <div className="inline-block px-2.5 py-1 mb-2 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase">
              Featured Work
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100">주요 프로젝트</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
              각 카드를 클릭하시면 직면했던 문제(Problem)와 구체적인 엔지니어링 해결 과정(Action &amp; Result)을 확인하실 수 있습니다.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="inline-flex p-1 bg-slate-200/70 dark:bg-slate-800/80 rounded-xl border border-slate-300/60 dark:border-slate-700 self-start sm:self-auto">
            {(['All', 'Team', 'Personal'] as const).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                  filter === cat
                    ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {cat === 'All' ? '전체 (6)' : cat === 'Team' ? '팀 프로젝트 (2)' : '개인 프로젝트 (4)'}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group bg-white dark:bg-slate-900/90 hover:bg-slate-50/50 dark:hover:bg-slate-800/90 border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-200 shadow-sm hover:shadow-xl hover:-translate-y-1"
            >
              <div>
                {/* 16:9 Architecture Diagram Banner */}
                <div className="aspect-video w-full border-b border-slate-200/80 dark:border-slate-800 relative">
                  <ProjectThumbnail projectId={project.id} />
                </div>

                <div className="p-6">
                  {/* Metadata Row: Category Pill & Period */}
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                        project.category === 'Team'
                          ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50'
                          : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50'
                      }`}
                    >
                      {project.category === 'Team' ? (
                        <>
                          <Users className="w-3 h-3" />
                          <span>Team</span>
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-3 h-3" />
                          <span>Personal</span>
                        </>
                      )}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 font-mono">
                      <Calendar className="w-3 h-3" />
                      {project.period}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* All Tech Badges (Wrapped, No +2 truncation) */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/80 dark:border-slate-700/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Link */}
              <div className="px-6 py-3.5 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs text-indigo-600 dark:text-indigo-400 font-semibold group-hover:text-indigo-500">
                <span className="flex items-center gap-1">
                  <span>문제 해결 과정 보기</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </span>
                {project.githubUrl && (
                  <span className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                    GitHub 코드 &rarr;
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Project Detail Modal (Troubleshooting Focus) */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-150"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 relative shadow-2xl transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
              aria-label="닫기"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                  selectedProject.category === 'Team'
                    ? 'bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-900/50'
                    : 'bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50'
                }`}
              >
                {selectedProject.category} Project
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                {selectedProject.teamSize}
              </span>
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-1">
              {selectedProject.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-4">
              기간: {selectedProject.period} | 담당 역할: <span className="text-slate-700 dark:text-slate-300 font-medium">{selectedProject.role}</span>
            </p>

            {/* Architecture Preview in Modal */}
            <div className="aspect-video w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 mb-5">
              <ProjectThumbnail projectId={selectedProject.id} />
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-6">
              {selectedProject.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Detailed Troubleshooting Breakdown */}
            <div className="space-y-4 text-sm leading-relaxed border-t border-slate-200 dark:border-slate-800 pt-5">
              {/* Summary */}
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-slate-900 dark:text-slate-100 mb-1 flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-indigo-500" />
                  프로젝트 개요 (Overview)
                </h4>
                <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Problem */}
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/30">
                <h4 className="font-bold text-rose-700 dark:text-rose-400 mb-1 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" />
                  직면한 문제 (Problem)
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  {selectedProject.problem}
                </p>
              </div>

              {/* Action / Solution */}
              <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900/30">
                <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-1 flex items-center gap-1.5">
                  <Server className="w-4 h-4" />
                  해결 접근 및 엔지니어링 (Action)
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  {selectedProject.solution}
                </p>
              </div>

              {/* Result */}
              <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/30">
                <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  결과 및 성과 (Result)
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm">
                  {selectedProject.result}
                </p>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="mt-8 flex items-center justify-end gap-3 border-t border-slate-200 dark:border-slate-800 pt-5">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs sm:text-sm rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium transition cursor-pointer"
              >
                닫기
              </button>
              {selectedProject.githubUrl && (
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm rounded-lg bg-slate-900 dark:bg-slate-800 hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-medium border border-slate-700 transition"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>GitHub 저장소</span>
                </a>
              )}
              {selectedProject.demoUrl && (
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium shadow-md transition"
                >
                  <span>라이브 데모</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}

      {/* 6. Contact & Footer */}
      <footer id="contact" className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-16 px-6 text-center text-sm text-slate-500 dark:text-slate-400 transition-colors scroll-mt-20">
        <div className="max-w-4xl mx-auto space-y-5">
          <div className="inline-block px-2.5 py-1 mb-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold tracking-wider uppercase">
            Get In Touch
          </div>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">Contact</h3>
          <p className="max-w-md mx-auto text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
            데이터 파이프라인, AI 모델 서빙, 백엔드 아키텍처에 대한 기술적 도전과 협업 제안을 환영합니다.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-6 pt-4 text-slate-700 dark:text-slate-300 font-medium">
            <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm">
              <span className="text-indigo-500">✉</span> imjkang7@gmail.com
            </span>
            <a
              href="https://github.com/PandaGom7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-400 text-xs sm:text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub / PandaGom7</span>
            </a>
          </div>

          <p className="pt-8 text-xs text-slate-400 dark:text-slate-600">
            &copy; 2026 Minjae Kang. Built with React, Vite &amp; Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
// 포트폴리오 콘텐츠 — 컴포넌트와 분리해 내용만 여기서 수정한다
// TODO: "작성 예정" 항목과 프로젝트 이미지는 프로젝트 사례 정리 이슈에서 채운다

export type Category = "분석" | "모델링" | "AI 서비스";

export type Project = {
  title: string;
  period: string;
  category: Category[];
  role: string;
  // public/ 기준 경로 (예: "/projects/tripgether.png"), 없으면 자리표시 박스가 보인다
  image?: { src: string; alt: string };
  question: string;
  data: string;
  method: string;
  insight: string;
  stack: string[];
  links: { label: string; href: string }[];
};

export const profile = {
  nameKo: "이정연",
  nameEn: "Jungyeon Lee",
  tagline: "데이터로 문제를 찾고, 서비스로 답을 만듭니다.",
  about: [
    "세종대학교에서 데이터사이언스와 경제학을 공부하며, 머신러닝·딥러닝을 중심으로 마케팅 등 다양한 분야에 관심을 두고 배우고 있습니다. 숫자와 결과를 그대로 보기보다는, 그 안에 담긴 맥락과 의미를 이해하는 과정에 흥미를 느낍니다.",
    "새로운 사람들을 만나고 함께 고민하며 다양한 프로젝트에 참여하는 경험을 중요하게 생각합니다.",
  ],
  links: [
    { label: "GitHub", href: "https://github.com/JungYeoni" },
    { label: "Email", href: "mailto:woolljy@naver.com" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/%EC%A0%95%EC%97%B0-%EC%9D%B4-231179353/",
    },
    { label: "Blog", href: "https://velog.io/@woolljy/posts" },
  ],
};

const TBD = "작성 예정";

export const featured: Project[] = [
  {
    title: "why-they-leave",
    period: TBD,
    category: ["분석", "AI 서비스"],
    role: "분석 · 추천 시스템",
    question: "유저는 퍼널의 어디에서, 왜 이탈하는가?",
    data: "행동 로그 + Nemotron-Personas-USA 페르소나",
    method: "페르소나 임베딩·클러스터링 → 퍼널 진단 → 추천",
    insight: TBD,
    stack: ["Python", "pandas", "scikit-learn"],
    links: [],
  },
  {
    title: "트립게더 (Tripgether)",
    period: "2025.09 - 2025.11",
    category: ["AI 서비스"],
    role: "AI 파이프라인 · 백엔드 연계",
    question: "SNS 숏폼 속 장소 정보를 '공유' 버튼 하나로 정리할 수 있을까?",
    data: "숏폼 콘텐츠 (영상·캡션)",
    method: "장소 정보 추출 파이프라인 + 백엔드 로직 연계 설계",
    insight: "App Store 출시, 제2회 신격호 롯데 청년기업가대상 본선 진출",
    stack: ["Python", "FastAPI", "Docker"],
    links: [
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%BD%EA%B2%8C%EB%8D%94/id6760094397",
      },
      { label: "GitHub", href: "https://github.com/JungYeoni/location-extraction-pipeline" },
    ],
  },
  {
    title: "서울 신규 지하철역 우선순위 도출",
    period: "2025",
    category: ["분석"],
    role: "데이터 분석",
    question: "서울에서 신규 지하철역이 가장 먼저 필요한 곳은 어디인가?",
    data: TBD,
    method: TBD,
    insight: TBD,
    stack: ["Python", "MySQL"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/JungYeoni/2025-seoul-new-subway-station-priority",
      },
    ],
  },
];

export const others: { title: string; period: string; category: Category; note: string }[] = [
  { title: "모의면접 AI Agent: SolSol", period: "2026.05", category: "AI 서비스", note: "MiXUP 해커톤 장려상" },
  { title: "서울숨셔 (Seoulbreath)", period: "2026.04 - 2026.05", category: "AI 서비스", note: "" },
  { title: "bigcontest-social-isolation", period: "2026", category: "분석", note: "" },
  { title: "ML-Fraud-Detection", period: "2025", category: "모델링", note: "" },
  { title: "카카오뱅크 기업분석", period: "2025.09 - 2025.10", category: "분석", note: "YLC 기업분석대회 우수상" },
];

export const skills = [
  { group: "Analysis", items: ["Python", "pandas", "SQL (MySQL)"] },
  { group: "Modeling", items: ["scikit-learn"] },
  { group: "Service", items: ["FastAPI", "Docker", "Git"] },
  { group: "Certificates", items: ["ADsP", "SQLD"] },
];

export const activities = [
  { title: "빅데이터 연합동아리 투빅스 (Tobigs)", period: "2026.01 - Present", role: "Member" },
  { title: "세종대학교 중앙개발동아리 아롬 (ALOM)", period: "2025.02 - Present", role: "Staff" },
  { title: "전국연합 시장경제 학술동아리 YLC", period: "2025.08 - 2026.04", role: "Staff" },
  { title: "세종대학교 인공지능 중앙동아리 SAI", period: "2024.03 - 2025.06", role: "Member" },
];

export const awards = [
  { title: "세종대학교 창업캠프 대상", year: "2025" },
  { title: "YLC 기업분석대회 우수상", year: "2025" },
  { title: "세종대학교 SW·AI 해커톤 장려상", year: "2025" },
  { title: "제3회 MiXUP 해커톤 장려상", year: "2026" },
];


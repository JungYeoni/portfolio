// 포트폴리오 콘텐츠 — 컴포넌트와 분리해 내용만 여기서 수정한다

export type Category = "분석" | "모델링" | "AI 서비스";

export type Project = {
  title: string;
  period: string;
  sortDate: string;
  category: Category[];
  role: string;
  summary: string;
  stories: { title: string; paragraphs: string[] }[];
  stack: string[];
  links: { label: string; href: string }[];
};

type CompactProject = {
  title: string;
  period: string;
  sortDate: string;
  category: Category;
  paragraphs: string[];
  stack: string[];
  href: string;
};

export const profile = {
  nameKo: "이정연",
  nameEn: "Jungyeon Lee",
  tagline: "데이터를 분석하고, 직접 구현해 검증합니다.",
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

const featured: Project[] = [
  {
    title: "트립게더 (Tripgether)",
    period: "2025.10–11",
    sortDate: "2025-11-25",
    category: ["AI 서비스"],
    role: "AI 서버 · 영상 처리 · 백엔드 연동",
    summary: "트립게더는 SNS에서 본 여행 장소를 다시 찾고 저장할 수 있도록 게시물 URL을 분석하는 팀 서비스입니다. AI 서버는 캡션·이미지·영상에서 텍스트를 모아 장소 정보를 구조화하고 백엔드로 전달합니다. 저는 영상 자막 처리, YouTube Shorts 처리, 장소 추출 API와 콜백 계약을 맡았습니다.",
    stories: [
      {
        title: "영상 자막에만 남은 장소 정보 찾기",
        paragraphs: [
          "캡션과 음성에는 장소명이 없고 화면 자막에만 정보가 있는 릴스가 있었습니다. 1분짜리 30fps 영상을 전부 OCR에 보내면 약 1,800프레임을 처리해야 했습니다.",
          "영상 하단 40%를 초당 2프레임만 추출해 이미지 해시로 자막이 바뀐 시점을 찾고, 변화가 확인되면 전체 프레임을 OCR 대상으로 넘기도록 구현했습니다. 제 커밋은 배포 PR에 포함됐고, 팀원이 영상 스트림과 오류 처리를 보완해 통합했습니다.",
        ],
      },
      {
        title: "배포 환경에서 OCR 대안 검토하기",
        paragraphs: [
          "Upstage OCR의 요청 제한에 대응하려 로컬 OCR 대안을 검토했습니다. EasyOCR을 연결해 응답을 시험했지만 실제 배포 장비인 Synology NAS에서는 실행되지 않았습니다.",
          "EasyOCR은 최종 경로에서 제거했고, 별도 브랜치에서 시험한 PaddleOCR도 병합하지 않았습니다. 최종 배포본은 Upstage OCR을 사용했으며, 대안 실험으로 OCR 비용이나 정확도가 개선됐다는 수치는 확보하지 못했습니다.",
        ],
      },
      {
        title: "추출 결과를 백엔드에 전달하기",
        paragraphs: [
          "인스타그램 외에 YouTube Shorts의 메타데이터와 영상 처리 경로를 추가하고, 장소 추출 API에서 콘텐츠 유형과 게시자 정보가 올바르게 전달되도록 스키마를 연결했습니다. 백엔드가 비동기 처리 결과를 받을 때 필요한 장소 좌표·원본 데이터 필드와 성공·실패 콜백 조건도 점검했습니다.",
          "초기 샘플에서는 가게명뿐 아니라 지역명과 랜드마크가 함께 추출되는 문제가 보여 결과 필드를 다듬었습니다. 장소 추출 정확도와 실사용 지표는 별도 정량 평가 자료가 없습니다.",
        ],
      },
    ],
    stack: ["Python", "FastAPI", "Pydantic", "FFmpeg", "ScrapFly", "uv"],
    links: [
      { label: "AI 서버 GitHub", href: "https://github.com/TEAM-Tripgether/tripgether-python" },
      { label: "자막 추출 병합 PR", href: "https://github.com/TEAM-Tripgether/tripgether-python/pull/18" },
      {
        label: "App Store",
        href: "https://apps.apple.com/kr/app/%ED%8A%B8%EB%A6%BD%EA%B2%8C%EB%8D%94/id6760094397",
      },
    ],
  },
  {
    title: "추크크 (Recommendation Creator Crew)",
    period: "2026.05–07",
    sortDate: "2026-07-11",
    category: ["모델링", "분석"],
    role: "고객 행동 분석 · 추천 모델 평가",
    summary: "추크크는 상품이 너무 많아 원하는 상품을 찾기 어려운 상황에서 고객 행동을 해석하고 추천 순위를 개선하려 한 투빅스 컨퍼런스 팀 프로젝트입니다. 팀은 클릭스트림에서 페르소나를 만들고 추천 후보를 재정렬하는 데모를 제작했습니다. 저는 학습 기간의 행동 세그먼트와 LightGCN 비교 실험, 데모의 평가 지표 연결에 참여했습니다.",
    stories: [
      {
        title: "행동 데이터로 세그먼트 만들기",
        paragraphs: [
          "Kaggle 합성 클릭스트림의 고객·세션·이벤트·주문 등 7개 테이블에서 탐색과 구매 행동을 정리했습니다. 추천 평가 시점 이후의 행동이 세그먼트에 섞이면 결과가 과대평가될 수 있었습니다.",
          "학습 기간에 관측된 피처만으로 KMeans 세그먼트를 다시 계산했습니다. 이렇게 만든 페르소나는 실제 성향의 정답 라벨이 아니라 고객 행동과 추천 결과를 해석하는 보조 정보로 사용했습니다.",
        ],
      },
      {
        title: "페르소나 노드의 효과를 대조군과 비교하기",
        paragraphs: [
          "페르소나를 추천 모델에 직접 넣을 효과를 확인하려고 사용자·상품 그래프와 페르소나 노드를 추가한 그래프를 같은 평가 사용자·조건에서 비교했습니다. LightGCN 학습과 HR@K·NDCG@K 계산을 연결하고 평가 오류도 수정했습니다.",
          "임베딩 차원 32에서는 HR@20이 0.0398에서 0.0453으로 높았지만, 차원 64에서는 0.0496과 0.0505로 차이가 작아졌습니다. 따라서 페르소나 노드가 안정적으로 성능을 개선했다고 결론 내리지 않았습니다.",
        ],
      },
      {
        title: "최종 추천 흐름에서 페르소나를 쓰는 위치 정하기",
        paragraphs: [
          "팀은 ALS·LightGCN으로 후보를 만든 뒤 페르소나를 후처리 재정렬에 반영하는 방향을 택했습니다. 저는 추천 데모의 두 그래프 평가 계산과 비교 화면을 연결했습니다.",
          "ALS나 재정렬 로직 전체를 혼자 구현한 것은 아닙니다. 결과는 합성 데이터의 오프라인 추천 지표이며 실제 이용자의 탐색 시간이나 구매 전환은 측정하지 않았습니다.",
        ],
      },
    ],
    stack: ["Python", "pandas", "scikit-learn", "TensorFlow", "Streamlit"],
    links: [
      { label: "분석 GitHub", href: "https://github.com/why-they-leave/retail-clickstream-analysis" },
      { label: "추천 데모 GitHub", href: "https://github.com/why-they-leave/rec-system" },
    ],
  },
  {
    title: "유모차 (Yumocha)",
    period: "2026.06–08",
    sortDate: "2026-08-09",
    category: ["분석", "모델링"],
    role: "재정 데이터 분석 · 사업 분류",
    summary: "유모차는 지역별 저출생 대응 계획예산이 출생환경지표와 어떻게 대응하는지 살펴본 재정데이터 분석 경진대회 팀 프로젝트입니다. 서로 다른 연도와 지자체의 세부사업을 같은 기준으로 분류하고 비교 가능한 패널을 만드는 일이 분석의 출발점이었습니다. 저는 사업 분류 모델, 지역·연도별 재정 패널, 시차별 관계 분석과 결과 시각화를 맡았습니다.",
    stories: [
      {
        title: "연도별 예산 사업을 같은 기준으로 분류하기",
        paragraphs: [
          "지자체마다 사업명이 달라 같은 정책 영역의 예산을 바로 합칠 수 없었습니다. 2021~2024년 사업의 확정·수정 라벨을 바탕으로 TF-IDF와 로지스틱 회귀 분류기를 재학습했습니다.",
          "지역 단위 교차검증에서 macro-F1이 0.842에서 0.889로 높아졌습니다. 다만 이 모델을 2016~2020년 사업에 적용하면 당시 정책 용어가 달라질 수 있어 저신뢰 예측을 별도 검토 대상으로 남겼습니다.",
        ],
      },
      {
        title: "지역과 연도를 맞춘 재정 패널 검증하기",
        paragraphs: [
          "17개 시도의 2016~2024년 예산 자료를 지역·연도·정책 영역 단위로 결합해 9개년 재정 패널을 만들었습니다. 분류 라벨이 제대로 붙었는지, 세부사업 합계가 상위 집계와 맞는지, 저장 전후 값이 바뀌지 않았는지 전수 점검했습니다.",
          "분석의 단위를 맞추지 않으면 지역이나 연도 간 차이가 데이터 결합 오류로 생길 수 있어 검증 결과를 함께 남겼습니다.",
        ],
      },
      {
        title: "예산과 출생환경의 관계를 해석할 범위 정하기",
        paragraphs: [
          "구축한 재정 패널을 출생환경지표와 연결해 세부영역 예산의 시차별 관계를 분석하고 결과를 시각화했습니다. 분석 결과에는 어느 지역·연도·영역을 비교한 값인지 함께 밝혔습니다.",
          "이 자료는 지역별 관찰값이므로 예산이 지표를 바꿨다는 인과 효과나 미래 출생률 예측으로 해석하지 않았습니다.",
        ],
      },
    ],
    stack: ["Python", "pandas", "scikit-learn", "statsmodels", "matplotlib"],
    links: [
      { label: "분석 GitHub", href: "https://github.com/Yumocha/yumocha" },
      { label: "결과 웹 GitHub", href: "https://github.com/Yumocha/yumocha-web" },
    ],
  },
  {
    title: "서울숨셔 (Seoulbreath)",
    period: "2026.04–05",
    sortDate: "2026-05-14",
    category: ["분석", "AI 서비스"],
    role: "장소 데이터 구축 · 추천 로직",
    summary: "서울숨셔는 이용자의 위치와 기분, 소음 선호, 도시 환경에 맞는 서울의 휴식 공간과 책을 함께 추천한 서울시 빅데이터 활용 공모전 출품작입니다. 팀은 공공 공간 자료와 실시간 환경 정보를 결합해 추천 결과를 만들었습니다. 저는 장소 마스터데이터 정제, 거리·반경 피처, 추천 Edge Function과 시나리오 검증을 맡았습니다.",
    stories: [
      {
        title: "추천에 사용할 장소 데이터를 정리하기",
        paragraphs: [
          "공공 공간·문화시설·서울페이 가맹점 자료를 합치면서 주소와 좌표 오류, 같은 이름의 다른 장소, 서비스 취지와 맞지 않는 어린이 공간을 점검했습니다. 중복 이름만으로 장소를 구분하지 않도록 spot_id를 도입했고, BallTree로 주변 문화공간과 편의시설의 거리·반경 피처를 미리 계산했습니다.",
          "반경 피처의 음수 건수·반경 역전·유형별 합계 불일치는 검증 결과 0건이었으며, 최종 마스터테이블에는 서울 25개 구의 2,846개 장소가 담겼습니다.",
        ],
      },
      {
        title: "선호가 충돌할 때도 추천 흐름 이어가기",
        paragraphs: [
          "추천 요청에서는 기분·소음·장소·활동 선호로 후보를 먼저 거른 뒤 태그 일치도, 거리, 소음, 혼잡도를 점수화했습니다. 날씨·대기질·소음처럼 바뀌는 값은 요청 시점에 가져오고, 주변 시설 반경처럼 정적인 값은 전처리해 응답 시 계산을 줄였습니다.",
          "후보가 없으면 운영시간·이동거리·주차·소음 조건을 순서대로 완화하고, 선정된 장소에는 Gemini API로 추천 이유와 책을 붙였습니다.",
        ],
      },
      {
        title: "상충하는 선호를 시나리오로 확인하기",
        paragraphs: [
          "대표 시나리오를 돌리며 가중치와 단계별 완화가 추천 결과에 주는 영향을 비교했습니다. 일부 충돌 사례에서는 태그 일치도가 0.40에서 0.80으로 높아졌습니다.",
          "‘조용한 자연 공간’을 원하는 경우 소음 필터가 야외 공원을 먼저 제외하는 문제는 남았습니다. 가중치만 바꿔 해결되지 않아 마지막 단계에서 소음 조건을 완화하도록 두었으며, 실제 이용자의 만족도 평가는 진행하지 못했습니다.",
        ],
      },
    ],
    stack: ["Python", "pandas", "BallTree", "TypeScript", "Supabase Edge Functions", "Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/JungYeoni/bookstay-map-seoul" }],
  },
];

const others: CompactProject[] = [
  {
    title: "솔솔 (sol sol)",
    period: "2026.05",
    sortDate: "2026-05-23",
    category: "AI 서비스",
    paragraphs: [
      "이력서와 채용공고를 바탕으로 지원자의 답변에 따라 다음 면접 질문을 고르는 해커톤 팀 서비스입니다. 저는 LangGraph로 질문 역할을 선택하는 에이전트와 Solar 모델 호출, 첫 질문 API를 구현했습니다.",
      "샘플 면접에서 질문·평가 흐름을 확인했으며, 실제 지원자 평가 품질은 검증하지 못했습니다. Upstage Solar Pro3 AI Agent 해커톤에서 팀 장려상을 받았습니다.",
    ],
    stack: ["Python", "FastAPI", "LangGraph", "Upstage Solar", "uv"],
    href: "https://github.com/Mixup-Agent/solsol",
  },
  {
    title: "비자부기 (Visa-Bugi)",
    period: "2026.08",
    sortDate: "2026-08-28",
    category: "AI 서비스",
    paragraphs: [
      "공식 비자 요건 문서를 웹 서비스에서 추적 가능한 데이터로 연결한 공모전 팀 프로젝트입니다. 저는 원문 추출과 수치·단위 검토 도구, 공통 스키마, Supabase 적재기와 기관 지도 연동을 구현했습니다.",
      "제출 당시 데이터 적재 PR에서는 13개 테이블·1,101행과 재실행 안정성을 확인했습니다. 문서 표현이 일정하지 않아 자동 추출만으로는 충분하지 않았고 사람 검수가 필요했습니다.",
    ],
    stack: ["Python", "Supabase", "PostgreSQL", "Next.js", "TypeScript", "Kakao Maps SDK"],
    href: "https://github.com/Team-Hambugi-Lab/visa-data",
  },
  {
    title: "사회적 고립 분석 (Social Isolation Analysis)",
    period: "2026.09–",
    sortDate: "2026-10-25",
    category: "분석",
    paragraphs: [
      "통신 유동인구와 카드 소비 집계에서 지역·인구집단 단위의 사회적 고립 의심 신호를 탐색하는 진행 중인 팀 과제입니다. 저는 제공 데이터 탐색, 24개 위험 특징 사전, 60대 이상 활동 감소 신호와 외부 자료 비교, 지수 구성의 민감도 검증을 맡았습니다.",
      "집계 신호는 개인의 고립 여부를 판정하는 자료가 아니므로 독립 지표와의 연관성 및 대안 설명을 함께 확인하고 있습니다.",
    ],
    stack: ["Python", "pandas", "NumPy", "SciPy", "scikit-learn", "pytest"],
    href: "https://github.com/Team-Hambugi-Lab/bigcontest-social-isolation",
  },
];

export const projects: (Project | CompactProject)[] = [...featured, ...others].sort((a, b) => b.sortDate.localeCompare(a.sortDate));

export const competitions = [
  { title: "미래에셋 AI Festival 2026", period: "2026.08–09", detail: "FIN터뷰 · 연금 Agent 출품" },
  { title: "대학(원)생 재정데이터 분석 경진대회", period: "2026", detail: "유모차 · 분석 제출" },
  { title: "Upstage Solar Pro3 AI Agent 해커톤", period: "2026.05", detail: "솔솔 · 팀 장려상" },
  { title: "서울시 빅데이터 활용 공모전", period: "2026.04–05", detail: "서울숨셔 · 출품" },
  { title: "제13회 전국 ICT융합 공모전", period: "2026", detail: "비자부기 · 출품" },
  { title: "세종대학교 창업캠프", period: "2025", detail: "대상" },
  { title: "YLC 기업분석대회", period: "2025", detail: "우수상" },
  { title: "세종대학교 SW·AI 해커톤", period: "2025", detail: "장려상" },
];

export const activities = [
  { title: "빅데이터 연합동아리 투빅스 (Tobigs)", period: "2026.01 - Present", role: "Member" },
  { title: "세종대학교 중앙개발동아리 아롬 (ALOM)", period: "2025.02 - Present", role: "Staff" },
  { title: "전국연합 시장경제 학술동아리 YLC", period: "2025.08 - 2026.04", role: "Staff" },
  { title: "세종대학교 인공지능 중앙동아리 SAI", period: "2024.03 - 2025.06", role: "Member" },
];

export const certifications = [
  { title: "데이터 분석 준전문가 (ADsP)", date: "2025.09.05", number: "046000704" },
  { title: "SQL 개발자 (SQLD)", date: "2026.03.27", number: "SQLD-060010983" },
  { title: "우슈쿵푸 1단 🐼", date: "2011.12.14", number: "11-1-1871" },
];


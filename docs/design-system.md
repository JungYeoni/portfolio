# 디자인 시스템

현재 코드에 적용된 디자인 규칙을 정리한 문서다. 값의 원본은 `src/app/globals.css`이며, 토큰을 바꾸면 이 문서도 함께 갱신한다.
아직 확정되지 않은 항목은 "확정 예정"으로 표시하고, 이슈가 진행되면 채운다.

## 색 토큰

`src/app/globals.css`의 `:root`(라이트)와 `[data-theme="dark"]`(다크)에 정의되며, `@theme inline`을 통해 Tailwind 색 유틸리티(`bg-card`, `text-muted`, `border-line` 등)로 노출된다. 컴포넌트에는 색 값을 직접 쓰지 않고 토큰만 사용한다.

| 토큰 | 라이트 | 다크 | 용도 |
|------|--------|------|------|
| `background` | `#ffffff` | `#0b0d10` | 페이지 배경, 네비바 배경(90% 투명도) |
| `foreground` | `#15181c` | `#e6e8eb` | 기본 글자색, 강조 본문 |
| `muted` | `rgb(21 24 28 / 0.6)` | `rgb(230 232 235 / 0.55)` | 보조 글자색(기간, 설명, 비활성 링크) |
| `card` | `#f7f7f7` | `rgb(255 255 255 / 0.05)` | 카드 배경 |
| `card-strong` | `rgb(0 0 0 / 0.07)` | `rgb(0 0 0 / 0.4)` | 카드 위 강조 배경 |
| `line` | `rgb(0 0 0 / 0.1)` | `rgb(255 255 255 / 0.1)` | 구분선, 테두리 |
| `accent` | `#a16207` | `#facc15` | 강조(활성 메뉴 밑줄, 수상 표기, 번호, 토글 hover) |

## 테마

- 테마는 `<html data-theme="light|dark">` 속성으로 전환한다. Tailwind `dark:` 변형도 이 속성 기준으로 동작한다(`@custom-variant dark`).
- **첫 방문**: `layout.tsx`의 인라인 스크립트(`THEME_SCRIPT`)가 첫 페인트 전에 시스템 설정(`prefers-color-scheme`)을 읽어 적용한다. 깜빡임을 막기 위해 `<head>`에서 실행한다.
- **저장**: 토글(`theme-toggle.tsx`)을 누르면 `localStorage`의 `theme` 키에 `light` 또는 `dark`를 저장한다. 저장소가 막힌 환경에서는 이번 방문 동안만 유지한다.
- **시스템 설정 추종**: 저장된 선택이 없을 때만 시스템 테마 변경을 따라간다. 저장소가 막힌 경우에는 따라가지 않는다.
- 토글 아이콘은 CSS(`dark:hidden`, `hidden dark:inline`)로 전환해 서버·클라이언트 렌더 결과를 같게 유지한다.

## 타이포그래피

- **본문 폰트**: Pretendard Variable(`pretendard` 패키지의 dynamic subset). `--font-sans`에 `"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif` 순으로 지정한다.
- **섹션 제목 디스플레이 폰트**: 확정 예정 (#8). 현재는 본문과 같은 Pretendard를 쓴다.

현재 코드에서 쓰는 크기·굵기 단계는 다음과 같다.

| 역할 | 클래스 | 사용처 |
|------|--------|--------|
| 섹션 제목(h2) | `text-[32px] sm:text-5xl md:text-6xl` `font-black` `tracking-tight` `uppercase` | `Section` 컴포넌트 |
| 페이지 제목(h1, 소개) | `text-4xl` `font-black` `leading-tight` | 소개 페이지 헤더 |
| 프로젝트 제목(h3) | `text-2xl font-bold` (포트폴리오는 `sm:text-4xl`) | 프로젝트 카드 |
| 하위 제목(h3/h4) | `text-lg`~`text-xl` `font-semibold` | 경력, 스토리 제목 |
| 본문 | `text-base` `leading-8`(긴 글) 또는 `leading-relaxed` | 설명 문단 |
| 캡션 | `text-xs`~`text-sm` `text-muted` | 기간, 역할, 카테고리 태그 |
| 네비 로고 | `text-xl sm:text-3xl md:text-4xl` `font-black` `tracking-tight` | `SiteNav` |
| 네비 메뉴 | `text-base sm:text-2xl` `font-bold` | `SiteNav` |

## 레이아웃

- **본문 최대 폭**: `max-w-5xl`(64rem), 가운데 정렬(`mx-auto`).
- **좌우 패딩**: 본문 `px-6`. 네비바는 전체 폭을 쓰며 `px-3 sm:px-6 lg:px-10`.
- **세로 여백**: 소개 페이지 `py-16`, 포트폴리오 페이지 `pb-16`.
- **섹션 간격**: `Section`이 `mt-24`, 제목 아래 `mb-8`, 앵커 이동용 `scroll-mt-24`를 갖는다.
- **긴 글 폭**: 문단은 `max-w-3xl`로 제한해 줄 길이를 유지한다.
- **반응형 기준 폭**: 확정 예정 (#5). 현재는 Tailwind 기본 구간(`sm` 640px, `md` 768px, `lg` 1024px)을 쓴다.
- **푸터**: 본문과 같은 `max-w-5xl`, 상단 `border-line`, `px-6 py-8`.

## 컴포넌트 규칙

공용 컴포넌트는 `src/app/_components/ui.tsx`(`Section`, `ExtLink`)에 있다.

- **카드**: `rounded-xl bg-card`, 내부 패딩 `p-5`~`p-6`. 목록형 카드의 항목 사이는 `border-b border-line`으로 나누고 마지막 항목은 테두리를 뺀다.
- **태그(pill)**: `rounded-full border border-line px-2 py-0.5 text-xs`. 포트폴리오 프로젝트의 카테고리에 쓴다.
- **외부 링크**: `ExtLink`를 쓴다. 새 탭(`target="_blank"`, `rel="noreferrer"`)으로 열고 라벨 뒤에 ` ↗`를 붙이며 hover 시 밑줄. 내부 페이지로 가는 강조 링크도 같은 `↗` 표기를 따른다.
- **네비바**: `sticky top-0 z-10`, `border-b border-line`, `bg-background/90 backdrop-blur`. 현재 페이지 메뉴는 `aria-current="page"`와 `text-foreground`, 물결 밑줄(`decoration-wavy decoration-accent`)로 표시하고, 나머지는 `text-muted`로 둔다.
- **테마 토글**: 네비바 오른쪽 끝, `text-2xl`, hover 시 `text-accent`. `aria-label`을 반드시 유지한다.

## 모션

- 현재 적용된 모션은 `prefers-reduced-motion: no-preference`일 때만 켜지는 `scroll-behavior: smooth`뿐이다.
- 스크롤 등장 모션 규칙: 확정 예정 (#7). 도입하면 `prefers-reduced-motion: reduce`에서는 모션을 끄는 처리를 함께 기록한다.

## 콘텐츠 규칙

- 프로필·경력·프로젝트·활동·수상·자격증 콘텐츠는 `src/data/portfolio.ts`에서만 수정한다. 컴포넌트에 같은 내용을 중복 하드코딩하지 않는다.
- 확인되지 않은 수치·결과는 지어내지 않고 비워 두거나 "작성 예정"으로 표시한다.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## 언어와 콘텐츠

- 응답과 작업 확인 메시지는 한국어로 작성한다.
- 확인되지 않은 수치·결과를 지어내지 않는다. 확인할 수 없으면 비워 두거나 "작성 예정"으로 표시한다.
- 팀의 결과와 본인이 직접 맡은 일을 구분한다. 수치·수상·출시 상태는 확인한 근거(PR, 저장소, 공식 페이지 등)에 맞춰 쓴다.
- 공개 저장소에 자격증 번호, 생년월일 등 개인정보를 올리지 않는다.
- 이미지를 공개하기 전에 개인정보를 가리고, 다른 사람의 얼굴은 사용 동의를 확인하거나 가린다.
- 사이트 문구는 [이슈 #20](https://github.com/JungYeoni/portfolio/issues/20)의 원칙을 따른다.
- 문구를 수정하면 문단이 문장 중간이나 맥락 없이 끝나지 않는지 읽고, 모바일과 데스크톱에서 끝줄도 확인한다. 한두 단어만 남거나 조사·기호가 홀로 떨어져 읽기 어색하면 문장 길이·표현 또는 본문 폭을 조정한다.

## 이슈, 브랜치, 커밋, PR

- 기존 작업 이슈가 있으면 다시 만들지 않는다. 이슈 봇 댓글에 제안된 브랜치명을 그대로 사용하고, 커밋 메시지도 봇 제안을 기준으로 한다.
- 커밋 메시지는 Conventional Commits 형식으로 작성한다. 타입은 `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci` 중 영어로 쓰고, 콜론 뒤 설명은 한국어로 쓴다. `Co-Authored-By`는 넣지 않는다.
- 작업 후 `npm run build`와 `npm run lint`를 확인하고 `main`을 대상으로 PR을 만든다. PR 제목에는 이슈 번호 `(#번호)`를 포함한다. 병합 방식은 squash다.
- 라벨은 `.github/labels.yml`에서 관리한다.

## 프로덕션 반영

- Vercel Production Branch는 `deploy`다.
- 코드 변경이 실제 사이트의 화면·콘텐츠·동작에 영향을 주면 `main` 병합 뒤 `main` → `deploy` PR을 만든다. `deploy`에 직접 push하지 않는다. 서비스에 영향이 없는 문서·CI 변경은 운영에 반영하지 않는다. 운영 설정을 바꾼 경우에도 서비스 영향을 확인한다.
- 운영 반영 PR 제목은 `chore: <반영 내용> 운영 반영`으로 작성한다. 병합 후 `deploy` 커밋의 Vercel 상태가 success인지 확인한다.
- 정해진 절차와 별개로 PR 병합과 운영 반영 실행은 사용자에게 확인받는다.

## 작업 범위와 코드

- 정해진 브랜치명·커밋·PR 형식, 운영 반영 절차, 라벨은 반복해서 묻지 않는다. 이슈 범위 밖 변경, 확인되지 않은 콘텐츠, 의존성 추가는 먼저 사용자에게 확인한다.
- Next.js 코드를 작성하기 전에 `node_modules/next/dist/docs/`의 관련 문서를 확인한다.
- 현재 프로필·프로젝트·활동·수상 등 이력 데이터의 원본은 `src/data/portfolio.ts`다. 컴포넌트에 중복 하드코딩하지 않고, 데이터 저장 구조를 바꾸면 이 규칙도 갱신한다.
- 색상은 `src/app/globals.css`의 디자인 토큰을 사용하고 라이트·다크 테마를 모두 확인한다. 디자인 규칙은 [`docs/design-system.md`](docs/design-system.md)를 참고하고, 토큰이나 규칙을 바꾸면 이 문서도 함께 갱신한다.
- 화면을 바꾸면 소개·포트폴리오 페이지를 모바일·태블릿·데스크톱과 라이트·다크 테마에서 열어 가로 넘침, 문단, 링크, 페이지 이동을 확인한다.
- API 키, OAuth 시크릿, DB URL은 코드·문서·커밋에 넣지 않고 환경 변수로 관리한다.
- 라이브러리를 추가하기 전에 기본 기능과 기존 의존성으로 해결할 수 있는지 확인한다.

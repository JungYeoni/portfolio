"use client";

export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {
      // 저장이 막힌 환경에서는 이번 방문 동안만 유지
    }
  }

  // 아이콘은 CSS로 전환해 서버/클라이언트 렌더 결과를 같게 유지한다
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="라이트/다크 모드 전환"
      className="rounded-md border border-line px-2.5 py-1 text-sm hover:bg-card"
    >
      <span className="dark:hidden">☾</span>
      <span className="hidden dark:inline">☀</span>
    </button>
  );
}

import type { Metadata } from "next";
import { profile } from "@/data/portfolio";
import "pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "이정연 | Portfolio",
  description: profile.tagline,
};

// 첫 페인트 전에 저장된 테마(없으면 시스템 설정)를 적용해 깜빡임을 막는다
// 저장된 선택이 없을 때만 시스템 테마 변경을 따라간다 (저장소가 막히면 따라가지 않음)
const THEME_SCRIPT = `(function(){var d=document.documentElement,m=matchMedia("(prefers-color-scheme: dark)");
function saved(){try{return localStorage.getItem("theme")}catch(e){return"blocked"}}
function chosen(t){return t==="light"||t==="dark"}
var t=saved();if(chosen(t)){d.dataset.theme=t;return}
d.dataset.theme=m.matches?"dark":"light";
m.addEventListener("change",function(e){var c=saved();if(!chosen(c)&&c!=="blocked")d.dataset.theme=e.matches?"dark":"light"})})()`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className="h-full antialiased" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

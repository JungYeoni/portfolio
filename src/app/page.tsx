export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col gap-6 px-6 py-24 sm:px-16">
        <header className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50">
            이정연 (Jungyeon Lee)
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            데이터와 AI로 맥락과 의미를 읽는 걸 좋아합니다.
          </p>
        </header>

        <section id="about" className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-black dark:text-zinc-50">
            About
          </h2>
          <p className="max-w-xl leading-7 text-zinc-700 dark:text-zinc-300">
            세종대학교에서 데이터사이언스와 경제학을 공부하며, 머신러닝·딥러닝을
            중심으로 마케팅 등 다양한 분야에 관심을 두고 배우고 있습니다. 숫자와
            결과를 그대로 보기보다는, 그 안에 담긴 맥락과 의미를 이해하는
            과정에 흥미를 느낍니다.
          </p>
          <p className="max-w-xl leading-7 text-zinc-700 dark:text-zinc-300">
            새로운 사람들을 만나고 함께 고민하며 다양한 프로젝트에 참여하는
            경험을 중요하게 생각합니다. 🤗
          </p>
        </section>
      </main>
    </div>
  );
}

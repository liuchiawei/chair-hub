import ThemeToggle from "@/components/common/ThemeToggle";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen min-w-screen bg-gray-200 dark:bg-gray-900 bg-dot-24-s-1-gray-950 dark:bg-dot-24-s-1-gray-100">
      <h1 className="text-4xl font-bold text-foreground font-roboto">Chair Hub</h1>
      <p className="w-full max-w-lg text-lg text-foreground font-sans">名作椅子の図鑑です。有名デザイナーの椅子の詳細やストーリーを紹介しています。</p>
      <ThemeToggle className="absolute top-4 right-4" />
    </div>
  );
}

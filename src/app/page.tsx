import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full min-h-screen min-w-screen bg-background">
      <h1 className="text-4xl font-bold text-foreground font-roboto">Chair Hub</h1>
      <p className="w-full max-w-lg text-lg text-foreground font-sans">名作椅子の図鑑です。有名デザイナーの椅子の詳細やストーリーを紹介しています。</p>
    </div>
  );
}

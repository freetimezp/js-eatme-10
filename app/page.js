import StyleGuide from "@/components/StyleGuide";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] bg-white mx-auto overflow-hidden">
      {/* <StyleGuide /> */}
      <Header />
      <Hero />
      <Menu />
      <div className="h-[4000px]"></div>
    </main>
  )
}

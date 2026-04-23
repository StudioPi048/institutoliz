import { Header } from "@/components/liz/Header";
import { Hero } from "@/components/liz/Hero";
import { WelcomeBar } from "@/components/liz/WelcomeBar";
import { Journey } from "@/components/liz/Journey";
import { YoutubeBanner } from "@/components/liz/YoutubeBanner";
import { Ecosystem } from "@/components/liz/Ecosystem";
import { Footer } from "@/components/liz/Footer";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  useReveal();
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WelcomeBar />
      <Journey />
      <YoutubeBanner />
      <Ecosystem />
      <Footer />
    </main>
  );
};

export default Index;

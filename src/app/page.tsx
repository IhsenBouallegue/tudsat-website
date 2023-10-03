import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Team from "@/components/team";

export default function Home() {
  return (
    <main className="">
      <Header />
      <Hero />
      <Projects />
      <Team />
      <CallToAction />
      <Footer />
    </main>
  );
}

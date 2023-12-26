import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Sponsors from "@/components/sponsors";
import Team from "@/components/team";
import Testimonials from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="flex flex-col gap-44">
        <Sponsors />
        <Projects />
        <Team />
        <Testimonials />
        <CallToAction />
      </div>
    </main>
  );
}

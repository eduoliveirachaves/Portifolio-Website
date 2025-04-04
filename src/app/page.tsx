import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Email from "./components/Email";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <NavBar />
        <div className="container mt-24 mx-auto px-14 py-4">
          <HeroSection />
          <AboutMe />
          <Projects />
          <Email />
        </div>
        <Footer />
      </main>
    </>
  );
}

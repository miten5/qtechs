import Hero from "@/components/hero";
import Services from "@/components/services";
import About from "@/components/about";
import Portfolio from "@/components/portfolio";
import Team from "@/components/team";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Home() {
    return (
        <div>
            <Hero />
            <Services />
            <About />
            <Portfolio />
            {/* <Team /> */}
            <Contact />
        </div>
    );
}

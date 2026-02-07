import { useEffect, useState } from "react";
import {
  Menu,
  X,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  MapPin,
  Globe,
  GraduationCap,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import About from "./component/About";

export default function App() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const images = [
    "/sny.jpeg",
    "/sny2.jpeg",
    "/sny3.jpeg",
    "/sny4.jpeg",
    "/sny6.jpeg",
  ];
  const socialLinks = [
    {
      icon: Instagram,
      link: "https://www.instagram.com/raisane11",
    },
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/sunny-rai-6a5aa8337",
    },
    {
      icon: Twitter,
      link: "https://x.com/machinery_1",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const prev = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-xl font-bold text-blue-500">itsunnyy.in</span>
          <div className="hidden md:flex gap-8 text-gray-300">
            {["home", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="hover:text-blue-500 transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>

        {open && (
          <div className="md:hidden bg-black border-t border-gray-800 flex flex-col">
            {["home", "about", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="px-6 py-4 text-left hover:bg-gray-900"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Floating Social Icons – Desktop */}
      <div className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 flex-col gap-6 z-40">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-12 h-12 flex items-center justify-center rounded-full
                 border border-blue-500/40 text-blue-500 backdrop-blur
                 hover:bg-blue-500 hover:text-black hover:scale-110 transition"
          >
            <item.icon size={20} />
          </a>
        ))}
      </div>

      {/* Floating Social Dock – Mobile */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 flex gap-8 px-8 py-4 rounded-full bg-black/70 backdrop-blur-xl border border-gray-800 z-40">
        {socialLinks.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 active:scale-90 transition"
          >
            <item.icon className="text-blue-500 w-6 h-6" />
          </a>
        ))}
      </div>

      {/* Home */}
      <section
        id="home"
        className="relative min-h-screen flex items-center px-6 pt-32 overflow-hidden"
      >
        {/* Ambient */}
        <div className="absolute -top-40 -left-40 w-[620px] h-[620px] bg-blue-600/25 rounded-full blur-[200px]" />
        <div className="absolute top-1/3 right-[-160px] w-[520px] h-[520px] bg-blue-800/25 rounded-full blur-[180px]" />

        <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center z-10">
          {/* Image Carousel */}
          <div className="flex justify-center md:justify-end md:order-2">
            <div className="relative group">
              <div className="absolute inset-0 rounded-[2.5rem] bg-blue-600 blur-[120px] opacity-40 animate-pulse" />

              <div className="relative p-[2px] rounded-[2.5rem] bg-gradient-to-br from-blue-400 to-blue-700 overflow-hidden">
                <div className="relative w-80 h-80 md:w-[460px] md:h-[460px] xl:w-[520px] xl:h-[520px]">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt="Sunny Rai"
                      className={`absolute inset-0 w-full h-full object-cover rounded-[2.3rem]
                        transition-opacity duration-700
                        ${i === current ? "opacity-100" : "opacity-0"}`}
                    />
                  ))}
                </div>

                <button
                  onClick={prev}
                  className="absolute left-4 top-1/2 -translate-y-1/2
                             w-11 h-11 rounded-full bg-black/60 backdrop-blur
                             flex items-center justify-center opacity-0
                             group-hover:opacity-100 transition"
                >
                  <ChevronLeft />
                </button>

                <button
                  onClick={next}
                  className="absolute right-4 top-1/2 -translate-y-1/2
                             w-11 h-11 rounded-full bg-black/60 backdrop-blur
                             flex items-center justify-center opacity-0
                             group-hover:opacity-100 transition"
                >
                  <ChevronRight />
                </button>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:text-left md:order-1">
            <span className="inline-block mb-6 px-5 py-2 text-xs tracking-[0.3em] rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30">
              PERSONAL BRAND • PORTFOLIO
            </span>

            <h1 className="text-5xl md:text-7xl xl:text-8xl font-black mb-6">
              Captain in my head,
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                Scrolling tactics.
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-gray-300 mb-6">
              I’m <span className="text-white">Sunny Rai</span>
            </h2>

            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mb-12">
              A driven management student with a competitive edge forged through
              discipline, leadership, and high-pressure cricket performance.
            </p>

            <div className="flex flex-wrap gap-6 mb-12 justify-center md:justify-start">
              <span className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-gray-700">
                <GraduationCap className="text-blue-500" /> Management
              </span>
              <span className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/5 border border-gray-700">
                <Trophy className="text-blue-500" /> Cricketer
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <About />

      {/* Contact */}
      <section id="contact" className="px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-blue-500">Contact</h2>
          <div className="space-y-4 text-gray-300">
            <p className="flex gap-3">
              <Globe /> itsunnyy.in
            </p>
            <p className="flex gap-3">
              <Phone /> 9707298014
            </p>
            <p className="flex gap-3">
              <MapPin /> Assam, India
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center py-6 text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} itsunnyy.in
      </footer>
    </div>
  );
}

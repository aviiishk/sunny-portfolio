import { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  Activity,
  TrendingUp,
  Target,
  Star,
  Shield,
} from "lucide-react";

/* =======================
   CountUp Stat Component
======================= */
function CountUpStat({ value, label, Icon }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const end = value;
    const duration = 1200;
    const increment = Math.max(1, Math.floor(end / 60));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 60);

    return () => clearInterval(timer);
  }, [visible, value]);

  return (
    <div
      ref={ref}
      className="rounded-xl border border-white/10 bg-black/40
                 p-4 sm:p-5 flex flex-col items-center text-center
                 hover:scale-105 transition-transform duration-300"
    >
      <div
        className="mb-3 w-10 h-10 flex items-center justify-center rounded-full
                      bg-blue-500/10 border border-blue-500/30"
      >
        <Icon className="w-5 h-5 text-blue-400" />
      </div>

      <p
        className="text-2xl sm:text-3xl font-bold bg-gradient-to-r
                    from-blue-400 to-cyan-400 bg-clip-text text-transparent"
      >
        {count.toLocaleString()}
      </p>

      <p className="text-xs sm:text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

/* =======================
        ABOUT SECTION
======================= */
export default function About() {
  return (
    <section
      id="about"
      className="relative px-5 sm:px-8 py-24
                 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950
                 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <div
          className="rounded-2xl border border-white/10 bg-white/5
                        backdrop-blur-xl p-6 sm:p-10 shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6">
            <span
              className="bg-gradient-to-r from-blue-400 to-cyan-400
                             bg-clip-text text-transparent"
            >
              About Me
            </span>
          </h2>

          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-4xl">
            I am currently pursuing Business Management and represent my
            district as an all-rounder. I have gained consistent match
            experience over multiple seasons and focus on discipline, fitness,
            and team balance. I aim to contribute reliably at the
            state-association level through steady performance and a
            professional approach.
            <br />
            <br />I maintain a strong work ethic in training and preparation,
            with emphasis on match awareness, adaptability, and execution under
            pressure. I value teamwork and responsibility and continuously learn
            from coaches and senior players to improve my contribution.
          </p>

          <div
            className="mt-10 h-px w-full bg-gradient-to-r
                          from-transparent via-white/20 to-transparent"
          />

          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
              Cricket Career Statistics
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              <CountUpStat label="Matches" value={122} Icon={BarChart3} />
              <CountUpStat label="Innings" value={118} Icon={Activity} />
              <CountUpStat label="Runs" value={4823} Icon={TrendingUp} />
              <CountUpStat label="Highest Score" value={162} Icon={Star} />
              <CountUpStat label="Batting Avg" value={45} Icon={Target} />
              <CountUpStat label="Wickets" value={182} Icon={Shield} />
            </div>

            <p className="mt-6 text-gray-400 text-sm sm:text-base">
              Best Bowling Figures:{" "}
              <span className="text-white font-semibold">6/30</span>
            </p>
          </div>
          <div
            className="mt-10 h-px w-full bg-gradient-to-r
                          from-transparent via-white/20 to-transparent"
          />

<div className="mt-20">
  <h3 className="text-lg sm:text-xl font-semibold text-white mb-6">
    Career Achievements
  </h3>

  <div className="flex flex-col gap-4">
    {[
      {
        year: "2022",
        events: [
          "Rising Stars Premier League – Champions",
          "Street Kings Night Cricket Trophy – Winners",
        ],
      },
      {
        year: "2023",
        events: [
          "City Warriors T20 Cup – Champions",
          "Unity Cup Inter-District – Winners (Best All-Rounder)",
          "Monsoon Knockout Trophy – Champions",
        ],
      },
      {
        year: "2024",
        events: [
          "Eastern Tigers Open Tournament – Winners (Highest Run Scorer)",
          "Powerplay Premier Trophy – Champions (Super Over Final)",
        ],
      },
      {
        year: "2025",
        events: [
          "Champions of Turf League – Winners (MVP)",
          "NextGen Cricket Challenge – Champions (Unbeaten)",
        ],
      },
    ].map((block, i) => (
      <div
        key={i}
        className="
          flex items-center
          gap-3 sm:gap-6
          rounded-xl
          bg-white/5
          border border-white/10
          px-4 py-3
        "
      >
        {/* Year */}
        <div className="w-16 sm:w-24 shrink-0">
          <p className="text-xl sm:text-3xl font-black text-blue-400">
            {block.year}
          </p>
        </div>

        {/* Events */}
        <ul className="flex-1 flex flex-col gap-1 text-gray-300 text-[8px] sm:text-sm">
          {block.events.map((event, idx) => (
            <li
              key={idx}
              className="relative pl-3 leading-snug
                         before:absolute before:left-0 before:top-[0.4rem]
                         before:w-1.5 before:h-1.5
                         before:rounded-full
                         before:bg-blue-400"
            >
              {event}
            </li>
          ))}
        </ul>

        {/* Trophy */}
        <div className="w-10 sm:w-14 flex justify-end shrink-0">
          <img
            src="/trophy.png"
            alt="Trophy"
            className="w-8 h-8 sm:w-10 sm:h-10 opacity-90"
          />
        </div>
      </div>
    ))}
  </div>
</div>


          <div
            className="mt-10 h-px w-full bg-gradient-to-r
                          from-transparent via-white/20 to-transparent"
          />

          <div className="mt-16">
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-6">
              Currently Hooked Into
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { title: "Bayan", img: "/bayan.jpg" },
                { title: "Yours Truly", img: "/yoursTruly.jpg" },
                { title: "Forest Hill Drive", img: "/forestHillDrive.png" },
                { title: "Midnight Memories", img: "/midnightMemories.webp" },
                { title: "Hard Drive Vol I", img: "/harddrive1.jpg" },
                { title: "Hard Drive Vol I", img: "/harddrive2.jpg" },
              ].map((album, i) => (
                <div
                  key={i}
                  className="
          group relative rounded-xl overflow-hidden
          bg-gradient-to-b from-black via-gray-950 to-black
          border border-white/10
          hover:border-blue-500/40
          transition-all duration-300
        "
                >
                  {/* Glow */}
                  <div className="absolute inset-0 bg-blue-500/0 group-hover:bg-blue-500/10 blur-2xl transition" />

                  {/* Album Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={album.img}
                      alt={album.title}
                      className="
              w-full h-full object-cover
              grayscale group-hover:grayscale-0
              scale-100 group-hover:scale-110
              transition-all duration-500
            "
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition" />
                  </div>

                  {/* Title */}
                  <div className="relative p-3 text-center">
                    <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                      On Repeat
                    </p>

                    <p
                      className="text-sm sm:text-base font-semibold text-gray-200
                        group-hover:text-white transition"
                    >
                      {album.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

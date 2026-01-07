import { Link } from "react-router";
import {
  ArrowRightIcon,
  CheckIcon,
  Code2Icon,
  SparklesIcon,
  UsersIcon,
  VideoIcon,
  ZapIcon,
} from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#0B0F14] text-[#E5E7EB]">
      {/* NAVBAR */}
      <nav className="bg-[#0B0F14]/80 backdrop-blur-xl border-b border-[#1E293B] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-gradient-to-br from-[#22C55E] to-[#06B6D4] flex items-center justify-center shadow-lg">
              <SparklesIcon className="size-6 text-[#020617]" />
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold bg-gradient-to-r from-[#22C55E] to-[#06B6D4] bg-clip-text text-transparent tracking-wide">
                InterviewX
              </span>
              <span className="text-xs text-[#94A3B8]">Code Together</span>
            </div>
          </Link>

          {/* AUTH BTN */}
          <SignInButton mode="modal">
            <button className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#06B6D4]
              text-[#020617] font-semibold text-sm transition-all duration-300
              hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] hover:scale-105 flex items-center gap-2">
              <span>Get Started</span>
              <ArrowRightIcon className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </SignInButton>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
              bg-[#22C55E]/10 border border-[#22C55E]/30 text-[#22C55E] text-sm font-medium">
              <ZapIcon className="size-4" />
              Real-time Collaboration
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-[#22C55E] to-[#06B6D4] bg-clip-text text-transparent">
                Code Together,
              </span>
              <br />
              <span className="text-[#F9FAFB]">Learn Together</span>
            </h1>

            <p className="text-lg text-[#94A3B8] max-w-xl leading-relaxed">
              The ultimate platform for collaborative coding interviews and pair programming.
              Connect face-to-face, code in real-time, and ace your technical interviews.
            </p>

            {/* FEATURES */}
            <div className="flex flex-wrap gap-3">
              {["Live Video Chat", "Code Editor", "Multi-Language"].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full border border-[#1E293B] text-[#CBD5E1] text-sm flex items-center gap-2"
                >
                  <CheckIcon className="size-4 text-[#22C55E]" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <SignInButton mode="modal">
                <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#22C55E] to-[#06B6D4]
                  text-[#020617] font-semibold flex items-center gap-2
                  hover:shadow-[0_0_35px_rgba(34,197,94,0.45)] transition">
                  Start Coding Now
                  <ArrowRightIcon className="size-5" />
                </button>
              </SignInButton>

              <button className="px-6 py-3 rounded-xl border border-[#1E293B] text-[#E5E7EB]
                hover:bg-[#111827] transition flex items-center gap-2">
                <VideoIcon className="size-5" />
                Watch Demo
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div>
                <div className="text-3xl font-bold text-[#22C55E]">10K+</div>
                <div className="text-sm text-[#94A3B8]">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#06B6D4]">50K+</div>
                <div className="text-sm text-[#94A3B8]">Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#A78BFA]">99.9%</div>
                <div className="text-sm text-[#94A3B8]">Uptime</div>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="bg-[#0F172A] border border-[#1E293B] rounded-3xl p-6 shadow-2xl">
            <img
              src="/hero.png"
              alt="CodeCollab Platform"
              className="w-full h-auto rounded-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-[#22C55E] to-[#06B6D4] bg-clip-text text-transparent">
              Succeed
            </span>
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Powerful features designed to make your coding interviews seamless and productive
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: VideoIcon,
              title: "HD Video Call",
              desc: "Crystal clear video and audio for seamless communication during interviews",
            },
            {
              icon: Code2Icon,
              title: "Live Code Editor",
              desc: "Collaborate in real-time with syntax highlighting and multi-language support",
            },
            {
              icon: UsersIcon,
              title: "Easy Collaboration",
              desc: "Share your screen, discuss solutions, and learn from each other in real-time",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#0F172A] border border-[#1E293B] rounded-2xl p-8 text-center
                hover:border-[#22C55E]/50 hover:shadow-xl transition"
            >
              <div className="size-16 mx-auto mb-6 bg-[#22C55E]/10 rounded-2xl flex items-center justify-center">
                <Icon className="size-8 text-[#22C55E]" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="text-[#94A3B8]">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HomePage;

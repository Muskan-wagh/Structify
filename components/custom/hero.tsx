import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="section flex flex-col items-center text-center animate-fade-in pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="container flex flex-col items-center">
        <div className="badge-emerald mb-6 md:mb-8 uppercase tracking-wider text-xs">
          AI-Powered Serenity
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 max-w-4xl leading-[1.1] tracking-tight px-4">
          <span className="text-primary">Where AI Meets Clarity.</span>
        </h1>

        <p className="text-base md:text-lg text-gray-500 max-w-2xl mb-8 md:mb-12 leading-relaxed px-4">
          Experience a digital sanctuary designed to amplify your creativity and
          simplify your complexity.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 px-4">
          <Link href="/get-started" className="btn-primary px-8 py-3.5 md:py-4 text-base md:text-lg w-full sm:w-auto">
            Get Started for Free
          </Link>
          <button className="inline-flex items-center gap-2 text-gray-700 font-semibold hover:text-primary transition-colors group py-3.5">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 group-hover:bg-emerald-50 transition-colors">
              <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}

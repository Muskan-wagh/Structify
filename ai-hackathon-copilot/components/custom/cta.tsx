export function Cta() {
  return (
    <section className="section">
      <div className="container">
        <div className="bg-emerald-50 rounded-[2.5rem] p-12 md:p-20 text-center animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Ready to find your focus?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            Join 10,000+ creators and professionals who have found their digital sanctuary.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button className="btn-primary px-8 py-4">
              Start Your Free Trial
            </button>
            <button className="btn-secondary px-8 py-4 bg-white">
              Book a Demo
            </button>
          </div>

          <p className="text-sm text-gray-400">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}
export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#F5F1E8] to-[#E8E0D5]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#2C2C2C] mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
              Let's create the wedding of your dreams together with expert luxury event planners who turn every detail into perfection.
            </h2>
            <p className="text-[#4A4A4A] text-lg">
              Schedule a consultation to discuss your vision and explore our stunning decor options.
            </p>
          </div>
          <div className="flex-shrink-0">
            <button className="px-10 py-4 bg-[#6B2C2C] text-white rounded-full hover:bg-[#5A2424] transition-colors shadow-lg hover:shadow-xl text-lg">
              Book your consultation today!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import TestimonialItem from "./TestimonialItem";

function TestimonialsSection() {
  return (
    <section 
      className="
        bg-teal-850 px-6 pt-35 pb-38 flex flex-col gap-12 text-center
      "
      style={{
        backgroundImage: "url('/assets/bg-pattern-home-4-about-3.svg'), url('/assets/bg-pattern-home-5.svg')",
        backgroundPosition: "left top, right bottom",
        backgroundRepeat: "no-repeat, no-repeat",
      }}
    >
      <h2 className="text-[32px] leading-[100%] font-bold">
        Delivering real results for top companies. Some of our <span className="text-cyan-100">success stories.</span>
      </h2>

      <div className="flex flex-col gap-12">
        <TestimonialItem />
        <TestimonialItem />
        <TestimonialItem />
      </div>
    </section>
  )
}

export default TestimonialsSection;
function CTASection() {
  return (
    <section 
      className="
        py-21.25 px-6 bg-rose-500 bg-[url('/assets/bg-pattern-home-6-about-5.svg')] bg-no-repeat 
        bg-position-[left_bottom_-22px] text-teal-900 flex flex-col items-center gap-6 text-center
      "
    >
      <h2 className="text-[32px] leading-[100%] font-bold">Ready to get started?</h2>

      <button className="px-8 py-2 border-2 border-teal-900 rounded-full lowercase text-[18px] leading-[155%] font-semibold">Contact us</button>
    </section>
  )
}

export default CTASection;
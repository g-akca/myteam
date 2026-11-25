import TestimonialItem from "./TestimonialItem";
import kadyAvatar from "/assets/avatar-kady.jpg";
import aiyshaAvatar from "/assets/avatar-aiysha.jpg";
import arthurAvatar from "/assets/avatar-arthur.jpg";

type TestimonialItem = {
  name: string;
  title: string;
  message: string;
  photo: string;
};

const testimonials: TestimonialItem[] = [
  {
    name: "Kady Baker",
    title: "Product Manager at Bookmark",
    message: "The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.",
    photo: kadyAvatar,
  },
  {
    name: "Aiysha Reese",
    title: "Founder of Manage",
    message: "We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!",
    photo: aiyshaAvatar,
  },
  {
    name: "Arthur Clarke",
    title: "Co-founder of MyPhysio",
    message: "Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.",
    photo: arthurAvatar,
  },
];

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
        {testimonials.map(tes => (
          <TestimonialItem
            key={tes.name}
            {...tes}
          />
        ))}
      </div>
    </section>
  )
}

export default TestimonialsSection;
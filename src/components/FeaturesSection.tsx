import FeatureItem from "./FeatureItem";
import personIcon from "/assets/icon-person.svg";
import cogIcon from "/assets/icon-cog.svg";
import chartIcon from "/assets/icon-chart.svg";

type FeatureItem = {
  title: string;
  description: string;
  icon: string;
};

const features: FeatureItem[] = [
  {
    title: "Experienced Individuals",
    description: "Our network is made up of highly experienced professionals who are passionate about what they do.",
    icon: personIcon,
  },
  {
    title: "Easy to Implement",
    description: "Our processes have been refined over years of implementation meaning our teams always deliver.",
    icon: cogIcon,
  },
  {
    title: "Enhanced Productivity",
    description: "Our customized platform with in-built analytics helps you manage your distributed teams.",
    icon: chartIcon,
  },
];

function FeaturesSection() {
  return (
    <section 
      className="
        bg-teal-900 px-6 pt-14.75 pb-10.5 flex flex-col gap-14 
        bg-[url('/assets/bg-pattern-home-3.svg')] bg-no-repeat bg-position-[right_-100px_top]
      "
    >
      <div className="flex flex-col gap-8 max-w-60">
        <div 
          aria-hidden="true" 
          className="bg-rose-500 self-stretch h-1 max-w-12.5" 
        />

        <h2 className="text-[32px] leading-[100%] font-bold">Build & manage distributed teams like no one else.</h2>
      </div>

      <div className="flex flex-col gap-12">
        {features.map(feat => (
          <FeatureItem
            key={feat.title}
            {...feat}
          />
        ))}
      </div>
    </section>
  )
}

export default FeaturesSection;
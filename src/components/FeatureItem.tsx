type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
};

function FeatureItem({ title, description, icon }: FeatureItemProps) {
  return (
    <div className="flex flex-col gap-4 items-center">
      <img src={icon} alt="" />

      <div className="flex flex-col gap-2 text-center">
        <h3 className="text-rose-500 text-[18px] leading-[155%] font-bold">{title}</h3>

        <p className="font-semibold opacity-80">{description}</p>
      </div>
    </div>
  )
}

export default FeatureItem;
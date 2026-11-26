type TestimonialItemProps = {
  name: string;
  title: string;
  message: string;
  photo: string;
};

function TestimonialItem({ name, title, message, photo }: TestimonialItemProps) {
  return (
    <div className="pt-9 bg-[url('/assets/icon-quotes.svg')] bg-no-repeat bg-top flex flex-col gap-2 text-center">
      <p className="font-semibold">“{message}”</p>

      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-0.5">
          <p className="text-cyan-100 text-[18px] leading-[155%] font-bold">{name}</p>

          <p className="text-[13px] leading-[140%] italic font-medium">{title}</p>
        </div>

        <img src={photo} alt={name} className="w-15.5 aspect-square rounded-full border-2 border-teal-400" />
      </div>
    </div>
  )
}

export default TestimonialItem;
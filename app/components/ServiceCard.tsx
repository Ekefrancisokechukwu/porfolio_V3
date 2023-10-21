"use client";

type Props = {
  service: TService;
};

export const ServiceCard = ({ service }: Props) => {
  return (
    <article
      className={`ms:w-[23rem] w-full flex-shrink-0 border border-white/10 grid service-card gap-5
     bg-[#050505b4] px-5 relative cursor-default rounded-md py-10 ${
       service.head === "Mobile development" ? "opacity-25 cursor-wait" : ""
     }`}
      title={`${service.head === "Mobile development" ? "Coming Soon" : ""}`}
    >
      <span className="border-r pr-2 borderStyle">{service.icon}</span>
      <div>
        <h2 className="text-2xl">{service.head}</h2>
        <p className="mt-10 leading-loose">{service.text}</p>
      </div>
    </article>
  );
};

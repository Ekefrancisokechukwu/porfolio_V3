import { services } from "@/utils/data";
import { ServiceCard } from "./ServiceCard";
import { useSectionInView } from "@/lib/hooks";
import AnimatedText from "./AnimatedText";

const Services = () => {
  const { ref } = useSectionInView("my services", 0.5);

  return (
    <section
      ref={ref}
      id="my services"
      className="py-12 mt-5 max-w-[1080px] px-4 scroll-mt-24 mx-auto"
    >
      <AnimatedText
        text="My Services: where code meets creativity"
        className="primary-heading md:w-[771px]  leading-normal mx-auto"
      />

      <div className="mt-14 flex  items-end gap-11 snap-mandatory  snap-x snap-start sm:px-4 px-3 scroll-smooth  overflow-x-scroll py-9">
        {services.map((service, i) => {
          return <ServiceCard key={i} service={service} />;
        })}
      </div>
    </section>
  );
};
export default Services;

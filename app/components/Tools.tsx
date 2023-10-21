import Image from "next/image";
import { tools } from "@/utils/data";

const Tools = () => {
  return (
    <section className="py-12 max-w-[1080px] mx-auto xl:px-0 px-4 ">
      <h1 className="primary-heading">My Tech</h1>
      <p className="text-center text-xl">
        Here are some technologies that i have worked with.
      </p>

      <div className="mt-12 flex items-center justify-center gap-16 flex-wrap">
        {tools.map((tool, i) => {
          return (
            <article key={i}>
              <Image
                src={tool.icon}
                alt="html logo"
                className="w-16 h-16 grayscale cursor-pointer hover:grayscale-0 transition duration-500"
                quality={1000}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Tools;

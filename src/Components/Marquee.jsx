import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = ({ bg = "", texts = "• Some of my best works •" }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const marquee = marqueeRef.current;
      const totalWidth = marquee.scrollWidth / 2;

      gsap.to(marquee, {
        x: -totalWidth,
        duration: 40,
        ease: "linear",
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`overflow-hidden select-none ${bg}`}>
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap text-xl lg:text-2xl xl:text-[26px] 2xl:text-[28px] font-font3 py-6 md:py-8 lg:py-9 xl:py-10 text-color-white"
      >
        {/* Duplicate content for seamless scroll */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            {[...Array(8)].map((_, j) => (
              <span key={`${i}-${j}`} className="inline-block">
                {texts}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;

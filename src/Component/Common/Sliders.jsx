import React from "react";

// SLIDER IMAGES
import s1 from "../../assets/Sliders/1.png";
import s2 from "../../assets/Sliders/2.png";
import s3 from "../../assets/Sliders/3.png";
import s4 from "../../assets/Sliders/4.png";
import s5 from "../../assets/Sliders/5.png";
import s6 from "../../assets/Sliders/6.png";
import s7 from "../../assets/Sliders/7.png";

const sliderImages = [s1, s2, s3, s4, s5, s6, s7];

const Sliders = () => {
  return (
    <div className="absolute bottom-10 w-full overflow-hidden z-10">
      <div className="flex animate-marquee">

        {/* WRAPPER 1 */}
        <div className="flex shrink-0">
          {sliderImages.map((img, i) => (
            <img
              key={`first-${i}`}
              src={img}
              className="h-10 mx-5 opacity-70 hover:opacity-100 transition"
              alt="logo"
            />
          ))}
        </div>

        {/* WRAPPER 2 (duplicate) */}
        <div className="flex shrink-0">
          {sliderImages.map((img, i) => (
            <img
              key={`second-${i}`}
              src={img}
              className="h-10 mx-5 opacity-70 hover:opacity-100 transition"
              alt="logo"
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Sliders;
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

// duplicate for smooth loop
const loopImages = [...sliderImages, ...sliderImages , ...sliderImages , ...sliderImages , ...sliderImages];

const Sliders = () => {
  return (
    <div className="relative w-full overflow-hidden z-10 py-6 bg-[#060B14]">

      <div className="slider-marquee">

        {loopImages.map((img, i) => (
          <img
            key={i}
            src={img}
            className="h-8 sm:h-10 mx-4 sm:mx-6 opacity-70 hover:opacity-100 transition duration-300"
            alt="logo"
          />
        ))}

      </div>

    </div>
  );
};

export default Sliders;

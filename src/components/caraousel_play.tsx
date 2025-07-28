// components/HealthStatsCarousel.tsx
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// import fattyLiver from "./fatty-liver.png"; 
// import heart from "./heart.png";
// import hypertension from "./hypertension.png";

const stats = [
  {
    image: "./diiabetes.png",
    title: "101M+",
    subtitle: "Diabetes",
    class: "w-auto h-12 mx-auto"
  },
  {
    image: "./liver.png",
    title: "1 in 4",
    subtitle: "Fatty Liver",
    class: "w-10 h-10 mx-auto"
  },
  {
    image: "/heart.png",
    title: "1 in 4",
    subtitle: "Heart Disease",
    class: "w-10 h-10 mx-auto"
  },
  {
    image: "/hypertension.png",
    title: "30%",
    subtitle: "Hypertension",
    class: "w-10 h-10 mx-auto"
  },
  {
    image: "/stomach.png",
    title: "1 in 10",
    subtitle: "IBS",
    class: "w-10 h-10 mx-auto"
  }
];

export default function HealthStatsCarousel() {
  return (
    <div className="bg-blue-50 mt-8 p-4 rounded-lg">
      <h3 className="text-center font-semibold text-blue-900 mb-4">
        India’s Health Reality
      </h3>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        className="w-full"
      >
        {stats.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="text-center text-sm">
              <img src={item.image} alt={item.subtitle} className={item.class}/>
              <p className="font-bold">{item.title}</p>
              <p className="text-xs text-gray-600">{item.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

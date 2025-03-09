import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { data } from "../data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "../i18n";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);
  const { t } = useTranslation();
  const dark = useSelector((state) => state.darkmode.darkmode);
  const length = data.eng.certificate.imageData.length;

  // ฟังก์ชันเปลี่ยนภาพ
  const prevSlide = () => setCurrent(current === 0 ? length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === length - 1 ? 0 : current + 1);

  // ออโต้เลื่อนภาพทุก 5 วินาที
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [current]);

  // ตรวจจับการสัมผัส
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const threshold = 50; // ระยะที่ต้องลากถึงจะเปลี่ยนภาพ
    if (touchStartX - touchEndX > threshold) nextSlide(); // ปัดซ้าย → ไปข้างหน้า
    if (touchEndX - touchStartX > threshold) prevSlide(); // ปัดขวา → ย้อนกลับ
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <section
      className="relative flex justify-center items-center"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* ปุ่มเปลี่ยนภาพสำหรับ Desktop */}
      <AiOutlineArrowLeft
        className={`absolute top-1/2 lg:left-[-50px] lg:text-5xl text-lg z-10 cursor-pointer ${
          dark ? "text-theme_light_1" : "text-theme_dark_2"
        } hidden lg:block`}
        onClick={prevSlide}
      />
      <AiOutlineArrowRight
        className={`absolute top-1/2 lg:right-[-50px] lg:text-5xl text-lg z-10 cursor-pointer ${
          dark ? "text-theme_light_1" : "text-theme_dark_2"
        } hidden lg:block`}
        onClick={nextSlide}
      />
      {/* แสดงรูปภาพ */}
      {data.eng.certificate.imageData?.map((el, idx) => (
        <div
          key={idx}
          className={
            idx === current
              ? "opacity-1 transition-opacity duration-1000 ease-in-out"
              : "opacity-0 transition-opacity duration-1000 ease-in-out"
          }
        >
          {idx === current && (
            <div className="flex flex-col justify-center items-center">
              <img
                src={el.image}
                alt={el.title}
                className="lg:w-[800px] lg:h-[600px] w-[370px] h-[170px] sm:w-[600px] sm:h-[400px] rounded-[10px]"
              />
              <div className="my-2 flex justify-center">
                <p
                  className={`${
                    dark ? "text-theme_light_1" : "text-theme_dark_2"
                  } lg:text-xl text-md sm:text-lg`}
                >
                  {el.title[i18n.language]}
                </p>
              </div>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default ImageSlider;
import { useTranslation } from "react-i18next";
import { data } from "../data";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ImageSlider from "../components/ImageSlider";

const Portfoliopage = () => {
  const { t } = useTranslation();
  const dark = useSelector((state) => state.darkmode.darkmode);
  return (
    <div
    className={`${
      dark
        ? "bg-gradient-to-b from-theme_dark_1 to-theme_dark_2"
        : "bg-gradient-to-b from-theme_light_1 to-theme_light_2"
    } h-[100vh] flex flex-col items-center `}
  >
      <h1
          className={`${
            dark ? "text-theme_light_1" : "text-theme_dark_2"
          }  text-4xl my-5`}
        >
          {t("data.certificate.header")}
        </h1>
        <ImageSlider />
  </div>
  )
}

export default Portfoliopage
/* eslint-disable no-unused-vars */
import { useTranslation } from "react-i18next";
import { data } from "../data";
import { useSelector } from "react-redux";

import { useState, useEffect } from "react";
import SkillCard from "../components/SkillCard";

const Skillpage = () => {
  const { t, i18n } = useTranslation();
  const dark = useSelector((state) => state.darkmode.darkmode);

  const [animation, setAnimation] = useState(false);
  const [animationStep2, setAnimationStep2] = useState(false);

  useEffect(() => {
    setAnimation(true);

    setTimeout(() => {
      setAnimationStep2(true);
    }, 1000);
  }, []);

  return (
    <div
      className={`${
        dark
          ? "bg-gradient-to-b from-theme_dark_1 to-theme_dark_2"
          : "bg-gradient-to-b from-theme_light_1 to-theme_light_2"
      }  flex flex-col items-center h-[100vh]  `}
    >
      <div className="container flex flex-col items-center pb-5">
        <h1
          className={`${
            dark ? "text-theme_light_1" : "text-theme_dark_2"
          } ${
            animation ? "" : "opacity-0 -translate-y-10"
          }  text-4xl my-5  duration-[2000ms]`}
        >
          {t("data.skill.header")}
        </h1>
        <div className="flex sm:gap-20 gap-5 flex-wrap lg:justify-start justify-center items-center mt-5 bg-white p-10 rounded-xl">
          {data.eng.skill.ability.map((el, idx) => (
            <SkillCard
              key={idx}
              el={el}
              idx={idx}
              dark={dark}
              animation={animation}
              i18n={i18n}
              animationStep2={animationStep2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skillpage;

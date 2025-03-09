// import background from '../assets/bg-white.jpg'

import { useTranslation } from "react-i18next";
import { data } from "../data";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const Homepage = () => {
  const { t } = useTranslation();
  const dark = useSelector((state) => state.darkmode.darkmode);

  const [animation, setAnimation] = useState(false);
  

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div
      className={`${
        dark
          ? "bg-gradient-to-b from-theme_dark_1 to-theme_dark_2"
          : "bg-gradient-to-b from-theme_light_1 to-theme_light_2"
      } h-[100vh] flex flex-col items-center justify-center`}
    >
      <div className="container">
        <div className="flex justify-around items-center flex-wrap">
          <img
            src={data.eng.home.image}
            alt="teen"
            className={`sm:w-96 w-64  ${
              animation ? "scale-100" : "rotate-180 scale-0"
            } duration-[2000ms]`}
          />
          <div
            className={`${
              animation ? "opacity-100 " : "opacity-0 translate-x-96"
            } duration-[2000ms] `}
          >
            <div className="lg:block flex items-center gap-2 justify-center lg:mt-0 mt-4">
              <h2
                className={`font-bold ${
                  dark ? "text-white" : "text-theme_dark_2"
                } text-xl sm:text-5xl lg:text-3xl`}
              >
                {t("data.home.hi_des")}
              </h2>
              <h1
                className={`font-bold ${
                  dark ? "text-white" : "text-theme_dark_2"
                } lg:text-7xl text-xl sm:text-5xl`}
              >
                {t("data.home.name")}
              </h1>
            </div>
            <p
              className={`my-5 ${
                dark ? "text-white" : "text-theme_dark_2"
              } lg:mx-0 mx-auto max-w-[850px]`}
            >
              {t("data.home.des")}
            </p>
            <div className="flex items-center gap-2 lg:justify-start justify-center">
              {data.eng.home.social.map((el, idx) => {
                // eslint-disable-next-line no-unused-vars
                const IconComponents = eval(el.icons);
                return (
                  <a
                    href={`${el.href}`}
                    className="hover:-translate-y-2 duration-200 delay-75"
                    target="_blank"
                    rel="noreferrer"
                    key={idx}
                  >
                    <IconComponents className={`text-3xl ${el.color}`} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;

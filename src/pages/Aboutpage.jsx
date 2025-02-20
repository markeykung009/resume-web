import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { data } from "../data";
import { useState, useEffect } from "react";

const Aboutpage = () => {
  const { t } = useTranslation();
  const dark = useSelector((state) => state.darkmode.darkmode);
  const aboutData = data.eng.about;

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
      } h-[90vh] flex flex-col items-center justify-center`}
    >
      <div className="container flex gap-2 justify-center items-center">
        <div
          className={`flex flex-col gap-4 w-2/4 ${
            dark ? "text-theme_light_1" : "text-theme_dark_2"
          } ${
            animation ? "opacity-100" : "opacity-0 -translate-x-96"
          } duration-[2000ms]`}
        >
          <h1 className={`font-bold text-5xl `}>{t("data.about.section")}</h1>
          <p className="w-3/4  text-3xl">{t("data.about.text")}</p>
        </div>
        <div className="flex flex-col items-center gap-4">
          <img
            src={data.eng.about.image}
            className={`rounded-full w-96 duration-[2000ms] ${
              animation ? "" : "opacity-0  flip "
            } `}
            alt=""
          />
          <a
            href="https://drive.google.com/file/d/1axdXJXtf4acKJ-Q_iQSBQNRoTlPTwJ_R/view?usp=sharing.pdf"
            target="_blank"
            rel="noreferrer"
            className={`duration-[2000ms] ${
              animation ? "" : "opacity-0 translate-y-96"
            } `}
            download
          >
            <button
              className={`${aboutData.button.bg_color} ${aboutData.button.text_color} px-8 py-2 rounded-full text-xl hover:${aboutData.button.bg_color_hover} hover:${aboutData.button.text_color_hover} hover:scale-125 hover:duration-300 hover:delay-75`}
            >
              {t("data.about.button_text")}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;

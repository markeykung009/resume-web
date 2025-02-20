/* eslint-disable react/prop-types */

import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const SkillCard = ({ dark, animation, el, i18n, idx, animationStep2 }) => {
  // eslint-disable-next-line no-unused-vars

  const [accordianState, setAccordianState] = useState(false);

  const switchAccordian = () => {
    setAccordianState(!accordianState);
  };

  return (
    <div
      className={`sm:w-[32rem] w-full flex flex-col items-center border-2 p-5 ${
        animation
          ? ""
          : idx === 0
          ? "-translate-x-96"
          : idx === 1
          ? "translate-x-96"
          : idx === 2
          ? "-translate-x-96"
          : idx === 3
          ? "translate-x-96"
          : ""
      }  ${
        dark
          ? "bg-theme_light_2 text-theme_dark_2"
          : "bg-theme_dark_1 text-theme_light_2"
      } rounded-xl duration-[1000ms]`}
    >
      <div>
        <img
          src={el.img}
          alt={el.title[i18n.language]}
          className={`w-40 duration-[1000ms] ${animation ? "" : "scale-0"}`}
        />
      </div>
      <p
        className={` text-3xl flex items-center gap-1 duration-[1000ms] ${
          animationStep2 ? "" : "-translate-y-96 opacity-0"
        }`}
      >
        {el.title[i18n.language]}
        <button onClick={switchAccordian}>
          <FaAngleDown
            className={`${accordianState ? "rotate-180" : ""} duration-300`}
          />
        </button>
      </p>
      <div
        className={`${
          accordianState ? "h-0" : "h-28"
        } overflow-hidden duration-[1000ms] ${
          animationStep2 ? "" : "opacity-0 translate-y-96 "
        }`}
      >
        <p className="mt-2 text-lg ">{el.desciption[i18n.language]}</p>
      </div>
    </div>
  );
};

export default SkillCard;

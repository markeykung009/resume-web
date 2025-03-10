/* eslint-disable react/prop-types */

import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";

const SkillCard = ({ dark, animation, el, i18n, idx, animationStep2 }) => {
  // eslint-disable-next-line no-unused-vars



  return (
    <div
    >
      <img src={el.img} alt="" className={`sm:w-20 w-14 ${
              animationStep2 ? "" : "opacity-0 scale-0 "
            } duration-1000`} />
    </div>
  );
};

export default SkillCard;

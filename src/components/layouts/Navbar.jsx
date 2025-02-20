import { Link, useLocation } from "react-router-dom";
import SwitchTheme from "./options/SwitchTheme";
import SwitchLanguage from "./options/SwitchLanguage";
import { useSelector } from "react-redux";
import { data } from "../../data";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();
  const dark = useSelector((state) => state.darkmode.darkmode);
  const { t, i18n } = useTranslation();
  const [openNavber, setOpenNavbar] = useState(false);
  useEffect(() => {
    const language = localStorage.getItem("language");
    if (language) {
      i18n.changeLanguage(language);
    }
  }, [i18n]);

  const switchNavbar = () => {
    setOpenNavbar(!openNavber);
  };

  return (
    <div
      className={`${
        dark
          ? "bg-gradient-to-r from-theme_light_1 to-theme_light_2"
          : "bg-gradient-to-r from-theme_dark_1 to-theme_dark_2"
      } py-6 flex flex-col sm:items-center  `}
    >
      <div className="sm:flex sm:flex-col lg:flex-row justify-between items-center container hidden">
        <h1
          className={`${
            dark ? "text-theme_dark_2" : "text-white"
          } text-3xl font-bold sm:mx-0 mx-4`}
        >
          {t("data.header_text")}
        </h1>
        <div>
          <ul className="flex items-center gap-10  w-full ">
            {data.eng.header.menu.map((el, idx) => (
              <li key={idx}>
                <Link
                  to={el.path}
                  className={`${
                    dark ? "text-theme_dark_2" : "text-[#EC8E18]"
                  } text-lg ${
                    dark ? "hover:text-black" : "hover:text-[#ffb578]"
                  } hover:border-b-2  ${dark ? "border-black" : ""} ${
                    location.pathname === el.path ? "border-b-2" : ""
                  } w-full `}
                >
                  {el.text[i18n.language]}
                </Link>
              </li>
            ))}

            <SwitchTheme />
            <SwitchLanguage i18n={i18n} dark={dark} />
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center container sm:hidden">
        <h1
          className={`${
            dark ? "text-theme_dark_2" : "text-white"
          } text-3xl font-bold sm:mx-0 mx-4`}
        >
          {t("data.header_text")}
        </h1>
        <div className={`${dark ? "text-theme_dark_2" : "text-white"}`}>
          {openNavber ? (
            <FaXmark className="text-3xl mx-4" onClick={switchNavbar} />
          ) : (
            <FaBars className="text-3xl mx-4" onClick={switchNavbar} />
          )}
        </div>
      </div>
      <div
        className={`z-50  relative${
          openNavber ? "h-[800px] py-4" : "h-0"
        } duration-500 overflow-hidden`}
      >
        <ul
          className={`flex items-center gap-5  w-full absolute z-50 flex-col ${
            dark
              ? "bg-gradient-to-r from-theme_light_1 to-theme_light_2"
              : "bg-gradient-to-r from-theme_dark_1 to-theme_dark_2"
          }  ${
            openNavber ? "h-[800px]" : "h-0"
          } transition-all duration-500 overflow-hidden`}
        >
          {data.eng.header.menu.map((el, idx) => {
            const IconComponents = eval(el.icon);
            return (
              <li key={idx}>
                <Link
                  to={el.path}
                  className={`${
                    dark ? "text-theme_dark_2" : "text-[#EC8E18]"
                  } text-2xl ${
                    dark ? "hover:text-black" : "hover:text-[#ffb578]"
                  } hover:border-b-2  ${dark ? "border-black" : ""} ${
                    location.pathname === el.path ? "border-b-2" : ""
                  } w-full `}
                >
                  <div className="flex gap-2 items-center">
                    <IconComponents className={`text-2xl `} />
                    {el.text[i18n.language]}
                  </div>
                </Link>
              </li>
            );
          })}
          <div className="flex gap-10 items-center flex-row-reverse justify-center w-full text-xl">
            <SwitchTheme />
            <SwitchLanguage i18n={i18n} dark={dark} />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

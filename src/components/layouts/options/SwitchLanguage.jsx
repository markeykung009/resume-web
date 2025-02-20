/* eslint-disable react/prop-types */

const SwitchLanguage = ({ i18n, dark }) => {
  const toggleLanguageThai = () => {
    localStorage.setItem("language", "th");
    const language = localStorage.getItem("language");

    i18n.changeLanguage(language);
  };

  const toggleLanguageEnglish = () => {
    localStorage.setItem("language", "en");
    const language = localStorage.getItem("language");

    i18n.changeLanguage(language);
  };

  return (
    <div className="flex gap-2">
      <p
        className={`hover:cursor-pointer ${
          dark
            ? i18n.language === "en"
              ? "text-black"
              : "text-gray-400"
            : i18n.language === "en"
            ? "text-[#EC8E18]"
            : ""
        }  `}
        onClick={toggleLanguageEnglish}
      >
        en
      </p>
      |
      <p
        className={`hover:cursor-pointer ${
          dark
            ? i18n.language === "th"
              ? "text-black"
              : "text-gray-400"
            : i18n.language === "th"
            ? "text-[#EC8E18]"
            : ""
        }`}
        onClick={toggleLanguageThai}
      >
        th
      </p>
    </div>
  );
};

export default SwitchLanguage;

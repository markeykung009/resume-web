/* eslint-disable no-unused-vars */
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";
import { data } from "../data";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import AlertModal from "../components/layouts/AlertModal";


const Contactpage = () => {
  const { t } = useTranslation();
  const dark = useSelector((state) => state.darkmode.darkmode);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidSubject, setIsValidSubject] = useState(false);
  const [isValidMessage, setIsValidMessage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [checkStatus, setCheckStatus] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const validateInput = (type) => {
    if (type === "all") {
      if (name.trim() === "") {
        setIsValidName(true);
      } else {
        setIsValidName(false);
      }

      if (email.trim() === "") {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }

      if (subject.trim() === "") {
        setIsValidSubject(true);
      } else {
        setIsValidSubject(false);
      }

      if (message.trim() === "") {
        setIsValidMessage(true);
      } else {
        setIsValidMessage(false);
      }
    } else if (type === "name") {
      if (name.trim() === "") {
        setIsValidName(true);
      } else {
        setIsValidName(false);
      }
    } else if (type === "email") {
      if (email.trim() === "") {
        setIsValidEmail(true);
      } else {
        setIsValidEmail(false);
      }
    } else if (type === "subject") {
      if (subject.trim() === "") {
        setIsValidSubject(true);
      } else {
        setIsValidSubject(false);
      }
    } else if (type === "message") {
      if (message.trim() === "") {
        setIsValidMessage(true);
      } else {
        setIsValidMessage(false);
      }
    } else {
      return;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    validateInput("all");

    if (isValidName || isValidEmail || isValidMessage || isValidSubject) {
      return;
    }
    if (name !== "" && email !== "" && subject !== "" && message !== "") {
      emailjs
        .sendForm(
          data.eng.contact.service_id,
          data.eng.contact.template_id,
          e.target,
          data.eng.contact.user_id
        )
        .then(
          (result) => {
            console.log(result.text);
            setCheckStatus(true);
            openModal();
          },
          (error) => {
            console.error(error.text);
            setCheckStatus(false);
            openModal();
          }
        );

      console.log(name, email, subject, message);

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }

    e.target.reset();
  };

  useEffect(() => {
    setAnimation(true);
  }, []);

  return (
    <div
      className={`${
        dark
          ? "bg-gradient-to-b from-theme_dark_1 to-theme_dark_2"
          : "bg-gradient-to-b from-theme_light_1 to-theme_light_2"
      } h-[90vh] flex flex-col items-center sm:justify-center ${isFocused ? "h-auto justify-start pt-4" : "h-[90vh] sm:justify-center"}`}
    >
      <div className="container">
        <div className="flex flex-col justify-center items-center ">
          <h1
            className={`${
              dark ? "text-theme_light_1" : "text-theme_dark_2"
            }  sm:text-6xl text-3xl duration-1000 ${
              animation ? "" : "opacity-0 -translate-y-10"
            } ${isFocused ? "hidden" : ""}`}
          >
            {t("data.contact.header_text")}
          </h1>
          <p
            className={` ${
              dark ? "text-white" : "text-theme_dark_2"
            } sm:w-[500px] w-[250px] sm:text-start text-center  my-5 duration-1000 ${
              animation ? "" : "opacity-0 scale-0"
            } line-clamp-4 ${isFocused ? "hidden" : ""}`}
          >
            {t("data.contact.desciption")}
          </p>
          <form onSubmit={sendEmail}>
            <div
              className={`bg-white flex flex-col justify-center items-center p-5 rounded-xl shadow-xl duration-1000 ${
                animation ? "" : "flip opacity-0"
              } ${dark ? "shadow-gray-800" : "shadow-gray-400"} `}
            >
              <div className="flex items-center gap-2 sm:flex-row flex-col">
                <div className="flex flex-col">
                  <input
                    className={`${
                      isValidName ? "border-danger_6" : "my-5"
                    } p-2 border-2 rounded-lg`}
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    onInput={() => validateInput("name")}
                    name={data.eng.contact.input.name_input.name}
                    placeholder={t("data.contact.input.name_input.placeholder")}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    // required
                  />
                  {isValidName ? (
                    <span className="text-danger_6">
                      {t("data.contact.input.name_input.error")}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    className={`${
                      isValidEmail ? "border-danger_6" : "my-5"
                    } p-2 border-2 rounded-lg`}
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    onInput={() => validateInput("email")}
                    name={data.eng.contact.input.email_from.name}
                    placeholder={t("data.contact.input.email_from.placeholder")}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    // required
                  />
                  {isValidEmail ? (
                    <span className="text-danger_6">
                      {t("data.contact.input.email_from.error")}
                    </span>
                  ) : (
                    <></>
                  )}
                </div>
                <input
                  className="my-5 p-2 border-2 rounded-lg"
                  type="hidden"
                  name={data.eng.contact.input.email_to.name}
                  value={data.eng.contact.input.email_to.value_email}
                  placeholder={t("data.contact.input.email_to.placeholder")}
                  // required
                />
              </div>
              <div className="flex flex-col w-full">
                <input
                  className={`${
                    isValidSubject ? "border-danger_6" : "my-5"
                  } p-2  border-2 rounded-lg w-full `}
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                  onInput={() => validateInput("subject")}
                  name={data.eng.contact.input.subject_input.name}
                  placeholder={t(
                    "data.contact.input.subject_input.placeholder"
                  )}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  // required
                />
                {isValidSubject ? (
                  <span className="text-danger_6">
                    {t("data.contact.input.subject_input.error")}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <div className="flex flex-col w-full">
                <textarea
                  className={`${
                    isValidMessage ? "border-danger_6" : "my-5"
                  } p-2   border-2 rounded-lg w-full`}
                  name={data.eng.contact.input.message_input.name}
                  value={message}
                  onInput={() => validateInput("message")}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                  placeholder={t(
                    "data.contact.input.message_input.placeholder"
                  )}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  // required
                />
                {isValidMessage ? (
                  <span className="text-danger_6">
                    {t("data.contact.input.message_input.error")}
                  </span>
                ) : (
                  <></>
                )}
              </div>
              <button
                className={`${data.eng.contact.button.bg_color} ${data.eng.contact.button.text_color} bg-primary_5 text-white font-bold py-2 px-4 rounded-full hover:-translate-y-2 duration-200 delay-75 ease-in-out hover:bg-primary_6 hover:${data.eng.contact.button.bg_color_hover} hover:${data.eng.contact.button.text_color_hover}`}
                type="submit"
              >
                {t("data.contact.button.text")}
              </button>
            </div>
          </form>
          <AlertModal
            isOpen={isOpen}
            closeModal={closeModal}
            checkStatus={checkStatus}
          />
        </div>
      </div>
    </div>
  );
};

export default Contactpage;

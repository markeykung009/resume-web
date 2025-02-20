// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { data } from "./data";

// กำหนดข้อมูลแปลภาษา
const resources = {
  en: {
    translation: {
      data: {
        home: {
          hi_des: data.eng.home.hi_des,
          name: data.eng.home.name,
          des: data.eng.home.des,
        },
        contact: {
          header_text: data.eng.contact.header_text,
          desciption: data.eng.contact.desciption,
          input: {
            name_input: {
              name: "name",
              placeholder: data.eng.contact.input.name_input.placeholder,
              error: data.eng.contact.input.name_input.error,
            },
            email_from: {
              name: "email",
              placeholder: data.eng.contact.input.email_from.placeholder,
              error: data.eng.contact.input.email_from.error,
            },
            email_to: {
              name: "email_to",
              placeholder: data.eng.contact.input.email_to.placeholder,
              value_email: "mark@hpktechnology.com",
            },
            subject_input: {
              name: "subject",
              placeholder: data.eng.contact.input.subject_input.placeholder,
              error: data.eng.contact.input.subject_input.error,
            },
            message_input: {
              name: "message",
              placeholder: data.eng.contact.input.message_input.placeholder,
              error: data.eng.contact.input.message_input.error,
            },
          },
          button: {
            text: data.eng.contact.button.text,
            bg_color: "bg-blue-500",
            bg_color_hover: "bg-blue-600",
            text_color: "text-white",
            text_color_hover: "text-white",
          },
          alert_modal: {
            text_success: data.eng.contact.alert_modal.text_success,
            text_fail: data.eng.contact.alert_modal.text_fail,
            text_button: data.eng.contact.alert_modal.text_button,
          },
        },
        header_text: data.eng.header.text,
        about: {
          section: data.eng.about.section,
          text: data.eng.about.text,
          button_text: data.eng.about.button.text,
        },
        skill: {
          header: "My Skills",
        },
      },
    },
  },
  th: {
    translation: {
      data: {
        home: {
          hi_des: data.th.home.hi_des,
          name: data.th.home.name,
          des: data.th.home.des,
        },
        contact: {
          header_text: data.th.contact.header_text,
          desciption: data.th.contact.desciption,
          input: {
            name_input: {
              name: "name",
              placeholder: data.th.contact.input.name_input.placeholder,
              error: data.th.contact.input.name_input.error,
            },
            email_from: {
              name: "email",
              placeholder: data.th.contact.input.email_from.placeholder,
              error: data.th.contact.input.email_from.error,
            },
            email_to: {
              name: "email_to",
              placeholder: data.th.contact.input.email_to.placeholder,
              value_email: "mark@hpktechnology.com",
            },
            subject_input: {
              name: "subject",
              placeholder: data.th.contact.input.subject_input.placeholder,
              error: data.th.contact.input.subject_input.error,
            },
            message_input: {
              name: "message",
              placeholder: data.th.contact.input.message_input.placeholder,
              error: data.th.contact.input.message_input.error,
            },
          },
          button: {
            text: data.th.contact.button.text,
            bg_color: "bg-blue-500",
            bg_color_hover: "bg-blue-600",
            text_color: "text-white",
            text_color_hover: "text-white",
          },
          alert_modal: {
            text_success: data.th.contact.alert_modal.text_success,
            text_fail: data.th.contact.alert_modal.text_fail,
            text_button: data.th.contact.alert_modal.text_button,
          },
        },
        header_text: data.th.header.text,
        about: {
          section: data.th.about.section,
          text: data.th.about.text,
          button_text: data.th.about.button.text,
        },
        skill: {
          header: "ความสามารถสกิลของฉัน",
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // ภาษาเริ่มต้น
  fallbackLng: "en",

  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;

import Gay from "./assets/Gay.png";
import {
  FaFacebook,
  FaLine,
  FaInstagram,
  FaLinkedin,
  FaHouse,
  FaAddressBook,
  FaFile,
  FaRegFolderOpen,
  FaSquareEnvelope,
} from "react-icons/fa6";
import ps from "./assets/skill/ps.webp";
import ai from "./assets/skill/ai.png";
import ae from "./assets/skill/ae.png";
import pr from "./assets/skill/pr.png";

export const data = {
  eng: {
    home: {
      image: Gay,
      hi_des: "Hi, I'm",
      name: "Narathon Chaiya",
      des: "I'm a professional Graphic Designer I Have Best Skill Photoshop AfterEffect And Good Skill IIIustrator",
      social: [
        {
          icons: FaFacebook,
          href: "https://www.facebook.com/Teenkung.NC",
          color: "text-blue-500",
        },
        {
          icons: FaLine,
          href: "https://line.me/ti/p/dZKtwB5zbF",
          color: "text-green-500",
        },
        {
          icons: FaInstagram,
          href: "#",
          color: "text-pink-500",
        },
        {
          icons: FaLinkedin,
          href: "#",
          color: "text-blue-600",
        },
      ],
    },
    contact: {
      service_id: "service_c3mtoop",
      template_id: "template_q3c3dd4",
      user_id: "U8TAnxJLU4kDtNTem",
      header_text: "Contact Me",
      desciption:
        "I am interested in graphic design. I want to work in graphic design because I like it. I want to develop myself in this area.",
      input: {
        name_input: {
          name: "name",
          placeholder: "Name",
          error: "please fill name in fields",
        },
        email_from: {
          name: "email",
          placeholder: "Email",
          error: "please fill email in fields",
        },
        email_to: {
          name: "email_to",
          placeholder: "Email_to",
          value_email: "markeykung009@gmail.com",
        },
        subject_input: {
          name: "subject",
          placeholder: "Subject",
          error: "please fill subject in fields",
        },
        message_input: {
          name: "message",
          placeholder: "Message",
          error: "please fill message in fields",
        },
      },
      button: {
        text: "Send",
        bg_color: "bg-primary_5",
        bg_color_hover: "bg-primary_6",
        text_color: "text-white",
        text_color_hover: "text-white",
      },
      alert_modal: {
        text_success: "Email sent successfully.",
        text_fail: "Failed to send email.",
        text_button: "OK",
      },
    },
    header: {
      text: "Portfolio",
      menu: [
        {
          text: { en: "Home", th: "หน้าแรก" },
          path: "/",
          icon: FaHouse,
        },
        {
          text: { en: "About", th: "เกี่ยวกับเรา" },
          path: "/about",
          icon: FaAddressBook,
        },
        {
          text: { en: "Skill", th: "สกิล" },
          path: "/skill",
          icon: FaFile,
        },
        {
          text: { en: "Portfolio", th: "ผลงาน" },
          path: "/portfolio",
          icon: FaRegFolderOpen,
        },
        {
          text: { en: "Contact", th: "ติดต่อเรา" },
          path: "/contact",
          icon: FaSquareEnvelope,
        },
      ],
    },
    about: {
      image: Gay,
      section: "Gu teen Narathon Chaiya",
      text: "Hello, I'm Narathorn Chaiya. My nickname is Teen. I'm 24 years old, living in Bangkok. Graduated from the Faculty of Mass Communication, Multimedia major, from Rajamangala University of Technology Phra Nakhon. Have the ability and interest in working in graphics. If you want to be great, hire me.",
      button: {
        text: "Download Resume",
        bg_color: "bg-primary_5",
        bg_color_hover: "bg-primary_6",
        text_color: "text-theme_light_1",
        text_color_hover: "text-theme_light_2",
      },
    },
    skill: {
      header: "My Skills",
      ability: [
        {
          img: ps,
          title: { en: "Adobe Photoshop", th: "โฟโต้ช้อป" },
          desciption: {
            en: "Photoshop program It is a program used for editing images. I have an aptitude for using this program for editing images, die-cutting images, and making icons.",
            th: "โปรแกรมโฟโต้ช้อป เป็นโปรแกรมที่ใช้ตัดต่อรูปภาพ ผมมีความถนัดในการใช้โปรแกรมนี้ ตัดต่อรูปภาพ ไดคัทรูป ทำไอค่อน",
          },
        },
        {
          img: ai,
          title: { en: "Adobe illastrator", th: "อิลาสเตเตอร์" },
          desciption: {
            en: "illastator is a vector format creation program. I have the ability to use sketches and images to make logos. make geometric shapes",
            th: "โปรแกรมอิลาสเตเตอร์เป็นโปรแกรมสร้างรูปแบบเวกเตอร์ ผมมีความสามาถในการใช้ดราฟรูปภาพทำโลโก้ ทำรูปทรงเลขาคณิต",
          },
        },
        {
          img: ae,
          title: { en: "Adobe AfterEffect", th: "อาฟเตอร์เอฟเฟค" },
          desciption: {
            en: "It is an advanced video editing program. that emphasizes the use of effects I have an aptitude for using video editing programs to add various effects.",
            th: "เป็นโปรแกรมตัดต่อวีดีโอขั้นสูง ที่เน้นใช้เอฟเฟค ผมมีความถนัดในการใช้โปรแกรมตัดต่อวีดีโอตกแต่งใส่เอฟเฟคต่างๆได้",
          },
        },
        {
          img: pr,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
          desciption: {
            en: "Premium Pro is a basic video editing program. I have a good level of ability to edit videos.",
            th: "พรีเมี่ยโปร เป็นโปรแกรมตัดต่อวิดีโอพื้นฐาน ผมมีความสามารถในการใช้ตัดต่อวีดีโอได้ดีระดับนึง",
          },
        },
      ],
    },
  },
  th: {
    home: {
      image: Gay,
      hi_des: "สวัสดีครับผม",
      name: "นราธร ชัยยะ",
      des: "สวีสดีึครับผมทีน หางานกราฟิก",
      social: [
        {
          icons: FaFacebook,
          href: "https://www.facebook.com/Teenkung.NC",
          color: "text-blue-500",
        },
        {
          icons: FaLine,
          href: "https://line.me/ti/p/dZKtwB5zbF",
          color: "text-green-500",
        },
        {
          icons: FaInstagram,
          href: "#",
          color: "text-pink-500",
        },
        {
          icons: FaLinkedin,
          href: "#",
          color: "text-blue-600",
        },
      ],
    },
    contact: {
      service_id: "service_c3mtoop",
      template_id: "template_q3c3dd4",
      user_id: "U8TAnxJLU4kDtNTem",
      header_text: "ติดต่อเรา",
      desciption:
        "ฉันสนใจจะหางานด้านกราฟฟิก เพราะชอบและอยากพัฒนาตัวเองไปเรื่อยๆ หากคุณสนใจในผลงานของผม โปรดติดต่อมาได้เลยครับ",
      input: {
        name_input: {
          name: "name",
          placeholder: "กรอกชื่อ",
          error: "กรุณากรอกชื่อ",
        },
        email_from: {
          name: "email",
          placeholder: "กรอกอีเมลของคุณ",
          error: "กรุณากรอกอีเมล",
        },
        email_to: {
          name: "email_to",
          placeholder: "ส่งถึง",
          value_email: "fluk151241@gmail.com",
        },
        subject_input: {
          name: "subject",
          placeholder: "กรอกหัวเรื่อง",
          error: "กรุณากรอกหัวเรื่อง",
        },
        message_input: {
          name: "message",
          placeholder: "กรอกข้อความที่จะส่งถึงฉัน",
          error: "กรุณากรอกข้อความ",
        },
      },
      button: {
        text: "ส่งอีเมล",
        bg_color: "bg-primary_5",
        bg_color_hover: "bg-primary_6",
        text_color: "text-white",
        text_color_hover: "text-white",
      },
      alert_modal: {
        text_success: "ทำการส่งอีเมลเรียบร้อย",
        text_fail: "ส่งอีเมลไม่สำเร็จ",
        text_button: "ตกลง",
      },
    },
    header: {
      text: "ผลงานของเรา",
      menu: [
        {
          text: { en: "Home", th: "หน้าแรก" },
          path: "/",
          icon: FaHouse,
        },
        {
          text: { en: "About", th: "เกี่ยวกับเรา" },
          path: "/about",
          icon: FaHouse,
        },
        {
          text: { en: "Skill", th: "สกิล" },
          path: "/skill",
          icon: FaHouse,
        },
        {
          text: { en: "Portfolio", th: "ผลงาน" },
          path: "/portfolio",
          icon: FaHouse,
        },
        {
          text: { en: "Contact", th: "ติดต่อเรา" },
          path: "/contact",
          icon: FaHouse,
        },
      ],
    },
    about: {
      image: Gay,
      section: "นราธร ชัยยะ",
      text: "สวัสดีครับ ผม นราธร ชัยยะ ชื่อเล่นผมชื่อ ทีน อายุ 24 อาศัยอยู่ที่กรุงเทพ เรียนจบ คณะ สื่อสารมวลชน สาขา มัลติมีเดีย จาก มหาวิทยาลัย ราชมงคลพระนคร มีความสามารถและสนใจในการทำงานด้านกราฟิก ถ้าอยากเจ๋ง รับกูเข้าทำงานซะ",
      button: {
        text: "ดาวโหลด เรซูเม่",
        bg_color: "bg-primary_5",
        bg_color_hover: "bg-primary_6",
        text_color: "text-theme_light_1",
        text_color_hover: "text-theme_light_2",
      },
    },
    skill: {
      header: "My Skills",
      ability: [
        {
          img: ps,
          title: { en: "Adobe Photoshop", th: "โฟโต้ช้อป" },
          desciption: {
            en: "Photoshop program It is a program used for editing images. I have an aptitude for using this program for editing images, die-cutting images, and making icons.",
            th: "โปรแกรมโฟโต้ช้อป เป็นโปรแกรมที่ใช้ตัดต่อรูปภาพ ผมมีความถนัดในการใช้โปรแกรมนี้ ตัดต่อรูปภาพ ไดคัทรูป ทำไอค่อน",
          },
        },
        {
          img: ai,
          title: { en: "Adobe illastrator", th: "อิลาสเตเตอร์" },
          desciption: {
            en: "illastator is a vector format creation program. I have the ability to use sketches and images to make logos. make geometric shapes",
            th: "โปรแกรมอิลาสเตเตอร์เป็นโปรแกรมสร้างรูปแบบเวกเตอร์ ผมมีความสามาถในการใช้ดราฟรูปภาพทำโลโก้ ทำรูปทรงเลขาคณิต",
          },
        },
        {
          img: ae,
          title: { en: "Adobe AfterEffect", th: "อาฟเตอร์เอฟเฟค" },
          desciption: {
            en: "It is an advanced video editing program. that emphasizes the use of effects I have an aptitude for using video editing programs to add various effects.",
            th: "เป็นโปรแกรมตัดต่อวีดีโอขั้นสูง ที่เน้นใช้เอฟเฟค ผมมีความถนัดในการใช้โปรแกรมตัดต่อวีดีโอตกแต่งใส่เอฟเฟคต่างๆได้",
          },
        },
        {
          img: pr,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
          desciption: {
            en: "Premium Pro is a basic video editing program. I have a good level of ability to edit videos.",
            th: "พรีเมี่ยโปร เป็นโปรแกรมตัดต่อวิดีโอพื้นฐาน ผมมีความสามารถในการใช้ตัดต่อวีดีโอได้ดีระดับนึง",
          },
        },
      ],
    },
  },
};

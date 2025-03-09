// import Gay from "./assets/Gay.png";
import Mark from "./assets/remove-bg-mark.png"
import ChildMark from "./assets/mark2.jpg"
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
import html from "./assets/skill/html.png"
import css from "./assets/skill/css-logo.png"
import js from "./assets/skill/javascript-logo.png"
import ts from "./assets/skill/typescript-logo.png"
import react from "./assets/skill/react-logo.png"
import next from "./assets/skill/next-logo.png"
import tailwind from "./assets/skill/tailwind-logo.png"
import vue from "./assets/skill/vue-logo.png"
import node from "./assets/skill/node-logo.png"
import git from "./assets/skill/git-logo.png"
import sql from "./assets/skill/sql-logo.png"
import futureskillCer from "./assets/certificate/cer-html.jpg"
import codecampCer from "./assets/certificate/cer-codecamp.jpg"

export const data = {
  eng: {
    home: {
      image: Mark,
      hi_des: "Hi, I'm",
      name: "Chalumpol Hokcharoen",
      des: "I'm a Front end Developer I Have Best Skill Html css javascript react vue tailwind css nextjs git nodejs  And Basic Skill database sql mongodb golang node express restapi",
      social: [
        {
          icons: FaFacebook,
          href: "https://www.facebook.com/chalumpol.hokcharoen.2024",
          color: "text-blue-500",
        },
        {
          icons: FaLine,
          href: "https://line.me/ti/p/JxDuyhpvgg",
          color: "text-green-500",
        },
        {
          icons: FaInstagram,
          href: "https://www.instagram.com/componentdidmark/",
          color: "text-pink-500",
        },
        {
          icons: FaLinkedin,
          href: "https://www.linkedin.com/in/chalumpol-hokcharoen-94aa7a269/",
          color: "text-blue-600",
        },
      ],
    },
    contact: {
      service_id: "service_jckjxaa",
      template_id: "template_q3c3dd4",
      user_id: "FdQ4uiYzonzWKGwBP",
      header_text: "Contact Me",
      desciption:
        "I'm interested in finding a job in website making, Front-End work because I like it and want to continually develop myself. If you are interested in my work Please feel free to contact me.",
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
          text: { en: "Certification", th: "ใบรับรอง" },
          path: "/certificate",
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
      image: ChildMark,
      section: "Chalumpol Hokcharoen",
      text: "Hello, I'm Chalumphon Hokcharoen, my nickname is Mark, I'm 26 years old, live in Bangkok, graduated from the Faculty of Business Administration, majoring in Information Technology - Software Development, from Rajamangala University of Technology Phra Nakhon. and have attended coding bootcamp training Have the ability and interest in working in coding, making websites, and developing websites.",
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
          img: html,
          title: { en: "Adobe Photoshop", th: "โฟโต้ช้อป" },
        },
        {
          img: css,
          title: { en: "Adobe illastrator", th: "อิลาสเตเตอร์" },
        },
        {
          img: js,
          title: { en: "Adobe AfterEffect", th: "อาฟเตอร์เอฟเฟค" },
        },
        {
          img: ts,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: react,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: next,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: tailwind,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: vue,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: node,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: git,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
        {
          img: sql,
          title: { en: "Adobe PremierPro", th: "พรีเมี่ยโปร" },
        },
      ],
    },
    certificate: {
      header:"Certificate",
      imageData: [
        {
          title: {
            en: "Codecamp fullstack JavaScript for Developer Course",
            th: "หลักสูตร Codecamp fullstack JavaScript สำหรับนักพัฒนา"
          },
          image: codecampCer,
        },
        {
          title: {
            en: "FutureSkill Html css javascrit From Basic to Pro.",
            th: "FutureSkill Html css javascript จากพื้นฐานสู่มืออาชีพ"
          },
          image: futureskillCer,
        },
      ]
    }
  },
  th: {
    home: {
      image: Mark,
      hi_des: "สวัสดีครับผม",
      name: "ชลัมพล ฮกเจริญ",
      des: "สวัสดีครับ ผมมาร์ค หางาน ด้าน front end developer หรือ web developer",
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
      service_id: "service_jckjxaa",
      template_id: "template_q3c3dd4",
      user_id: "FdQ4uiYzonzWKGwBP",
      header_text: "ติดต่อเรา",
      desciption:
        "ฉันสนใจจะหางานด้านการทำเว็บไซต์ งาน Front-End เพราะชอบและอยากพัฒนาตัวเองไปเรื่อยๆ หากคุณสนใจในผลงานของผม โปรดติดต่อมาได้เลยครับ",
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
      image: ChildMark,
      section: "ชลัมพล ฮกเจริญ",
      text: "สวัสดีครับ ผม ชลัมพล ฮกเจริญ ชื่อเล่นผมชื่อ มาร์ค อายุ 26 อาศัยอยู่ที่กรุงเทพ เรียนจบ คณะ บริหารธุรกิจ สาขา สารสนเทศ-พัฒนาซอฟต์แวร์ จาก มหาวิทยาลัย ราชมงคลพระนคร และเคยผ่านการเข้าอบรม Bootcamp ของการเขียนโค้ด มีความสามารถและสนใจในการทำงานด้านการเขียนโค้ด ทำเว็บไซต์ พัฒนาเว็บไซต์ ",
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
    certificate: {
      header:"ใบรับรอง",
      imageData: [
        {
          title: "หลักสูตร Codecamp fullstack JavaScript สำหรับนักพัฒนา",
          image: codecampCer,
        },
        {
          title: "FutureSkill Html css javascript จากพื้นฐานสู่มืออาชีพ",
          image: futureskillCer,
        },
      ]
    },
    
  },
};

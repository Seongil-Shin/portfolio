import React, { useState } from "react";
import Contact from "../components/Contact";
import emailjs from "emailjs-com";
import { useDispatch } from "react-redux";
import { close, open } from "../modules/snackBar";

function ContactContainer() {
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });
   const [errName, setErrName] = useState("");
   const [errEmail, setErrEmail] = useState("");
   const dispatch = useDispatch();

   const emailJS = async () => {
      let form = document.createElement("form");
      const names = ["user_name", "user_email", "message"];
      const tempForm = [formData.name, formData.email, formData.message];
      Object.values(formData).forEach((item, idx) => {
         let input = document.createElement("input");
         input.setAttribute("name", names[idx]);
         input.setAttribute("value", item);
         form.appendChild(input);
      });

      setFormData({
         name: "",
         email: "",
         message: "",
      });

      emailjs
         .sendForm(
            "service_tx18le8",
            "template_dali2h5",
            form,
            "user_xYHrEcMcSHgcPuxVbUriL"
         )
         .then(() => {
            dispatch(open("이메일 전송이 완료되었습니다."));
            setTimeout(() => dispatch(close()), 6000);
         })
         .catch((err) => {
            dispatch(open("전송 중 문제가 생겼습니다. 다시 시도해주세요."));
            setTimeout(() => dispatch(close()), 6000);
            setFormData({
               name: tempForm[0],
               email: tempForm[1],
               message: tempForm[2],
            });
            console.log(err);
         });
   };
   const sendEmail = (e) => {
      e.preventDefault();
      if (formData.name.length === 0) {
         setErrName("이름을 입력해주세요.");
         return;
      } else if (formData.email.length === 0) {
         setErrEmail("이메일을 입력해주세요.");
         return;
      } else if (
         !/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i.test(
            formData.email
         )
      ) {
         setErrEmail("temp@naver.com 형식으로 입력해주세요.");
         return;
      }
      emailJS();
   };
   const onFormChange = (e) => {
      const {
         target: { name, value },
      } = e;
      if (name === "name" && value.length > 50) {
         return;
      }
      if (name === "name" && errName) {
         setErrName("");
      } else if (name === "email" && errEmail) {
         setErrEmail("");
      }
      setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
   };

   return (
      <>
         <Contact
            sendEmail={sendEmail}
            data={formData}
            onFormChange={onFormChange}
            errName={errName}
            errEmail={errEmail}
         />
      </>
   );
}
export default ContactContainer;

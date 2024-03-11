import { contacts_db } from "../databases/smalltexts_db";
import styles from "./Contacts.module.css";

import { useState, useRef, useContext, useEffect } from "react";
import { GlobalContext } from "../hooks/GlobalContext";
import emailjs from "@emailjs/browser";

import local_pin from "../assets/icon-local.svg";
import phone from "../assets/icon-phone.svg";
import mail from "../assets/icon-mail.svg";
import instagram from "../assets/icon-instagram.svg";
import Observer from "../hooks/Observer";

const Contacts = ({ lang }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameValid, setNameValid] = useState(null);
  const [emailValid, setEmailValid] = useState(null);
  const [messageValid, setMessageValid] = useState(null);
  const { contactsVisible, setContactsVisible } = useContext(GlobalContext);
  const contactsRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    name === "" ? setNameValid(false) : setNameValid(true);
    email === "" ? setEmailValid(false) : setEmailValid(true);
    message === "" ? setMessageValid(false) : setMessageValid(true);

    if (name === "" || email === "" || message === "") return;

    const templareParams = {
      from_name: name,
      message: message,
      email: email,
    };

    try {
      const res = await emailjs.send(
        "service_kd5noy4",
        "template_ted7i1p",
        templareParams,
        "Vu0hDhzf_v66srCsj"
      );
      console.log("Email enviado", res.status, res.text);

      setName("");
      setEmail("");
      setMessage("");
      setNameValid(null);
      setEmailValid(null);
      setMessageValid(null);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <section className={styles.contacts_wrap} id="contacts" ref={contactsRef}>
      <Observer
        state={contactsVisible}
        setState={setContactsVisible}
        ref={contactsRef}
      />
      <h3>{contacts_db[0][lang]}</h3>
      <div className={styles.contacts_content}>
        <div>
          {/* <div className={styles.contacts_info}>
            <img src={local_pin} alt="local pin" />
            <p>
              47 rua des Couronnes
              <br />
              75020 Paris, France
            </p>
          </div> */}
          <div className={styles.contacts_info}>
            <img src={phone} alt="phone" />
            <span>
              <p>{contacts_db[4].phone1}</p>
              <p>{contacts_db[4].phone2}</p>
            </span>
          </div>
          <div className={styles.contacts_info}>
            <img src={mail} alt="email" />
            <p>{contacts_db[4].email}</p>
          </div>
          <div className={styles.contacts_info}>
            <img src={instagram} alt="instagram" />
            <p>{contacts_db[4].instagram}</p>
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label className={nameValid === false ? styles.incomplete : null}>
            {contacts_db[1][lang] + "*"}
            <input
              type="text"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
          <label className={emailValid === false ? styles.incomplete : null}>
            E-mail*
            <input
              type="email"
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
          </label>
          <label className={messageValid === false ? styles.incomplete : null}>
            {contacts_db[2][lang] + "*"}
            <textarea
              value={message}
              onChange={({ target }) => setMessage(target.value)}
            ></textarea>
          </label>
          <input type="submit" value={contacts_db[3][lang]} />
        </form>
      </div>
    </section>
  );
};

export default Contacts;

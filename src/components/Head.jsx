import { useContext, useEffect } from "react";
import { GlobalContext } from "../hooks/GlobalContext";

const Head = ({ lang, db }) => {
  const { language } = useContext(GlobalContext);

  const title = db.title;
  const description = db.description;
  const keywords = db.keywords;

  const querySelectorFunc = (tagName, tag) => {
    tagName === "title"
      ? (document.querySelector("title").innerText = title[lang])
      : document
          .querySelector(`meta[name=${tagName}]`)
          .setAttribute("content", tag[lang]);
  };

  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
    querySelectorFunc("title", title);
    querySelectorFunc("description", description);
    querySelectorFunc("keywords", keywords);
  }, [language]);
};

export default Head;

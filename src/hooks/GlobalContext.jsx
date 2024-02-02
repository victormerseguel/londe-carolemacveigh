import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [language, setLanguage] = useState("");
  let globalLanguage = "";

  const [homeVisible, setHomeVisible] = useState();
  const [methodVisible, setMethodVisible] = useState();
  const [servicesVisible, setServicesVisible] = useState();
  const [aboutVisible, setAboutVisible] = useState();
  const [contactsVisible, setContactsVisible] = useState();
  const [menuState, setMenuState] = useState("home");
  const [menuMobile, setMenuMobile] = useState(false);
  const [menuMobileLanguage, setMenuMobileLanguage] = useState(false);

  let options = {
    threshold: [],
  };
  for (let i = 0; i <= 1.0; i += 0.01) {
    options.threshold.push(i);
  }

  let order = [
    homeVisible,
    methodVisible,
    servicesVisible,
    aboutVisible,
    contactsVisible,
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      if (order[0] > order[1]) {
        setMenuState("home");
      } else if (order[1] > order[2]) {
        setMenuState("method");
      } else if (order[2] > order[3]) {
        setMenuState("services");
      } else if (order[3] > order[4]) {
        setMenuState("about");
      } else {
        setMenuState("contacts");
      }
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        globalLanguage,
        homeVisible,
        setHomeVisible,
        methodVisible,
        setMethodVisible,
        servicesVisible,
        setServicesVisible,
        aboutVisible,
        setAboutVisible,
        contactsVisible,
        setContactsVisible,
        menuState,
        setMenuState,
        menuMobile,
        setMenuMobile,
        menuMobileLanguage,
        setMenuMobileLanguage,
        options,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

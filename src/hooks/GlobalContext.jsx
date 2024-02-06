import { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [language, setLanguage] = useState("Português");
  const [globalLanguage, setGlobalLanguage] = useState("pt");
  let storageCookie;

  const [homeVisible, setHomeVisible] = useState();
  const [methodVisible, setMethodVisible] = useState();
  const [inspirationsVisible, setInspirationsVisible] = useState();
  const [aboutVisible, setAboutVisible] = useState();
  const [sophrologyVisible, setSophrologyVisible] = useState();
  const [contactsVisible, setContactsVisible] = useState();
  const [menuState, setMenuState] = useState("home");
  const [menuMobile, setMenuMobile] = useState(false);
  const [menuMobileLanguage, setMenuMobileLanguage] = useState(false);
  const [animate1, setAnimate1] = useState(true);
  const [animate2, setAnimate2] = useState(true);

  let options = {
    threshold: [],
  };
  for (let i = 0; i <= 1.0; i += 0.01) {
    options.threshold.push(i);
  }

  let order = [
    homeVisible,
    methodVisible,
    inspirationsVisible,
    aboutVisible,
    sophrologyVisible,
    contactsVisible,
  ];

  const menuItems = [
    "home",
    "method",
    "inspirations",
    "about",
    "sophrology",
    "contacts",
  ];

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", () => {
      order[0] > order[1]
        ? setMenuState(menuItems[0])
        : order[1] > order[2]
        ? setMenuState(menuItems[1])
        : order[2] > order[3]
        ? setMenuState(menuItems[2])
        : order[3] > order[4]
        ? setMenuState(menuItems[3])
        : order[4] > order[5]
        ? setMenuState(menuItems[4])
        : setMenuState(menuItems[5]);
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        language,
        setLanguage,
        globalLanguage,
        setGlobalLanguage,
        homeVisible,
        setHomeVisible,
        methodVisible,
        setMethodVisible,
        inspirationsVisible,
        setInspirationsVisible,
        aboutVisible,
        setAboutVisible,
        sophrologyVisible,
        setSophrologyVisible,
        contactsVisible,
        setContactsVisible,
        menuState,
        setMenuState,
        menuMobile,
        setMenuMobile,
        menuMobileLanguage,
        setMenuMobileLanguage,
        animate1,
        setAnimate1,
        animate2,
        setAnimate2,
        storageCookie,
        options,
        menuItems,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

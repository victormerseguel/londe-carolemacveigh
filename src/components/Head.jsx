import React, { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.documentElement.setAttribute("lang", props.lang);
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", props.description);
  });

  return <></>;
};

export default Head;

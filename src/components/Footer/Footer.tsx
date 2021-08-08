import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const handleClicknull = () => {};
  const Close = () => setClick(false);

  return (
    <footer>
      <div>About</div>
      <span>
        This is a Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolore accusamus sunt vitae quaerat reiciendis alias.
      </span>
    </footer>
  );
};
export default Footer;

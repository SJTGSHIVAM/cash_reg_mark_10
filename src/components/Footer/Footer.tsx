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
      <ul>
        <li className="footerLink">
          <a href="https://github.com/SJTGSHIVAM">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://sjtgshivam.medium.com">
            <i className="fab fa-medium"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://www.linkedin.com/in/shivam-pandey-766524161">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </li>
        <li className="footerLink">
          <a href="https://sjtgshivam.netlify.app/">
            <i className="fas fa-briefcase"></i>
          </a>
        </li>
      </ul>

      <div className="legacyText">© 2020 | Shivam Pandey</div>
    </footer>
  );
};
export default Footer;

import { Link } from "react-router-dom";
import { HeaderData } from "../../../data/home/HeaderData";
import s from "../Footer.module.css";
import { LinksData } from "../../../data/home/FooterData";

export const Navigation = () => {
  return (
    <div>
      <img className={s.logo} src="/public/header/logo.svg" alt="" />
      <ul className={s.social}>
        {LinksData.map((item) => (
          <li key={item.id}>
            <a href="#">
              <img src={item.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
      <ul className={s.navigation}>
        {HeaderData.map((link) => (
          <li key={link.id}>
            <Link className={s.link} to={link.href}>
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

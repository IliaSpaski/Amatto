import { Link } from "react-router-dom";
import s from "../Header.module.css";
import { HeaderData } from "../../../data/home/HeaderData";
import { useState } from "react";

interface NavigationProps {
  handleCopy: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const HeaderNavigation = ({ handleCopy }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <nav className={s.navigation}>
        <ul className={`${s.list} ${isOpen ? s.listOpen : ""}`}>
          {HeaderData.map((item) => (
            <li className={s.list__item} key={item.id}>
              <Link className={s.list__link} to={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
          <div className={s.interaction}>
            <button
              className={`${s.interaction__button} ${isOpen ? s.listOpen : ""}`}
              onClick={handleCopy}
            >
              +373 68 159 759
            </button>
          </div>
        </ul>
      </nav>
      <div className={`${s.burger__button} ${isOpen ? s.listOpen : ""}`}>
        <button className={s.burger__button} onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  );
};

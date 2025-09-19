import { useState, type MouseEvent } from "react";
import s from "./Header.module.css";
import { HeaderNavigation } from "./components/HeaderNavigation";

export const Header = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const handleCopy = (e: MouseEvent<HTMLButtonElement>) => {
    const text = e.currentTarget.innerText;
    navigator.clipboard.writeText(text);

    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className={s.header}>
      {copied && <span className={s.popup}>Текст скопирован!</span>}
      <div className="container">
        <div className={s.inner}>
          <div className={s.logo}>
            <img src="/public/header/logo.svg" alt="" />
          </div>
          <HeaderNavigation handleCopy={handleCopy} />
        </div>
      </div>
    </div>
  );
};

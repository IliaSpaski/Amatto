import { Card } from "./components/Card";
import { Navigation } from "./components/Navigation";
import s from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={s.footer}>
      <div className="container">
        <div className={s.inner}>
          <Navigation />
          <Card />
        </div>
        <div className={s.copyright}>
          <p className={s.text}>© 2022 Amatto. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

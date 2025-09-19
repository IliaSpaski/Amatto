import { Card } from "./components/Card";
import { Slider } from "./components/Slider";
import { Description } from "./components/Text";
import s from "./Information.module.css";

export const Information = () => {
  return (
    <div className={s.information}>
      <div className="container">
        <h2 className="title">Lorem ipsum dolor sit amet, consectetur </h2>
        <Card />
        <Slider />
        <Description />
      </div>
    </div>
  );
};

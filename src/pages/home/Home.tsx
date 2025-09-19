import { Hero } from "./main/hero/Hero";
import { Choice } from "./main/choice/Choice";
import { Promo } from "./main/promo/Promo";
import { Progress } from "./main/progress/Progress";
import { Advantages } from "./main/advantages/Advantages";
import { Order } from "./main/order/Order";
import { Cases } from "./main/cases/Cases";
import { Separator } from "./main/separator/Separator";
import { Mission } from "./main/mission/Mission";
import { Application } from "./main/application/Application";
import { Process } from "./main/process/Process";
import { Trust } from "./main/trust/Trust";
import { Mistake } from "./main/mistake/Mistake";
import { Blog } from "./main/blog/Blog";

export const Home = () => {
  return (
    <>
      <Hero />
      <Choice />
      <Promo />
      <Progress />
      <Advantages />
      <Order />
      <Cases />
      <Separator />
      <Mission />
      <Application />
      <Process />
      <Trust />
      <Mistake />
      <Separator />
      <Blog />
    </>
  );
};

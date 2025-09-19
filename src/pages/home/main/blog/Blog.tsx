import React from "react";
import s from "./Blog.module.css";
import { Card } from "./components/Card";

export const Blog = () => {
  return (
    <div className={s.blog}>
      <div className="container">
        <div className={s.blog__item}>
          <h1 className="title">Блог</h1>
          <Card />
        </div>
      </div>
    </div>
  );
};

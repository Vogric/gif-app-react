import React, { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(["COVID19"]);

  return (
    <>
      <h1 className="animate__animated animate__backInLeft animate__delay-1s	2s">
        GifExpert
        <span>App</span>
      </h1>
      <p className="animate__animated animate__backInRight animate__delay-2s	2s">
        Gif Expert App is an application where you can search for all kinds of
        GIF's
      </p>
      <AddCategory setCategories={setCategories} />
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
      <p className="signature">© 2020 - Braian Vogrič</p>
    </>
  );
};

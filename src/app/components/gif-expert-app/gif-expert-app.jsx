import { useState } from "react";
import { AddCategory } from "../add-category/add-category";
import { GifGrid } from "../gif-grid/gif-grid";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Chuunibyou demo koi ga shitai']);

  const addCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories(currentCategories => [newCategory, ...currentCategories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory onSetCategory={addCategory} />

      {
        categories.map(category => (
          <GifGrid key={category} category={category} />
        ))
      }

    </>
  )
};
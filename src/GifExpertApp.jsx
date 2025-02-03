import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  // Los  states no se deben poner dentro de condicionales porque se perderia la referencia
  const [categories, setCategories] = useState(['One Punch man']);

  const onAddCategory = ( newCategory) => {
    
    if( categories.includes(newCategory)) return;

    console.log(newCategory);
    setCategories([ newCategory, ...categories]);
    //setCategories( cat => [...cat, newCategory]);
  }
  //<button onClick={onAddCategory}>Agregar</button>
  return (

    <>
        <h1>Gif Expert App</h1>

        <AddCategory onNewCategory ={onAddCategory}  ></AddCategory>
        
      {
        categories.map(categoria => <GifGrid key={ categoria } category={ categoria }/>)
      
      }  
    </>
  )
}

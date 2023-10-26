import { useState } from "react"
import { AddCategory, GifGrid } from "./components";


export const GitExpertApp = () => {

const [Categories,setCategories] = useState([ 'One Punch' ]);
const onAddCategory = ( newCategory) => {
    //valorant
    if (Categories.includes(newCategory)) return;
    //categories.push(newCategory);
    //setCategories([...Categories,'valorant']);
    //setCategories(cat => [...cat,'valorant']);
    setCategories([newCategory, ...Categories]);
    };

  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory 
            //setCategories = { setCategories }
            onNewCategory={ event => onAddCategory(event) }
        />
        {/* Listado de gifs */}
   
            { 
                Categories.map( (category) => (
                        <GifGrid 
                            key={ category }
                            category={category}
                        />
                    )
                ) 
            }

    </>
  )
}


